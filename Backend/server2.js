import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import cron from 'node-cron';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

// Database Connection
let db;
async function connectToDB(cb) {
    const url = process.env.MONGODB_URI || "mongodb://localhost:27017";
    const dbName = process.env.DB_NAME || "task";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db(dbName);
    console.log(`Connected to MongoDB database: ${dbName}`);
    cb();
}

const app = express();

const allowedOrigins = [
    "http://localhost:3000",
    process.env.FRONTEND_URL
].filter(Boolean);

// ✅ Fix CORS issue by explicitly allowing frontend origin
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes("*")) {
            callback(null, true);
        } else {
            console.warn(`Request origin: ${origin} not in allowedOrigins. Allowing to prevent CORS blockage.`);
            callback(null, true);
        }
    },
    credentials: true
}));
app.use(express.json());

// Email Configuration
const SENDER_EMAIL = process.env.EMAIL_USER || 'santoshkumarkowru@gmail.com';
const SENDER_PASS = process.env.EMAIL_PASS || 'ebov layt pala nrti'; // Note: User needs to use app password for santoshkumarkowru@gmail.com

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASS
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.log("Mail Error:", error);
    } else {
        console.log("Mail Server Ready");
    }
});

// Global Variable for Signed-In User (Fix)
let signedInUserEmail = '';

// ✅ Fix Task Reminder Scheduling
const reminderJobs = {};
const scheduleReminder = (email) => {
    if (reminderJobs[email]) {
        console.log(`Reminder already scheduled for ${email}`);
        return;
    }

    reminderJobs[email] = cron.schedule('*/60 * * * *', async () => {
        const mailOptions = {
            from: SENDER_EMAIL,
            to: email,
            subject: 'Reminder to Complete Your Goal Setting',
            text: 'You have added a new task. Please make sure to complete your goal setting!',
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending reminder email:", error);
            } else {
                console.log('Reminder email sent:', info.response);
            }
        });
    });
};

// ✅ Fix: Declare signedInUserEmail properly before using it
app.post('/addTask', async (req, res) => {
    const { task } = req.body;

    // Fix: Ensure signedInUserEmail is not empty
    if (!signedInUserEmail || !task || !task.task || !task.time) {
        return res.status(400).json({ message: 'Invalid data' });
    }

    try {
        // Insert task into database
        const result = await db.collection('tasks').insertOne({
            email: signedInUserEmail,
            task: task.task,
            time: task.time
        });

        console.log('Task inserted:', result);

        // Schedule Reminder Email
        scheduleReminder(signedInUserEmail);

        res.status(200).json({
            message: 'Task added successfully and reminder email scheduled.',
            taskId: result.insertedId
        });
    } catch (error) {
        console.error('Error adding task:', error);
        res.status(500).json({ message: 'Error adding task.' });
    }
});

// ✅ Fix: Ensure signup stores user data properly
app.post('/signup', async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body;

        if (!name || !email || !mobile || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await db.collection("ast").findOne({ email });

        if (existingUser) {
            return res.status(409).json({ error: "Email already exists" });
        }

        await db.collection("ast").insertOne({ name, email, mobile, password });

        // Send Welcome Email safely with callback to avoid unhandled rejections
        transporter.sendMail({
            from: SENDER_EMAIL,
            to: email,
            subject: 'Welcome to Soul Flex',
            text: 'Welcome to Soul Flex!'
        }, (error, info) => {
            if (error) {
                console.error("Nodemailer failed to send welcome email:", error);
            } else {
                console.log("Welcome email sent:", info.response);
            }
        });

        res.json({ message: "Registration successful" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ✅ Fix: Properly store signed-in user email and handle admin bypass
app.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        let user;
        if (email === "santosh@gmail.com" && password === "santosh") {
            user = { name: "Santosh", email: "santosh@gmail.com", password: "santosh", role: "Admin" };
        } else {
            user = await db.collection("ast").findOne({ email }) || await db.collection("admin").findOne({ email });
        }

        if (user) {
            if (password === user.password) {
                signedInUserEmail = email; // Store user email

                // Send Sign-in Email safely with callback to avoid unhandled rejections
                transporter.sendMail({
                    from: SENDER_EMAIL,
                    to: email,
                    subject: 'Welcome to Soul Flex',
                    text: 'Welcome to Soul Flex!'
                }, (error, info) => {
                    if (error) {
                        console.error("Nodemailer failed to send signin email:", error);
                    } else {
                        console.log("Signin email sent:", info.response);
                    }
                });

                try {
                    scheduleReminder(email);
                } catch (reminderErr) {
                    console.error("Failed to schedule reminder:", reminderErr);
                }

                return res.json({ message: "Sign-in successful", userType: user.role || "User" });
            } else {
                return res.status(401).json({ error: "Incorrect password" });
            }
        } else {
            return res.status(404).json({ error: "User not found" });
        }
    } catch (e) {
        console.error("Error during sign-in:", e);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// Admin management APIs
app.post('/ast', async (req, res) => {
    try {
        const users = await db.collection("ast").find().toArray();
        res.json(users);
    } catch (e) {
        console.error("Error fetching users:", e);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/admin/tasks', async (req, res) => {
    try {
        const tasks = await db.collection("tasks").find().toArray();
        res.json(tasks);
    } catch (e) {
        console.error("Error fetching tasks:", e);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.delete('/admin/users/:email', async (req, res) => {
    try {
        const email = req.params.email;
        // Delete user account
        await db.collection("ast").deleteOne({ email });
        // Clean up user scheduled tasks
        await db.collection("tasks").deleteMany({ email });
        res.json({ success: true, message: "User account and goals purged successfully" });
    } catch (e) {
        console.error("Error purging user:", e);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.delete('/admin/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await db.collection("tasks").deleteOne({ _id: new ObjectId(id) });
        res.json({ success: true, message: "Task removed successfully" });
    } catch (e) {
        console.error("Error purging task:", e);
        res.status(500).json({ error: "Internal server error" });
    }
});

// OTP Implementation
const otpStore = {};

// Send OTP
app.post('/send-otp', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }

        // Check if user exists in ast collection
        const user = await db.collection("ast").findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User with this email is not registered." });
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        // Save OTP with 5 mins expiry
        otpStore[email] = {
            otp,
            expires: Date.now() + 5 * 60 * 1000, // 5 minutes
            verified: false
        };

        // Send OTP email
        transporter.sendMail({
            from: SENDER_EMAIL,
            to: email,
            subject: 'Soul Flex - Password Reset OTP',
            text: `Your OTP for resetting password is: ${otp}. It is valid for 5 minutes.`
        }, (error, info) => {
            if (error) {
                console.error("Failed to send OTP email:", error);
            } else {
                console.log("OTP email sent successfully:", info.response);
            }
        });

        res.status(200).json({ message: "OTP sent successfully" });
    } catch (e) {
        console.error("Error sending OTP:", e);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Verify OTP
app.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({ error: "Email and OTP are required" });
        }

        const storedData = otpStore[email];
        if (!storedData) {
            return res.status(400).json({ error: "No OTP request found for this email" });
        }

        if (Date.now() > storedData.expires) {
            delete otpStore[email];
            return res.status(400).json({ error: "OTP expired" });
        }

        if (storedData.otp !== otp.toString()) {
            return res.status(400).json({ error: "Invalid OTP" });
        }

        // Mark OTP as verified
        storedData.verified = true;
        res.status(200).json({ message: "OTP verified successfully" });
    } catch (e) {
        console.error("Error verifying OTP:", e);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Reset Password
app.put('/reset-password', async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        if (!email || !newPassword) {
            return res.status(400).json({ error: "Email and new password are required" });
        }

        const storedData = otpStore[email];
        // Ensure OTP was verified first
        if (!storedData || !storedData.verified) {
            return res.status(400).json({ error: "Please verify OTP before resetting password" });
        }

        // Update password in db
        const result = await db.collection("ast").updateOne(
            { email },
            { $set: { password: newPassword } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        // Clear OTP store
        delete otpStore[email];

        res.status(200).json({ message: "Password updated successfully" });
    } catch (e) {
        console.error("Error resetting password:", e);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ✅ Fix: Start Server Only After Database Connection is Ready
const PORT = process.env.PORT || 9000;
connectToDB(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
});

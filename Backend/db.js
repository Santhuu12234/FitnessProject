import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

let db;
async function connectToDB(cb) {
    const url = process.env.MONGODB_URI || process.env.MONGO_URI || "mongodb://localhost:27017";
    const dbName = process.env.DB_NAME || (url.includes("localhost") ? "task" : undefined);
    const client = new MongoClient(url);
    await client.connect();
    db = client.db(dbName);
    cb();
}

// connectToDB()

export { connectToDB, db };


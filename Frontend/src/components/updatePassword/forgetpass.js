import {
    FormLabel,
    FormControl,
    Input,
    Button,
    Box,
    VStack,
    Text,
    InputGroup,
    InputRightElement,
    IconButton,
    Flex,
    Collapse,
    Center,
    useColorMode
} from "@chakra-ui/react";
import { useState } from "react";
import { FaLock, FaEnvelope, FaMobileAlt, FaArrowLeft } from "react-icons/fa";
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios";
import { motion } from "framer-motion";

const api = "http://localhost:9000"; // Adjust this according to your backend server URL

export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);
    const { colorMode } = useColorMode(); // Get the current color mode

    const handleSendOtp = async () => {
        try {
            const response = await axios.post(`${api}/send-otp`, { email });

            if (response.status === 200) {
                alert("OTP sent successfully to your registered email.");
            } else {
                alert("Failed to send OTP. Please try again.");
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
            alert("An error occurred while sending the OTP. Please try again later.");
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post(`${api}/verify-otp`, { email, otp });
            
            if (response.status === 200) {
                setOtpVerified(true);
                alert("OTP Verified!");
            } else {
                alert("Invalid OTP. Please try again.");
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            alert("An error occurred while verifying the OTP. Please try again later.");
        }
    };

    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.put(`${api}/reset-password`, { email, newPassword });

            if (response.status === 200) {
                alert(response.data.message || "Password updated successfully");
            } else {
                alert("Failed to reset password. Please try again.");
            }
        } catch (error) {
            console.error("Error resetting password:", error);
            alert("An error occurred while resetting your password. Please try again later.");
        }
    };

    return (
        <Box
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg={colorMode === "dark" ? "gray.800" : "gray.100"} // Adjust background based on color mode
            p={4}
        >
            <Box
                width={{ base: "90%", sm: "80%", md: "70%", lg: "50%" }}
                maxWidth="600px"
                boxShadow="lg"
                p={8}
                borderRadius="lg"
                bg={colorMode === "dark" ? "gray.700" : "white"} // Adjust background based on color mode
                color={colorMode === "dark" ? "whiteAlpha.900" : "gray.800"} // Adjust text color based on color mode
                as={motion.div}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <IconButton
                    aria-label="Go back"
                    icon={<FaArrowLeft />}
                    as={RouterLink}
                    to="/signin"
                    mb={6}
                    colorScheme="gray"
                    variant="outline"
                    color={colorMode === "dark" ? "whiteAlpha.900" : "gray.800"} // Adjust icon color based on color mode
                />
                <VStack spacing={6} align="stretch">
                    <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                        Forgot Password
                    </Text>
                    <Text fontSize="sm" textAlign="center" color={colorMode === "dark" ? "gray.400" : "gray.500"}>
                        Please enter your details to reset your password
                    </Text>

                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <InputGroup>
                            <InputRightElement children={<FaEnvelope color={colorMode === "dark" ? "gray.400" : "gray.500"} />} />
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                focusBorderColor={colorMode === "dark" ? "whiteAlpha.900" : "black"}
                                borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                                borderRadius="md"
                                bg={colorMode === "dark" ? "gray.600" : "white"}
                            />
                        </InputGroup>
                    </FormControl>

                    <Flex direction="row" align="center" spacing={4}>
                        <FormControl id="mobile" flex="1" mr={4}>
                            <FormLabel>Mobile Number</FormLabel>
                            <InputGroup>
                                <InputRightElement children={<FaMobileAlt color={colorMode === "dark" ? "gray.400" : "gray.500"} />} />
                                <Input
                                    type="tel"
                                    placeholder="Enter your mobile number"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    focusBorderColor={colorMode === "dark" ? "whiteAlpha.900" : "black"}
                                    borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                                    borderRadius="md"
                                    bg={colorMode === "dark" ? "gray.600" : "white"}
                                />
                            </InputGroup>
                        </FormControl>
                        <Box mt={7}>
                        <Button
                            bg={colorMode === "dark" ? "gray.600" : "gray.700"}
                            color={colorMode === "dark" ? "whiteAlpha.900" : "white"}
                            _hover={{ bg: colorMode === "dark" ? "gray.500" : "black.600" }}
                            _active={{ bg: colorMode === "dark" ? "gray.400" : "black.800" }}
                            colorScheme="blackAlpha"
                            onClick={handleSendOtp}
                            isDisabled={!email || !mobile}
                            borderRadius="md"
                        >
                            Send OTP
                        </Button></Box>
                    </Flex>

                    <Flex direction="row" align="center" spacing={4}>
                        <FormControl id="otp" flex="1" mr={4}>
                            <FormLabel>OTP</FormLabel>
                            <InputGroup>
                                <InputRightElement children={<FaLock color={colorMode === "dark" ? "gray.400" : "gray.500"} />} />
                                <Input
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    focusBorderColor={colorMode === "dark" ? "whiteAlpha.900" : "black"}
                                    borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                                    borderRadius="md"
                                    bg={colorMode === "dark" ? "gray.600" : "white"}
                                />
                            </InputGroup>
                        </FormControl>
                        <Box mt={7}>
                        <Button
                            bg={colorMode === "dark" ? "gray.600" : "gray.700"}
                            color={colorMode === "dark" ? "whiteAlpha.900" : "white"}
                            _hover={{ bg: colorMode === "dark" ? "gray.500" : "black.600" }}
                            _active={{ bg: colorMode === "dark" ? "gray.400" : "black.800" }}
                            colorScheme="blackAlpha"
                            onClick={handleVerifyOtp}
                            isDisabled={!otp}
                            borderRadius="md"
                        >
                            Verify OTP
                        </Button></Box>
                    </Flex>

                    {otpVerified && (
                        <Collapse in={otpVerified}>
                            <VStack spacing={4} mt={4}>
                                <FormControl id="new-password">
                                    <FormLabel>New Password</FormLabel>
                                    <InputGroup>
                                        <InputRightElement children={<FaLock color={colorMode === "dark" ? "gray.400" : "gray.500"} />} />
                                        <Input
                                            type="password"
                                            placeholder="Enter new password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            focusBorderColor={colorMode === "dark" ? "whiteAlpha.900" : "black"}
                                            borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                                            borderRadius="md"
                                            bg={colorMode === "dark" ? "gray.600" : "white"}
                                        />
                                    </InputGroup>
                                </FormControl>

                                <FormControl id="confirm-password">
                                    <FormLabel>Confirm New Password</FormLabel>
                                    <InputGroup>
                                        <InputRightElement children={<FaLock color={colorMode === "dark" ? "gray.400" : "gray.500"} />} />
                                        <Input
                                            type="password"
                                            placeholder="Confirm new password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            focusBorderColor={colorMode === "dark" ? "whiteAlpha.900" : "black"}
                                            borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                                            borderRadius="md"
                                            bg={colorMode === "dark" ? "gray.600" : "white"}
                                        />
                                    </InputGroup>
                                </FormControl>

                                <Button
                                    bg={colorMode === "dark" ? "gray.600" : "gray.700"}
                                    color={colorMode === "dark" ? "whiteAlpha.900" : "white"}
                                    _hover={{ bg: colorMode === "dark" ? "gray.500" : "black.600" }}
                                    _active={{ bg: colorMode === "dark" ? "gray.400" : "black.800" }}
                                    colorScheme="blackAlpha"
                                    onClick={handleResetPassword}
                                    isDisabled={!newPassword || !confirmPassword}
                                    borderRadius="md"
                                >
                                    Reset Password
                                </Button>
                            </VStack>
                        </Collapse>
                    )}
                </VStack>
            </Box>
        </Box>
    );
};

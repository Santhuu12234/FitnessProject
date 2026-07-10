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
    useColorMode,
    useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { FaLock, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { motion } from "framer-motion";
import { api } from "../actions/api";

export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [sendingOtp, setSendingOtp] = useState(false);
    const [verifyingOtp, setVerifyingOtp] = useState(false);
    const [resettingPassword, setResettingPassword] = useState(false);
    const { colorMode } = useColorMode();
    const toast = useToast();
    const navigate = useNavigate();

    const handleSendOtp = async () => {
        if (!email) {
            toast({
                title: "Email Required",
                description: "Please enter your email address.",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
            return;
        }
        setSendingOtp(true);
        try {
            const response = await axios.post(`${api}/send-otp`, { email });

            if (response.status === 200) {
                setOtpSent(true);
                toast({
                    title: "OTP Sent!",
                    description: "OTP has been sent to your registered email. Check your inbox.",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                    position: "top"
                });
            }
        } catch (error) {
            toast({
                title: "Failed to Send OTP",
                description: error.response?.data?.error || "An error occurred. Please try again.",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
        } finally {
            setSendingOtp(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (!otp) {
            toast({
                title: "OTP Required",
                description: "Please enter the OTP sent to your email.",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
            return;
        }
        setVerifyingOtp(true);
        try {
            const response = await axios.post(`${api}/verify-otp`, { email, otp });

            if (response.status === 200) {
                setOtpVerified(true);
                toast({
                    title: "OTP Verified!",
                    description: "You can now set your new password.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position: "top"
                });
            }
        } catch (error) {
            toast({
                title: "Verification Failed",
                description: error.response?.data?.error || "Invalid OTP. Please try again.",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
        } finally {
            setVerifyingOtp(false);
        }
    };

    const handleResetPassword = async () => {
        if (!newPassword || !confirmPassword) {
            toast({
                title: "Missing Fields",
                description: "Please fill in both password fields.",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
            return;
        }
        if (newPassword !== confirmPassword) {
            toast({
                title: "Password Mismatch",
                description: "Passwords do not match. Please try again.",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
            return;
        }
        if (newPassword.length < 6) {
            toast({
                title: "Weak Password",
                description: "Password must be at least 6 characters long.",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
            return;
        }

        setResettingPassword(true);
        try {
            const response = await axios.put(`${api}/reset-password`, { email, newPassword });

            if (response.status === 200) {
                toast({
                    title: "Password Reset Successful!",
                    description: "Your password has been updated. Redirecting to sign in...",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position: "top"
                });
                // Redirect to sign-in page after short delay
                setTimeout(() => {
                    navigate("/signin");
                }, 2000);
            }
        } catch (error) {
            toast({
                title: "Reset Failed",
                description: error.response?.data?.error || "An error occurred. Please try again.",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
        } finally {
            setResettingPassword(false);
        }
    };

    return (
        <Box
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg={colorMode === "dark" ? "gray.800" : "gray.100"}
            p={4}
        >
            <Box
                width={{ base: "90%", sm: "80%", md: "70%", lg: "50%" }}
                maxWidth="600px"
                boxShadow="lg"
                p={8}
                borderRadius="lg"
                bg={colorMode === "dark" ? "gray.700" : "white"}
                color={colorMode === "dark" ? "whiteAlpha.900" : "gray.800"}
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
                    color={colorMode === "dark" ? "whiteAlpha.900" : "gray.800"}
                />
                <VStack spacing={6} align="stretch">
                    <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                        Forgot Password
                    </Text>
                    <Text fontSize="sm" textAlign="center" color={colorMode === "dark" ? "gray.400" : "gray.500"}>
                        Please enter your details to reset your password
                    </Text>

                    {/* Step 1: Email */}
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
                                isDisabled={otpSent}
                            />
                        </InputGroup>
                    </FormControl>

                    {!otpSent && (
                        <Button
                            bg={colorMode === "dark" ? "gray.600" : "gray.700"}
                            color={colorMode === "dark" ? "whiteAlpha.900" : "white"}
                            _hover={{ bg: colorMode === "dark" ? "gray.500" : "gray.600" }}
                            _active={{ bg: colorMode === "dark" ? "gray.400" : "gray.800" }}
                            onClick={handleSendOtp}
                            isDisabled={!email}
                            isLoading={sendingOtp}
                            loadingText="Sending OTP..."
                            borderRadius="md"
                            width="100%"
                            mt={2}
                        >
                            Send OTP
                        </Button>
                    )}

                    {/* Step 2: OTP Verification */}
                    {otpSent && !otpVerified && (
                        <>
                            <Flex direction="row" align="center" spacing={4}>
                                <FormControl id="otp" flex="1" mr={4}>
                                    <FormLabel>OTP</FormLabel>
                                    <InputGroup>
                                        <InputRightElement children={<FaLock color={colorMode === "dark" ? "gray.400" : "gray.500"} />} />
                                        <Input
                                            type="text"
                                            placeholder="Enter 6-digit OTP"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            focusBorderColor={colorMode === "dark" ? "whiteAlpha.900" : "black"}
                                            borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                                            borderRadius="md"
                                            bg={colorMode === "dark" ? "gray.600" : "white"}
                                            maxLength={6}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <Box mt={7}>
                                    <Button
                                        bg={colorMode === "dark" ? "gray.600" : "gray.700"}
                                        color={colorMode === "dark" ? "whiteAlpha.900" : "white"}
                                        _hover={{ bg: colorMode === "dark" ? "gray.500" : "gray.600" }}
                                        _active={{ bg: colorMode === "dark" ? "gray.400" : "gray.800" }}
                                        onClick={handleVerifyOtp}
                                        isDisabled={!otp}
                                        isLoading={verifyingOtp}
                                        loadingText="Verifying..."
                                        borderRadius="md"
                                    >
                                        Verify OTP
                                    </Button>
                                </Box>
                            </Flex>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleSendOtp}
                                isLoading={sendingOtp}
                                loadingText="Resending..."
                                color={colorMode === "dark" ? "gray.300" : "gray.600"}
                            >
                                Didn't receive OTP? Resend
                            </Button>
                        </>
                    )}

                    {/* Step 3: Reset Password */}
                    {otpVerified && (
                        <Collapse in={otpVerified}>
                            <VStack spacing={4} mt={4}>
                                <FormControl id="new-password">
                                    <FormLabel>New Password</FormLabel>
                                    <InputGroup>
                                        <InputRightElement children={<FaLock color={colorMode === "dark" ? "gray.400" : "gray.500"} />} />
                                        <Input
                                            type="password"
                                            placeholder="Enter new password (min 6 chars)"
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
                                    _hover={{ bg: colorMode === "dark" ? "gray.500" : "gray.600" }}
                                    _active={{ bg: colorMode === "dark" ? "gray.400" : "gray.800" }}
                                    onClick={handleResetPassword}
                                    isDisabled={!newPassword || !confirmPassword}
                                    isLoading={resettingPassword}
                                    loadingText="Resetting..."
                                    borderRadius="md"
                                    width="100%"
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

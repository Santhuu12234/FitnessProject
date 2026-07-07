import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardBody,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Heading,
    Text,
    InputGroup,
    InputRightElement,
    IconButton,
    useColorModeValue,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
} from "@chakra-ui/react";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../actions/api";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const bg = useColorModeValue("linear(to-br, gray.800, gray.950)", "linear(to-br, gray.900, black)");
    const cardBg = useColorModeValue("rgba(255, 255, 255, 0.08)", "rgba(0, 0, 0, 0.5)");
    const inputBg = useColorModeValue("rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.05)");

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setStatus({ type: "error", message: "Please fill in all fields." });
            return;
        }

        setIsLoading(true);
        setStatus({ type: "", message: "" });

        try {
            const res = await axios.post(`${api}/signin`, { email, password });
            if (res.data.message === "Sign-in successful" && res.data.userType === "Admin") {
                setStatus({ type: "success", message: "Successfully logged in as Admin! Redirecting..." });
                localStorage.setItem("isAdmin", "true");
                setTimeout(() => {
                    navigate("/admin");
                }, 1500);
            } else {
                setStatus({ type: "error", message: "Access denied. Only administrators are permitted." });
            }
        } catch (error) {
            console.error("Admin signin error:", error);
            const errMsg = error.response?.data?.error || "Invalid administrator credentials.";
            setStatus({ type: "error", message: errMsg });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Flex
            height="100vh"
            bgGradient={bg}
            alignItems="center"
            justifyContent="center"
            p={4}
        >
            <MotionBox
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                width="100%"
                maxWidth="450px"
            >
                <Card
                    boxShadow="2xl"
                    borderRadius="2xl"
                    bg={cardBg}
                    backdropFilter="blur(16px)"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    color="white"
                >
                    <CardBody p={8}>
                        <VStack spacing={6} align="stretch">
                            <IconButton
                                icon={<FaArrowLeft />}
                                aria-label="Go back to landing"
                                variant="ghost"
                                color="whiteAlpha.800"
                                _hover={{ bg: "whiteAlpha.200" }}
                                alignSelf="flex-start"
                                size="sm"
                                onClick={() => navigate("/landing")}
                            />

                            <VStack spacing={2} align="center">
                                <Heading size="lg" fontFamily="serif" letterSpacing="wide">
                                    Admin Portal
                                </Heading>
                                <Text color="whiteAlpha.600" fontSize="sm">
                                    Secure Authentication
                                </Text>
                            </VStack>

                            {status.message && (
                                <Alert
                                    status={status.type === "success" ? "success" : "error"}
                                    borderRadius="lg"
                                    bg={status.type === "success" ? "green.600" : "red.600"}
                                    color="white"
                                    boxShadow="md"
                                >
                                    <AlertIcon color="white" />
                                    <Box flex="1">
                                        <AlertTitle fontSize="sm">{status.type === "success" ? "Success" : "Error"}</AlertTitle>
                                        <AlertDescription fontSize="xs">{status.message}</AlertDescription>
                                    </Box>
                                    <CloseButton
                                        position="absolute"
                                        right="8px"
                                        top="8px"
                                        onClick={() => setStatus({ type: "", message: "" })}
                                    />
                                </Alert>
                            )}

                            <form onSubmit={handleLogin}>
                                <VStack spacing={4}>
                                    <FormControl id="email">
                                        <FormLabel fontSize="sm" color="whiteAlpha.800">Administrator Email</FormLabel>
                                        <InputGroup size="md">
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="admin@soulflex.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                bg={inputBg}
                                                border="none"
                                                _focus={{ border: "1px solid cyan.400", boxShadow: "0 0 8px rgba(0, 255, 255, 0.3)" }}
                                                color="white"
                                            />
                                            <InputRightElement color="whiteAlpha.600">
                                                <FaEnvelope />
                                            </InputRightElement>
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl id="password">
                                        <FormLabel fontSize="sm" color="whiteAlpha.800">Password</FormLabel>
                                        <InputGroup size="md">
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                placeholder="••••••••"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                bg={inputBg}
                                                border="none"
                                                _focus={{ border: "1px solid cyan.400", boxShadow: "0 0 8px rgba(0, 255, 255, 0.3)" }}
                                                color="white"
                                            />
                                            <InputRightElement>
                                                <IconButton
                                                    variant="ghost"
                                                    color="whiteAlpha.600"
                                                    _hover={{ bg: "transparent" }}
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                                                    size="sm"
                                                    aria-label="Toggle password visibility"
                                                />
                                            </InputRightElement>
                                        </InputGroup>
                                    </FormControl>

                                    <Button
                                        type="submit"
                                        colorScheme="cyan"
                                        width="100%"
                                        mt={4}
                                        isLoading={isLoading}
                                        loadingText="Verifying credentials..."
                                        bg="cyan.500"
                                        color="black"
                                        fontWeight="semibold"
                                        _hover={{ bg: "cyan.400" }}
                                    >
                                        Access Dashboard
                                    </Button>
                                </VStack>
                            </form>
                        </VStack>
                    </CardBody>
                </Card>
            </MotionBox>
        </Flex>
    );
};

export default AdminLogin;

import React, { useState, useRef } from "react";
import {
    Card,
    CardBody,
    FormControl,
    FormLabel,
    Input,
    Button as ChakraButton,
    VStack,
    Box,
    Heading,
    Text,
    Checkbox,
    Link,
    Image,
    Flex,
    IconButton,
    useColorModeValue,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
} from "@chakra-ui/react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { api } from "../actions/api";
import soulflexImage from "../img/soulflex.png";

const MotionButton = motion(ChakraButton);

export const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);

    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const bg = useColorModeValue("gray.300", "gray.700");
    const cardBg = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.800", "white");
    const secondaryTextColor = useColorModeValue("gray.500", "gray.300");
    const signUpLinkColor = useColorModeValue("black", "white");

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setStatus({ type: "error", message: "Please fill in all fields." });
            return;
        }

        setIsLoading(true);
        setStatus({ type: "", message: "" });

        try {
            console.log("Sending admin sign-in request:", { email, password });
            const res = await axios.post(`${api}/signin`, { email, password });
            console.log("Server response:", res.data);

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

    const handleEmailKeyPress = (e) => {
        if (e.key === "Enter") {
            passwordRef.current.focus();
        }
    };

    const handleBackClick = () => {
        navigate("/landing");
    };

    return (
        <Flex
            height="100vh"
            bg={bg}
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                width="67%"
                maxWidth="1200px"
                boxShadow="xl"
                borderRadius="lg"
                overflow="hidden"
                bg="white"
            >
                {/* Left Side with Full Image */}
                <Box
                    width="60%"
                    bg="black"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    padding={0}
                    as={motion.div}
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition="0.5s ease-in-out"
                >
                    <Image
                        src={soulflexImage}
                        alt="Soul Flex"
                        objectFit="cover"
                        width="70%"
                        height="45%"
                    />
                </Box>

                {/* Right Side with Admin Sign-in Form */}
                <Box
                    width="60%"
                    p={8}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    as={motion.div}
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition="0.5s ease-in-out"
                >
                    <Card boxShadow="md" borderRadius="lg" bg={cardBg}>
                        <CardBody>
                            <form onSubmit={handleLogin}>
                                <VStack spacing={4} align="stretch">
                                    {/* Back Button */}
                                    <IconButton
                                        icon={<ArrowBackIcon />}
                                        aria-label="Back"
                                        variant="outline"
                                        colorScheme="gray"
                                        alignSelf="flex-start"
                                        onClick={handleBackClick}
                                    />

                                    <Heading
                                        as="h2"
                                        size="lg"
                                        textAlign="center"
                                        color={textColor}
                                        fontFamily="serif"
                                        mb={2}
                                    >
                                        Admin Portal
                                    </Heading>
                                    <Text
                                        fontSize="sm"
                                        textAlign="center"
                                        color={secondaryTextColor}
                                        mb={4}
                                    >
                                        Secure gateway for system operators and database administrators.
                                    </Text>

                                    {status.message && (
                                        <Alert
                                            status={status.type === "success" ? "success" : "error"}
                                            borderRadius="lg"
                                            bg={status.type === "success" ? "green.600" : "red.600"}
                                            color="white"
                                            boxShadow="md"
                                            mb={2}
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

                                    <FormControl id="email">
                                        <FormLabel color={textColor}>Admin Email</FormLabel>
                                        <Input
                                            type="email"
                                            placeholder="Enter administrator email"
                                            focusBorderColor="black"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onKeyPress={handleEmailKeyPress}
                                            bg={useColorModeValue("white", "gray.700")}
                                            color={textColor}
                                        />
                                    </FormControl>

                                    <FormControl id="password">
                                        <FormLabel color={textColor}>Password</FormLabel>
                                        <Input
                                            type="password"
                                            placeholder="Enter administrator password"
                                            focusBorderColor="black"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            ref={passwordRef}
                                            bg={useColorModeValue("white", "gray.700")}
                                            color={textColor}
                                        />
                                    </FormControl>

                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        width="100%"
                                        fontSize="sm"
                                        color={secondaryTextColor}
                                        mb={4}
                                    >
                                        <Checkbox colorScheme="gray">Remember session</Checkbox>
                                        <Link as={RouterLink} to="/forgot-password" color={secondaryTextColor}>
                                            Forgot Password
                                        </Link>
                                    </Box>

                                    <MotionButton
                                        bg="black"
                                        color="white"
                                        size="lg"
                                        mt={4}
                                        _hover={{ bg: "gray.800" }}
                                        type="submit"
                                        isLoading={isLoading}
                                        loadingText="Verifying security..."
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Sign In as Admin
                                    </MotionButton>

                                    <Text textAlign="center" color={secondaryTextColor} fontSize="sm" mt={2}>
                                        Are you a regular user?{" "}
                                        <Link
                                            as={RouterLink}
                                            to="/signin"
                                            color={signUpLinkColor}
                                            fontWeight="bold"
                                        >
                                            Sign In
                                        </Link>
                                    </Text>
                                </VStack>
                            </form>
                        </CardBody>
                    </Card>
                </Box>
            </Flex>
        </Flex>
    );
};

export default AdminLogin;

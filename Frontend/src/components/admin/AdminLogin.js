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
    useToast
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
    const [isLoading, setIsLoading] = useState(false);

    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const toast = useToast();

    const bg = useColorModeValue("gray.300", "gray.700");
    const cardBg = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.800", "white");
    const secondaryTextColor = useColorModeValue("gray.500", "gray.300");
    const signUpLinkColor = useColorModeValue("black", "white");

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast({
                title: "Missing Fields",
                description: "Please enter email and password.",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
            return;
        }
        setIsLoading(true);
        try {
            const res = await axios.post(`${api}/signin`, { email, password });
            if (res.data.message === "Sign-in successful" && res.data.userType === "Admin") {
                localStorage.setItem("isAdmin", "true");
                toast({
                    title: "Access Granted",
                    description: "Successfully logged in as Administrator.",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position: "top"
                });
                setTimeout(() => navigate("/admin"), 1200);
            } else {
                toast({
                    title: "Access Denied",
                    description: "Only administrators are permitted to use this portal.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: "top"
                });
            }
        } catch (error) {
            toast({
                title: "Login Failed",
                description: error.response?.data?.error || "Invalid administrator credentials.",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleEmailKeyPress = (e) => {
        if (e.key === "Enter") {
            passwordRef.current?.focus();
        }
    };

    const handlePasswordKeyPress = (e) => {
        if (e.key === "Enter") {
            handleLogin(e);
        }
    };

    return (
        <Flex
            minHeight="100vh"
            bg={bg}
            alignItems="center"
            justifyContent="center"
            p={4}
        >
            <Flex
                width={{ base: "100%", sm: "90%", md: "80%", lg: "70%" }}
                maxWidth="1100px"
                boxShadow="xl"
                borderRadius="xl"
                overflow="hidden"
                direction={{ base: "column", md: "row" }}
            >
                {/* Left Side — Branding */}
                <Box
                    width={{ base: "100%", md: "50%" }}
                    minHeight={{ base: "200px", md: "auto" }}
                    bg="black"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    p={8}
                    as={motion.div}
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition="0.5s ease-in-out"
                >
                    <Image
                        src={soulflexImage}
                        alt="Soul Flex"
                        objectFit="contain"
                        maxW="70%"
                        maxH="300px"
                    />
                </Box>

                {/* Right Side — Admin Sign-in Form */}
                <Box
                    width={{ base: "100%", md: "50%" }}
                    p={{ base: 6, md: 8 }}
                    bg={cardBg}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    as={motion.div}
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition="0.5s ease-in-out"
                >
                    <Card boxShadow="none" borderRadius="lg" bg="transparent">
                        <CardBody px={0}>
                            <form onSubmit={handleLogin}>
                                <VStack spacing={4} align="stretch">
                                    {/* Back Button */}
                                    <IconButton
                                        icon={<ArrowBackIcon />}
                                        aria-label="Back"
                                        variant="outline"
                                        colorScheme="gray"
                                        alignSelf="flex-start"
                                        onClick={() => navigate("/landing")}
                                    />

                                    <Heading
                                        as="h2"
                                        size="lg"
                                        textAlign="center"
                                        color={textColor}
                                        fontFamily="serif"
                                        mb={1}
                                    >
                                        Admin Portal
                                    </Heading>
                                    <Text
                                        fontSize="sm"
                                        textAlign="center"
                                        color={secondaryTextColor}
                                        mb={2}
                                    >
                                        Secure gateway for system operators and administrators.
                                    </Text>

                                    <FormControl id="admin-email">
                                        <FormLabel color={textColor}>Admin Email</FormLabel>
                                        <Input
                                            type="email"
                                            placeholder="Enter administrator email"
                                            focusBorderColor="black"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onKeyPress={handleEmailKeyPress}
                                            bg={cardBg}
                                            color={textColor}
                                        />
                                    </FormControl>

                                    <FormControl id="admin-password">
                                        <FormLabel color={textColor}>Password</FormLabel>
                                        <Input
                                            type="password"
                                            placeholder="Enter administrator password"
                                            focusBorderColor="black"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onKeyPress={handlePasswordKeyPress}
                                            ref={passwordRef}
                                            bg={cardBg}
                                            color={textColor}
                                        />
                                    </FormControl>

                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        width="100%"
                                        fontSize="sm"
                                        color={secondaryTextColor}
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
                                        width="100%"
                                        mt={2}
                                        _hover={{ bg: "gray.800" }}
                                        type="submit"
                                        isLoading={isLoading}
                                        loadingText="Verifying credentials..."
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        Sign In as Admin
                                    </MotionButton>

                                    <Text textAlign="center" color={secondaryTextColor} fontSize="sm" mt={1}>
                                        Are you a regular user?{" "}
                                        <Link as={RouterLink} to="/signin" color={signUpLinkColor} fontWeight="bold">
                                            Sign In
                                        </Link>
                                    </Text>
                                    <Text textAlign="center" color={secondaryTextColor} fontSize="sm">
                                        New here?{" "}
                                        <Link as={RouterLink} to="/signup" color={signUpLinkColor} fontWeight="bold">
                                            Sign Up
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

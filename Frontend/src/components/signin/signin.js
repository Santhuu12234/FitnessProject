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
import axios from 'axios';
import { api } from "../actions/api";
import { useState, useRef } from "react";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { ArrowBackIcon } from "@chakra-ui/icons";
import soulflexImage from '../img/soulflex.png';
import { useAuth } from "../../context/AuthContext";

const MotionButton = motion(ChakraButton);

export const SignIn = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const toast = useToast();
    const { login } = useAuth();

    const bg = useColorModeValue("gray.300", "gray.700");
    const cardBg = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.800", "white");
    const secondaryTextColor = useColorModeValue("gray.500", "gray.300");
    const signUpLinkColor = useColorModeValue("black", "white");

    const Signin = async () => {
        if (!name || !password) {
            toast({
                title: "Missing Fields",
                description: "Please enter your email and password.",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
            return;
        }
        setIsLoading(true);
        try {
            const res = await axios.post(api + "/signin", { email: name, password });
            if (res.data.message === "Sign-in successful") {
                // Store user data in auth context
                login({
                    name: res.data.userName || name.split('@')[0],
                    email: name,
                    userType: res.data.userType || "User"
                });

                toast({
                    title: "Welcome Back!",
                    description: "Sign-in successful.",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position: "top"
                });
                if (res.data.userType === "Admin") {
                    navigate("/admin");
                } else {
                    navigate("/mainpage");
                }
            } else {
                toast({
                    title: "Sign-in Failed",
                    description: res.data.error || "Unexpected error occurred.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: "top"
                });
            }
        } catch (error) {
            toast({
                title: "Sign-in Failed",
                description: error.response?.data?.error || "Unable to connect. Please try again.",
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
            Signin();
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

                {/* Right Side — Sign-in Form */}
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
                                    Welcome back to Soul Flex!
                                </Heading>
                                <Text
                                    fontSize="sm"
                                    textAlign="center"
                                    color={secondaryTextColor}
                                    mb={2}
                                >
                                    The faster you fill up, the faster you get a chance to change your life!
                                </Text>

                                <FormControl id="email">
                                    <FormLabel color={textColor}>Email</FormLabel>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        focusBorderColor="black"
                                        onChange={(e) => setName(e.target.value)}
                                        onKeyPress={handleEmailKeyPress}
                                        bg={cardBg}
                                        color={textColor}
                                    />
                                </FormControl>

                                <FormControl id="password">
                                    <FormLabel color={textColor}>Password</FormLabel>
                                    <Input
                                        type="password"
                                        placeholder="Enter your password"
                                        focusBorderColor="black"
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
                                    <Checkbox colorScheme="gray">Remember me</Checkbox>
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
                                    onClick={Signin}
                                    isLoading={isLoading}
                                    loadingText="Signing in..."
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    Sign In
                                </MotionButton>

                                <Text textAlign="center" color={secondaryTextColor} fontSize="sm" mt={1}>
                                    Don't have an account?{" "}
                                    <Link as={RouterLink} to="/signup" color={signUpLinkColor} fontWeight="bold">
                                        Sign up
                                    </Link>
                                </Text>

                                <Text textAlign="center" color={secondaryTextColor} fontSize="sm">
                                    Are you an administrator?{" "}
                                    <Link as={RouterLink} to="/adminlogin" color={signUpLinkColor} fontWeight="bold">
                                        Admin Login
                                    </Link>
                                </Text>
                            </VStack>
                        </CardBody>
                    </Card>
                </Box>
            </Flex>
        </Flex>
    );
};
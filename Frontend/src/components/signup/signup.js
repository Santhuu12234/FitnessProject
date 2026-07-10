import {
    Card,
    CardBody,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    HStack,
    Box,
    Heading,
    Text,
    InputGroup,
    InputRightElement,
    Flex,
    Link,
    Image,
    useColorModeValue,
    IconButton,
    useToast
} from "@chakra-ui/react";
import axios from 'axios';
import { api } from "../actions/api";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaMobileAlt, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import soulflexImage from '../img/soulflex.png';

export const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();

    const handleSignUp = async () => {
        if (!name || !email || !mobile || !password || !confirmPassword) {
            toast({
                title: "Missing Fields",
                description: "Please fill in all fields.",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
            return;
        }
        if (password !== confirmPassword) {
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
        setIsLoading(true);
        try {
            const response = await axios.post(`${api}/signup`, { name, password, email, mobile });
            if (response.data.message === 'Registration successful') {
                toast({
                    title: "Registration Successful!",
                    description: "Your account has been created. Please sign in.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position: "top"
                });
                navigate("/signin");
            }
        } catch (e) {
            toast({
                title: "Registration Failed",
                description: e.response?.data?.error || "Unable to register. Please try again.",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top"
            });
        } finally {
            setIsLoading(false);
        }
    };

    const bg = useColorModeValue("gray.100", "gray.900");
    const cardBg = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("black", "white");
    const textColor = useColorModeValue("gray.800", "white");
    const linkColor = useColorModeValue("black", "white");
    const secondaryTextColor = useColorModeValue("gray.500", "gray.300");

    return (
        <Flex
            minHeight="100vh"
            bg={bg}
            alignItems="center"
            justifyContent="center"
            p={4}
        >
            <Flex
                width={{ base: "100%", sm: "95%", md: "85%", lg: "80%" }}
                maxWidth="1200px"
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
                    color="white"
                    display="flex"
                    flexDirection="column"
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
                        alt="Logo"
                        objectFit="contain"
                        maxW="75%"
                        maxH="280px"
                        mb={4}
                    />
                </Box>

                {/* Right Side — Sign-up Form */}
                <Box
                    width={{ base: "100%", md: "50%" }}
                    p={{ base: 6, md: 8 }}
                    bg={cardBg}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    position="relative"
                    as={motion.div}
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition="0.5s ease-in-out"
                >
                    <IconButton
                        icon={<FaArrowLeft />}
                        aria-label="Back to Sign In"
                        position="absolute"
                        top="16px"
                        left="16px"
                        size="sm"
                        bg={useColorModeValue("gray.200", "gray.700")}
                        color={useColorModeValue("gray.800", "white")}
                        _hover={{ bg: useColorModeValue("gray.300", "gray.600") }}
                        as={RouterLink}
                        to="/signin"
                    />

                    <Card boxShadow="none" borderRadius="lg" bg="transparent">
                        <CardBody px={0}>
                            <VStack spacing={4} align="stretch">
                                <Heading
                                    as="h2"
                                    size="lg"
                                    textAlign="center"
                                    color={textColor}
                                    fontFamily="serif"
                                    mb={2}
                                    pt={6}
                                >
                                    Create an Account
                                </Heading>

                                <HStack spacing={4} width="100%">
                                    <FormControl>
                                        <FormLabel color={textColor}>Email address</FormLabel>
                                        <InputGroup>
                                            <InputRightElement pointerEvents="none" children={<FaEnvelope color="gray" />} />
                                            <Input
                                                type='email'
                                                placeholder="Enter your email"
                                                focusBorderColor={borderColor}
                                                bg={cardBg}
                                                color={textColor}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel color={textColor}>Name</FormLabel>
                                        <InputGroup>
                                            <InputRightElement pointerEvents="none" children={<FaUser color="gray" />} />
                                            <Input
                                                type='text'
                                                placeholder="Enter your name"
                                                focusBorderColor={borderColor}
                                                bg={cardBg}
                                                color={textColor}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </InputGroup>
                                    </FormControl>
                                </HStack>

                                <FormControl>
                                    <FormLabel color={textColor}>Mobile Number</FormLabel>
                                    <InputGroup>
                                        <InputRightElement pointerEvents="none" children={<FaMobileAlt color="gray" />} />
                                        <Input
                                            type='tel'
                                            placeholder="Enter your mobile number"
                                            focusBorderColor={borderColor}
                                            bg={cardBg}
                                            color={textColor}
                                            onChange={(e) => setMobile(e.target.value)}
                                        />
                                    </InputGroup>
                                </FormControl>

                                <HStack spacing={4} width="100%">
                                    <FormControl>
                                        <FormLabel color={textColor}>Password</FormLabel>
                                        <InputGroup>
                                            <InputRightElement pointerEvents="none" children={<FaLock color="gray" />} />
                                            <Input
                                                type='password'
                                                placeholder="Create password"
                                                focusBorderColor={borderColor}
                                                bg={cardBg}
                                                color={textColor}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel color={textColor}>Confirm Password</FormLabel>
                                        <InputGroup>
                                            <InputRightElement pointerEvents="none" children={<FaLock color="gray" />} />
                                            <Input
                                                type='password'
                                                placeholder="Confirm password"
                                                focusBorderColor={borderColor}
                                                bg={cardBg}
                                                color={textColor}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </InputGroup>
                                    </FormControl>
                                </HStack>

                                <Button
                                    bg="black"
                                    color="white"
                                    size="lg"
                                    width="100%"
                                    mt={2}
                                    _hover={{ bg: "gray.800" }}
                                    onClick={handleSignUp}
                                    isLoading={isLoading}
                                    loadingText="Creating account..."
                                    as={motion.div}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    Sign Up
                                </Button>

                                <Text textAlign="center" color={secondaryTextColor} fontSize="sm" mt={1}>
                                    Already have an account?{" "}
                                    <Link as={RouterLink} to="/signin" color={linkColor} fontWeight="bold">
                                        Sign In
                                    </Link>
                                </Text>

                                <Text textAlign="center" color={secondaryTextColor} fontSize="sm">
                                    Are you an administrator?{" "}
                                    <Link as={RouterLink} to="/adminlogin" color={linkColor} fontWeight="bold">
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
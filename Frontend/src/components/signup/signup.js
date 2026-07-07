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
    IconButton
} from "@chakra-ui/react";
import axios from 'axios';
import { useState, useRef } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaMobileAlt, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import soulflexImage from '../img/soulflex.png';

export const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const passwordRef = useRef(null);

    const handleSignUp = async () => {
        if (!name || !email || !mobile || !password || !confirmPassword) {
            alert("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:9000/signup", { name, password, email, mobile });
            if (response.data.message === 'Registration successful') {
                alert("Registration successful");
                window.location.href = "/signin";
            }
        } catch (e) {
            if (e.response && e.response.status === 409) {
                alert(e.response.data.error); // Display specific error message
            } else {
                console.error(e);
                alert("Registration failed");
            }
        }
    };

    const handleEmailKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSignUp();
        }
    };

    const bg = useColorModeValue("gray.100", "gray.900");
    const boxBg = useColorModeValue("white", "white"); // Always white
    const cardBg = useColorModeValue("white", "gray.900");
    const borderColor = useColorModeValue("black", "white");
    const textColor = useColorModeValue("gray.800", "white");
    const linkColor = useColorModeValue("black", "white");

    return (
        <Flex
            height="100vh"
            bg={bg}
            alignItems="center"
            justifyContent="center"
            paddingTop="200px"
            paddingBottom="200px"
            position="relative"
        >
            

            <Flex
                width="70%"
                boxShadow="xl"
                borderRadius="lg"
                overflow="hidden"
                bg={boxBg}
            >
                <Box
                    width="40%"
                    bg="black"
                    color="white"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    padding={8}
                    as={motion.div}
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition="0.5s ease-in-out"
                >
                    <Image
                        src={soulflexImage}
                        alt="Logo"
                        boxSize="100px"
                        mb={4}
                        width="85%"
                        height="60%"
                    />
                    <Heading
                        as="h1"
                        size="md"
                        textAlign="center"
                        fontFamily="serif"
                        mb={2}
                    >
                        {/* Add your slogan here */}
                    </Heading>
                    <Text fontSize="md" textAlign="center">
                        {/* Add your subtext here */}
                    </Text>
                </Box>

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
                    <IconButton
                icon={<FaArrowLeft />}
                aria-label="Back to Sign In"
                position="absolute"
                top="10px"
                left="10px"
                bg={useColorModeValue("gray.200", "gray.700")}
                color={useColorModeValue("gray.800", "white")}
                _hover={{ bg: useColorModeValue("gray.300", "gray.600") }}
                as={RouterLink}
                to="/signin"
            />
                        <CardBody>
                            <VStack spacing={4} align="stretch">
                                <Heading
                                    as="h2"
                                    size="lg"
                                    textAlign="center"
                                    color={textColor}
                                    fontFamily="serif"
                                    mb={4}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition="0.5s ease-in-out"
                                >
                                    Create an Account
                                </Heading>

                                <HStack spacing={4} width="100%">
                                    <FormControl>
                                        <FormLabel>Email address</FormLabel>
                                        <InputGroup>
                                            <InputRightElement pointerEvents="none" children={<FaEnvelope color="gray.500" />} />
                                            <Input
                                                type='email'
                                                placeholder="Enter your email"
                                                focusBorderColor={borderColor}
                                                bg={cardBg}
                                                color={textColor}
                                                onChange={(e) => setEmail(e.target.value)}
                                                onKeyPress={handleEmailKeyPress}
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Name</FormLabel>
                                        <InputGroup>
                                            <InputRightElement pointerEvents="none" children={<FaUser color="gray.500" />} />
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

                                <FormControl mt={4}>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <InputGroup>
                                        <InputRightElement pointerEvents="none" children={<FaMobileAlt color="gray.500" />} />
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

                                <HStack spacing={4} width="100%" mt={4}>
                                    <FormControl>
                                        <FormLabel>Password</FormLabel>
                                        <InputGroup>
                                            <InputRightElement pointerEvents="none" children={<FaLock color="gray.500" />} />
                                            <Input
                                                type='password'
                                                placeholder="Enter your password"
                                                focusBorderColor={borderColor}
                                                bg={cardBg}
                                                color={textColor}
                                                onChange={(e) => setPassword(e.target.value)}
                                                ref={passwordRef}
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <InputGroup>
                                            <InputRightElement pointerEvents="none" children={<FaLock color="gray.500" />} />
                                            <Input
                                                type='password'
                                                placeholder="Confirm your password"
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
                                    mt={4}
                                    _hover={{ bg: "gray.800" }}
                                    onClick={handleSignUp}
                                    isDisabled={!name || !email || !mobile || !password || !confirmPassword}
                                    as={motion.div}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Sign Up
                                </Button>

                                <Text textAlign="center" color={textColor} fontSize="sm" mt={2}>
                                    Already have an account?{" "}
                                    <Link
                                        as={RouterLink}
                                        to="/signin"
                                        color={linkColor}
                                        fontWeight="bold"
                                    >
                                        Sign In
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
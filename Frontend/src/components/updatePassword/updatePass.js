import {
    FormLabel,
    FormControl,
    FormHelperText,
    Input,
    Button,
    Box,
    VStack,
    Text,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export const UpdatePassword = () => {
    return (
        <Box
            w="100%"
            maxW="400px"
            mx="auto"
            mt="100px"
            p="8"
            borderRadius="xl"
            boxShadow="2xl"
            bgGradient="linear(to-r, purple.500, pink.500)"
            color="white"
            _hover={{ transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }}
        >
            <VStack spacing={6} align="flex-start">
                <Text fontSize="3xl" fontWeight="extrabold" alignSelf="center" letterSpacing="wide">
                    Update Your Password
                </Text>
                <Text fontSize="lg" alignSelf="center" opacity="0.8">
                    Please enter your details to update your password
                </Text>

                <form style={{ width: "100%" }}>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" children={<FaEnvelope color="gray.500" />} />
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                bg="white"
                                color="black"
                                borderRadius="full"
                                _placeholder={{ color: "gray.400" }}
                                focusBorderColor="pink.400"
                            />
                        </InputGroup>
                        <FormHelperText color="whiteAlpha.800">
                            We'll never share your email.
                        </FormHelperText>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Old Password</FormLabel>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" children={<FaLock color="gray.500" />} />
                            <Input
                                type="password"
                                placeholder="Enter your old password"
                                bg="white"
                                color="black"
                                borderRadius="full"
                                _placeholder={{ color: "gray.400" }}
                                focusBorderColor="pink.400"
                            />
                        </InputGroup>
                        <FormHelperText color="whiteAlpha.800">
                            <Link to="/forgot-password" style={{ color: "pink.200", fontWeight: "bold" }}>
                                Forgot Password?
                            </Link>
                        </FormHelperText>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>New Password</FormLabel>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" children={<FaLock color="gray.500" />} />
                            <Input
                                type="password"
                                placeholder="Create a new password"
                                bg="white"
                                color="black"
                                borderRadius="full"
                                _placeholder={{ color: "gray.400" }}
                                focusBorderColor="pink.400"
                            />
                        </InputGroup>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Confirm New Password</FormLabel>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" children={<FaLock color="gray.500" />} />
                            <Input
                                type="password"
                                placeholder="Confirm your new password"
                                bg="white"
                                color="black"
                                borderRadius="full"
                                _placeholder={{ color: "gray.400" }}
                                focusBorderColor="pink.400"
                            />
                        </InputGroup>
                    </FormControl>

                    <Button
                        mt={8}
                        colorScheme="pink"
                        type="submit"
                        w="full"
                        borderRadius="full"
                        size="lg"
                        boxShadow="xl"
                        _hover={{ bg: "pink.600", boxShadow: "2xl" }}
                    >
                        Update Password
                    </Button>
                </form>
            </VStack>
        </Box>
    );
};

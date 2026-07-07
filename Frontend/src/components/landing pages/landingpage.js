import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  IconButton,
  Flex,
  Grid,
  useColorMode,
  Image
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaRunning, FaBrain, FaHeartbeat, FaMedal, FaSun, FaMoon } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import soulflexLogo from '../img/soulflexlogo.png';

// Motion components
const MotionBox = motion(Box);
const MotionButton = motion(Button);

// Background bubble animation
const bubbleVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: (i) => ({
    opacity: 0.2,
    y: [-30, 30],
    x: [0, 10, -10, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 6 + i,
      },
      x: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 4 + i,
      },
    },
  }),
};

export const LandingPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/signin');
  };

  return (
    <Box
      minHeight="100vh"
      bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
      color={colorMode === 'light' ? 'black' : 'white'}
      p={8}
      overflow="hidden"
      position="relative"
    >
      {/* Background Bubbles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          borderRadius="50%"
          bg={
            colorMode === 'light'
              ? Math.random() > 0.5
                ? 'rgba(0, 0, 0, 0.15)' // Darker bubbles in light mode
                : 'rgba(255, 255, 255, 0.2)' // Lighter bubbles in light mode
              : 'rgba(100, 100, 100, 0.2)' // Lighter bubbles in dark mode
          }
          width={`${30 + i * 10}px`}
          height={`${30 + i * 10}px`}
          bottom={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          initial="hidden"
          animate="visible"
          custom={i}
          variants={bubbleVariants}
        />
      ))}

      {/* Header Section */}
      <MotionBox
        position="fixed"
        top={0}
        left={0}
        right={0}
        bg={colorMode === 'light' ? 'black' : 'gray.800'}
        color="white"
        p={4}
        boxShadow="lg"
        zIndex={999}
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5}}
      >
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Image
              src={soulflexLogo}// Update the path to your logo image
              alt="Soul Flex Logo"
              boxSize="65px" // Adjust the size as needed
              mr={4}
            />
            <Heading as="h1" size="lg" fontFamily="serif">
              Soul Flex
            </Heading>
          </Flex>
          <HStack spacing={8} alignItems="center">
            <IconButton
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              isRound
              size="md"
              onClick={toggleColorMode}
              aria-label="Toggle Dark Mode"
            />
          </HStack>
        </Flex>
      </MotionBox>

      {/* Padding for content below the header */}
      <Box pt="80px">
        {/* Introduction Section */}
        <MotionBox
          textAlign="center"
          mb={12}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Heading fontSize="4xl">Elevate Your Mental Game</Heading>
          <Text fontSize="lg" mt={4}>
            Unlock the potential of your mind with our sports psychology and mental training resources.
          </Text>
        </MotionBox>

        {/* Features Section */}
        <Grid
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap={6}
          justifyContent="center"
          alignItems="center"
          mb={16}
        >
          {[
            {
              icon: <FaRunning size="40px" />,
              title: 'Goal Setting',
              text: 'Set and achieve your sports goals with precision.',
            },
            {
              icon: <FaBrain size="40px" />,
              title: 'Visualization',
              text: 'Visualize success to improve performance outcomes.',
            },
            {
              icon: <FaHeartbeat size="40px" />,
              title: 'Stress Management',
              text: 'Learn techniques to manage stress effectively.',
            },
            {
              icon: <FaMedal size="40px" />,
              title: 'Mental Resilience',
              text: 'Build resilience to stay strong under pressure.',
            },
          ].map((feature, index) => (
            <MotionBox
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              textAlign="center"
              p={4}
              bg={colorMode === 'light' ? 'white' : 'gray.800'}
              borderRadius="lg"
              boxShadow="lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              // transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <Flex alignItems="center" justifyContent="center" h="80px" mb={4}>
                {feature.icon}
              </Flex>
              <Text fontWeight="bold" mt={4}>
                {feature.title}
              </Text>
              <Text mt={2}>{feature.text}</Text>
            </MotionBox>
          ))}
        </Grid>

        {/* Call to Action Section */}
        <VStack spacing={6} align="center">
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            textAlign="center"
            maxWidth="600px"
          >
            <Heading fontSize="2xl">Start Your Journey Today</Heading>
            <Text mt={4}>
              Join our community and access resources that will help you achieve peak performance and mental resilience.
            </Text>
          </MotionBox>

          <MotionButton
            bg="black"
            color="white"
            size="lg"
            whileHover={{ scale: 1.1 }}
            _hover={{ bg: 'gray.800' }}
            transition={{ duration: 0.3 }}
            onClick={handleGetStartedClick}
          >
            Get Started
          </MotionButton>
        </VStack>

        {/* Footer Section */}
        <MotionBox
          mt={12}
          textAlign="center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text>&copy; 2024 Soul Flex. All rights reserved.</Text>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default LandingPage;
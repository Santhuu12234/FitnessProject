import React from 'react';
import { Button, Box, Text, VStack, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MotionButton = motion(Button);

const ExercisePage = () => {
  const navigate = useNavigate();

  const handleMenSectionClick = () => {
    navigate('/query');
  };

  const handleWomenSectionClick = () => {
    navigate('/querywomen');
  };

  const handleYogaSectionClick = () => {
    navigate('/aasanas');
  };

  const handleSuryaSectionClick = () => {
    navigate('/suryanamaskaram');
  };


  const pageStyles = {
    background: 'gray.900',
    minHeight: '106vh',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const containerStyles = {
    width: '70%',
    boxShadow: 'xl',
    borderRadius: 'lg',
    overflow: 'hidden',
    bg: 'white',
  };

  const contentStyles = {
    width: '100%',
    padding: '20px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
  };

  const headerStyles = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: 'gray.800',
  };

  const subQuoteStyles = {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    marginBottom: '30px',
    textAlign: 'center',
    color: 'gray.600',
  };

  const buttonStyles = {
    backgroundColor: 'black',
    color: 'white',
    width: '200px',
    margin: '10px',
    _hover: {
      backgroundColor: '#2B6CB0',
    },
  };

  const footerStyles = {
    marginTop: '50px',
    width: '100%',
    padding: '20px',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    borderRadius: '8px',
  };

  const benefits = [
    'Improves cardiovascular health',
    'Builds muscle strength',
    'Enhances flexibility and mobility',
    'Boosts mental health and reduces stress',
    'Promotes better posture and balance',
    'Enhances brain function and memory',
  ];

  return (
    <Flex style={pageStyles}>
      <Flex style={containerStyles} as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition="0.5s ease-in-out">
        
        {/* Left Side - Men's Animation */}
        <Box 
          width="35%" 
          display="flex" 
          justifyContent="center" 
          alignItems="center"
          bg="white"
        >
          <Image 
            src="https://i.pinimg.com/originals/78/bc/2e/78bc2ed0dc65bc4c4670f513b5046ff5.gif" 
            alt="Men exercising"
            width={500}
            height={160}
          />
        </Box>

        {/* Main Content */}
        <Box style={contentStyles}>
          <header style={headerStyles}>Exercise Routine</header>
          <Text style={subQuoteStyles}>
            "The only bad workout is the one that didn’t happen."
          </Text>

          <VStack spacing={4}>
            <MotionButton 
              style={buttonStyles} 
              whileHover={{ scale: 1.05 }}
              onClick={handleMenSectionClick}
            >
              Men Section
            </MotionButton>

            <MotionButton
              style={buttonStyles}
              whileHover={{ scale: 1.05 }}
              onClick={handleWomenSectionClick}
            >
              Women Section
            </MotionButton>

            <MotionButton
              style={buttonStyles}
              whileHover={{ scale: 1.05 }}
              onClick={handleSuryaSectionClick}
            >
              Surya Namaskara
            </MotionButton>

            <MotionButton
              style={buttonStyles}
              whileHover={{ scale: 1.05 }}
              onClick={handleYogaSectionClick}
            >
              Remedies of Yoga
            </MotionButton>
          </VStack>

          <footer style={footerStyles}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>Benefits of Exercises</Text>
            {benefits.map((benefit, index) => (
              <Text key={index}>{benefit}</Text>
            ))}
          </footer>
        </Box>

        {/* Right Side - Women's Animation */}
        <Box 
          width="35%" 
          display="flex" 
          justifyContent="center" 
          alignItems="center"
          bg="white"
        >
          <Image
            src="https://i.pinimg.com/originals/24/ae/8d/24ae8def288851503cf68340df174963.gif" 
            alt="Women exercising"
            width={600}
            height={150}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ExercisePage;
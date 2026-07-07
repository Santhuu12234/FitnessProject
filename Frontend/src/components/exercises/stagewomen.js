import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const ExercisesStages = () => {
  const navigate = useNavigate();
  const tabBgColor = useColorModeValue("black", "black");
  const tabTextColor = useColorModeValue("white", "white");
  const borderColor = useColorModeValue("black", "black");

  return (
    <Flex
      direction="column"
      minHeight="100vh"
      bg="white"
      alignItems="center"
      justifyContent="center"
      p={4}
      overflow="auto"
    >
      <Box position="absolute" top="20px" left="20px">
        <Button
          onClick={() => navigate(-1)}
          bg="black"
          color="white"
          _hover={{ bg: "teal.600" }}
          borderRadius="md"
          boxShadow="md"
        >
          ← Back
        </Button>
      </Box>

      <Flex
        width="100%"
        maxWidth="1200px"
        direction="column"
        boxShadow="xl"
        borderRadius="lg"
        bg="white"
        p={6}
      >
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          color="gray.800"
          mb={6}
          fontFamily="serif"
          as={motion.div}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition="0.5s ease-in-out"
        >
          Women's Exercising Stage
        </Heading>

        <Text
          textAlign="center"
          color="gray.700"
          fontSize="lg"
          mb={6}
          fontWeight="medium"
        >
          What stage are you in?
        </Text>

        <Tabs variant="unstyled">
          <TabList
            mb="1em"
            display="flex"
            justifyContent="space-between"
            borderBottom="2px solid"
            borderBottomColor={borderColor}
          >
            <Tab
              p={4}
              borderRadius="md"
              bg={tabBgColor}
              color={"black"}
              borderBottom="4px solid"
              borderBottomColor={borderColor}
              _focus={{ boxShadow: "none" }}
              onClick={() => navigate("/womenbeg")}
            >
              <Menu>
                <MenuButton
                  as={Button}
                  variant="link"
                  color={tabTextColor}
                >
                  Beginner
                </MenuButton>
              </Menu>
            </Tab>
            <Tab
              p={4}
              borderRadius="md"
              bg={tabBgColor}
              color={"black"}
              borderBottom="4px solid"
              borderBottomColor={borderColor}
              _focus={{ boxShadow: "none" }}
              onClick={() => navigate("/womeninter")}
            >
              <Menu>
                <MenuButton
                  as={Button}
                  variant="link"
                  color={tabTextColor}
                >
                  Intermediate
                </MenuButton>
              </Menu>
            </Tab>
            <Tab
              p={4}
              borderRadius="md"
              bg={tabBgColor}
              color={"black"}
              borderBottom="4px solid"
              borderBottomColor={borderColor}
              _focus={{ boxShadow: "none" }}
              onClick={() => navigate("/womenadv")}
            >
              <Menu>
                <MenuButton
                  as={Button}
                  variant="link"
                  color={tabTextColor}
                >
                  Advanced
                </MenuButton>
              </Menu>
            </Tab>
          </TabList>

          <TabPanels>
            {/* Panels are empty as content is removed */}
          </TabPanels>
        </Tabs>

        <Box boxShadow="md" borderRadius="lg" bg="white" mt={6} p={6}>
          <Heading as="h2" size="lg" color="gray.700" mb={4}>
            Benefits of Consistency
          </Heading>
          <VStack spacing={4} align="stretch">
            <Text color="gray.600">
              <strong>1. Builds Momentum:</strong> Regular practice helps to build and maintain momentum, making it easier to stick to your routine.
            </Text>
            <Text color="gray.600">
              <strong>2. Enhances Progress:</strong> Consistent effort leads to steady improvement and noticeable gains over time.
            </Text>
            <Text color="gray.600">
              <strong>3. Creates a Habit:</strong> By exercising consistently, you develop a healthy habit that becomes part of your daily routine.
            </Text>
            <Text color="gray.600">
              <strong>4. Improves Discipline:</strong> Staying consistent in your exercise routine also builds discipline, which can be applied to other areas of your life.
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ExercisesStages;
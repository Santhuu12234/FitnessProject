import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Card,
  CardBody,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const MotionBox = motion(Box);

const GoalSetting = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [time, setTime] = useState('');

  const handleAddTask = async () => {
    if (newTask.trim() && time) {
      try {
        const response = await axios.post('http://localhost:9000/addTask', {
          email: 'chegondirithinsurya@gmail.com',  // Replace with the actual user email
          task: { task: newTask, time }
        });
  
        if (response.status === 200) {
          console.log('Task added successfully:', response.data);
          setTasks([...tasks, { task: newTask, time, done: false }]);
          setNewTask('');
          setTime('');
          alert('Task added successfully and reminder email scheduled.');
        } else {
          console.error('Failed to add task:', response);
          alert('Failed to add task. Please try again.');
        }
      } catch (error) {
        console.error('Error adding task:', error.response ? error.response.data : error.message);
        alert('An error occurred while adding the task.');
      }
    } else {
      alert('Please enter both task and time.');
    }
  };

  const handleToggleDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    // Remove the task at the specified index
    const updatedTasks = tasks.filter((_, i) => i !== index);
    
    // Update the state with the new tasks list
    setTasks(updatedTasks);
  
    // Show a success message
    alert('Task removed successfully');
  };
  


  return (
    <Flex
      direction="column"
      minHeight="100vh"
      bg="black"
      alignItems="center"
      justifyContent="center"
      p={4}
      overflow="auto"
    >
      <Flex
        width="100%"
        maxWidth="1200px"
        direction="column"
        boxShadow="xl"
        borderRadius="lg"
        overflow="auto"
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
          Goal Setting Strategies
        </Heading>

        <VStack spacing={6} align="stretch">
          {/* SMART Goals Section */}
          <Card boxShadow="md" borderRadius="lg" bg="white">
            <CardBody>
              <Heading as="h2" size="lg" color="gray.700" mb={4}>
                SMART Goals
              </Heading>
              <Text color="gray.600" mb={4}>
                The SMART criteria are a set of guidelines that help in setting clear and achievable goals. Here’s a breakdown:
              </Text>
              <Table variant="simple">
                <TableCaption>SMART Criteria</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Criteria</Th>
                    <Th>Description</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Specific</Td>
                    <Td>Clearly define what you want to achieve.</Td>
                  </Tr>
                  <Tr>
                    <Td>Measurable</Td>
                    <Td>Set criteria to measure your progress.</Td>
                  </Tr>
                  <Tr>
                    <Td>Achievable</Td>
                    <Td>Ensure that your goal is attainable.</Td>
                  </Tr>
                  <Tr>
                    <Td>Relevant</Td>
                    <Td>Make sure it aligns with your overall objectives.</Td>
                  </Tr>
                  <Tr>
                    <Td>Time-bound</Td>
                    <Td>Set a deadline for achieving your goal.</Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          {/* Visualization Techniques Section */}
          <Card boxShadow="md" borderRadius="lg" bg="white">
            <CardBody>
              <Heading as="h2" size="lg" color="gray.700" mb={4}>
                Visualization Techniques
              </Heading>
              <Text color="gray.600" mb={4}>
                Visualization techniques can help enhance performance by mentally rehearsing and picturing success. Here’s how to use visualization effectively:
              </Text>
              <VStack spacing={4} align="stretch">
                <Text color="gray.600">
                  <strong>1. Create a Clear Image:</strong> Picture yourself achieving your goal in as much detail as possible.
                </Text>
                <Text color="gray.600">
                  <strong>2. Practice Regularly:</strong> Spend a few minutes each day visualizing your success to keep motivation high.
                </Text>
                <Text color="gray.600">
                  <strong>3. Use All Senses:</strong> Engage all your senses in the visualization process to make it more vivid and impactful.
                </Text>
              </VStack>
            </CardBody>
          </Card>

          {/* Tracking Progress Section */}
          <Card boxShadow="md" borderRadius="lg" bg="white">
            <CardBody>
              <Heading as="h2" size="lg" color="gray.700" mb={4}>
                Tracking Progress
              </Heading>
              <Text color="gray.600" mb={4}>
                Tracking your progress is essential to ensure you are on the right path to achieving your goals. Here’s a method to track progress effectively:
              </Text>
              <Table variant="simple">
                <TableCaption>Progress Tracking Metrics</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Metric</Th>
                    <Th>Description</Th>
                    <Th>Example</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Performance</Td>
                    <Td>Measure how well you are performing related to your goal.</Td>
                    <Td>Completion rates, skill levels</Td>
                  </Tr>
                  <Tr>
                    <Td>Consistency</Td>
                    <Td>Track how regularly you are working towards your goal.</Td>
                    <Td>Number of practice sessions per week</Td>
                  </Tr>
                  <Tr>
                    <Td>Feedback</Td>
                    <Td>Collect feedback to adjust your strategies.</Td>
                    <Td>Coach’s comments, self-reflection</Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          {/* Overcoming Setbacks Section */}
          <Card boxShadow="md" borderRadius="lg" bg="white">
            <CardBody>
              <Heading as="h2" size="lg" color="gray.700" mb={4}>
                Overcoming Setbacks
              </Heading>
              <Text color="gray.600" mb={4}>
                Setbacks are a natural part of the journey towards achieving your goals. Here are some tips to overcome them:
              </Text>
              <VStack spacing={4} align="stretch">
                <Text color="gray.600">
                  <strong>1. Reframe the Setback:</strong> View the setback as a learning opportunity and a chance to grow.
                </Text>
                <Text color="gray.600">
                  <strong>2. Stay Positive:</strong> Focus on the positive aspects of the situation and remind yourself of past successes.
                </Text>
                <Text color="gray.600">
                  <strong>3. Seek Support:</strong> Reach out to coaches, mentors, or peers for guidance and encouragement.
                </Text>
              </VStack>
            </CardBody>
          </Card>

          {/* Task List Section */}
          <Card boxShadow="md" borderRadius="lg" bg="white">
            <CardBody>
              <Heading as="h2" size="lg" color="gray.700" mb={4}>
                Task List
              </Heading>
              <Text color="gray.600" mb={4}>
                Keep track of your tasks and deadlines here. Add new tasks using the form below.
              </Text>
              <VStack spacing={4} align="stretch">
                <HStack spacing={4}>
                  <Input
                    placeholder="Enter task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                  />
                  <Input
                    placeholder="Time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                  <Button
                    colorScheme="teal"
                    onClick={handleAddTask}
                  >
                    Add Task
                  </Button>
                </HStack>
                <VStack spacing={4} align="stretch">
                  {tasks.map((task, index) => (
                    <HStack
                      key={index}
                      spacing={4}
                      justify="space-between"
                      w="100%"
                      bg={task.done ? "green.100" : "red.100"}
                      p={2}
                      borderRadius="md"
                      boxShadow="md"
                    >
                      <Text
                        textDecoration={task.done ? "line-through" : "none"}
                      >
                        {task.task} - {task.time}
                      </Text>
                      <HStack>
                        <Button
                          colorScheme="green"
                          onClick={() => handleToggleDone(index)}
                        >
                          {task.done ? "Undo" : "Done"}
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => handleDeleteTask(index)}
                        >
                          Delete
                          </Button>
                          </HStack>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            </VStack>
          </Flex>
        </Flex>
      );
    };

    export default GoalSetting;

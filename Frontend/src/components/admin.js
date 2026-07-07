import React, { useState, useEffect } from 'react';
import {
    Box,
    Flex,
    Button,
    Heading,
    Text,
    VStack,
    HStack,
    Grid,
    GridItem,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Card,
    CardBody,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Input,
    InputGroup,
    InputLeftElement,
    useToast,
    IconButton,
    Badge,
    Divider,
    Spacer
} from '@chakra-ui/react';
import { DeleteIcon, SearchIcon, ArrowBackIcon, LockIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { api } from './actions/api';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [userSearch, setUserSearch] = useState('');
    const [taskSearch, setTaskSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const toast = useToast();
    const navigate = useNavigate();

    // Security Session Guard
    useEffect(() => {
        if (localStorage.getItem("isAdmin") !== "true") {
            toast({
                title: "Unauthorized Access",
                description: "You must be authenticated as an administrator.",
                status: "error",
                duration: 3500,
                isClosable: true,
            });
            navigate("/adminlogin");
        } else {
            fetchDatabaseInfo();
        }
    }, [navigate]);

    const fetchDatabaseInfo = async () => {
        setLoading(true);
        try {
            // Fetch users listed in ast collection (POST compatible)
            const usersRes = await axios.post(`${api}/ast`);
            setUsers(usersRes.data || []);

            // Fetch tasks listed in tasks collection
            const tasksRes = await axios.get(`${api}/admin/tasks`);
            setTasks(tasksRes.data || []);
        } catch (error) {
            console.error('Error fetching database information:', error);
            toast({
                title: "Data Sync Failure",
                description: "Could not load administrative database metrics.",
                status: "error",
                duration: 4000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteUser = async (email) => {
        if (window.confirm(`Are you sure you want to delete user ${email} and all their tasks?`)) {
            try {
                await axios.delete(`${api}/admin/users/${email}`);
                toast({
                    title: "User Removed",
                    description: `Account associated with ${email} has been deleted.`,
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                fetchDatabaseInfo();
            } catch (error) {
                console.error("Delete user error:", error);
                toast({
                    title: "Action Failed",
                    description: "Error occurred while attempting to delete user.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        }
    };

    const handleDeleteTask = async (taskId) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            try {
                await axios.delete(`${api}/admin/tasks/${taskId}`);
                toast({
                    title: "Goal Deleted",
                    description: "The user goal was successfully removed from the scheduler.",
                    status: "info",
                    duration: 3000,
                    isClosable: true,
                });
                fetchDatabaseInfo();
            } catch (error) {
                console.error("Delete task error:", error);
                toast({
                    title: "Action Failed",
                    description: "Error occurred while deleting request.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        toast({
            title: "Logged Out",
            description: "Session closed successfully.",
            status: "success",
            duration: 2000,
            isClosable: true,
        });
        navigate("/adminlogin");
    };

    // Filters
    const filteredUsers = users.filter(user =>
        (user.name?.toLowerCase() || '').includes(userSearch.toLowerCase()) ||
        (user.email?.toLowerCase() || '').includes(userSearch.toLowerCase()) ||
        (user.mobile?.toLowerCase() || '').includes(userSearch.toLowerCase())
    );

    const filteredTasks = tasks.filter(task =>
        (task.email?.toLowerCase() || '').includes(taskSearch.toLowerCase()) ||
        (task.task?.toLowerCase() || '').includes(taskSearch.toLowerCase())
    );

    return (
        <Box p={6} bg="gray.50" minHeight="100vh">
            {/* Header Area */}
            <Flex pb={5} mb={6} borderBottom="1px solid" borderColor="gray.200" alignItems="center" flexWrap="wrap" gap={4}>
                <VStack align="stretch" spacing={1}>
                    <Heading as="h1" size="lg" color="gray.800" fontFamily="serif">
                        Fitness Admin Console
                    </Heading>
                    <Text color="gray.500" fontSize="sm">
                        Enterprise DB Overview & Action Command Center
                    </Text>
                </VStack>

                <Spacer />

                <HStack spacing={3}>
                    <Button
                        leftIcon={<ArrowBackIcon />}
                        variant="outline"
                        colorScheme="teal"
                        onClick={() => navigate("/mainpage")}
                        size="sm"
                    >
                        Go to Main Application
                    </Button>
                    <Button
                        leftIcon={<LockIcon />}
                        colorScheme="red"
                        onClick={handleLogout}
                        size="sm"
                    >
                        Force Exit (Logout)
                    </Button>
                </HStack>
            </Flex>

            {/* Quick Metrics */}
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6} mb={8}>
                <GridItem>
                    <Card borderLeft="4px solid" borderColor="teal.400" boxShadow="md" borderRadius="lg" bg="white">
                        <CardBody p={5}>
                            <Stat>
                                <StatLabel color="gray.500" fontWeight="semibold">REGISTERED ACCOUNTS</StatLabel>
                                <StatNumber fontSize="3xl" color="gray.800">{users.length}</StatNumber>
                                <StatHelpText>Active users inside 'ast' collection</StatHelpText>
                            </Stat>
                        </CardBody>
                    </Card>
                </GridItem>

                <GridItem>
                    <Card borderLeft="4px solid" borderColor="purple.500" boxShadow="md" borderRadius="lg" bg="white">
                        <CardBody p={5}>
                            <Stat>
                                <StatLabel color="gray.500" fontWeight="semibold">ACTIVE GOALS / TASKS</StatLabel>
                                <StatNumber fontSize="3xl" color="gray.800">{tasks.length}</StatNumber>
                                <StatHelpText>Scheduled emails in 'tasks' collection</StatHelpText>
                            </Stat>
                        </CardBody>
                    </Card>
                </GridItem>

                <GridItem>
                    <Card borderLeft="4px solid" borderColor="orange.400" boxShadow="md" borderRadius="lg" bg="white">
                        <CardBody p={5}>
                            <Stat>
                                <StatLabel color="gray.500" fontWeight="semibold">MAILING DAEMONS</StatLabel>
                                <StatNumber fontSize="3xl" color="gray.800">
                                    <Badge colorScheme="green" fontSize="md" px={3} py={1} borderRadius="full">Active (SMTP)</Badge>
                                </StatNumber>
                                <StatHelpText>Task scheduling active via node-cron</StatHelpText>
                            </Stat>
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>

            {/* Data Management Center */}
            <Card boxShadow="lg" borderRadius="xl" bg="white" overflow="hidden">
                <CardBody p={0}>
                    <Tabs colorScheme="teal" isLazy>
                        <TabList bg="gray.100" px={4} pt={2}>
                            <Tab fontWeight="bold" py={3}>👥 User Accounts ({users.length})</Tab>
                            <Tab fontWeight="bold" py={3}>📋 Scheduled Tasks ({tasks.length})</Tab>
                        </TabList>

                        <TabPanels p={6}>
                            {/* User Tab */}
                            <TabPanel>
                                <VStack spacing={4} align="stretch">
                                    <InputGroup maxW="400px" size="md">
                                        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
                                        <Input
                                            placeholder="Search name, email, or mobile..."
                                            value={userSearch}
                                            onChange={(e) => setUserSearch(e.target.value)}
                                            bg="white"
                                            borderRadius="lg"
                                        />
                                    </InputGroup>

                                    <Divider />

                                    {loading ? (
                                        <Text py={10} textAlign="center" color="gray.500">Querying database engine...</Text>
                                    ) : filteredUsers.length === 0 ? (
                                        <Text py={10} textAlign="center" color="gray.500">No users matched search parameters.</Text>
                                    ) : (
                                        <Box overflowX="auto" borderRadius="lg" border="1px solid" borderColor="gray.100">
                                            <Table variant="simple" colorScheme="gray">
                                                <Thead bg="gray.50">
                                                    <Tr>
                                                        <Th>Name</Th>
                                                        <Th>Email</Th>
                                                        <Th>Mobile Number</Th>
                                                        <Th>Plaintext Password (Dev Only)</Th>
                                                        <Th textAlign="center">Actions</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    {filteredUsers.map((user, idx) => (
                                                        <Tr key={user.email || idx} _hover={{ bg: "gray.50" }}>
                                                            <Td fontWeight="medium" color="gray.900">{user.name || "N/A"}</Td>
                                                            <Td color="teal.600" fontWeight="semibold">{user.email || "N/A"}</Td>
                                                            <Td color="gray.600">{user.mobile || "N/A"}</Td>
                                                            <Td fontFamily="monospace" fontSize="sm">{user.password || "N/A"}</Td>
                                                            <Td textAlign="center">
                                                                <IconButton
                                                                    aria-label="Delete user"
                                                                    icon={<DeleteIcon />}
                                                                    colorScheme="red"
                                                                    size="sm"
                                                                    variant="ghost"
                                                                    onClick={() => handleDeleteUser(user.email)}
                                                                />
                                                            </Td>
                                                        </Tr>
                                                    ))}
                                                </Tbody>
                                            </Table>
                                        </Box>
                                    )}
                                </VStack>
                            </TabPanel>

                            {/* Tasks Tab */}
                            <TabPanel>
                                <VStack spacing={4} align="stretch">
                                    <InputGroup maxW="400px" size="md">
                                        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
                                        <Input
                                            placeholder="Search email or task details..."
                                            value={taskSearch}
                                            onChange={(e) => setTaskSearch(e.target.value)}
                                            bg="white"
                                            borderRadius="lg"
                                        />
                                    </InputGroup>

                                    <Divider />

                                    {loading ? (
                                        <Text py={10} textAlign="center" color="gray.500">Querying task engine...</Text>
                                    ) : filteredTasks.length === 0 ? (
                                        <Text py={10} textAlign="center" color="gray.500">No active goals or reminder daemons matched.</Text>
                                    ) : (
                                        <Box overflowX="auto" borderRadius="lg" border="1px solid" borderColor="gray.100">
                                            <Table variant="simple" colorScheme="gray">
                                                <Thead bg="gray.50">
                                                    <Tr>
                                                        <Th>User Email</Th>
                                                        <Th>Task / Objective</Th>
                                                        <Th>Scheduled Time</Th>
                                                        <Th>Identifier Reference</Th>
                                                        <Th textAlign="center">Actions</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    {filteredTasks.map((task, idx) => (
                                                        <Tr key={task._id || idx} _hover={{ bg: "gray.50" }}>
                                                            <Td fontWeight="semibold" color="teal.600">{task.email || "N/A"}</Td>
                                                            <Td color="gray.800" fontWeight="medium">{task.task || "N/A"}</Td>
                                                            <Td color="purple.600" fontWeight="bold">{task.time || "N/A"}</Td>
                                                            <Td fontSize="xs" color="gray.400" fontFamily="monospace">{task._id || "N/A"}</Td>
                                                            <Td textAlign="center">
                                                                <IconButton
                                                                    aria-label="Delete task"
                                                                    icon={<DeleteIcon />}
                                                                    colorScheme="red"
                                                                    size="sm"
                                                                    variant="ghost"
                                                                    onClick={() => handleDeleteTask(task._id)}
                                                                />
                                                            </Td>
                                                        </Tr>
                                                    ))}
                                                </Tbody>
                                            </Table>
                                        </Box>
                                    )}
                                </VStack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </CardBody>
            </Card>
        </Box>
    );
};

export default AdminDashboard;

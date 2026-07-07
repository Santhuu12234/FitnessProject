import React, { useState, useEffect } from 'react';
import { Button, Input, Box, Text, VStack, Grid, Image, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [newContent, setNewContent] = useState({ name: '', sport: '', image: '', url: '', description: '', category: '' });
    const [contentList, setContentList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/content')
            .then(response => setContentList(response.data))
            .catch(error => console.error('Error fetching content:', error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewContent({ ...newContent, [name]: value });
    };

    const handlePost = () => {
        axios.post('/api/content', newContent)
            .then(response => {
                setContentList([...contentList, response.data]);
                setNewContent({ name: '', sport: '', image: '', url: '', description: '', category: '' });
            })
            .catch(error => console.error('Error posting content:', error));
    };

    const handleDelete = (id) => {
        axios.delete(`/api/content/${id}`)
            .then(() => setContentList(contentList.filter(content => content.id !== id)))
            .catch(error => console.error('Error deleting content:', error));
    };

    const handleGoToMainPage = () => {
        navigate('/mainpage');
    };

    return (
        <Box p={4}>
            <VStack spacing={4}>
                <Input name="name" placeholder="Name" value={newContent.name} onChange={handleChange} />
                <Input name="sport" placeholder="Sport" value={newContent.sport} onChange={handleChange} />
                <Input name="image" placeholder="Image URL" value={newContent.image} onChange={handleChange} />
                <Input name="url" placeholder="URL" value={newContent.url} onChange={handleChange} />
                <Input name="description" placeholder="Description" value={newContent.description} onChange={handleChange} />
                <Input name="category" placeholder="Category (e.g., Articles, Exercises)" value={newContent.category} onChange={handleChange} />
                <Button onClick={handlePost} colorScheme="teal">Post Content</Button>
                <Button onClick={handleGoToMainPage} colorScheme="blue">Go to Main Page</Button>
            </VStack>
            <Box mt={4}>
                <Text fontSize="lg" mb={2}>Manage Content:</Text>
                <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
                    {contentList.map(content => (
                        <Box key={content.id} borderWidth="1px" borderRadius="md" p={4}>
                            <Image src={content.image} alt={content.name} borderRadius="md" mb={2} />
                            <Text fontWeight="bold">{content.name}</Text>
                            <Text>{content.sport}</Text>
                            <Text mb={2}>{content.description}</Text>
                            <IconButton
                                icon={<DeleteIcon />}
                                onClick={() => handleDelete(content.id)}
                                colorScheme="red"
                                aria-label="Delete Content"
                            />
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default AdminDashboard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const DisplayData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:9000/ast');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>User Data</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Mobile: {user.mobile}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayData;

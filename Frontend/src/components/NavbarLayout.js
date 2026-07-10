import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Box } from '@chakra-ui/react';

const NavbarLayout = () => {
  return (
    <Box minHeight="100vh">
      <Navbar />
      <Box pt={{ base: "60px", md: "85px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default NavbarLayout;

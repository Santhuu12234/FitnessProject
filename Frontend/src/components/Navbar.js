import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  IconButton,
  HStack,
  VStack,
  useColorMode,
  useDisclosure,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Collapse
} from '@chakra-ui/react';
import { FaMoon, FaSun, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from './img/soulflexlogo.png';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen: isMobileNavOpen, onToggle: onMobileNavToggle } = useDisclosure();

  const handleLinkClick = (path, hash) => {
    if (location.pathname === path) {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(path + (hash ? `#${hash}` : ''));
    }
    if (isMobileNavOpen) {
      onMobileNavToggle();
    }
  };

  const activeLinkStyles = {
    color: "teal.300",
    borderBottom: "2px solid",
    borderColor: "teal.300",
  };

  const isLanding = location.pathname === '/landing';

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg={colorMode === "light" ? "black" : "gray.850"}
      color="white"
      p={{ base: 2, md: 4 }}
      boxShadow="lg"
      zIndex={999}
    >
      <Flex width="100%" justifyContent="space-between" alignItems="center" px={{ base: 2, md: 6 }}>
        {/* Logo and Title */}
        <Flex
          alignItems="center"
          cursor="pointer"
          onClick={() => navigate(isAuthenticated ? '/mainpage' : '/landing')}
        >
          <Image
            src={logo}
            alt="Soul Flex Logo"
            boxSize={{ base: "40px", md: "50px" }}
            mr={{ base: 2, md: 3 }}
          />
          <Heading as="h1" fontSize={{ base: "md", md: "xl" }} fontFamily="serif" letterSpacing="wider">
            Soul Flex
          </Heading>
        </Flex>

        {/* Desktop Navigation */}
        <HStack spacing={6} alignItems="center">
          {isAuthenticated && (
            <HStack spacing={6} display={{ base: "none", md: "flex" }} mr={4}>
              <Link
                fontSize="md"
                fontWeight="semibold"
                onClick={() => handleLinkClick('/mainpage')}
                style={location.pathname === '/mainpage' && !location.hash ? activeLinkStyles : {}}
                _hover={{ color: "teal.300", textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                fontSize="md"
                fontWeight="semibold"
                onClick={() => handleLinkClick('/mainpage', 'features')}
                style={location.hash === '#features' ? activeLinkStyles : {}}
                _hover={{ color: "teal.300", textDecoration: "none" }}
              >
                Features
              </Link>
              <Link
                fontSize="md"
                fontWeight="semibold"
                onClick={() => handleLinkClick('/mainpage', 'about-us')}
                style={location.hash === '#about-us' ? activeLinkStyles : {}}
                _hover={{ color: "teal.300", textDecoration: "none" }}
              >
                About Us
              </Link>
            </HStack>
          )}

          {/* Right Section Tools */}
          <HStack spacing={3}>
            <IconButton
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              isRound
              size={{ base: "sm", md: "md" }}
              onClick={toggleColorMode}
              aria-label="Toggle Dark Mode"
              bg={colorMode === "light" ? "gray.800" : "gray.700"}
              color="white"
              _hover={{
                bg: colorMode === "light" ? "gray.750" : "gray.600",
              }}
            />

            {isAuthenticated ? (
              <>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<FaUser />}
                    isRound
                    size={{ base: "sm", md: "md" }}
                    bg="teal.500"
                    color="white"
                    _hover={{ bg: "teal.600" }}
                    aria-label="Profile"
                  />
                  <MenuList
                    bg={colorMode === "light" ? "white" : "gray.800"}
                    color={colorMode === "light" ? "gray.800" : "white"}
                    borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
                  >
                    <Flex alignItems="center" px={4} py={3} borderBottomWidth="1px" borderColor={colorMode === "light" ? "gray.100" : "gray.700"}>
                      <Box bg="teal.500" p={2} borderRadius="full" mr={3} color="white">
                        <FaUser size={16} />
                      </Box>
                      <Box>
                        <Text fontWeight="bold" fontSize="sm">
                          {user?.name || "User"}
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                          {user?.email || ""}
                        </Text>
                      </Box>
                    </Flex>
                    <MenuItem
                      onClick={() => navigate('/mainpage')}
                      _hover={{ bg: colorMode === "light" ? "gray.100" : "gray.700" }}
                      bg="transparent"
                    >
                      Dashboard
                    </MenuItem>
                    <MenuItem
                      onClick={logout}
                      color="red.500"
                      _hover={{ bg: colorMode === "light" ? "gray.100" : "gray.700" }}
                      bg="transparent"
                    >
                      Log Out
                    </MenuItem>
                  </MenuList>
                </Menu>

                {/* Mobile Menu Icon */}
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  icon={isMobileNavOpen ? <FaTimes /> : <FaBars />}
                  size="sm"
                  onClick={onMobileNavToggle}
                  aria-label="Toggle Navigation"
                  variant="ghost"
                  color="white"
                  _hover={{ bg: "whiteAlpha.200" }}
                />
              </>
            ) : (
              !isLanding && (
                <Link
                  onClick={() => navigate('/landing')}
                  fontSize="sm"
                  fontWeight="bold"
                  color="teal.300"
                  _hover={{ color: "teal.400" }}
                >
                  Back to Landing
                </Link>
              )
            )}
          </HStack>
        </HStack>
      </Flex>

      {/* Mobile Navigation Dropdown */}
      {isAuthenticated && (
        <Collapse in={isMobileNavOpen} animateOpacity>
          <VStack
            display={{ base: "flex", md: "none" }}
            spacing={3}
            pt={4}
            pb={2}
            align="stretch"
            px={4}
            borderTopWidth="1px"
            borderColor="whiteAlpha.200"
            mt={2}
          >
            <Link
              fontSize="md"
              fontWeight="semibold"
              onClick={() => handleLinkClick('/mainpage')}
              color={location.pathname === '/mainpage' && !location.hash ? "teal.300" : "white"}
              py={1}
            >
              Home
            </Link>
            <Link
              fontSize="md"
              fontWeight="semibold"
              onClick={() => handleLinkClick('/mainpage', 'features')}
              color={location.hash === '#features' ? "teal.300" : "white"}
              py={1}
            >
              Features
            </Link>
            <Link
              fontSize="md"
              fontWeight="semibold"
              onClick={() => handleLinkClick('/mainpage', 'about-us')}
              color={location.hash === '#about-us' ? "teal.300" : "white"}
              py={1}
            >
              About Us
            </Link>
          </VStack>
        </Collapse>
      )}
    </Box>
  );
};

export default Navbar;

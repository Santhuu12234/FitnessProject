import React, { useState, useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Grid,
  GridItem,
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
  Center,
  Icon,
  Collapse
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  FaPlay,
  FaFileAlt,
  FaSun,
  FaMoon,
  FaUser,
  FaFire,
  FaHeart,
  FaBullseye,
  FaBrain,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import soullogo from '../img/soulflexlogo.png';
import { FaCode, FaLaptopCode } from "react-icons/fa";

const MotionButton = motion(Button);
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const bubbleVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: (i) => ({
    opacity: 0.2,
    y: [-30, 30],
    x: [0, 10, -10, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 6 + i,
      },
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4 + i,
      },
    },
  }),
};


const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1 } 
  },
};


const activeLinkStyles = {
  color: "teal.500",
  textDecoration: "underline",
};



export const MainPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isOpen: isMobileNavOpen, onToggle: onMobileNavToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { user, logout } = useAuth();
  const aboutUsRef = useRef(null);
  const featuresRef = useRef(null);

  const handleLinkClick = (path) => {
    if (path === "/") {
      setCurrentPage(path);
    }
  };

  const handleScrollToAboutUs = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <Box
      minHeight="100vh"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      p={8}
      position="relative"
      overflow="hidden"
    >
      {/* Background Bubbles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          borderRadius="50%"
          bg={
            colorMode === "light"
              ? Math.random() > 0.5
                ? "rgba(0, 0, 0, 0.15)" // Darker bubbles in light mode
                : "rgba(255, 255, 255, 0.2)" // Lighter bubbles in light mode
              : "rgba(100, 100, 100, 0.2)"
          } // Lighter bubbles in dark mode
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
  bg={colorMode === "light" ? "black" : "gray.800"}
  color="white"
  p={{ base: 2, md: 4 }}
  boxShadow="lg"
  zIndex={999}
  initial={{ y: -60 }}
  animate={{ y: 0 }}
  transition={{ duration: 1 }}
>
  <Flex width="100%" justifyContent="space-between" alignItems="center">
    <Heading 
      as="h3" 
      fontSize={{ base: "13px", sm: "16px", md: "20px" }} 
      fontFamily="serif" 
      isTruncated 
      maxW={{ base: "55%", sm: "65%", md: "100%" }}
      pr={2}
    >
      Hello User..!Glad you find us 😊
    </Heading>

    {/* Desktop Navigation */}
    <HStack spacing={8} alignItems="center" display={{ base: "none", md: "flex" }}>
      <Link
        fontSize="lg"
        fontWeight="bold"
        color={currentPage === "/" ? "teal.500" : "white"}
        _hover={{ color: "teal.300" }}
        _activeLink={activeLinkStyles}
        onClick={() => window.location.reload()}
      >
        Home
      </Link>
      <Link
        onClick={handleScrollToFeatures}
        fontSize="lg"
        fontWeight="bold"
        color={location.pathname === "/features" ? "teal.500" : "white"}
        _hover={{ color: "teal.300" }}
        _activeLink={activeLinkStyles}
      >
        Features
      </Link>
      <Link
        onClick={handleScrollToAboutUs}
        fontSize="lg"
        fontWeight="bold"
        color={location.pathname === "/about-us" ? "teal.500" : "white"}
        _hover={{ color: "teal.300" }}
      >
        About Us
      </Link>
      <IconButton
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        isRound
        size="md"
        onClick={toggleColorMode}
        aria-label="Toggle Dark Mode"
        bg={colorMode === "light" ? "gray.200" : "gray.700"}
        color={colorMode === "light" ? "black" : "white.300"}
        _hover={{
          bg: colorMode === "light" ? "gray.300" : "gray.600",
        }}
        _active={{
          bg: colorMode === "light" ? "gray.400" : "gray.100",
        }}
      />
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FaUser />}
          isRound
          size="md"
          color={colorMode === "dark" ? "black.500" : "blackAlpha.900"}
          aria-label="Profile"
          onClick={handleMenuToggle}
        />
        <MenuList
          bg={colorMode === "light" ? "white" : "gray.700"}
          color={colorMode === "light" ? "gray.800" : "white"}
          border="none"
        >
          <Flex alignItems="center" p={4}>
            <FaUser size={24} />
            <Text ml={3} fontWeight="bold">
              {user?.name || "User"}
            </Text>
          </Flex>

          <MenuItem
            _hover={{ bg: "gray.300" }}
            bg={colorMode === "light" ? "white" : "gray.700"}
            onClick={logout}
          >
            Log Out
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>

    {/* Mobile Hamburger + Icons */}
    <HStack spacing={2} display={{ base: "flex", md: "none" }}>
      <IconButton
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        isRound
        size="sm"
        onClick={toggleColorMode}
        aria-label="Toggle Dark Mode"
        bg={colorMode === "light" ? "gray.200" : "gray.700"}
        color={colorMode === "light" ? "black" : "white.300"}
      />
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FaUser />}
          isRound
          size="sm"
          color={colorMode === "dark" ? "black.500" : "blackAlpha.900"}
          aria-label="Profile"
        />
        <MenuList
          bg={colorMode === "light" ? "white" : "gray.700"}
          color={colorMode === "light" ? "gray.800" : "white"}
          border="none"
        >
          <Flex alignItems="center" p={4}>
            <FaUser size={24} />
            <Text ml={3} fontWeight="bold">
              {user?.name || "User"}
            </Text>
          </Flex>

          <MenuItem
            _hover={{ bg: "gray.300" }}
            bg={colorMode === "light" ? "white" : "gray.700"}
            onClick={logout}
          >
            Log Out
          </MenuItem>
        </MenuList>
      </Menu>
      <IconButton
        icon={isMobileNavOpen ? <FaTimes /> : <FaBars />}
        size="sm"
        onClick={onMobileNavToggle}
        aria-label="Toggle Navigation"
        variant="ghost"
        color="white"
        _hover={{ bg: "whiteAlpha.200" }}
      />
    </HStack>
  </Flex>

  {/* Mobile Nav Dropdown */}
  <Collapse in={isMobileNavOpen} animateOpacity>
    <VStack
      display={{ base: "flex", md: "none" }}
      spacing={3}
      pt={4}
      pb={2}
      align="stretch"
    >
      <Link
        fontSize="md"
        fontWeight="bold"
        color={currentPage === "/" ? "teal.300" : "white"}
        _hover={{ color: "teal.300" }}
        onClick={() => { window.location.reload(); onMobileNavToggle(); }}
        px={2}
        py={1}
      >
        Home
      </Link>
      <Link
        onClick={() => { handleScrollToFeatures(); onMobileNavToggle(); }}
        fontSize="md"
        fontWeight="bold"
        color="white"
        _hover={{ color: "teal.300" }}
        px={2}
        py={1}
      >
        Features
      </Link>
      <Link
        onClick={() => { handleScrollToAboutUs(); onMobileNavToggle(); }}
        fontSize="md"
        fontWeight="bold"
        color="white"
        _hover={{ color: "teal.300" }}
        px={2}
        py={1}
      >
        About Us
      </Link>
    </VStack>
  </Collapse>
</MotionBox>


         {/* Soul Flex Section */}
         <Box
        width="100%"
        textAlign="center"
        mt={{ base: "80px", md: "125px" }} // Adjust based on the header height
        mb={2}
        bg={colorMode === "light" ? "transparent.50" : "transparent.900"}
        p={2}
        borderRadius="md"
        boxShadow="md"
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          mb={2}
        >
          <MotionImage
            src={soullogo}
            alt="Soul Flex Logo"
            boxSize="200px"
            objectFit="cover"
            borderRadius="md"
            mb={2}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          />
          <Heading size="lg" mb={2} color={colorMode === "light" ? "black.800" : "black.200"}>
            Soul Flex
          </Heading>
          <Text
            fontSize="lg"
            color={colorMode === "light" ? "black.600" : "black.400"}
          >
            Empowering your mental strength with advanced techniques and tools.
          </Text>
        </Flex>
      </Box>



      {/* Padding for content below the header */}
      <Box pt="80px">
        {" "}
        {/* Adjust this value based on header height */}
        {/* Introduction Section */}
        <MotionBox
          width="100%"
          textAlign="center"
          my={8}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition="0.5s ease-in-out"
        >
          <Heading
            as="h2"
            size="xl"
            mb={4}
            color={colorMode === "light" ? "gray.800" : "white"}
            fontFamily="serif"
          >
            Elevate Your Mental Game
          </Heading>
          <Text
            fontSize="lg"
            color={colorMode === "light" ? "gray.600" : "gray.300"}
          >
            Discover the best tools and resources to boost your mental
            performance in sports.
          </Text>
        </MotionBox>
        {/* Features Section */}
        <MotionBox
          ref={featuresRef}
          width="100%"
          textAlign="center"
          my={8}
          initial={{ y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1 }}
          transition="0.5s ease-in-out"
          >
        <Heading
            as="h2"
            size="xl"
            mb={4}
            color={colorMode === "light" ? "gray.800" : "white"}
            fontFamily="serif"
          >
            Features
          </Heading>
          </MotionBox>
          
        {/* Resources Section */}
        <Grid
  templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
  gap={6}
  width="100%"
  my={8}
>
  {/* Articles Section */}
  <GridItem>
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      as={motion.div}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition="0.5s ease-in-out"
      height="100%" // Ensure uniform height
    >
      <Flex alignItems="center" mb={4}>
        <IconButton
          icon={<FaFileAlt />}
          isRound
          size="lg"
          mr={4}
          colorScheme="blackAlpha"
        />
        <Heading
          as="h3"
          size="md"
          color={colorMode === "light" ? "gray.800" : "white"}
        >
          Articles
        </Heading>
      </Flex>
      <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
        In-depth articles on topics like goal setting, stress management, and more.
      </Text>
      <MotionButton
        as={RouterLink}
        to="/articles"
        color={colorMode === "light" ? "black.500" : "teal.300"}
        mt={4}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Articles
      </MotionButton>
    </Box>
  </GridItem>

  {/* Videos Section */}
  <GridItem>
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      as={motion.div}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition="0.5s ease-in-out"
      height="100%"
    >
      <Flex alignItems="center" mb={4}>
        <IconButton
          icon={<FaPlay />}
          isRound
          size="lg"
          mr={4}
          colorScheme="blackAlpha"
        />
        <Heading
          as="h3"
          size="md"
          color={colorMode === "light" ? "gray.800" : "white"}
        >
          Videos
        </Heading>
      </Flex>
      <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
        Watch videos with expert tips and techniques for improving your mental game.
      </Text>
      <MotionButton
        as={RouterLink}
        to="/video"
        color={colorMode === "light" ? "black.500" : "teal.300"}
        mt={4 }
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Watch Videos
      </MotionButton>
    </Box>
  </GridItem>

  {/* Exercises Section */}
  <GridItem>
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      as={motion.div}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition="0.5s ease-in-out"
      height="100%"
    >
      <Flex alignItems="center" mb={4}>
        <IconButton
          icon={<FaFire />}
          isRound
          size="lg"
          mr={4}
          colorScheme="blackAlpha"
        />
        <Heading
          as="h3"
          size="md"
          color={colorMode === "light" ? "gray.800" : "white"}
        >
          Yoga & Exercises
        </Heading>
      </Flex>
      <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
        Practice exercises designed to build mental strength and resilience.
      </Text>
      <MotionButton
        as={RouterLink}
        to="/exercises"
        color={colorMode === "light" ? "black.500" : "teal.300"}
        mt={4}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Try Exercises
      </MotionButton>
    </Box>
  </GridItem>

  {/* Mindfulness Section */}
  <GridItem>
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      as={motion.div}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition="0.5s ease-in-out"
      height="100%"
    >
      <Flex alignItems="center" mb={4}>
        <IconButton
          icon={<FaBrain />}
          isRound
          size="lg"
          mr={4}
          colorScheme="blackAlpha"
        />
        <Heading
          as="h3"
          size="md"
          color={colorMode === "light" ? "gray.800" : "white"}
        >
        Mindfulness & Stress Management
        </Heading>
      </Flex>
      <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
        Learn the art of mindfulness to stay present, reduce stress, and enhance focus during critical moments.
      </Text>
      <MotionButton
        as={RouterLink}
        to="/mind"
        color={colorMode === "light" ? "black.500" : "teal.300"}
        mt={4}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Discover 
      </MotionButton>
    </Box>
  </GridItem>

  {/* Goal Setting Section */}
  <GridItem>
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      as={motion.div}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition="0.5s ease-in-out"
      height="100%"
    >
      <Flex alignItems="center" mb={4}>
        <IconButton
          icon={<FaBullseye />}
          isRound
          size="lg"
          mr={4}
          colorScheme="blackAlpha"
        />
        <Heading
          as="h3"
          size="md"
          color={colorMode === "light" ? "gray.800" : "white"}
        >
          Goal Setting Strategies
        </Heading>
      </Flex>
      <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
        Explore strategies to set clear, achievable goals to guide your training and competition efforts.
      </Text>
      <MotionButton
        as={RouterLink}
        to="/goal"
        color={colorMode === "light" ? "black.500" : "teal.300"}
        mt={4}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Set Your Goals
      </MotionButton>
    </Box>
  </GridItem>

  {/* Stress Management Section */}
  <GridItem>
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      as={motion.div}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition="0.5s ease-in-out"
      height="100%"
    >
      <Flex alignItems="center" mb={4}>
        <IconButton
          icon={<FaHeart />}
          isRound
          size="lg"
          mr={4}
          colorScheme="blackAlpha"
        />
        <Heading
          as="h3"
          size="md"
          color={colorMode === "light" ? "gray.800" : "white"}
        >
          Peaceful Music
        </Heading>
      </Flex>
      <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
        Discover techniques to effectively manage stress and maintain composure in high-pressure situations.
      </Text>
      <MotionButton
        as={RouterLink}
        to="/music"
        color={colorMode === "light" ? "black.500" : "teal.300"}
        mt={4}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get init
      </MotionButton>
    </Box>
  </GridItem>
</Grid>


        {/* About Us Section */}
        <MotionBox
          ref={aboutUsRef}
          width="100%"
          textAlign="center"
          my={8}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition="0.5s ease-in-out"
        >
          <Heading
            as="h2"
            size="xl"
            mb={4}
            color={colorMode === "light" ? "gray.800" : "white"}
            fontFamily="serif"
          >
            About Us
          </Heading>
          <Grid
            templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
            gap={6}
            my={8}
          >
            {/* Mission */}
            <GridItem>
              <MotionBox
                bg={colorMode === "light" ? "white" : "gray.700"}
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition="0.5s ease-in-out"
              >
                <Heading
                  as="h3"
                  size="md"
                  mb={4}
                  color={colorMode === "light" ? "gray.800" : "white"}
                >
                  Our Mission
                </Heading>
                <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
                  To empower athletes to achieve peak mental performance through
                  cutting-edge psychology and training tools.
                </Text>
              </MotionBox>
            </GridItem>

            {/* Vision */}
            <GridItem>
              <MotionBox
                bg={colorMode === "light" ? "white" : "gray.700"}
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition="0.5s ease-in-out"
              >
                <Heading
                  as="h3"
                  size="md"
                  mb={4}
                  color={colorMode === "light" ? "gray.800" : "white"}
                >
                  Our Vision
                </Heading>
                <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
                  To be the leading platform for mental training, offering the
                  most comprehensive and accessible resources for athletes
                  worldwide.
                </Text>
              </MotionBox>
            </GridItem>

            {/* Core Values */}
            <GridItem>
              <MotionBox
                bg={colorMode === "light" ? "white" : "gray.700"}
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition="0.5s ease-in-out"
              >
                <Heading
                  as="h3"
                  size="md"
                  mb={4}
                  color={colorMode === "light" ? "gray.800" : "white"}
                >
                  Our Core Values
                </Heading>
                <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
                  Integrity, Excellence, Innovation, and Accessibility.
                </Text>
              </MotionBox>
            </GridItem>
          </Grid>
          <Grid
            templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
            gap={6}
            width="100%"
            my={8}
          >
            <GridItem>
              <Box
                bg={colorMode === "light" ? "white" : "gray.700"}
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                as={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition="0.5s ease-in-out"
              >
                <Text
                  fontSize="lg"
                  color={colorMode === "light" ? "gray.600" : "gray.300"}
                >
                  We are dedicated to helping athletes reach their peak
                  performance through the power of mental training. Our platform
                  offers resources, tools, and guidance tailored to the unique
                  needs of sports professionals and enthusiasts alike.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box
                bg={colorMode === "light" ? "white" : "gray.700"}
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                as={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition="0.5s ease-in-out"
              >
                <Text
                  fontSize="lg"
                  color={colorMode === "light" ? "gray.600" : "gray.300"}
                >
                  Our team of experts brings a wealth of knowledge in sports
                  psychology, coaching, and performance enhancement. We are
                  passionate about empowering athletes to build resilience,
                  stay focused, and achieve their goals.
                </Text>
              </Box>
            </GridItem>
          </Grid>
          {/* Team */}
          <Box
            bg={colorMode === "light" ? "white" : "gray.700"}
            p={6}
            borderRadius="lg"
            boxShadow="lg"
          >
            <Heading
              as="h3"
              size="md"
              mb={4}
              color={colorMode === "light" ? "gray.800" : "white"}
            >
              Meet Our Team
            </Heading>
            <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
              Our team consists of passionate professionals with expertise in
              sports psychology, mental coaching, and technology.
            </Text>
          </Box>
        </MotionBox>
        <Grid templateColumns="repeat(auto-fit, minmax(220px, 1fr))" gap={6}>
  {/* Team Member 1 */}
  <GridItem>
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
    >
      <FaBrain size={40} color="teal.500" />
      <Heading as="h4" size="md" mt={4} mb={2}>
        santosh
        <br />
      </Heading>
      <Text>
        Backend Developer
      </Text>
    </Box>
  </GridItem>

  {/* Team Member 2 */}
  <GridItem>
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
    >
      <FaBullseye size={40} color="teal.500" />
      <Heading as="h4" size="md" mt={4} mb={2}>
        santosh
        <br/>
      </Heading>
      <Text>
        Frontend Developers
      </Text>
    </Box>
  </GridItem>

  {/* Team Member 3 */}
  <GridItem>
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
    >
      <FaHeart size={40} color="teal.500" />
      <Heading as="h4" size="md" mt={4} mb={2}>
        santosh
        <br />
      </Heading>
      <Text>
        Content Curator
      </Text>
    </Box>
  </GridItem>

  {/* Team Member 4 */}
  <GridItem>
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
    >
      <FaCode size={40} color="teal.500" />
      <Heading as="h4" size="md" mt={4} mb={2}>
        santosh
        <br />
      </Heading>
      <Text>
        Full Stack Developer
      </Text>
    </Box>
  </GridItem>

  {/* Team Member 5 */}
  <GridItem>
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      p={6}
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
    >
      <FaLaptopCode size={40} color="teal.500" />
      <Heading as="h4" size="md" mt={4} mb={2}>
        santosh
        <br />
      </Heading>
      <Text>
        UI/UX Designer
      </Text>
    </Box>
  </GridItem>
</Grid>
        {/* Platform's Story */}
        <MotionBox
                bg={colorMode === "light" ? "white" : "gray.700"}
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                width="100%"
                mt={8}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition="0.5s ease-in-out"
            >
                <Heading as="h3" size="md" mb={4} color={colorMode === "light" ? "gray.800" : "white"}>
                    Our Story
                </Heading>
                <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
                    Soul Flex was born out of a desire to bridge the gap between physical and mental training in sports. Recognizing the challenges athletes face in maintaining mental focus and resilience, we set out to create a platform that offers comprehensive resources to support mental well-being and performance. Since our inception, we have helped countless athletes unlock their full potential by providing expert-led content and innovative tools designed to enhance mental strength.
                </Text>
            </MotionBox>
             {/* Achievements */}
             <MotionBox
                bg={colorMode === "light" ? "white" : "gray.700"}
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                width="100%"
                mt={8}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition="0.5s ease-in-out"
            >
                <Heading as="h3" size="md" mb={4} color={colorMode === "light" ? "gray.800" : "white"}>
                    Our Achievements
                </Heading>
                <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
                    • Launched a series of highly acclaimed video tutorials on mental visualization techniques.<br />
                    • Published a comprehensive collection of insightful articles on effective goal-setting strategies to enhance athletic performance.<br />
                    • Developed interactive exercises focused on stress management techniques, empowering athletes to build mental resilience under pressure.
                </Text>
            </MotionBox>
        {/* Footer Section */}
        <Box
          textAlign="center"
          py={4}
          color={colorMode === "light" ? "gray.600" : "gray.300"}
          fontSize="sm"
        >
          {/* ©️ 2024 Soul Flex. All rights reserved. */}
        </Box>
      </Box>
    

      <Box
      bg={colorMode === "light" ? "gray.200" : "gray.800"}
      color={colorMode === "light" ? "gray.800" : "gray.200"}
      py={4}
      px={8}
      mt={8}
      textAlign="center"
    >
      <Flex justify="center" align="center" direction="column">
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Connect with Us
        </Text>
        <Flex justify="center" mb={4}>
          
          <IconButton
            as={Link}
            href="mailto:santoshkumarkowru@gmail.com"
            icon={<FaEnvelope />}
            isRound
            size="lg"
            m={2}
            colorScheme="teal"
            aria-label="Email"
            isExternal
          />
          <IconButton
            as={Link}
            href="https://www.instagram.com/santhuu_ysrcp?igsh=b3pnZHhlNTMzcWFm"
            icon={<FaInstagram />}
            isRound
            size="lg"
            m={2}
            colorScheme="pink"
            aria-label="Instagram"
            isExternal
          />
          <IconButton
            as={Link}
            href="https://wa.me/919705635139"
            icon={<FaWhatsapp />}
            isRound
            size="lg"
            m={2}
            colorScheme="teal"
            aria-label="WhatsApp"
            isExternal
          />
        </Flex>
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Soul Flex. All rights reserved.
        </Text>
      </Flex>
    </Box>
    </Box>
   
  );
};
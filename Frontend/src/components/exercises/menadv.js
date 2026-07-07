import React from "react";
import { motion } from "framer-motion";
import { IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const Menadv = () => {
  const pageStyles = {
    background: "black",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const headerContainerStyles = {
    width: "100%",
    display: "flex",
    justifyContent: "center",  // Center the header
    alignItems: "center",
    marginBottom: "30px",
    position: "relative",
  };

  const headerStyles = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",  // Ensure text is centered
  };

  const backButtonStyles = {
    position: "absolute",
    left: "20px",
  };

  const exerciseListStyles = {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  };

  const exerciseItemStyles = {
    display: "flex",
    alignItems: "center",
    padding: "15px 0",
    borderBottom: "1px solid #ddd",
  };

  const exerciseImageStyles = {
    width: "70px",
    height: "70px",
    marginRight: "15px",
  };

  const exerciseTextStyles = {
    fontSize: "1.2rem",
    color: "black",
  };

  const exercises = [
    {
      name: "Squats",
      image:
        "https://i.pinimg.com/originals/78/bc/2e/78bc2ed0dc65bc4c4670f513b5046ff5.gif",
      reps: "x15",
    },
    {
      name: "Pushup & Rotation",
      image:
        "https://i.pinimg.com/originals/fd/9b/cf/fd9bcfd8660e585e70136507f160dc5d.gif",
      reps: "x16",
    },
    {
      name: "Russian Twist",
      image:
        "https://i.pinimg.com/originals/9f/af/63/9faf631d61e4613834a6de66c8e1cafb.gif",
      reps: "x20",
    },
    {
      name: "Medicine ball",
      image:
        "https://i.pinimg.com/originals/94/ff/ad/94ffadf464bf05d078f630fda00a7011.gif",
      reps: "x16",
    },
    {
      name: "Abdominal Crunches",
      image:
        "https://i.pinimg.com/originals/0d/cf/6e/0dcf6e7f7efe2b269ab55220a9c1bdbf.gif",
      reps: "x20",
    },
    {
      name: "Soccer",
      image:
        "https://i.pinimg.com/originals/da/a7/35/daa735ec2e1c5674bf8636b315c40ce6.gif",
      reps: "x16",
    },
    {
      name: "Plank",
      image:
        "https://i.pinimg.com/originals/78/f3/1b/78f31b6a5bb1e1cd63a08e85e295dfb4.gif",
      reps: "00:45",
    },
    {
      name: "V ups",
      image:
        "https://i.pinimg.com/originals/bd/a3/0f/bda30fe64aacc1db33ac9385071d48e7.gif",
      reps: "x16",
    },
    {
      name: "Bands triceps",
      image:
        "https://i.pinimg.com/originals/8b/8e/fc/8b8efcf0c5600bb608669685723423db.gif",
      reps: "x16",
    },
    {
      name: "Golf weight traning",
      image:
        "https://i.pinimg.com/originals/8e/46/43/8e464355eceddc2bb00f75c43368ad27.gif",
      reps: "x12",
    },
    {
      name: "Heel touch",
      image:
        "https://i.pinimg.com/originals/5d/fa/da/5dfada3ff7c54ac8264eabb1a3842b61.gif",
      reps: "x20",
    },
    {
      name: "Leg lunges",
      image:
        "https://i.pinimg.com/originals/ec/52/74/ec5274f13f96683f61af3af2e95a4798.gif",
      reps: "x16",
    },
    {
      name: "Knee Push-Ups",
      image:
        "https://i.pinimg.com/originals/4b/da/10/4bda1013b08829bae367c5c9f4eb6408.gif",
      reps: "x20",
    },
    {
      name: "Butt Bridge",
      image:
        "https://i.pinimg.com/originals/e2/c3/00/e2c30049ce1ea410ff188472838ed0a1.gif",
      reps: "x16",
    },
    {
      name: "Mountain climbing",
      image:
        "https://i.pinimg.com/originals/9f/af/63/9faf631d61e4613834a6de66c8e1cafb.gif",
      reps: "x20",
    },
    {
      name: "Dumbbell floor press",
      image:
        "https://i.pinimg.com/originals/ad/40/54/ad4054c9ad7b08da0d324c67281252a7.gif",
      reps: "x16",
    },
    {
      name: "Dumbbell squats",
      image:
        "https://i.pinimg.com/originals/b2/87/91/b28791fda55992ff8fd6fe4846f0f437.gif",
      reps: "x14",
    },
    {
      name: "Tuck crunches",
      image:
        "https://i.pinimg.com/originals/77/40/e3/7740e3fac39ca80df8e0da4c27917ecc.gif",
      reps: "x16",
    },
    {
      name: "Resistance band ",
      image:
        "https://i.pinimg.com/originals/44/42/28/4442282b789718c5c40befaebc64b7bb.gif",
      reps: "x14",
    },
  ];

  const handleBackClick = () => {
    // Your back button logic here
  };

  return (
    <div style={pageStyles}>
      <div style={headerContainerStyles}>
        <IconButton
          icon={<ArrowBackIcon />}
          aria-label="Back"
          variant="outline"
          color="white" // Set the icon color to white
          borderColor="white" // Set the border color to white
          colorScheme="whiteAlpha" // Ensure the button changes color on hover
          _hover={{ bg: "whiteAlpha.300" }} // Change background on hover
          style={backButtonStyles} // Position the back button
          onClick={handleBackClick}
        />
        
        <header style={headerStyles}>Advanced's Workout</header>
      </div>
      <div style={exerciseListStyles}>
        {exercises.map((exercise, index) => (
          <motion.div
            key={index}
            style={exerciseItemStyles}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={exercise.image}
              alt={exercise.name}
              style={exerciseImageStyles}
            />
            <div style={exerciseTextStyles}>
              <strong>{exercise.name}</strong>
              <div>{exercise.reps}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menadv;
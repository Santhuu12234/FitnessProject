import React from "react";
import { motion } from "framer-motion";

const Menbeg = () => {
  const pageStyles = {
    background: "black", // Light grey background
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const headerStyles = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: "30px",
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
      reps: "x8",
    },
    {
      name: "Push-Ups & Rotation",
      image:
        "https://i.pinimg.com/originals/fd/9b/cf/fd9bcfd8660e585e70136507f160dc5d.gif",
      reps: "x10",
    },
    {
      name: "Plank",
      image:
        "https://i.pinimg.com/originals/78/f3/1b/78f31b6a5bb1e1cd63a08e85e295dfb4.gif",
      reps: "00:15",
    },
    {
      name: "Heel Touch",
      image:
        "https://i.pinimg.com/originals/5d/fa/da/5dfada3ff7c54ac8264eabb1a3842b61.gif",
      reps: "x8",
    },
    {
      name: "Knee Push-Ups",
      image:
        "https://i.pinimg.com/originals/4b/da/10/4bda1013b08829bae367c5c9f4eb6408.gif",
      reps: "x6",
    },
    {
      name: "Butt Bridges",
      image:
        "https://i.pinimg.com/originals/e2/c3/00/e2c30049ce1ea410ff188472838ed0a1.gif",
      reps: "x8",
    },
    {
      name: "Tuck Crunches",
      image:
        "https://i.pinimg.com/originals/77/40/e3/7740e3fac39ca80df8e0da4c27917ecc.gif",
      reps: "x6",
    },
    {
      name: "Leg Lunges",
      image:
        "https://i.pinimg.com/originals/ec/52/74/ec5274f13f96683f61af3af2e95a4798.gif",
      reps: "x8",
    },
  ];

  return (
    <div style={pageStyles}>
      <header style={headerStyles}>Beginner's Workout</header>
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

export default Menbeg;
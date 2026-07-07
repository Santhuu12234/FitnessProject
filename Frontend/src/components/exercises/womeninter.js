import React from "react";
import { motion } from "framer-motion";

export const Womeninter = () => {
  const pageStyles = {
    backgroundColor: "black",
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
    color: "#333",
  };

  const exercises = [
    {
      name: "Bear Squats",
      image:
        "https://i.pinimg.com/originals/30/45/ab/3045ab52d156de43db77e7e7513feed4.gif",
      reps: "x10",
    },
    {
      name: "Lunges",
      image:
        "https://i.pinimg.com/originals/66/78/58/6678589817d6026fab7bd23838a8e3eb.gif",
      reps: "x8",
    },
    {
      name: "Glute Bridges",
      image:
        "https://i.pinimg.com/originals/54/88/82/5488829d8fc490a7eb1d06a8500ea1a0.gif",
      reps: "x10",
    },
    {
      name: "Bicycle Crunches",
      image:
        "https://i.pinimg.com/originals/1b/03/6f/1b036f9aa0fdeaecbac70152faa9d6ca.gif",
      reps: "x12",
    },
    {
      name: "Side Lunges",
      image:
        "https://i.pinimg.com/originals/57/e5/69/57e5691518de79a2d1c849949b6088db.gif",
      reps: "x10",
    },
    {
      name: "Donkey Kicks",
      image:
        "https://i.pinimg.com/originals/45/7f/eb/457feb135413e21c8502738152a5aa41.gif",
      reps: "x10",
    },
    {
      name: "Fire Hydrants",
      image:
        "https://i.pinimg.com/originals/1c/ce/4e/1cce4e5001df12871403921334e68786.gif",
      reps: "x10",
    },
    {
      name: "Superman",
      image:
        "https://i.pinimg.com/originals/a7/29/bf/a729bfa9c2cc46b7c77f7ec303bbf997.gif",
      reps: "x8",
    },
    {
      name: "Reverse Crunches",
      image:
        "https://i.pinimg.com/originals/e9/68/c5/e968c5eeac98c41a4b5e78d680ddba38.gif",
      reps: "x10",
    },
    {
      name: "Flutter Kicks",
      image:
        "https://i.pinimg.com/originals/ac/25/52/ac25521ae4eb108d83a23177221d450b.gif",
      reps: "00:30",
    },
    {
      name: "Standing Leg Circles",
      image:
        "https://i.pinimg.com/originals/53/38/cb/5338cb071c9fd693c6d78b485fd15b35.gif",
      reps: "00:30",
    },
    {
      name: "Bird Dogs",
      image:
        "https://i.pinimg.com/originals/17/e6/42/17e642120d1470540aed8bb765d10727.gif",
      reps: "x12",
    },
    {
      name: "Side Plank",
      image:
        "https://i.pinimg.com/originals/af/7f/56/af7f569f481e3458cebb80ab625dfbd2.gif",
      reps: "00:30",
    },
    {
      name: "Clamshells",
      image:
        "https://i.pinimg.com/originals/49/1d/e6/491de6046e10a40f2c5523e748dd0a39.gif",
      reps: "x10",
    },
  ];

  return (
    <div style={pageStyles}>
      <header style={headerStyles}>Women's Exercise Routine</header>
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

// export default WomenInter;
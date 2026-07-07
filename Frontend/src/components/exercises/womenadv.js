import React from 'react';
import { motion } from 'framer-motion';

export const Womenadv = () => {
  const pageStyles = {
    backgroundColor: 'black', // Light grey background
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headerStyles = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '30px',
  };

  const exerciseListStyles = {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  };

  const exerciseItemStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 0',
    borderBottom: '1px solid #ddd',
  };

  const exerciseImageStyles = {
    width: '70px',
    height: '70px',
    marginRight: '15px',
  };

  const exerciseTextStyles = {
    fontSize: '1.2rem',
    color: '#333',
  };

const exercises = [
    { name: 'Bear Squats', image: 'https://i.pinimg.com/originals/30/45/ab/3045ab52d156de43db77e7e7513feed4.gif', reps: 'x15' },
    { name: 'Lunges', image: 'https://i.pinimg.com/originals/66/78/58/6678589817d6026fab7bd23838a8e3eb.gif', reps: 'x12' },
    { name: 'Burpees', image: 'https://i.pinimg.com/originals/f0/a3/da/f0a3da2890f6edf4c7b45845fa14e39c.gif', reps: 'x10' },
    { name: 'Glute Bridges', image: 'https://i.pinimg.com/originals/54/88/82/5488829d8fc490a7eb1d06a8500ea1a0.gif', reps: 'x15' },
    { name: 'Bicycle Crunches', image: 'https://i.pinimg.com/originals/1b/03/6f/1b036f9aa0fdeaecbac70152faa9d6ca.gif', reps: 'x20' },
    { name: 'High Knees', image: 'https://i.pinimg.com/originals/c1/9f/2c/c19f2c2bac0ca09f2381fb8281c8d1f0.gif', reps: '00:30' },
    { name: 'Side Lunges', image: 'https://i.pinimg.com/originals/57/e5/69/57e5691518de79a2d1c849949b6088db.gif', reps: 'x12' },
    { name: 'Donkey Kicks', image: 'https://i.pinimg.com/originals/45/7f/eb/457feb135413e21c8502738152a5aa41.gif', reps: 'x15' },
    { name: 'Fire Hydrants', image: 'https://i.pinimg.com/originals/1c/ce/4e/1cce4e5001df12871403921334e68786.gif', reps: 'x15' },
    { name: 'Superman', image: 'https://i.pinimg.com/originals/a7/29/bf/a729bfa9c2cc46b7c77f7ec303bbf997.gif', reps: 'x10' },
    { name: 'Plank to Push-Up', image: 'https://i.pinimg.com/originals/47/0d/31/470d318a551421e46c3891fb1f04dd50.gif', reps: 'x10' },
    { name: 'Reverse Crunches', image: 'https://i.pinimg.com/originals/e9/68/c5/e968c5eeac98c41a4b5e78d680ddba38.gif', reps: 'x15' },
    { name: 'Flutter Kicks', image: 'https://i.pinimg.com/originals/ac/25/52/ac25521ae4eb108d83a23177221d450b.gif', reps: '00:30' },
    { name: 'Standing Leg Circles', image: 'https://i.pinimg.com/originals/53/38/cb/5338cb071c9fd693c6d78b485fd15b35.gif', reps: '00:30' },
    { name: 'Bird Dogs', image: 'https://i.pinimg.com/originals/17/e6/42/17e642120d1470540aed8bb765d10727.gif', reps: 'x20' },
    { name: 'Side Plank', image: 'https://i.pinimg.com/originals/af/7f/56/af7f569f481e3458cebb80ab625dfbd2.gif', reps: '00:30' },
    { name: 'Curtsy Lunge Side kick', image: 'https://i.pinimg.com/originals/9e/f3/24/9ef324c4573ac6c444da31a6c56eaf6d.gif', reps: 'x12' },
    { name: 'T Press', image: 'https://i.pinimg.com/originals/89/ed/92/89ed9234697ed2e07e0bd2f65c763435.gif', reps: 'x15' },
    { name: 'Single-Leg Deadlifts', image: 'https://i.pinimg.com/originals/75/88/43/758843837f5f4825ab2cdd6084725991.gif', reps: 'x12' },
    { name: 'Clamshells', image: 'https://i.pinimg.com/originals/49/1d/e6/491de6046e10a40f2c5523e748dd0a39.gif', reps: 'x15' },
  ];
  
  
  

  return (
    <div style={pageStyles}>
      <header style={headerStyles}>Women's Exercise Routine</header>
      <div style={exerciseListStyles}>
        {exercises.map((exercise, index) => (
          <motion.div key={index} style={exerciseItemStyles} whileHover={{ scale: 1.05 }}>
            <img src={exercise.image} alt={exercise.name} style={exerciseImageStyles} />
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

// export default Womenadv;
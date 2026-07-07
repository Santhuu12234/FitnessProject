import React from 'react';
import { motion } from 'framer-motion';

const MindfulnessPage = () => {
  const pageStyles = {
    backgroundColor: '#f2f2f2',
    color: '#333',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const headerStyles = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '30px',
  };

  const sectionStyles = {
    maxWidth: '800px',
    marginBottom: '30px',
  };

  const listStyles = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const textStyles = {
    flex: 1,
    fontSize: '1.2rem',
    color: '#333',
  };

  const imageContainerStyles = {
    flexShrink: 0,
    marginRight: '20px',
  };

  const sectionTitleStyles = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: '20px',
  };

  return (
    <motion.div
      style={pageStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header style={headerStyles}>
        Mindfulness and Stress Relief Tips
      </header>

      <section style={sectionStyles}>
        
        <ul style={listStyles}>
          <motion.li style={listItemStyles} whileHover={{ scale: 1.05 }}>
            <div style={imageContainerStyles}>
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/9c0734100731535.5f0f2ac318fee.gif" alt="Breathing Exercise" width="100" />
            </div>
            <p style={textStyles}><b><u>Practice deep breathing exercises:</u></b> Deep breathing helps activate the body's relaxation response and reduces stress.</p>
          </motion.li>
          <motion.li style={listItemStyles} whileHover={{ scale: 1.05 }}>
            <div style={imageContainerStyles}>
              <img src="https://i.pinimg.com/originals/64/41/61/644161b5ce15397473f2c4a49620ee8f.gif" alt="Meditation" width="100" />
            </div>
            <p style={textStyles}><b><u>Meditate daily:</u></b> Regular meditation can help calm the mind and reduce stress over time.</p>
          </motion.li>
          <motion.li style={listItemStyles} whileHover={{ scale: 1.05 }}>
            <div style={imageContainerStyles}>
              <img src="https://img.freepik.com/free-vector/flat-natural-landscape-with-vegetation_23-2148240898.jpg" alt="Nature" width="100" />
            </div>
            <p style={textStyles}><b><u>Spend time in nature:</u></b> Nature can have a soothing effect on the mind, helping to reduce anxiety and stress.</p>
          </motion.li>
          <motion.li style={listItemStyles} whileHover={{ scale: 1.05 }}>
            <div style={imageContainerStyles}>
              <img src="https://i.pinimg.com/originals/a7/78/19/a778193d04758b169fca966fe0655645.gif" alt="Exercise" width="100" />
            </div>
            <p style={textStyles}><b><u>Exercise regularly:</u></b> Physical activity is a powerful stress reducer that releases endorphins, improves mood, and helps maintain mental health.</p>
          </motion.li>
          <motion.li style={listItemStyles} whileHover={{ scale: 1.05 }}>
            <div style={imageContainerStyles}>
              <img src="https://media.licdn.com/dms/image/D5622AQEov1LiPcnPFA/feedshare-shrink_2048_1536/0/1691722752828?e=2147483647&v=beta&t=mwwBaZUUklOK5B14wyBrYy4suEG05BUMy1wsp8n8fzo" alt="Relaxation" width="100" />
            </div>
            <p style={textStyles}><b><u>Practice gratitude:</u></b> Keeping a gratitude journal or simply acknowledging things you are thankful for can help shift focus away from stress.</p>
          </motion.li>
          <motion.li style={listItemStyles} whileHover={{ scale: 1.05 }}>
            <div style={imageContainerStyles}>
              <img src="https://griffithfoods.b-cdn.net/wp-content/uploads/2022/03/03_MindfulEating.gif" alt="Mindful Eating" width="100" />
            </div>
            <p style={textStyles}><b><u>Mindful eating:</u></b> Paying attention to what you eat, savoring each bite, and eating slowly can help reduce stress and improve digestion.</p>
          </motion.li>
          <motion.li style={listItemStyles} whileHover={{ scale: 1.05 }}>
            <div style={imageContainerStyles}>
              <img src="https://i.makeagif.com/media/3-08-2021/zjm_O3.gif" alt="Progressive Muscle Relaxation" width="100" />
            </div>
            <p style={textStyles}><b><u>Progressive muscle relaxation:</u></b> This technique involves tensing and relaxing different muscle groups to reduce physical tension and stress.</p>
          </motion.li>
          <motion.li style={listItemStyles} whileHover={{ scale: 1.05 }}>
            <div style={imageContainerStyles}>
              <img src="https://mindfulminutes.com/wp-content/uploads/2018/06/06_Visualization-techniques-to-calm-your-anxious-mind_technique.gif" alt="Visualization" width="100" />
            </div>
            <p style={textStyles}><b><u>Visualization:</u></b> Picturing a calming scene in your mind can help you relax and manage stress.</p>
          </motion.li>
          <motion.li style={listItemStyles} whileHover={{ scale: 1.05 }}>
            <div style={imageContainerStyles}>
              <img src="https://miro.medium.com/v2/resize:fit:1400/0*JuNmyK8aJkqKt6vO.gif" alt="Listening to Music" width="100" />
            </div>
            <p style={textStyles}><b><u>Listen to calming music:</u></b> Music can have a powerful effect on emotions and can be a simple way to relax.</p>
          </motion.li>
          <motion.li style={listItemStyles} whileHover={{ scale: 1.05 }}>
            <div style={imageContainerStyles}>
              <img src="https://www.rhodeahead.com/sites/rhodeahead.com/files/field/image/What-a-good-nights-sleep-can-do-for-you-1280x800.gif" alt="Healthy Sleep" width="100" />
            </div>
            <p style={textStyles}><b><u>Maintain a healthy sleep routine:</u></b> Adequate sleep is essential for mental health and stress management.</p>
          </motion.li>
        </ul>
      </section>
    </motion.div>
  );
};

export default MindfulnessPage;
import React from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

const VideoPage = () => {
  const navigate = useNavigate();

  // Updated video data with additional videos
  const videoSections = [
    {
      category: 'Mindfulness',
      videos: [
        { title: 'Mindfulness Meditation', url: 'https://www.youtube.com/watch?v=inpok4MKVLM' },
        { title: 'Mindfulness Exercises', url: 'https://www.youtube.com/watch?v=4pLUleLdwY4' },
        { title: 'Mindfulness for Anxiety', url: 'https://www.youtube.com/watch?v=ZToicYcHIOU' },
      ],
    },
    {
      category: 'Stress Relief',
      videos: [
        { title: 'Stress Relief Techniques', url: 'https://www.youtube.com/watch?v=i-pazYyLSWQ&pp=ygUYU3RyZXNzIFJlbGllZiBUZWNobmlxdWVz' },
        { title: 'Relaxation Music', url: 'https://www.youtube.com/watch?v=2OEL4P1Rz04' },
        { title: 'Quick Stress Relief', url: 'https://www.youtube.com/watch?v=hnpQrMqDoqE' },
      ],
    },
    {
      category: 'Overthinking',
      videos: [
        { title: 'How to Stop Overthinking', url: 'https://youtu.be/VQL15uSAeRU?si=YDJ_kIQ_gmuSgrWO' },
        { title: 'Calming Techniques', url: 'https://www.youtube.com/watch?v=mKW4ZFP8bGY&pp=ygUUY2FsbWluZyB0ZWNobmlxdWVzIFw%3D' },
        { title: 'Overthinking Cure', url: 'https://www.youtube.com/watch?v=V3vhXQy48jo&pp=ygURT3ZlcnRoaW5raW5nIEN1cmU%3D' },
      ],
    },
    {
      category: 'Motivation',
      videos: [
        { title: 'Motivational Speech', url: 'https://www.youtube.com/watch?v=ZXsQAXx_ao0' },
        { title: 'Workout Motivation', url: 'https://www.youtube.com/watch?v=_JRefJH6N00&pp=ygUSd29ya291dCBtb3RpdmF0aW9u' },
        { title: 'Morning Motivation', url: 'https://www.youtube.com/watch?v=HgiiY9TLtX8&pp=ygUSbW9ybmluZyBtb3RpdmF0aW9u' },
      ],
    },
    {
      category: 'Breathing Exercises',
      videos: [
        { title: 'Breathing Techniques for Anxiety', url: 'https://www.youtube.com/watch?v=AeMckI_nfP4&pp=ygUgQnJlYXRoaW5nIFRlY2huaXF1ZXMgZm9yIEFueGlldHk%3D' },
        { title: 'Deep Breathing Exercises', url: 'https://www.youtube.com/watch?v=395ZloN4Rr8&pp=ygUYRGVlcCBCcmVhdGhpbmcgRXhlcmNpc2Vz' },
        { title: 'Box Breathing', url: 'https://www.youtube.com/watch?v=tEmt1Znux58' },
      ],
    },
  ];

  const goBack = () => {
    navigate(-1); // This navigates back to the previous page
  };

  return (
    <div style={styles.page}>
      <button style={styles.backButton} onClick={goBack}>
        &larr; Back
      </button>
      <h1 style={styles.title}>Wellness Video Library</h1>
      {videoSections.map((section, index) => (
        <div key={index} style={styles.section}>
          <h2 style={styles.sectionTitle}>{section.category}</h2>
          <div style={styles.videoContainer}>
            {section.videos.map((video, idx) => (
              <div key={idx} style={styles.videoBox}>
                <ReactPlayer url={video.url} controls width="100%" height="180px" />
                <p style={styles.videoTitle}>{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  page: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  },
  backButton: {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'absolute',
    top: '20px',
    left: '20px',
  },
  title: {
    textAlign: 'center',
    margin: '20px 0',
    fontSize: '28px',
    color: '#333',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '24px',
    margin: '10px 0',
    color: '#333',
  },
  videoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  videoBox: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    width: 'calc(33% - 20px)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  videoTitle: {
    marginTop: '10px',
    fontSize: '16px',
    color: '#555',
  },
};

export default VideoPage;
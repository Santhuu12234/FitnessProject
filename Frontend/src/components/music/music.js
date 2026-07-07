import React, { useState } from 'react';
import ReactPlayer from 'react-player';

export const ProblemRelief = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  // Array of YouTube video links for different types of problems
  const videoLinks = [
    { category: 'stress', url: 'https://youtu.be/HRwTBP0HVgI?si=GPCl8ELdcgVazr8L' },
    { category: 'sad', url: 'https://youtu.be/JUPoUnqDArk?si=r_Udgxe1eJftOqA6' },
    { category: 'tired', url: 'https://youtu.be/hlWiI4xVXKY?si=aetwgHt7Fci4wMUk' },
    { category: 'anxious', url: 'https://youtu.be/nkkpE6xdcnU?si=TfsANj5dDooFOWhD' },
    { category: 'lonely', url: 'https://youtu.be/69fgorez8Tg?si=izLSt73WJ3voBmXg' },
    { category: 'angry', url: 'https://youtu.be/de2TdvDaS5A?si=egYEd7igAarfIPR7' },
    { category: 'unmotivated', url: 'https://youtu.be/WDxMas784iY?si=oCCvGP6rJKRbaTxZ' },
    { category: 'insomnia', url: 'https://www.youtube.com/live/kKOSP3iNzNM?si=nnLajOdzBd6JZBKI' },
    { category: 'heartbroken', url: 'https://youtu.be/jfOzQ9rYKA8?si=lC78TWntqcTaptGj' },
    { category: 'lack of concentration', url: 'https://youtu.be/qQzf-xzZO7M?si=Xi5kMUSGAWFvbnu6' },
    { category: 'general', url: 'https://youtu.be/YRJ6xoiRcpQ?si=_tt4kHv0HBq885w6' },
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getVideoRecommendation = () => {
    const selectedVideo = videoLinks.find(
      (video) => video.category === selectedCategory
    );
    setVideoUrl(selectedVideo ? selectedVideo.url : '');
  };

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px',
        border: '2px solid #ddd',
        borderRadius: '10px',
        backgroundColor: '#000', // Black background
        color: '#fff', // White text color for contrast
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '28px', color: '#fff' }}>
     Music
      </h1>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#333', // Dark background for select box
          color: '#fff', // White text color for select box
        }}
      >
        <option value="">How you feel...</option>
        <option value="stress">Stress</option>
        <option value="sad">Sad</option>
        <option value="tired">Tired</option>
        <option value="anxious">Anxious</option>
        <option value="lonely">Lonely</option>
        <option value="angry">Angry</option>
        <option value="unmotivated">Unmotivated</option>
        <option value="insomnia">Insomnia</option>
        <option value="heartbroken">Heartbroken</option>
        <option value="lack of concentration">Lack of Concentration</option>
        <option value="general">General</option>
      </select>
      <br />
      <button
        onClick={getVideoRecommendation}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#fff', // White background for button
          color: '#000', // Black text color for button
          border: '1px solid #ccc',
          borderRadius: '5px',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#fff'}
      >
        Play Music
      </button>
      {videoUrl && (
        <div
          style={{
            marginTop: '30px',
            border: '2px solid #ddd',
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: '#222', // Darker background for player container
          }}
        >
          <h2 style={{ color: '#fff' }}>Playing Music:</h2>
          <ReactPlayer
            url={videoUrl}
            controls
            playing
            style={{ borderRadius: '10px', overflow: 'hidden' }}
            width="100%"
            height="300px"
          />
        </div>
      )}
    </div>
  );
};

export default ProblemRelief;

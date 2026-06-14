import React from 'react';
import '../styles/LandingPage.css';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="landing-container">
      <div className="hero-content">
        <h1 className="hero-title">Discover Your Next Great Read</h1>
        <p className="hero-subtitle">
          Unlock a personalized book recommendation tailored to your current state of mind. 
          Take our short psychological quiz to find the perfect literary match for your mood.
        </p>
        <button className="start-button" onClick={onStart}>
          Start Discovery
        </button>
      </div>
      <div className="hero-image-container">
        <div className="book-illustration">
          <div className="book-spine"></div>
          <div className="book-pages">
            <div className="page-line"></div>
            <div className="page-line"></div>
            <div className="page-line"></div>
          </div>
          <div className="book-glow"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

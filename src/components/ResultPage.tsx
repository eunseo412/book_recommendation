import React from 'react';
import type { Book } from '../types';
import '../styles/ResultPage.css';

interface ResultPageProps {
  recommendedBook: Book;
  userScores: { stress: number; escapism: number; logic: number };
  onRestart: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ recommendedBook, userScores, onRestart }) => {
  const generateReasoning = () => {
    const reasons: string[] = [];
    const { stress, escapism, logic } = userScores;

    if (stress > 0.7) {
      reasons.push(`Since you're feeling quite stressed, "${recommendedBook.title}" offers the perfect ${recommendedBook.psychologicalProfile.escapism > 0.7 ? 'escape' : 'focus'} to help you unwind.`);
    } else if (stress < 0.3) {
      reasons.push(`With your current relaxed state, you're in a great position to fully appreciate the ${recommendedBook.themes[0].toLowerCase()} themes of this book.`);
    }

    if (escapism > 0.7) {
      reasons.push(`Your high desire for escapism matches perfectly with the immersive ${recommendedBook.themes.includes('Magic') || recommendedBook.themes.includes('Adventure') ? 'world-building' : 'atmosphere'} Andy Weir and others have crafted.`);
    }

    if (logic > 0.7) {
      reasons.push(`Your analytical mindset will find the ${recommendedBook.psychologicalProfile.logic > 0.7 ? 'logical depth' : 'structured narrative'} of this story particularly engaging.`);
    }

    if (reasons.length === 0) {
      reasons.push(`"${recommendedBook.title}" aligns beautifully with your balanced state of mind, offering a compelling blend of ${recommendedBook.themes.slice(0, 2).join(' and ').toLowerCase()}.`);
    }

    return reasons.join(' ');
  };

  return (
    <div className="result-page" style={{ '--mood-color': recommendedBook.moodColor } as React.CSSProperties}>
      <div className="result-container">
        <div className="book-hero">
          <div className="book-cover-container">
            <div className="virtual-book-cover" style={{ backgroundColor: recommendedBook.moodColor }}>
              <div className="cover-spine"></div>
              <div className="cover-content">
                <h3 className="cover-title">{recommendedBook.title}</h3>
                <p className="cover-author">{recommendedBook.author}</p>
              </div>
            </div>
          </div>
          <div className="book-info">
            <h1 className="book-title">{recommendedBook.title}</h1>
            <h2 className="book-author">by {recommendedBook.author}</h2>
            <div className="theme-tags">
              {recommendedBook.themes.map((theme, i) => (
                <span key={i} className="theme-tag">{theme}</span>
              ))}
            </div>
            <p className="book-synopsis">{recommendedBook.synopsis}</p>
          </div>
        </div>

        <div className="reasoning-section">
          <h3 className="section-title">Why this book?</h3>
          <p className="reasoning-text">{generateReasoning()}</p>
        </div>

        <div className="score-summary">
          <h3 className="section-title">Your Psychological Profile</h3>
          <div className="score-bars">
            <div className="score-item">
              <div className="score-label">Stress</div>
              <div className="score-bar-bg">
                <div className="score-bar-fill" style={{ width: `${userScores.stress * 100}%` }}></div>
              </div>
            </div>
            <div className="score-item">
              <div className="score-label">Escapism</div>
              <div className="score-bar-bg">
                <div className="score-bar-fill" style={{ width: `${userScores.escapism * 100}%` }}></div>
              </div>
            </div>
            <div className="score-item">
              <div className="score-label">Logic</div>
              <div className="score-bar-bg">
                <div className="score-bar-fill" style={{ width: `${userScores.logic * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <button className="restart-button" onClick={onRestart}>Retake Quiz</button>
      </div>
    </div>
  );
};

export default ResultPage;

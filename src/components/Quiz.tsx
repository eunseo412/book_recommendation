import React, { useState } from 'react';
import type { QuizQuestion, QuizAnswer } from '../types';
import '../styles/Quiz.css';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (scores: { stress: number; escapism: number; logic: number }) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (answer: QuizAnswer) => {
    if (isTransitioning) return;

    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      calculateFinalScores(newAnswers);
    }
  };

  const calculateFinalScores = (finalAnswers: QuizAnswer[]) => {
    const sums = { stress: 0, escapism: 0, logic: 0 };
    const counts = { stress: 0, escapism: 0, logic: 0 };

    finalAnswers.forEach((ans) => {
      sums[ans.axis] += ans.value;
      counts[ans.axis] += 1;
    });

    const averages = {
      stress: counts.stress > 0 ? sums.stress / counts.stress : 0.5,
      escapism: counts.escapism > 0 ? sums.escapism / counts.escapism : 0.5,
      logic: counts.logic > 0 ? sums.logic / counts.logic : 0.5,
    };

    onComplete(averages);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      
      <div className={`question-card ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <span className="question-number">Question {currentQuestionIndex + 1} of {questions.length}</span>
        <h2 className="question-text">{currentQuestion.text}</h2>
        
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className="option-button"
              onClick={() => handleOptionClick(option.score)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

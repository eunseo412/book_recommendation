import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import booksData from './data/books.json';
import questionsData from './data/questions.json';
import type { Book, QuizQuestion } from './types';
import './App.css';

type View = 'landing' | 'quiz' | 'result';

function App() {
  const [view, setView] = useState<View>('landing');
  const [userScores, setUserScores] = useState({ stress: 0, escapism: 0, logic: 0 });
  const [recommendedBook, setRecommendedBook] = useState<Book | null>(null);

  const books = booksData as Book[];
  const questions = questionsData as QuizQuestion[];

  const recommendBook = (scores: { stress: number; escapism: number; logic: number }) => {
    let bestMatch: Book = books[0];
    let minDistance = Infinity;

    books.forEach((book) => {
      const distance = Math.sqrt(
        Math.pow(book.psychologicalProfile.stress - scores.stress, 2) +
        Math.pow(book.psychologicalProfile.escapism - scores.escapism, 2) +
        Math.pow(book.psychologicalProfile.logic - scores.logic, 2)
      );

      if (distance < minDistance) {
        minDistance = distance;
        bestMatch = book;
      }
    });

    return bestMatch;
  };

  const handleQuizComplete = (scores: { stress: number; escapism: number; logic: number }) => {
    setUserScores(scores);
    const book = recommendBook(scores);
    setRecommendedBook(book);
    setView('result');
  };

  const handleStartQuiz = () => {
    setView('quiz');
  };

  const handleRestart = () => {
    setView('landing');
    setRecommendedBook(null);
    setUserScores({ stress: 0, escapism: 0, logic: 0 });
  };

  return (
    <div className="app-wrapper">
      {view === 'landing' && <LandingPage onStart={handleStartQuiz} />}
      {view === 'quiz' && (
        <Quiz questions={questions} onComplete={handleQuizComplete} />
      )}
      {view === 'result' && recommendedBook && (
        <ResultPage
          recommendedBook={recommendedBook}
          userScores={userScores}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;

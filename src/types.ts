export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  synopsis: string;
  themes: string[];
  psychologicalProfile: {
    stress: number;
    escapism: number;
    logic: number;
  };
  moodColor: string;
}

export interface QuizAnswer {
  axis: 'stress' | 'escapism' | 'logic';
  value: number;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: {
    text: string;
    score: QuizAnswer;
  }[];
}

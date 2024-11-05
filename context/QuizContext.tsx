"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface QuizContextProps {
  score: number;
  setScore: (score: number) => void;
  answers: Record<number, number>;
  submitAnswer: (questionIndex: number, selectedOption: number, correctAnswer: number) => void;
  resetQuiz: () => void;
  completeQuiz: boolean;
  setCompleteQuiz: (value: boolean) => void;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [completeQuiz, setCompleteQuiz] = useState<boolean>(false);

  const resetQuiz = () => {
    setScore(0);
    setAnswers({});
    setCompleteQuiz(false);
  };

  const submitAnswer = (questionIndex: number, selectedOption: number, correctAnswer: number) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: selectedOption }));
    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <QuizContext.Provider
      value={{
        score,
        setScore,
        answers,
        submitAnswer,
        resetQuiz,
        completeQuiz,
        setCompleteQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

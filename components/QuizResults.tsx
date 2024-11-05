"use client";

import { useQuiz } from "../context/QuizContext";

export default function QuizResults() {
  const { score, resetQuiz } = useQuiz();

  return (
    <div className="p-6 bg-green-100 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Score: {score}</h2>
      <button onClick={resetQuiz} className="mt-4 p-2 bg-blue-500 text-white rounded-md">
        Retake Quiz
      </button>
    </div>
  );
}

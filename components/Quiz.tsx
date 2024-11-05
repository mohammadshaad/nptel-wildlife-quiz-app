"use client";

import { useQuiz } from "../context/QuizContext";
import { quizzes } from "../data/quizzes";
import QuizResults from "./QuizResults";

interface QuizProps {
  week: number;
}

export default function Quiz({ week }: QuizProps) {
  const { score, submitAnswer, resetQuiz, answers, completeQuiz, setCompleteQuiz } = useQuiz();
  const questions = quizzes[week - 1].questions;

  const handleOptionClick = (questionIndex: number, optionIndex: number) => {
    if (!completeQuiz) {
      const currentQuestion = questions[questionIndex];
      submitAnswer(questionIndex, optionIndex, currentQuestion.correctAnswer);
    }
  };

  const handleSubmitQuiz = () => {
    setCompleteQuiz(true);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Week {week} Quiz</h2>
      {completeQuiz ? (
        <QuizResults />
      ) : (
        <div>
          {questions.map((question, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg mb-2">{question.question}</h3>
              <div className="grid grid-cols-2 gap-4">
                {question.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() => handleOptionClick(index, optionIndex)}
                    className={`p-3 bg-gray-200 hover:bg-blue-300 rounded-md ${
                      answers[index] === optionIndex ? "bg-blue-500 text-white" : ""
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleSubmitQuiz} className="mt-6 p-2 bg-green-500 text-white rounded-md">
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  );
}

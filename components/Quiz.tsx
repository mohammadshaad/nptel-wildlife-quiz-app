"use client";

import { useQuiz } from "../context/QuizContext";
import { quizzes } from "../data/quizzes";
import QuizResults from "./QuizResults";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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

  // Calculate completion percentage for progress bar
  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / questions.length) * 100;

  // Calculate final score percentage when quiz is completed
  const calculateFinalScore = () => {
    const correctAnswers = questions.reduce((count, question, index) => {
      return answers[index] === question.correctAnswer ? count + 1 : count;
    }, 0);
    return Math.round((correctAnswers / questions.length) * 100);
  };

  const handleSubmitQuiz = () => {
    const finalScore = calculateFinalScore();
    setCompleteQuiz(true);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Week {week} Quiz</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {answeredQuestions}/{questions.length} answered
            </span>
            <Progress value={progress} className="w-32" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {completeQuiz ? (
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Quiz Complete!</h3>
            <p className="text-4xl font-bold">
              Score: {calculateFinalScore()}%
            </p>
            <Button onClick={resetQuiz} variant="outline" className="mt-4">
              Try Again
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {questions.map((question, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-medium">
                  Question {index + 1}: {question.question}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {question.options.map((option, optionIndex) => (
                    <Button
                      key={optionIndex}
                      variant={answers[index] === optionIndex ? "default" : "outline"}
                      onClick={() => handleOptionClick(index, optionIndex)}
                      className="h-auto py-4 px-6 text-left justify-start"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      {!completeQuiz && (
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={resetQuiz}
            className="w-full md:w-auto"
          >
            Reset Quiz
          </Button>
          <Button 
            onClick={handleSubmitQuiz}
            className="w-full md:w-auto ml-4"
            disabled={Object.keys(answers).length !== questions.length}
          >
            Submit Quiz
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
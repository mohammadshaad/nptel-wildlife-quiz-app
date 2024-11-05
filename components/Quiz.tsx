"use client";

import { useQuiz } from "../context/QuizContext";
import { quizzes } from "../data/quizzes";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, Home, Check, X } from "lucide-react";

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

  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / questions.length) * 100;

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

  const Results = () => (
    <div className="space-y-8">
      <div className="text-center space-y-6">
        <h3 className="text-2xl font-bold">Quiz Complete!</h3>
        <p className="text-4xl font-bold">
          Score: {calculateFinalScore()}%
        </p>
      </div>

      <div className="space-y-8">
        {questions.map((question, index) => {
          const isCorrect = answers[index] === question.correctAnswer;
          const selectedAnswer = question.options[answers[index]];
          const correctAnswer = question.options[question.correctAnswer];

          return (
            <div key={index} className="border rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                ) : (
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                )}
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">
                    Question {index + 1}: {question.question}
                  </h3>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      Your answer: 
                      <span className={isCorrect ? "text-green-600 font-medium ml-2" : "text-red-600 font-medium ml-2"}>
                        {selectedAnswer}
                      </span>
                    </p>
                    
                    {!isCorrect && (
                      <p className="text-sm text-muted-foreground">
                        Correct answer: 
                        <span className="text-green-600 font-medium ml-2">
                          {correctAnswer}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4">
        <Button onClick={resetQuiz} variant="outline">
          Try Again
        </Button>
        {week < 12 && (
          <Link href={`/week/${week + 1}`}>
            <Button>Next Week</Button>
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 mb-20">
      <div className="flex justify-between items-center mb-4">
        <Link href={week > 1 ? `/week/${week - 1}` : "/"}>
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="/">
          <Button variant="outline" size="icon">
            <Home className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Week {week} Quiz</span>
            {!completeQuiz && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {answeredQuestions}/{questions.length} answered
                </span>
                <Progress value={progress} className="w-32" />
              </div>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {completeQuiz ? (
            <Results />
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
    </div>
  );
}
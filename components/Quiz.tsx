"use client";

import { useQuiz } from "../context/QuizContext";
import { quizzes } from "../data/quizzes";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, Home, Check, X, Shuffle } from "lucide-react";
import { useEffect, useState } from "react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  week: number;
}

export default function Quiz({ week }: QuizProps) {
  const { score, submitAnswer, resetQuiz, answers, completeQuiz, setCompleteQuiz } = useQuiz();
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [questionMap, setQuestionMap] = useState<number[]>([]);

  // Function to shuffle array
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Initialize or shuffle questions
  const initializeQuestions = () => {
    const originalQuestions = quizzes[week - 1].questions;
    const shuffledIndices = originalQuestions.map((_, index) => index);
    const newQuestionMap = shuffleArray(shuffledIndices);
    const newShuffledQuestions = newQuestionMap.map(index => originalQuestions[index]);
    
    setQuestionMap(newQuestionMap);
    setShuffledQuestions(newShuffledQuestions);
  };

  // Initialize questions on mount and when week changes
  useEffect(() => {
    initializeQuestions();
  }, [week]);

  const handleOptionClick = (questionIndex: number, optionIndex: number) => {
    if (!completeQuiz) {
      const originalIndex = questionMap[questionIndex];
      const currentQuestion = quizzes[week - 1].questions[originalIndex];
      submitAnswer(originalIndex, optionIndex, currentQuestion.correctAnswer);
    }
  };

  const handleShuffleClick = () => {
    if (!completeQuiz && Object.keys(answers).length === 0) {
      initializeQuestions();
    }
  };

  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / shuffledQuestions.length) * 100;

  const calculateFinalScore = () => {
    const correctAnswers = Object.entries(answers).reduce((count, [index, answer]) => {
      const question = quizzes[week - 1].questions[parseInt(index)];
      return answer === question.correctAnswer ? count + 1 : count;
    }, 0);
    return Math.round((correctAnswers / shuffledQuestions.length) * 100);
  };

  const handleSubmitQuiz = () => {
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
        {questionMap.map((originalIndex, shuffledIndex) => {
          const question = quizzes[week - 1].questions[originalIndex];
          const isCorrect = answers[originalIndex] === question.correctAnswer;
          const selectedAnswer = question.options[answers[originalIndex]];
          const correctAnswer = question.options[question.correctAnswer];

          return (
            <div key={shuffledIndex} className="border rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                ) : (
                  <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                )}
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">
                    Question {shuffledIndex + 1}: {question.question}
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
          <Link href={`/week/${week + 1}`} onClick={() => {resetQuiz(); setCompleteQuiz(false)}}>
            <Button>Next Week</Button>
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 mb-20">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <Link href={week > 1 ? `/week/${week - 1}` : "/"}>
            <Button variant="outline" size="icon" onClick={() => {resetQuiz();}}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleShuffleClick}
            disabled={completeQuiz || Object.keys(answers).length > 0}
            title={
              completeQuiz 
                ? "Cannot shuffle after completion" 
                : Object.keys(answers).length > 0 
                  ? "Cannot shuffle after starting" 
                  : "Shuffle questions"
            }
          >
            <Shuffle className="h-4 w-4" />
          </Button>
        </div>
        <Link href="/">
          <Button variant="outline" size="icon" onClick={() => {resetQuiz();}}>
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
                  {answeredQuestions}/{shuffledQuestions.length} answered
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
              {shuffledQuestions.map((question, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-medium">
                    Question {index + 1}: {question.question}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {question.options.map((option, optionIndex) => (
                      <Button
                        key={optionIndex}
                        variant={answers[questionMap[index]] === optionIndex ? "default" : "outline"}
                        onClick={() => handleOptionClick(index, optionIndex)}
                        className="h-auto py-4 px-6 text-left justify-start text-wrap"
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
              disabled={Object.keys(answers).length !== shuffledQuestions.length}
            >
              Submit Quiz
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
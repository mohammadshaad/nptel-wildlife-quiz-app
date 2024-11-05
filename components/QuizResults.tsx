"use client";

import { useQuiz } from "../context/QuizContext";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function QuizResults() {
  const { score, resetQuiz } = useQuiz();
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Quiz Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center space-y-4">
          <p className="text-4xl font-bold">Your Score</p>
          <p className={`text-6xl font-bold ${getScoreColor(score)}`}>
            {score}%
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={resetQuiz}>
          Try Again
        </Button>
        <Link href="/">
          <Button>
            Back to Home
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

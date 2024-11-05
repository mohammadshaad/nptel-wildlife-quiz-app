import Quiz from "@/components/Quiz";

interface WeekQuizPageProps {
  params: { week: string };
}

export default function WeekQuizPage({ params }: WeekQuizPageProps) {
  const week = parseInt(params.week);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Quiz week={week} />
    </div>
  );
}

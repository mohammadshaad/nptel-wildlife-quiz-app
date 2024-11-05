// app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Weekly Practice Quiz</h1>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 12 }, (_, i) => (
          <Link href={`/week/${i + 1}`} key={i}>
            <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md text-center hover:bg-blue-700">
              Week {i + 1}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

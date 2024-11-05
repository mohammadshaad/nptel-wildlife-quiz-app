import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-4xl text-center">Weekly Practice Quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 12 }, (_, i) => (
              <Link href={`/week/${i + 1}`} key={i} className="block">
                <Button
                  variant="outline"
                  className="w-full h-24 text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Week {i + 1}
                </Button>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card> */}
      Loading...please wait
    </div>
  );
}

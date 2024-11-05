import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-4 text-center text-sm text-muted-foreground fixed bottom-0 bg-background">
      <p className="flex items-center justify-center gap-1">
        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{" "}
        <a
          href="https://github.com/MohammadShaad"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline underline-offset-4 hover:underline"
        >
          Mohammad Shaad
        </a>
      </p>
    </footer>
  );
}

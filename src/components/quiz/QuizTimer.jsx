import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export const QuizTimer = ({ timeLeft, totalTime, isWarning }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const percentage = (timeLeft / totalTime) * 100;

  return (
    <div className="flex items-center gap-4">
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg",
          "border transition-all duration-300",
          isWarning 
            ? "border-quiz-incorrect/50 bg-quiz-incorrect/10 shadow-lg shadow-quiz-incorrect/20" 
            : "border-primary/30 bg-card/50 shadow-lg shadow-primary/20"
        )}
      >
        <Clock className={cn("w-5 h-5 transition-colors", isWarning ? "text-quiz-incorrect timer-pulse" : "text-primary")} />
        <span
          className={cn(
            "font-mono font-bold text-lg tabular-nums transition-colors",
            isWarning ? "text-quiz-incorrect" : "text-foreground"
          )}
        >
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      </div>
      <div className="hidden md:flex w-32 h-2 rounded-full bg-muted/30 overflow-hidden border border-primary/10">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-linear",
            isWarning ? "bg-gradient-to-r from-quiz-incorrect to-quiz-incorrect/50" : "bg-gradient-to-r from-primary to-accent"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

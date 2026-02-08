import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizTimerProps {
  timeLeft: number;
  totalTime: number;
  isWarning?: boolean;
}

export const QuizTimer = ({ timeLeft, totalTime, isWarning }: QuizTimerProps) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const percentage = (timeLeft / totalTime) * 100;

  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full",
          "glass-card border transition-all duration-300",
          isWarning && "border-quiz-incorrect/50 bg-quiz-incorrect/10"
        )}
      >
        <Clock className={cn("w-5 h-5", isWarning ? "text-quiz-incorrect timer-pulse" : "text-primary")} />
        <span
          className={cn(
            "font-mono font-bold text-lg tabular-nums",
            isWarning ? "text-quiz-incorrect" : "text-foreground"
          )}
        >
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      </div>
      <div className="hidden md:block w-32 h-2 rounded-full bg-muted overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-linear",
            isWarning ? "bg-quiz-incorrect" : "bg-primary"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

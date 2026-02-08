import { cn } from "@/lib/utils";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  answeredQuestions: number[];
}

export const QuizProgress = ({
  currentQuestion,
  totalQuestions,
  answeredQuestions,
}: QuizProgressProps) => {
  const percentage = ((currentQuestion) / totalQuestions) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Question <span className="text-foreground font-bold">{currentQuestion}</span> of{" "}
          <span className="text-foreground font-bold">{totalQuestions}</span>
        </span>
        <span className="text-primary font-medium">{Math.round(percentage)}% Complete</span>
      </div>

      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
      </div>

      <div className="flex gap-1.5 flex-wrap">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <div
            key={i}
            className={cn(
              "w-8 h-2 rounded-full transition-all duration-300",
              i + 1 === currentQuestion && "bg-primary scale-110",
              i + 1 < currentQuestion && answeredQuestions.includes(i + 1) && "bg-quiz-correct",
              i + 1 < currentQuestion && !answeredQuestions.includes(i + 1) && "bg-quiz-incorrect/50",
              i + 1 > currentQuestion && "bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
};

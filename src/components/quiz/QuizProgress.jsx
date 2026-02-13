import { cn } from "@/lib/utils";

export const QuizProgress = ({
  currentQuestion,
  totalQuestions,
  answeredQuestions,
}) => {
  const percentage = ((currentQuestion) / totalQuestions) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Question <span className="font-bold text-primary">{currentQuestion}</span> of{" "}
          <span className="text-foreground font-bold">{totalQuestions}</span>
        </span>
        <span className="text-primary font-semibold">{Math.round(percentage)}% Complete</span>
      </div>

      <div className="w-full h-2 bg-card rounded-full overflow-hidden border border-primary/20">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }} 
        />
      </div>

      <div className="flex gap-1.5 flex-wrap">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <div
            key={i}
            className={cn(
              "h-2 rounded-full transition-all duration-300 flex-1 max-w-[3rem]",
              i + 1 === currentQuestion && "bg-primary scale-110 shadow-lg shadow-primary/50",
              i + 1 < currentQuestion && answeredQuestions.includes(i + 1) && "bg-quiz-correct",
              i + 1 < currentQuestion && !answeredQuestions.includes(i + 1) && "bg-quiz-incorrect/50",
              i + 1 > currentQuestion && "bg-muted/50"
            )}
          />
        ))}
      </div>
    </div>
  );
};

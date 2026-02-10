import { Clock, Users, Trophy, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const difficultyColors = {
  Easy: "bg-quiz-option-b/20 text-quiz-option-b",
  Medium: "bg-quiz-option-c/20 text-quiz-option-c",
  Hard: "bg-quiz-option-d/20 text-quiz-option-d",
};

export const QuizCard = ({
  title,
  description,
  questionsCount,
  duration,
  participants,
  difficulty,
  category,
  isNew,
  onClick,
  className,
  animationDelay,
}) => {
  return (
    <div
      onClick={onClick}
      style={{ animationDelay }}
      className={cn(
        "glass-card p-6 cursor-pointer group opacity-0 fade-in-up",
        "hover:border-primary/50 transition-all duration-300",
        "hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.3)]",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
            {category}
          </span>
          {isNew && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent">
              New
            </span>
          )}
        </div>
        <span className={cn("px-3 py-1 text-xs font-medium rounded-full", difficultyColors[difficulty])}>
          {difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Trophy className="w-4 h-4" />
            <span>{questionsCount} Q</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>{participants}</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <ChevronRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
      </div>
    </div>
  );
};

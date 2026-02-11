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
        "glass-card p-6 cursor-pointer group fade-in-up",
        "border border-primary/20 hover:border-primary/60 transition-all duration-300",
        "hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.5)]",
        "hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary group-hover:bg-primary/30 transition-colors">
            {category}
          </span>
          {isNew && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent group-hover:bg-accent/30 transition-colors">
              New
            </span>
          )}
        </div>
        <span className={cn("px-3 py-1 text-xs font-semibold rounded-full transition-colors", difficultyColors[difficulty])}>
          {difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 group-hover:text-muted-foreground/90 transition-colors">{description}</p>

      <div className="flex items-center justify-between pt-4 border-t border-primary/10">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 group/stat hover:text-primary transition-colors">
            <Trophy className="w-4 h-4" />
            <span className="font-medium">{questionsCount} Q</span>
          </div>
          <div className="flex items-center gap-1.5 group/stat hover:text-primary transition-colors">
            <Clock className="w-4 h-4" />
            <span className="font-medium">{duration}</span>
          </div>
          <div className="flex items-center gap-1.5 group/stat hover:text-primary transition-colors">
            <Users className="w-4 h-4" />
            <span className="font-medium">{participants}</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <ChevronRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
      </div>
    </div>
  );
};

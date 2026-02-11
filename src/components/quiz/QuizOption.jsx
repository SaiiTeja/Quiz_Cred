import { cn } from "@/lib/utils";

const variantColors = {
  A: {
    base: "border-quiz-option-a/30 hover:border-quiz-option-a/60 bg-quiz-option-a/5 hover:bg-quiz-option-a/10",
    selected: "border-quiz-option-a bg-quiz-option-a/15",
    label: "bg-quiz-option-a text-white",
  },
  B: {
    base: "border-quiz-option-b/30 hover:border-quiz-option-b/60 bg-quiz-option-b/5 hover:bg-quiz-option-b/10",
    selected: "border-quiz-option-b bg-quiz-option-b/15",
    label: "bg-quiz-option-b text-white",
  },
  C: {
    base: "border-quiz-option-c/30 hover:border-quiz-option-c/60 bg-quiz-option-c/5 hover:bg-quiz-option-c/10",
    selected: "border-quiz-option-c bg-quiz-option-c/15",
    label: "bg-quiz-option-c text-white",
  },
  D: {
    base: "border-quiz-option-d/30 hover:border-quiz-option-d/60 bg-quiz-option-d/5 hover:bg-quiz-option-d/10",
    selected: "border-quiz-option-d bg-quiz-option-d/15",
    label: "bg-quiz-option-d text-white",
  },
};

export const QuizOption = ({
  label,
  text,
  variant,
  isSelected,
  isCorrect,
  isIncorrect,
  isDisabled,
  onClick,
  animationDelay,
}) => {
  const colors = variantColors[variant];

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      style={{ animationDelay }}
      className={cn(
        "quiz-option w-full p-4 md:p-5 rounded-xl border-2 text-left fade-in-up",
        "flex items-center gap-4 transition-all duration-300",
        "hover:shadow-[0_8px_16px_-4px_hsl(var(--primary)/0.2)]",
        colors.base,
        isSelected && !isCorrect && !isIncorrect && colors.selected,
        isCorrect && "border-quiz-correct bg-quiz-correct/15 scale-105",
        isIncorrect && "border-quiz-incorrect bg-quiz-incorrect/15 shake-animation",
        isDisabled && "cursor-not-allowed opacity-60"
      )}
    >
      <span
        className={cn(
          "w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center",
          "font-bold text-lg transition-all duration-300 flex-shrink-0",
          colors.label,
          isSelected && "scale-120 shadow-lg"
        )}
      >
        {label}
      </span>
      <span className="flex-1 font-semibold text-sm md:text-base text-foreground transition-colors">{text}</span>
      {isCorrect && <span className="text-lg text-quiz-correct font-bold">✓</span>}
      {isIncorrect && <span className="text-lg text-quiz-incorrect font-bold">✗</span>}
    </button>
  );
};

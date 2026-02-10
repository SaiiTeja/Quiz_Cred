import { cn } from "@/lib/utils";

const variantColors = {
  A: {
    base: "border-quiz-option-a/30 hover:border-quiz-option-a",
    selected: "border-quiz-option-a bg-quiz-option-a/10",
    label: "bg-quiz-option-a",
  },
  B: {
    base: "border-quiz-option-b/30 hover:border-quiz-option-b",
    selected: "border-quiz-option-b bg-quiz-option-b/10",
    label: "bg-quiz-option-b",
  },
  C: {
    base: "border-quiz-option-c/30 hover:border-quiz-option-c",
    selected: "border-quiz-option-c bg-quiz-option-c/10",
    label: "bg-quiz-option-c text-background",
  },
  D: {
    base: "border-quiz-option-d/30 hover:border-quiz-option-d",
    selected: "border-quiz-option-d bg-quiz-option-d/10",
    label: "bg-quiz-option-d",
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
        "quiz-option w-full p-4 md:p-5 rounded-xl border-2 text-left opacity-0 fade-in-up",
        "flex items-center gap-4 transition-all duration-300",
        colors.base,
        isSelected && !isCorrect && !isIncorrect && colors.selected,
        isCorrect && "border-quiz-correct bg-quiz-correct/10",
        isIncorrect && "border-quiz-incorrect bg-quiz-incorrect/10 shake-animation",
        isDisabled && "opacity-50 cursor-not-allowed hover:scale-100 hover:translate-y-0"
      )}
    >
      <span
        className={cn(
          "w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center",
          "font-bold text-lg transition-transform duration-300",
          colors.label,
          isSelected && "scale-110"
        )}
      >
        {label}
      </span>
      <span className="flex-1 font-medium text-sm md:text-base">{text}</span>
    </button>
  );
};

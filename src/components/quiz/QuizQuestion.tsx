import { useState, useEffect } from "react";
import { QuizOption } from "./QuizOption";
import { QuizProgress } from "./QuizProgress";
import { QuizTimer } from "./QuizTimer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Lightbulb } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: { label: string; text: string; variant: "A" | "B" | "C" | "D" }[];
  correctAnswer: string;
  hint?: string;
}

interface QuizQuestionProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  answeredQuestions: number[];
  timeLeft: number;
  totalTime: number;
  onAnswer: (answer: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  onBack: () => void;
}

export const QuizQuestion = ({
  question,
  currentQuestion,
  totalQuestions,
  answeredQuestions,
  timeLeft,
  totalTime,
  onAnswer,
  onNext,
  onPrevious,
  onBack,
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const isWarning = timeLeft <= 30;

  useEffect(() => {
    setSelectedAnswer(null);
    setShowHint(false);
  }, [question.id]);

  const handleSelect = (label: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(label);
    onAnswer(label);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="w-fit hover:bg-secondary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Exit Quiz
          </Button>
          <QuizTimer timeLeft={timeLeft} totalTime={totalTime} isWarning={isWarning} />
        </div>

        {/* Progress */}
        <QuizProgress
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
          answeredQuestions={answeredQuestions}
        />

        {/* Question */}
        <div className="glass-card p-6 md:p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight opacity-0 fade-in-up">
              {question.question}
            </h2>
            
            {question.hint && (
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Lightbulb className="w-4 h-4" />
                {showHint ? "Hide hint" : "Show hint"}
              </button>
            )}
            
            {showHint && question.hint && (
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-sm text-muted-foreground fade-in-up">
                💡 {question.hint}
              </div>
            )}
          </div>

          {/* Options */}
          <div className="grid gap-3 md:gap-4">
            {question.options.map((option, index) => (
              <QuizOption
                key={option.label}
                {...option}
                isSelected={selectedAnswer === option.label}
                onClick={() => handleSelect(option.label)}
                isDisabled={!!selectedAnswer}
                animationDelay={`${0.1 + index * 0.1}s`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-4">
            <Button
              variant="outline"
              onClick={onPrevious}
              disabled={currentQuestion === 1}
              className="hover:bg-secondary/80 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={onNext}
              disabled={!selectedAnswer}
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-[0_4px_16px_-4px_hsl(var(--primary)/0.4)]"
            >
              {currentQuestion === totalQuestions ? "Finish" : "Next"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";
import { QuizOption } from "./QuizOption";
import { QuizProgress } from "./QuizProgress";
import { QuizTimer } from "./QuizTimer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

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
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const isWarning = timeLeft <= 30;

  useEffect(() => {
    setSelectedAnswer(null);
    setShowHint(false);
  }, [question.id]);

  const handleSelect = (label) => {
    if (selectedAnswer) return;
    setSelectedAnswer(label);
    onAnswer(label);
  };

  const isAnswered = !!selectedAnswer;
  const correctAnswer = question.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[#0f1a2e] to-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 fade-in-up">
          <Button
            variant="ghost"
            onClick={onBack}
            className="w-fit text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Exit Quiz
          </Button>
          <QuizTimer timeLeft={timeLeft} totalTime={totalTime} isWarning={isWarning} />
        </div>

        {/* Progress */}
        <div className="fade-in-up stagger-1">
          <QuizProgress
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            answeredQuestions={answeredQuestions}
          />
        </div>

        {/* Question */}
        <div className="glass-card p-6 md:p-8 space-y-6 fade-in-up stagger-2 border border-primary/30">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
              Question {currentQuestion} of {totalQuestions}
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
              {question.question}
            </h2>
            
            {question.hint && (
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
              >
                <Lightbulb className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {showHint ? "Hide hint" : "Show hint"}
              </button>
            )}
            
            {showHint && question.hint && (
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/30 text-sm text-muted-foreground fade-in-up">
                <span className="text-accent font-semibold mr-2">💡</span>{question.hint}
              </div>
            )}
          </div>

          {/* Options */}
          <div className="grid gap-3 md:gap-4 mt-6">
            {question.options.map((option, index) => (
              <QuizOption
                key={option.label}
                {...option}
                isSelected={selectedAnswer === option.label}
                isCorrect={isAnswered && option.label === correctAnswer}
                isIncorrect={isAnswered && selectedAnswer === option.label && option.label !== correctAnswer}
                onClick={() => handleSelect(option.label)}
                isDisabled={!!selectedAnswer}
                animationDelay={`${0.1 + index * 0.1}s`}
              />
            ))}
          </div>

          {/* Feedback */}
          {isAnswered && (
            <div className={cn(
              "p-4 rounded-lg border-2 text-center fade-in-up transform transition-all duration-300",
              selectedAnswer === correctAnswer
                ? "bg-quiz-correct/10 border-quiz-correct text-quiz-correct scale-100"
                : "bg-quiz-incorrect/10 border-quiz-incorrect text-quiz-incorrect scale-100 animate-shake"
            )}>
              <p className="font-bold text-lg">
                {selectedAnswer === correctAnswer ? "✓ Correct Answer!" : "✗ Incorrect"}
              </p>
              {selectedAnswer !== correctAnswer && (
                <p className="text-sm mt-2 opacity-90">
                  The correct answer is: <span className="font-bold">{correctAnswer}</span>
                </p>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-primary/10 gap-4">
            <Button
              variant="outline"
              onClick={onPrevious}
              disabled={currentQuestion === 1}
              className="hover:bg-primary/10 border-primary/30 text-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="text-sm text-muted-foreground font-medium">
              {currentQuestion} / {totalQuestions}
            </div>

            <Button
              onClick={onNext}
              disabled={!selectedAnswer}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === totalQuestions ? "Finish Quiz" : "Next Question"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

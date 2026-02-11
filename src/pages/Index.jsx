import { useState, useEffect } from "react";

import { QuizCard } from "../components/quiz/QuizCard";
import { QuizQuestion } from "../components/quiz/QuizQuestion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

import { Search, BookOpen, Flame, Trophy, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";


const quizzes = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Test your knowledge of JavaScript basics including variables, functions, and control flow.",
    questionsCount: 10,
    duration: "15 min",
    participants: 2340,
    difficulty: "Easy",
    category: "Programming",
    isNew: true,
  },
  {
    id: 2,
    title: "React Advanced Patterns",
    description: "Challenge yourself with advanced React patterns, hooks, and performance optimization techniques.",
    questionsCount: 15,
    duration: "25 min",
    participants: 1205,
    difficulty: "Hard",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Web Security Essentials",
    description: "Learn about common security vulnerabilities and best practices for web applications.",
    questionsCount: 12,
    duration: "20 min",
    participants: 890,
    difficulty: "Medium",
    category: "Security",
    isNew: true,
  },
  {
    id: 4,
    title: "CSS Mastery Challenge",
    description: "From flexbox to grid, animations to custom properties - prove your CSS expertise.",
    questionsCount: 10,
    duration: "15 min",
    participants: 1567,
    difficulty: "Medium",
    category: "Frontend",
  },
  {
    id: 5,
    title: "TypeScript Deep Dive",
    description: "Advanced TypeScript concepts including generics, utility types, and type guards.",
    questionsCount: 12,
    duration: "20 min",
    participants: 743,
    difficulty: "Hard",
    category: "Programming",
  },
  {
    id: 6,
    title: "Git & Version Control",
    description: "Master Git commands, branching strategies, and collaborative workflows.",
    questionsCount: 8,
    duration: "10 min",
    participants: 3102,
    difficulty: "Easy",
    category: "DevOps",
  },
];

const sampleQuestions = [
  {
    id: 1,
    question: "What is the correct way to declare a constant variable in JavaScript?",
    options: [
      { label: "A", text: "var constant = 10;", variant: "A" },
      { label: "B", text: "const value = 10;", variant: "B" },
      { label: "C", text: "let constant = 10;", variant: "C" },
      { label: "D", text: "constant value = 10;", variant: "D" },
    ],
    correctAnswer: "B",
    hint: "Think about which keyword prevents reassignment.",
  },
  {
    id: 2,
    question: "Which method is used to add an element at the end of an array?",
    options: [
      { label: "A", text: "array.unshift()", variant: "A" },
      { label: "B", text: "array.append()", variant: "B" },
      { label: "C", text: "array.push()", variant: "C" },
      { label: "D", text: "array.add()", variant: "D" },
    ],
    correctAnswer: "C",
    hint: "This method 'pushes' the element to the end.",
  },
  {
    id: 3,
    question: "What does the '===' operator check in JavaScript?",
    options: [
      { label: "A", text: "Value only", variant: "A" },
      { label: "B", text: "Type only", variant: "B" },
      { label: "C", text: "Value and type", variant: "C" },
      { label: "D", text: "Reference equality", variant: "D" },
    ],
    correctAnswer: "C",
  },
];

const Index = () => {
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (activeQuiz === null) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setShowResults(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeQuiz]);

  const handleStartQuiz = (quizId) => {
    setActiveQuiz(quizId);
    setCurrentQuestion(1);
    setAnswers({});
    setShowResults(false);
    setTimeLeft(900);
  };

  const handleAnswer = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    sampleQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const filteredQuizzes = quizzes.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (activeQuiz !== null && showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / sampleQuestions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-[#0f1a2e] to-background pt-24 p-4 md:p-8 flex items-center justify-center">
        <div className="max-w-2xl w-full space-y-8">
          <div className="glass-card p-8 md:p-10 space-y-6 border border-primary/30 fade-in-up">
            <div className="text-center space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient">Quiz Complete!</h1>
              <p className="text-muted-foreground text-lg">Great effort! Here's how you performed.</p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="text-7xl md:text-8xl font-bold text-primary scale-in stagger-1">{percentage}%</div>
              <p className="text-xl text-foreground fade-in-up stagger-2">
                You scored <span className="font-bold text-primary">{score}</span> out of <span className="font-bold text-accent">{sampleQuestions.length}</span>
              </p>
            </div>

            <div className={cn(
              "p-5 rounded-lg border-2 fade-in-up stagger-3 transition-all duration-300",
              percentage >= 70 
                ? "bg-quiz-correct/10 border-quiz-correct" 
                : percentage >= 50
                ? "bg-accent/10 border-accent"
                : "bg-quiz-incorrect/10 border-quiz-incorrect"
            )}>
              <p className={cn(
                "font-bold text-lg text-center transition-colors",
                percentage >= 70 ? "text-quiz-correct" : percentage >= 50 ? "text-accent" : "text-quiz-incorrect"
              )}>
                {percentage >= 70 ? "🎉 Excellent Performance!" : percentage >= 50 ? "👍 Good Job!" : "📚 Keep Learning!"}
              </p>
              <p className="text-sm text-muted-foreground text-center mt-2">
                {percentage >= 70 
                  ? "You've mastered this quiz! Great work!"
                  : percentage >= 50
                  ? "You did well! Review the topics for full mastery."
                  : "Let's review the material and try again!"}
              </p>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground bg-card/30 p-4 rounded-lg border border-primary/10">
              <div className="flex justify-between items-center fade-in-up stagger-4">
                <span>Total Time:</span>
                <span className="text-foreground font-semibold">{Math.floor((900 - timeLeft) / 60)} min {((900 - timeLeft) % 60)} sec</span>
              </div>
              <div className="flex justify-between items-center fade-in-up stagger-5">
                <span>Questions Answered:</span>
                <span className="text-foreground font-semibold">{Object.keys(answers).length}/{sampleQuestions.length}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-4">
            <Button
              onClick={() => setActiveQuiz(null)}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 text-primary-foreground transition-all duration-300 flex-1 sm:flex-initial py-2 px-6 text-base font-semibold"
            >
              Back to Quizzes
            </Button>
            <Button
              variant="outline"
              onClick={() => handleStartQuiz(activeQuiz)}
              className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 flex-1 sm:flex-initial py-2 px-6 text-base font-semibold"
            >
              Retake Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (activeQuiz !== null) {
    const question = sampleQuestions[currentQuestion - 1];
    const answeredQuestions = Object.keys(answers).map(Number);
    
    return (
      <QuizQuestion
        question={{
          ...question,
          options: question.options.map(opt => ({
            ...opt,
            isCorrect: answers[currentQuestion] === opt.label && opt.label === question.correctAnswer,
            isIncorrect: answers[currentQuestion] === opt.label && opt.label !== question.correctAnswer,
          }))
        }}
        currentQuestion={currentQuestion}
        totalQuestions={sampleQuestions.length}
        answeredQuestions={answeredQuestions}
        timeLeft={timeLeft}
        totalTime={900}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onBack={() => {
          setActiveQuiz(null);
          setAnswers({});
          setShowResults(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[#0f1a2e] to-background pt-20">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }} />
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-sm fade-in-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Challenge yourself with interactive quizzes</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight fade-in-up stagger-1 tracking-tight">
              <span className="text-primary">Master</span>{" "}
              <span className="text-foreground">Your Skills</span>
              <br />
              <span className="text-foreground">One Quiz at a Time</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up stagger-2 leading-relaxed">
              Test your knowledge, track your progress, and compete with others in our engaging quiz platform.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="glass-card p-6 text-center fade-in-up stagger-3 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Quizzes</div>
            </div>
            <div className="glass-card p-6 text-center fade-in-up stagger-4 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">
                <Flame className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-accent">10K+</div>
              <div className="text-sm text-muted-foreground mt-1">Players</div>
            </div>
            <div className="glass-card p-6 text-center fade-in-up stagger-5 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">
                <Trophy className="w-6 h-6 text-quiz-option-c group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-quiz-option-c">95%</div>
              <div className="text-sm text-muted-foreground mt-1">Success</div>
            </div>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-12 fade-in-up stagger-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300" />
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <Input
                  placeholder="Search quizzes by name or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-3 text-base bg-card border-primary/20 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/30 rounded-xl transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="relative max-w-7xl mx-auto px-4 pb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Available Quizzes</h2>
            <p className="text-muted-foreground text-sm md:text-base mt-2">{filteredQuizzes.length} {filteredQuizzes.length === 1 ? 'quiz' : 'quizzes'} found</p>
          </div>
          <Button variant="outline" className="hover:bg-primary/10 border-primary/30 text-primary hover:text-primary transition-all duration-300 hover:border-primary">
            View All
          </Button>
        </div>

        {filteredQuizzes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuizzes.map((quiz, index) => (
              <QuizCard
                key={quiz.id}
                {...quiz}
                onClick={() => handleStartQuiz(quiz.id)}
                animationDelay={`${0.1 + index * 0.1}s`}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg">No quizzes found matching your search.</p>
            <Button 
              variant="outline" 
              onClick={() => setSearchQuery("")}
              className="mt-4 border-primary/30 text-primary hover:bg-primary/10"
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;

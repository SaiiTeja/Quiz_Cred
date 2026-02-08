import { useState, useEffect } from "react";
import { QuizCard } from "@/components/quiz/QuizCard";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Flame, Trophy, Sparkles } from "lucide-react";

const quizzes = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Test your knowledge of JavaScript basics including variables, functions, and control flow.",
    questionsCount: 10,
    duration: "15 min",
    participants: 2340,
    difficulty: "Easy" as const,
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
    difficulty: "Hard" as const,
    category: "Frontend",
  },
  {
    id: 3,
    title: "Web Security Essentials",
    description: "Learn about common security vulnerabilities and best practices for web applications.",
    questionsCount: 12,
    duration: "20 min",
    participants: 890,
    difficulty: "Medium" as const,
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
    difficulty: "Medium" as const,
    category: "Frontend",
  },
  {
    id: 5,
    title: "TypeScript Deep Dive",
    description: "Advanced TypeScript concepts including generics, utility types, and type guards.",
    questionsCount: 12,
    duration: "20 min",
    participants: 743,
    difficulty: "Hard" as const,
    category: "Programming",
  },
  {
    id: 6,
    title: "Git & Version Control",
    description: "Master Git commands, branching strategies, and collaborative workflows.",
    questionsCount: 8,
    duration: "10 min",
    participants: 3102,
    difficulty: "Easy" as const,
    category: "DevOps",
  },
];

const sampleQuestions = [
  {
    id: 1,
    question: "What is the correct way to declare a constant variable in JavaScript?",
    options: [
      { label: "A", text: "var constant = 10;", variant: "A" as const },
      { label: "B", text: "const value = 10;", variant: "B" as const },
      { label: "C", text: "let constant = 10;", variant: "C" as const },
      { label: "D", text: "constant value = 10;", variant: "D" as const },
    ],
    correctAnswer: "B",
    hint: "Think about which keyword prevents reassignment.",
  },
  {
    id: 2,
    question: "Which method is used to add an element at the end of an array?",
    options: [
      { label: "A", text: "array.unshift()", variant: "A" as const },
      { label: "B", text: "array.append()", variant: "B" as const },
      { label: "C", text: "array.push()", variant: "C" as const },
      { label: "D", text: "array.add()", variant: "D" as const },
    ],
    correctAnswer: "C",
    hint: "This method 'pushes' the element to the end.",
  },
  {
    id: 3,
    question: "What does the '===' operator check in JavaScript?",
    options: [
      { label: "A", text: "Value only", variant: "A" as const },
      { label: "B", text: "Type only", variant: "B" as const },
      { label: "C", text: "Value and type", variant: "C" as const },
      { label: "D", text: "Reference equality", variant: "D" as const },
    ],
    correctAnswer: "C",
  },
];

const Index = () => {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(900);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (activeQuiz === null) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeQuiz]);

  const handleStartQuiz = (quizId: number) => {
    setActiveQuiz(quizId);
    setCurrentQuestion(1);
    setAnsweredQuestions([]);
    setTimeLeft(900);
  };

  const handleAnswer = (answer: string) => {
    if (!answeredQuestions.includes(currentQuestion)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestion]);
    }
  };

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setActiveQuiz(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const filteredQuizzes = quizzes.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (activeQuiz !== null) {
    return (
      <QuizQuestion
        question={sampleQuestions[currentQuestion - 1]}
        currentQuestion={currentQuestion}
        totalQuestions={sampleQuestions.length}
        answeredQuestions={answeredQuestions}
        timeLeft={timeLeft}
        totalTime={900}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onBack={() => setActiveQuiz(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float-animation" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: "2s" }} />
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm opacity-0 fade-in-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Challenge yourself with interactive quizzes</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold opacity-0 fade-in-up stagger-1">
              <span className="text-gradient">Master</span> Your Skills
              <br />
              <span className="text-foreground">One Quiz at a Time</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 fade-in-up stagger-2">
              Test your knowledge, track your progress, and compete with others in our engaging quiz platform.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-12 opacity-0 fade-in-up stagger-3">
            <div className="text-center p-4 glass-card">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-xs text-muted-foreground">Quizzes</div>
            </div>
            <div className="text-center p-4 glass-card">
              <div className="flex items-center justify-center mb-2">
                <Flame className="w-5 h-5 text-quiz-option-d" />
              </div>
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-xs text-muted-foreground">Players</div>
            </div>
            <div className="text-center p-4 glass-card">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="w-5 h-5 text-quiz-option-c" />
              </div>
              <div className="text-2xl font-bold">95%</div>
              <div className="text-xs text-muted-foreground">Success</div>
            </div>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-12 opacity-0 fade-in-up stagger-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search quizzes by name or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-base bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Available Quizzes</h2>
          <Button variant="outline" className="hover:bg-secondary/80">
            View All
          </Button>
        </div>

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

        {filteredQuizzes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No quizzes found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;

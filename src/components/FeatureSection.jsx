import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Brain, BarChart3, Trophy, Target, Sparkles } from "lucide-react";

const features = [
  {
    title: "Skill-Based Quizzes",
    description:
      "Practice quizzes designed to evaluate real understanding of concepts across different subjects and topics.",
    icon: Brain,
  },
  {
    title: "Performance Analytics",
    description:
      "Monitor your learning journey with detailed reports, score breakdowns, and progress tracking.",
    icon: BarChart3,
  },
  {
    title: "Leaderboards",
    description:
      "See how you rank among other learners and stay motivated through healthy competition.",
    icon: Trophy,
  },
  {
    title: "Career Insights",
    description:
      "Receive guidance and suggestions based on your performance and learning strengths.",
    icon: Target,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-sm fade-in-up border-muted">
          
              <span className="">Features</span>
            </div>
          <p className="font-semibold text-xl mt-3 max-w-2xl mx-auto">
           Smarter learning with Quizzes, Insights, and Competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(240px,320px))] place-content-center justify-items-center  ">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card
                key={index}
                className="min-w-[240px] max-w-[320px] w-full text-foreground transition-colors duration-200 bg-card hover:scale-[1.01] transition-transform shadow-lg border border-border"
              >
                <CardHeader className="flex items-start gap">
                  <div className="p-2 rounded-md bg-primary/10 ">
                    <Icon className="w-5 h-5  text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

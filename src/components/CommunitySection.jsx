import "../styles/CommunitySection.css";
import { Button } from "@/components/ui/button";

export default function CommunitySection() {
  return (
    <section className="mb-10">
      <div className="max-w-6xl mx-auto text-center bg-blue-950 p-8 rounded-xl flex grid-bg relative overflow-hidden z-1 ">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold tracking-tight text-left">
            Join 1000+ Students <br />
            Preparing for Real Careers
          </h2>
          <p className=" mt-12 max-w-2xl mx-auto text-left">
            QuizCred is more than quizzes. It is a growing community of learners
            competing, collaborating, and building real skills together.
          </p>
          <div className="flex justify-start gap-4 mt-4 flex-wrap">
            <Button
              size="lg"
              className="rounded-full bg-background text-foreground hover:bg-muted"
            >
              Join Community
            </Button>

            <Button
              size="lg"
              variant={"outline"}
              className="bg-unset rounded-full hover:bg-muted/20"
            >
              Follow QuizCred
            </Button>
          </div>
        </div>
        {/* hero image */}
        <div className=" flex-1 w-full h-full absolute top-0 left-0 md:h-auto md:static md:block bg-muted -z-10 grid place-content-center opacity-80 ">
          <div className="text-muted-foreground">hero image come here!</div>
        </div>
      </div>
    </section>
  );
}

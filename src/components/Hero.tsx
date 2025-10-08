import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full text-center animate-slide-up">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-effect-strong">
            MANDEQ MOHAMUD
          </h1>
          <div className="h-1 w-32 bg-primary mx-auto mb-6 animate-glow-pulse"></div>
          <h2 className="text-2xl md:text-4xl text-primary font-semibold mb-4">
            Cybersecurity Analyst
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specializing in threat intelligence, IAM solutions, and commercial law applications in cybersecurity
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(120_100%_50%/0.5)] hover:scale-105"
            onClick={() => scrollToSection("projects")}
          >
            <span className="relative z-10">View Projects</span>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_20px_hsl(120_100%_50%/0.3)] hover:scale-105"
            onClick={() => scrollToSection("contact")}
          >
            <span className="relative z-10">Get In Touch</span>
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/Mandeq-Mohamud"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-card rounded-full hover:bg-primary/20 transition-all duration-300 hover:shadow-[0_0_20px_hsl(120_100%_50%/0.4)] hover:scale-110 card-glow"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mandeq-mohamud"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-card rounded-full hover:bg-primary/20 transition-all duration-300 hover:shadow-[0_0_20px_hsl(120_100%_50%/0.4)] hover:scale-110 card-glow"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

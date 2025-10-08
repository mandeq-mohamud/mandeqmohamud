import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Certifications />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-primary/20">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Mandeq Mohamud. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Index;

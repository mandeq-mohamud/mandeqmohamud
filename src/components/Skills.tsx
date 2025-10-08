import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "Threat Intelligence Analysis", level: 90 },
  { name: "Identity & Access Management (IAM)", level: 85 },
  { name: "Security Assessment & Auditing", level: 88 },
  { name: "Phishing Detection & Prevention", level: 92 },
  { name: "Incident Response", level: 85 },
  { name: "Risk Management", level: 87 },
  { name: "Cybersecurity Law & Compliance", level: 83 },
  { name: "Network Security", level: 86 },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-effect">
          Core Skills
        </h2>
        <div className="grid gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-card rounded-xl p-6 card-glow border border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between mb-3">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-primary font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1500 ease-out ${
                    isVisible ? "animate-skill-load" : "w-0"
                  }`}
                  style={
                    {
                      "--skill-width": `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`,
                    } as React.CSSProperties
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

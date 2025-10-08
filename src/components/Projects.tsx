import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Metasploitable 3 Penetration Test",
    description: "Comprehensive security assessment of Metasploitable 3 Ubuntu 14.04 infrastructure. Identified critical vulnerabilities including exposed services, weak authentication mechanisms, and data leakage. Delivered detailed executive report with risk analysis and remediation strategies for business stakeholders.",
    technologies: ["Penetration Testing", "Vulnerability Assessment", "Network Security", "Risk Analysis"],
    githubUrl: "https://github.com/mandeq-mohamud",
    lastUpdated: "September 2025",
  },
  {
    title: "Enterprise Penetration Testing Reports",
    description: "Professional penetration testing engagements demonstrating real-world security assessment methodologies. Includes detailed findings, risk ratings, exploitation techniques, and comprehensive remediation recommendations aligned with industry best practices and compliance standards.",
    technologies: ["Red Team Operations", "Security Auditing", "Compliance", "Report Writing"],
    githubUrl: "https://github.com/mandeq-mohamud",
    lastUpdated: "2025",
  },
  {
    title: "CTF Walkthroughs",
    description: "A comprehensive repository documenting my journey through Capture The Flag (CTF) challenges. Each walkthrough breaks down the challenge step-by-step, covering various cybersecurity domains including web exploitation, cryptography, forensics, and reverse engineering.",
    technologies: ["CTF", "Web Exploitation", "Cryptography", "Forensics"],
    githubUrl: "https://github.com/mandeq-mohamud/CTF-walkthroughs",
    lastUpdated: "September 2025",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-effect">
          Featured Projects
        </h2>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 card-glow hover:scale-[1.02] group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                      {project.title}
                      <Github className="w-6 h-6 text-primary" />
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Last updated: {project.lastUpdated}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(120_100%_50%/0.5)] hover:scale-105 group"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import arcXImage from "@/assets/arc_x.jpg";
import tataCert from "@/assets/tata-cert.jpg";
import mastercardCert from "@/assets/mastercard-cert.jpg";
import deloitteCert from "@/assets/deloitte-cert.jpg";
import clydeCert from "@/assets/clyde-cert.jpg";
import bowmansCert from "@/assets/bowmans-cert.jpg";
import hpLifeCert from "@/assets/hp-life-cert.jpg";

const certifications = [
  {
    title: "Cyber Threat Intelligence 101",
    organization: "arcX",
    date: "November 2025",
    description: "Foundation Level Threat Intelligence Analyst Certification",
    skills: ["Threat Intelligence", "Cyber Threat Analysis", "Security Research"],
    image: arcXImage,
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    organization: "Tata Consultancy Services",
    date: "October 2025",
    description: "Identity and access management (IAM) fundamentals, IAM strategy assessment, crafting custom IAM solutions, and platform integration",
    skills: ["IAM", "Access Control", "Platform Integration", "Security Strategy"],
    image: tataCert,
  },
  {
    title: "Cybersecurity Job Simulation",
    organization: "Mastercard",
    date: "October 2025",
    description: "Designed phishing email simulations and interpreted phishing simulation results",
    skills: ["Phishing Detection", "Social Engineering", "Security Awareness"],
    image: mastercardCert,
  },
  {
    title: "Cyber Job Simulation",
    organization: "Deloitte",
    date: "October 2025",
    description: "Completed practical cybersecurity tasks and assessments",
    skills: ["Cybersecurity", "Risk Assessment", "Security Consulting"],
    image: deloitteCert,
  },
  {
    title: "Commercial Law Job Simulation",
    organization: "Clyde & Co",
    date: "October 2025",
    description: "Reviewed building contracts, drafted variations, assessed IP law implications of AI, and prepared presentations on governing law and jurisdiction",
    skills: ["Commercial Law", "Contract Review", "IP Law", "AI Compliance"],
    image: clydeCert,
  },
  {
    title: "Kenya Commercial Law Job Simulation",
    organization: "Bowmans",
    date: "October 2025",
    description: "Real estate financing, company reorganization, demand letters, IP due diligence, and employment law",
    skills: ["Commercial Law", "Due Diligence", "Employment Law", "Real Estate Law"],
    image: bowmansCert,
  },
  {
    title: "AI for Business Professionals",
    organization: "HP LIFE",
    date: "August 2025",
    description: "Learned about AI's role in business, crafting effective prompts, ethical use, and professional growth",
    skills: ["AI", "Business Intelligence", "Ethics", "Professional Development"],
    image: hpLifeCert,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-effect">
          Certifications & Training
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 card-glow hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                {cert.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex items-start justify-between">
                  <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-xl mt-2">{cert.title}</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  {cert.organization} • {cert.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

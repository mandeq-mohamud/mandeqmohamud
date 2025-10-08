import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Cyber Threat Intelligence 101",
    organization: "arcX",
    date: "November 2025",
    description: "Foundation Level Threat Intelligence Analyst Certification",
    skills: ["Threat Intelligence", "Cyber Threat Analysis", "Security Research"],
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    organization: "Tata Consultancy Services",
    date: "October 2025",
    description: "Identity and access management (IAM) fundamentals, IAM strategy assessment, crafting custom IAM solutions, and platform integration",
    skills: ["IAM", "Access Control", "Platform Integration", "Security Strategy"],
    certificateUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_68e593e099e508cb70314a32_1759878921191_completion_certificate.pdf",
  },
  {
    title: "Cybersecurity Job Simulation",
    organization: "Mastercard",
    date: "October 2025",
    description: "Designed phishing email simulations and interpreted phishing simulation results",
    skills: ["Phishing Detection", "Social Engineering", "Security Awareness"],
    certificateUrl: "https://www.theforage.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_68e593e099e508cb70314a32_1759877935952_completion_certificate.pdf",
  },
  {
    title: "Cyber Job Simulation",
    organization: "Deloitte",
    date: "October 2025",
    description: "Completed practical cybersecurity tasks and assessments",
    skills: ["Cybersecurity", "Risk Assessment", "Security Consulting"],
    certificateUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_68e593e099e508cb70314a32_1759876796518_completion_certificate.pdf",
  },
  {
    title: "Commercial Law Job Simulation",
    organization: "Clyde & Co",
    date: "October 2025",
    description: "Reviewed building contracts, drafted variations, assessed IP law implications of AI, and prepared presentations on governing law and jurisdiction",
    skills: ["Commercial Law", "Contract Review", "IP Law", "AI Compliance"],
    certificateUrl: "https://www.theforage.com/completion-certificates/KyNNo9RWfY2FF3pNs/QBfhTrfzu53YDvH3A_KyNNo9RWfY2FF3pNs_68e593e099e508cb70314a32_1759916284816_completion_certificate.pdf",
  },
  {
    title: "Kenya Commercial Law Job Simulation",
    organization: "Bowmans",
    date: "October 2025",
    description: "Real estate financing, company reorganization, demand letters, IP due diligence, and employment law",
    skills: ["Commercial Law", "Due Diligence", "Employment Law", "Real Estate Law"],
    certificateUrl: "https://www.theforage.com/completion-certificates/GhYyk7wXCfkSs36Kh/gSWQJD8MbffSrqG8b_GhYyk7wXCfkSs36Kh_68e593e099e508cb70314a32_1759879987559_completion_certificate.pdf",
  },
  {
    title: "AI for Business Professionals",
    organization: "HP LIFE",
    date: "August 2025",
    description: "Learned about AI's role in business, crafting effective prompts, ethical use, and professional growth",
    skills: ["AI", "Business Intelligence", "Ethics", "Professional Development"],
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
                <div className="flex items-start justify-between">
                  <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  {cert.certificateUrl && (
                    <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <CardTitle className="text-xl mt-2">
                  {cert.certificateUrl ? (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors cursor-pointer hover:underline inline-flex items-center gap-2"
                    >
                      {cert.title}
                    </a>
                  ) : (
                    cert.title
                  )}
                </CardTitle>
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

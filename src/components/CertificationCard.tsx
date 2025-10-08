import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Calendar, Award } from "lucide-react";
import { toast } from "sonner";

interface CertificationCardProps {
  title: string;
  organization: string;
  date: string;
  category: "cybersecurity" | "law";
  tasks: string[];
  certificateUrl: string;
  verificationCode?: string;
}

export const CertificationCard = ({
  title,
  organization,
  date,
  category,
  tasks,
  certificateUrl,
  verificationCode,
}: CertificationCardProps) => {
  const handleDownload = () => {
    window.open(certificateUrl, '_blank');
    toast.success("Opening certificate...");
  };

  const handleCopyCode = () => {
    if (verificationCode) {
      navigator.clipboard.writeText(verificationCode);
      toast.success("Verification code copied!");
    }
  };

  const categoryColors = {
    cybersecurity: "from-primary to-accent",
    law: "from-secondary to-secondary/80",
  };

  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
      {/* Gradient accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${categoryColors[category]}`} />
      
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Award className={`w-5 h-5 ${category === 'cybersecurity' ? 'text-primary' : 'text-secondary'}`} />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {category === 'cybersecurity' ? 'Cybersecurity' : 'Commercial Law'}
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground font-medium mt-1">{organization}</p>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>

        {/* Tasks */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">Key Competencies:</p>
          <ul className="space-y-1.5">
            {tasks.map((task, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="flex-1">{task}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Verification Code */}
        {verificationCode && (
          <div className="pt-4 border-t border-border">
            <button
              onClick={handleCopyCode}
              className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Verification: {verificationCode}</span>
            </button>
          </div>
        )}

        {/* Actions */}
        <div className="pt-4">
          <Button
            variant="download"
            className="w-full"
            onClick={handleDownload}
          >
            <Download className="w-4 h-4" />
            Download Certificate
          </Button>
        </div>
      </div>
    </Card>
  );
};

import { Shield, Scale, Mail, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <Scale className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Mandeq Mohamud</h3>
            <p className="text-sm text-muted-foreground">
              Cybersecurity Analyst & Commercial Law Professional
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#certifications"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:contact@example.com"
                className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mandeq Mohamud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

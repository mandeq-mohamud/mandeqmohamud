import { Shield, Lock, Terminal, Database, Globe, FileSearch, AlertTriangle, Key } from "lucide-react";

const tools = [
  { name: "Wireshark", icon: Globe },
  { name: "Metasploit", icon: Terminal },
  { name: "Burp Suite", icon: Shield },
  { name: "Nmap", icon: FileSearch },
  { name: "Splunk", icon: Database },
  { name: "SIEM Tools", icon: AlertTriangle },
  { name: "IAM Platforms", icon: Key },
  { name: "Encryption Tools", icon: Lock },
];

const Tools = () => {
  return (
    <section id="tools" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-effect">
          Tools & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="bg-card rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-primary/10 transition-all duration-300 card-glow border border-primary/20 hover:scale-105 hover:shadow-[0_0_30px_hsl(187_100%_50%/0.3)] cursor-pointer group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <tool.icon className="w-12 h-12 text-primary group-hover:animate-float" />
              <span className="text-center font-semibold">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;

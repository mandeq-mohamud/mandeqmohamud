import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageSquare } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    // In a real application, you would send this to a backend service
    toast({
      title: "Message Received!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-effect">
          Get In Touch
        </h2>
        <Card className="bg-card border-primary/20 card-glow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
            </div>
            <CardDescription className="text-lg">
              Have a question or want to discuss a project? Feel free to reach out!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-muted border-primary/30 focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-muted border-primary/30 focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your inquiry..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-muted border-primary/30 focus:border-primary transition-colors min-h-[150px]"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(120_100%_50%/0.5)] hover:scale-105 group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;

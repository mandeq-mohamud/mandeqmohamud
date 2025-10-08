const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-effect">
          About Me
        </h2>
        <div className="bg-card rounded-2xl p-8 md:p-12 card-glow border border-primary/20">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            As a dedicated Cybersecurity Analyst, I specialize in threat intelligence analysis, 
            identity and access management (IAM), and the intersection of cybersecurity with commercial law. 
            My expertise spans across multiple domains including phishing simulation, security assessment, 
            and implementing robust IAM strategies.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I have completed intensive job simulations with leading organizations including Tata, Mastercard, 
            Deloitte, Clyde & Co, and Bowmans, where I've gained practical experience in real-world 
            cybersecurity challenges and commercial law applications.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My approach combines technical proficiency with a deep understanding of legal frameworks, 
            enabling me to develop comprehensive security solutions that align with both technical 
            requirements and regulatory compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Briefcase, Code, Database, Landmark, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Back-End Developer & Tech Enthusiast 
            </h3>

            <p className="text-muted-foreground">
              With over 2 years of experience in software development, 
              I help businesses scale by designing reliable and high-performance backend solutions. 
              Focused on building robust APIs, microservices, and distributed systems, I create architectures that ensure scalability, 
              maintainability, and seamless communication between services.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating solutions to complex problems, and 
              I'm constantly learning new technologies and techniques to stay at the forefront 
              of the ever-evolving backend and software architecture landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/public/Caique_Nascimento_Dev_Junior.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Back-End Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable APIs and backend applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Landmark className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Architecture</h4>
                  <p className="text-muted-foreground">
                    Designing scalable, maintainable, and resilient backend architectures with a focus on microservices,
                    distributed systems, and event-driven solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Engineering & Messaging</h4>
                  <p className="text-muted-foreground">
                    Building reliable data pipelines and real-time processing workflows, 
                    ensuring data integrity, availability, and seamless communication between systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
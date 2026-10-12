import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Section from '@/components/Section';
import { Server, Database, Code, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      description: "Core expertise in server-side development",
      skills: ["Django", "Django REST Framework", "Flask", "Python", "REST APIs"]
    },
    {
      title: "Database & APIs",
      icon: <Database className="h-6 w-6" />,
      description: "Database design and API development",
      skills: ["PostgreSQL", "MySQL", "SQLite", "REST API Design", "Test-Driven Development"]
    },
    {
      title: "Frontend Technologies",
      icon: <Code className="h-6 w-6" />,
      description: "Frontend technologies for full-stack development",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Responsive Design", "Tailwind CSS"]
    },
    {
      title: "Tools & Methodologies",
      icon: <Globe className="h-6 w-6" />,
      description: "Development tools and practices",
      skills: ["Git", "Vercel", "DigitalOcean", "AWS", "Agile", "Performance Optimization"]
    }
  ];

  return (
    <Section as="section" className="py-20 px-4 bg-background" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="skills-heading" className="text-4xl font-bold mb-4">Why Businesses Trust DonLabs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional web development agency with proven expertise in modern technologies. We deliver reliable, secure, and scalable solutions that help businesses grow their digital presence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-accent text-accent-foreground font-mono text-sm"
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
    </Section>
  );
};

export default Skills;
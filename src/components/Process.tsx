import { Search, LayoutList, PenTool, Code, Rocket } from "lucide-react";
import { Hexagon, Calendar, Check } from 'lucide-react';
import Section from '@/components/Section';

const steps = [
  { title: 'Discovery & Strategy', icon: <Search className="h-6 w-6" />, desc: 'Understand goals, audience and business needs.' },
  { title: 'Planning & Structure', icon: <LayoutList className="h-6 w-6" />, desc: 'Sitemaps, wireframes and a clear project plan.' },
  { title: 'Design & Prototyping', icon: <PenTool className="h-6 w-6" />, desc: 'Pixel-perfect UI and interactive prototypes for review.' },
  { title: 'Development', icon: <Code className="h-6 w-6" />, desc: 'Robust, tested, and responsive implementations.' },
  { title: 'Launch & Support', icon: <Rocket className="h-6 w-6" />, desc: 'Deploy and provide ongoing maintenance and improvements.' }
];

const Process = () => {
  return (
    <Section as="section" className="py-24 px-4 bg-gradient-to-b from-accent/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">From Idea to Launch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A proven 5-step process that delivers results on time, every time</p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative text-center">
                <div className="group p-6 bg-card border-2 border-border rounded-2xl transition-all duration-300 hover:shadow-hover hover:-translate-y-2 hover:border-primary">
                  <div className="mx-auto mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary font-bold text-lg group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <div className="mx-auto mb-4 inline-flex items-center justify-center w-12 h-12 text-primary">{s.icon}</div>
                  <h3 className="font-bold text-sm mb-3 leading-tight">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Process;

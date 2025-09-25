import { Search, LayoutList, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  { title: 'Discovery & Strategy', icon: <Search className="h-6 w-6" />, desc: 'Understand goals, audience and business needs.' },
  { title: 'Planning & Structure', icon: <LayoutList className="h-6 w-6" />, desc: 'Sitemaps, wireframes and a clear project plan.' },
  { title: 'Design & Prototyping', icon: <PenTool className="h-6 w-6" />, desc: 'Pixel-perfect UI and interactive prototypes for review.' },
  { title: 'Development', icon: <Code className="h-6 w-6" />, desc: 'Robust, tested, and responsive implementations.' },
  { title: 'Launch & Support', icon: <Rocket className="h-6 w-6" />, desc: 'Deploy and provide ongoing maintenance and improvements.' }
];

const Process = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How I work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">A clear, repeatable process to move from idea to launched product.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="text-center p-4 bg-card border border-border rounded-lg">
              <div className="mx-auto mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">{s.icon}</div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

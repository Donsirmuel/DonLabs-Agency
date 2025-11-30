import Section from '@/components/Section';

const WhyChooseUs = () => {
  return (
    <Section as="section" className="py-24 px-4" aria-labelledby="why-choose">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Why Choose DonLabs
          </div>
          <h2 id="why-choose" className="text-4xl md:text-5xl font-bold mb-4">Built for Growth</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Partner with a development agency with a proven track record of understanding businesses and audiences, and growing their digital presence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 bg-gradient-to-br from-card to-accent/5 border-2 border-border rounded-2xl transition-all duration-300 hover:shadow-hover hover:-translate-y-2 hover:border-primary/50">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <div className="w-6 h-6 rounded-lg bg-primary"></div>
            </div>
            <h3 className="font-bold text-xl mb-3">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">Deliver simple, reliable web products that help businesses sell and operate better.</p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-card to-accent/5 border-2 border-border rounded-2xl transition-all duration-300 hover:shadow-hover hover:-translate-y-2 hover:border-primary/50">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-primary-hover"></div>
            </div>
            <h3 className="font-bold text-xl mb-3">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">To be the trusted technical partner for growing businesses across Africa and remote clients, helping them scale with modern web platforms.</p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-card to-accent/5 border-2 border-border rounded-2xl transition-all duration-300 hover:shadow-hover hover:-translate-y-2 hover:border-primary/50">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500"></div>
            </div>
            <h3 className="font-bold text-xl mb-3">Ideal Clients</h3>
            <p className="text-muted-foreground leading-relaxed">Startups, fashion brands, SMEs, SaaS companies, NGOs, and real estate businesses who need measurable results from their web presence.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;

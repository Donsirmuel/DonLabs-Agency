import Section from '@/components/Section';

const WhyChooseUs = () => {
  return (
    <Section as="section" className="py-16 px-4" aria-labelledby="why-choose">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 id="why-choose" className="text-3xl font-bold">Why work with me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Mission, approach and the kinds of businesses I partner with.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-sm text-muted-foreground">Deliver simple, reliable web products that help businesses sell and operate better.</p>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="font-semibold mb-2">Vision</h3>
            <p className="text-sm text-muted-foreground">To be the trusted technical partner for growing Nigerian businesses, helping them scale with modern web platforms.</p>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="font-semibold mb-2">Who I work with</h3>
            <p className="text-sm text-muted-foreground">Personal Brand & Business-inclined Startups, Fashion boutiques and growing retailers, SME's, Tech MVP's & SaaS Companies, NGO's & Educational Platforms and Real Estate & Property Brands who need practical, measurable results from their web presence to create practical systems that scale and optimize Productivity and Growth.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;

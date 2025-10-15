import { ASSETS } from '@/lib/assets';
import Section from '@/components/Section';

const AboutSnippet = () => {
  return (
    <Section as="section" className="py-16 px-4 bg-muted/10" aria-labelledby="about-me">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 id="about-me" className="text-3xl font-bold mb-4">About Samuel</h2>
          <p className="text-sm text-muted-foreground">I build web products focused on results - faster pages, reliable payments, and admin tools that save time with a keen eye for detail and a love for crafting seamless digital experiences, creativity and functionality seamlessly intertwined to bring about optimized productivity.</p>
          <p className="text-sm text-muted-foreground"> I work with Personal Brand & Business-inclined Startups, Fashion boutiques and growing retailers, Tech MVP's & SaaS Companies, NGO's & Educational Platforms and Real Estate & Property Brands who need practical, measurable results from their web presence to create practical systems that scale and optimize Productivity and Growth.</p>
          <p className="text-sm text-muted-foreground">When you work with me you get clear milestones, regular check-ins, and a focus on measurable results. I code with Django on the backend and React on the frontend, with PostgreSQL and containerized deployments for production.</p>
        </div>

        <div className="rounded-lg overflow-hidden bg-card p-4">
          <img src={ASSETS.profileImage} alt="Samuel" className="w-full h-56 object-cover rounded-md shadow" />
        </div>
      </div>
    </Section>
  );
};

export default AboutSnippet;

import { ASSETS } from '@/lib/assets';

const AboutSnippet = () => {
  return (
    <section className="py-16 px-4 bg-muted/10" aria-labelledby="about-me">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 id="about-me" className="text-3xl font-bold mb-4">About Samuel</h2>
          <p className="text-lg text-muted-foreground mb-4">I build web products focused on results — faster pages, reliable payments, and admin tools that save time. I work with startups, boutiques and growing retailers to create practical systems that scale.</p>
          <p className="text-sm text-muted-foreground">When you work with me you get clear milestones, regular check-ins, and a focus on measurable results. I code with Django on the backend and React on the frontend, with PostgreSQL and containerized deployments for production.</p>
        </div>

        <div className="rounded-lg overflow-hidden bg-card p-4">
          <img src={ASSETS.profileImage} alt="Samuel" className="w-full h-56 object-cover rounded-md shadow" />
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;

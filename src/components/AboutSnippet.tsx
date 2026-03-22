import { ASSETS } from '@/lib/assets';
import Section from '@/components/Section';

const AboutSnippet = () => {
  return (
    <Section as="section" className="py-16 px-4 bg-muted/10" aria-labelledby="about-me">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 id="about-me" className="text-3xl font-bold mb-4">About DonLabs</h2>
          <p className="text-sm text-muted-foreground">We build web products focused on results — faster pages, reliable payments, and admin tools that save time. Our approach combines attention to detail with thoughtful design to create seamless digital experiences that improve productivity and conversions.</p>
          <p className="text-sm text-muted-foreground">We work with personal brands, startups, fashion boutiques, retailers, SaaS companies, NGOs, educational platforms, and real estate brands who need practical, measurable results from their web presence.</p>
          <p className="text-sm text-muted-foreground">When you work with DonLabs you get clear milestones, regular check-ins, and a focus on measurable results. We use trusted tools for the backend and frontend so your website stays stable and easy to grow.</p>
        </div>

        <div className="rounded-lg overflow-hidden bg-card p-4">
          <img src={ASSETS.logoFull} alt="DonLabs logo" className="w-full h-56 object-cover rounded-md shadow" />
        </div>
      </div>
    </Section>
  );
};

export default AboutSnippet;

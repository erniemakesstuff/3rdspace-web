
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';

export default function AboutUsPage() {
  const values = [
    "Arete/excellence/virtue",
    "Consent",
    "Trust and Consent are first class problems",
    "Transparency",
    "Envision the future - we look beyond proxy metrics"
  ];

  const techPrinciples = [
    {
      title: "Informed, Ongoing Consent",
      points: [
        "Consent is not a checkbox—it’s a continuous, transparent process.",
        "We will always clearly explain how a technology works, what data it uses, and what outcomes it affects.",
        "Participation in AI-driven or tech-enabled features will always be opt-in, not opt-out.",
        "Consent can be withdrawn at any time, without penalty or pressure."
      ]
    },
    {
      title: "Respect for Privacy",
      points: [
        "We believe privacy is a human right, not a product feature.",
        "We collect the minimum data needed to fulfill a clear, ethical purpose.",
        "We do not sell, share, or use personal data for profit—ever.",
        "Sensitive data will never be used to train AI models without explicit permission."
      ]
    },
    {
      title: "Technology as Servant, Not Master",
      points: [
        "Tech must serve people—not the other way around.",
        "AI is only acceptable when it enhances human connection, not when it replaces it.",
        "If a tool compromises agency, dignity, or relational integrity, we won’t use it."
      ]
    },
    {
      title: "Transparency & Accountability",
      points: [
        "We disclose how and why we use emerging technologies, in plain language.",
        "We welcome challenge and critique, and will adapt when something causes harm.",
        "We hold ourselves accountable to our community, not to abstract notions of “progress.”"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <header className="text-center mb-12 md:mb-16">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              About Heyesa
            </h1>
            <p className="mt-4 text-lg text-foreground/80 md:text-xl max-w-3xl mx-auto">
              Discover the heart and soul behind Heyesa, our mission to foster genuine community, and the values that guide us.
            </p>
          </header>

          <Separator className="my-12 bg-border/60" />

          {/* Mission Section */}
          <section id="mission" className="mb-12 md:mb-16">
            <h2 className="font-headline text-3xl font-bold text-primary mb-4 sm:text-4xl text-center">Our Mission</h2>
            <p className="font-headline text-xl text-accent mb-6 text-center">Technology with a soul. Community at the center.</p>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-foreground/90 leading-relaxed">
              <p>
                We’re here to mend the epidemic of social isolation and restore what makes life worth living: deep human connection.
              </p>
              <p>
                We hold to a single, bright north star—long-term human happiness and flourishing.
              </p>
              <p>
                We will leverage emerging tech, such as AI, only when it truly advances the goal. We do not worship tools.
              </p>
              <p>
                We will not sacrifice people upon the altar of technology.
              </p>
              <p>
                If we’re not helping people live more connected, meaningful lives, we have no reason to exist.
              </p>
            </div>
          </section>

          <Separator className="my-12 bg-border/60" />

          {/* Values Section */}
          <section id="values" className="mb-12 md:mb-16">
            <h2 className="font-headline text-3xl font-bold text-primary mb-8 sm:text-4xl text-center">Our Values</h2>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-3 mb-10">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start text-lg text-foreground/90">
                    <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                <h3 className="font-headline text-2xl font-semibold text-primary mb-6 text-center">Our Approach to Emerging Tech & AI: People First, Always</h3>
                <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                  We use technology thoughtfully, cautiously, and only when it clearly serves our mission: restoring human connection and supporting long-term human flourishing. That includes emerging tools such as AI—but we do not assume their value. We question, examine, and proceed only with care.
                </p>
                <div className="space-y-8">
                  {techPrinciples.map((principle, index) => (
                    <div key={index}>
                      <h4 className="font-headline text-xl font-semibold text-primary mb-3">{index + 1}. {principle.title}</h4>
                      <ul className="space-y-2 pl-6">
                        {principle.points.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start text-md text-foreground/80">
                             <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12 bg-border/60" />

          {/* Who We Are Section */}
          <section id="who-we-are" className="mb-12 md:mb-16">
            <h2 className="font-headline text-3xl font-bold text-primary mb-6 sm:text-4xl text-center">Who We Are</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-foreground/90 leading-relaxed">
              <p>
                Heyesa was founded by <strong>Mark</strong>, a software engineer who envisioned a world where technology could mend social isolation rather than deepen it. Driven by his experiences with community and the power of selfless contribution, he set out to build a platform that prioritizes genuine human connection.
              </p>
              <p>Joining him is a dedicated team of thinkers and creators:</p>
              <ul className="list-disc pl-6 space-y-3 mt-4 text-foreground/80">
                  <li>
                    <strong>John</strong>, a passionate community organizer, brings his expertise in grassroots movements and social cohesion to help shape Heyesa's community-first approach.
                  </li>
                  <li>
                    <strong>Nora</strong>, a talented software engineer based in Seattle, WA, is committed to building ethical, human-centered technology that fosters authentic relationships and strengthens local bonds.
                  </li>
              </ul>
              <p>
                Together, we are united by a common goal: to create tools that serve humanity, prioritizing well-being over metrics and meaningful interactions over fleeting engagement.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

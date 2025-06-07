
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Separator } from '@/components/ui/separator';
import SectionLayout from '@/components/ui/SectionLayout';
import { Users, Sparkles, BookOpenText, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

export default function OurOriginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <header className="text-center mb-12 md:mb-16">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              The Genesis of Heyesa
            </h1>
            <p className="mt-4 text-lg text-foreground/80 md:text-xl max-w-3xl mx-auto">
              Born from a shared yearning to mend the epidemic of social isolation and rediscover the power of deep human connection.
            </p>
          </header>

          <SectionLayout id="our-story-intro" className="py-0">
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p className="text-center">
                In 2025, Heyesa began not with a business plan, but with a heartfelt question: in an age of unprecedented digital connectivity, why do so many of us feel more isolated than ever? We, two software engineers, found ourselves disillusioned by technology's role in deepening this divide. We craved something more, something real. We envisioned a future where technology could be a bridge, not a barrier—a tool with a soul, designed to place community at its very center. Our mission became clear: to leverage technology thoughtfully, not to replace human interaction, but to enhance it, fostering genuine bonds and restoring what makes life truly worth living—deep human connection.
              </p>
            </div>
          </SectionLayout>

          <Separator className="my-12 bg-border/60" />

          <SectionLayout id="inspirations" className="py-0">
            <h2 className="font-headline text-3xl font-bold text-primary mb-10 sm:text-4xl text-center">Sparks of a Shared Vision</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-primary/5 p-8 rounded-lg shadow-xl">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-10 w-10 text-accent mr-4" />
                  <h3 className="font-headline text-2xl font-semibold text-primary">Mark's Revelation: The Joy of Giving</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Mark's experiences at Burning Man illuminated a profound truth: the deepest human fulfillment often springs from selfless contribution. He witnessed the magic of a community built on "gifting"—freely offering positive experiences and support without expectation of monetary return. This sparked a powerful idea: what if we could build a platform that empowers individuals to share their unique gifts and talents, meeting the genuine needs of those around them? A space to cultivate generosity and weave a tapestry of mutual support, enriching lives and fostering long-term human happiness.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Connect with Mark on <a href="https://www.facebook.com/markbrannan" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline hover:text-accent/80 transition-colors">Facebook</a>.
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-lg shadow-xl">
                <div className="flex items-center mb-4">
                  <Users className="h-10 w-10 text-accent mr-4" />
                  <h3 className="font-headline text-2xl font-semibold text-primary">Castro's Calling: Faith in Action</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Castro, a regular at church functions, felt a persistent sense of disconnect despite years of shared pews. He realized that true faith wasn't merely belief, but "faith in action"—a commitment to charity and brotherly love. This conviction ignited a desire for a platform where he could actively serve his community, not just in grand gestures, but in understanding and addressing the everyday needs of the people around him. He sought a way for technology to facilitate these vital, on-the-ground connections that restore what makes life truly worth living.
                </p>
              </div>
            </div>
          </SectionLayout>

          <Separator className="my-12 bg-border/60" />

          <SectionLayout id="name-origin" className="py-0">
             <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center items-center mb-6">
                    <BookOpenText className="h-12 w-12 text-accent" />
                </div>
                <h2 className="font-headline text-3xl font-bold text-primary mb-8 sm:text-4xl">The Heart of Heyesa: Our Name</h2>
                <div className="space-y-6 text-lg text-foreground/90 leading-relaxed text-left bg-primary/5 p-8 rounded-lg shadow-lg">
                    <p>
                    Our name, "Heyesa," is inspired by the Hebrew name for the prophet Elisha (El-yesha), meaning "My God is Salvation." This choice is deeply symbolic of our mission.
                    </p>
                    <p>
                    In the biblical narrative of 2 Kings, Elisha encounters a widow possessing only a single jar of oil, her last resource. When the prophet requests this oil, she gives it freely—an extraordinary act of faith and selfless generosity.
                    </p>
                    <p>
                    This profound act of giving, born from a place of trust and connection, results in an overflowing abundance, her needs met ten-fold. The story of Elisha and the widow's oil encapsulates our core belief: that from genuine human connection and the spirit of giving, true flourishing and communal abundance emerge. It's a reminder that when we serve each other, we all thrive.
                    </p>
                </div>
            </div>
          </SectionLayout>

          <Separator className="my-12 bg-border/60" />

          <SectionLayout id="our-commitment" className="py-0">
            <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center items-center mb-6">
                    <HeartHandshake className="h-12 w-12 text-accent" />
                </div>
                <h2 className="font-headline text-3xl font-bold text-primary mb-8 sm:text-4xl">Our Unwavering Commitment</h2>
                <p className="text-lg text-foreground/90 leading-relaxed">
                    Heyesa is more than an app; it's our pledge to leverage technology not for its own sake, but as a humble servant to humanity's deepest need: to connect, to belong, and to flourish together. We are driven by a single, bright north star—long-term human happiness. If we’re not helping people live more connected, meaningful lives, we have no reason to exist.
                </p>
            </div>
          </SectionLayout>

        </div>
      </main>
      <Footer />
    </div>
  );
}


import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Separator } from '@/components/ui/separator';
import SectionLayout from '@/components/ui/SectionLayout';
import { Users, Sparkles, BookOpenText } from 'lucide-react';

export default function OurOriginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <header className="text-center mb-12 md:mb-16">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Our Origin Story
            </h1>
            <p className="mt-4 text-lg text-foreground/80 md:text-xl max-w-3xl mx-auto">
              Discover how Heyesa came to be, born from a desire to bridge technology with genuine human connection.
            </p>
          </header>

          <SectionLayout id="beginnings" className="py-0">
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                We started as two software engineers jaded by the role of technology in further isolating us. We craved deep, meaningful social connection, and saw an opportunity for technology to play a different, more constructive role.
              </p>
            </div>
          </SectionLayout>

          <Separator className="my-12 bg-border/60" />

          <SectionLayout id="inspirations" className="py-0">
            <h2 className="font-headline text-3xl font-bold text-primary mb-8 sm:text-4xl text-center">The Sparks of Inspiration</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-primary/5 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-8 w-8 text-accent mr-3" />
                  <h3 className="font-headline text-2xl font-semibold text-primary">Mark's Vision</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Mark's experiences as a Burning Man "burner" showed him how fulfilling connections could be. He witnessed the power of actively seeking to provide positive experiences for people without any monetary incentive. This inspired him to want to build a platform that could help individuals "give gifts" to others in the ways they truly needed, fostering a culture of generosity and mutual support.
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-accent mr-3" />
                  <h3 className="font-headline text-2xl font-semibold text-primary">Castro's Calling</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Castro often attended Church functions but, despite years of congregation, felt a disconnect from the people sitting next to him. He recognized that part of his faith isn't just "belief" but also "charity and brotherly love" – faith in action. He yearned for a platform where he could actively seek to serve people, which meant he needed a way to discover what those around him truly needed.
                </p>
              </div>
            </div>
          </SectionLayout>

          <Separator className="my-12 bg-border/60" />

          <SectionLayout id="name-origin" className="py-0">
             <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center items-center mb-4">
                    <BookOpenText className="h-10 w-10 text-accent" />
                </div>
                <h2 className="font-headline text-3xl font-bold text-primary mb-6 sm:text-4xl">The Meaning of Heyesa</h2>
                <div className="space-y-4 text-lg text-foreground/90 leading-relaxed text-left">
                    <p>
                    Our business name, "Heyesa," is based on the Hebrew name for the prophet Elisha (El-yesha; My God - My Salvation).
                    </p>
                    <p>
                    In 2 Kings, the prophet Elisha is served by a widowed woman who is down to her last jar of oil. The prophet asks her for this oil, and she freely gives it – a profound act of faith in action.
                    </p>
                    <p>
                    Filled with faith and having established a deep connection, she receives fulfillment ten-fold. This story encapsulates our belief in the abundance that flows from selfless giving and genuine connection.
                    </p>
                </div>
            </div>
          </SectionLayout>
        </div>
      </main>
      <Footer />
    </div>
  );
}

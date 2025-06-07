import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SectionLayout from '@/components/ui/SectionLayout';

export default function CallToActionSection() {
  return (
    <SectionLayout id="join" className="bg-gradient-to-b from-primary/5 to-background">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
          Ready to Build Real Connections?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/90 md:text-xl">
          Join Third Space Connector today and start making a difference in your community. Offer your skills, find support for your needs, and connect with like-minded individuals in your favorite local spots.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 shadow-xl transform transition-transform duration-200 hover:scale-105">
            <Link href="#">Get Started Now</Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-foreground/70">
          Let's make our communities stronger, together.
        </p>
      </div>
    </SectionLayout>
  );
}

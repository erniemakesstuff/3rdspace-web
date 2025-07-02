
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SectionLayout from '@/components/ui/SectionLayout';

export default function HeroSection() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdiULMdn2EE6n8BZjejdhUcLa3xrrEe2gJoQ-fY-4nbBBMHBg/viewform?usp=header";
  return (
    <SectionLayout id="hero" className="pt-24 md:pt-32 lg:pt-40 bg-gradient-to-b from-background to-primary/5">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Reconnect. Rebuild. Belong.
          </h1>
          <p className="text-lg text-foreground/80 md:text-xl">
            Tired of superficial connections? Heyesa helps you find and build genuine community in your favorite local spots and the digital communities that bring people together. Offer your skills, find support, and tackle shared goals together.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
              <Link href={googleFormUrl}>Join Our Community</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10 shadow-lg">
              <Link href="#mission">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="https://truevine-media-storage.s3.us-west-2.amazonaws.com/3rd_feature_c1.png"
            alt="People connecting in a community space"
            layout="fill"
            objectFit="cover"
            data-ai-hint="community connection people talking"
            className="transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

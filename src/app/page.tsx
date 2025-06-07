
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SectionLayout from '@/components/ui/SectionLayout';
import { MapPin, Gift, Sparkles, Users, AlertTriangle, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewLandingPage() {
  const benefits = [
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: 'Connect in Local Hubs',
      description: 'Discover and engage with people in your favorite local spots – from coffee shops to community centers.',
    },
    {
      icon: <Gift className="h-10 w-10 text-primary" />,
      title: 'Share Skills, Find Support',
      description: 'Offer your unique talents and find the help you need. Foster real collaboration and make a tangible impact.',
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: 'AI-Guided Introductions',
      description: 'Our AI acts as a "mutual friend," gently making introductions to new people and opportunities within your community.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Panel */}
        <SectionLayout id="new-hero" className="pt-24 md:pt-32 lg:pt-40 bg-gradient-to-b from-background to-primary/5">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                Find Your People. Build Your Community.
              </h1>
              <p className="text-lg text-foreground/80 md:text-xl">
                Heyesa connects you with real people in your favorite local spots. Share your gifts, find support, and truly belong.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                  {/* Pointing to the join section on the detailed vision page for now */}
                  <Link href="/about/our-vision#join">Join Heyesa</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10 shadow-lg">
                  <Link href="/about/our-vision">See Our Vision</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="https://placehold.co/1200x675.png"
                alt="Diverse group of friends connecting and smiling in a bright, welcoming community space"
                layout="fill"
                objectFit="cover"
                data-ai-hint="diverse friends community"
                className="transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </SectionLayout>

        {/* Problem Panel */}
        <SectionLayout id="new-problem" bgColor="bg-primary/5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] order-last lg:order-none overflow-hidden rounded-xl shadow-xl">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Silhouette of a person looking at a screen, feeling isolated"
                layout="fill"
                objectFit="cover"
                data-ai-hint="lonely person screen"
                className="transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center rounded-full bg-accent/10 p-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-accent" />
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Tired of a Hyper-Connected, Yet Disconnected World?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/90">
                In an age of endless scrolling and superficial interactions, many of us feel more isolated than ever. Genuine local connections—the kind that truly nourish the soul—are harder to find. Heyesa is here to change that.
              </p>
            </div>
          </div>
        </SectionLayout>

        {/* How Heyesa Helps / Benefits Panel */}
        <SectionLayout id="new-benefits">
          <div className="text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-6">
              <HeartHandshake className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Heyesa: Your Bridge to Meaningful Local Connections
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
              We provide the tools and the community focus to help you build lasting relationships, right in your neighborhood.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="flex flex-col bg-background shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardHeader className="flex-shrink-0">
                  <div className="mb-4 flex justify-center items-center h-16 w-16 rounded-full bg-primary/10 mx-auto">
                    {benefit.icon}
                  </div>
                  <CardTitle className="font-headline text-xl text-primary">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-foreground/80">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
               <Link href="/about/our-vision#join">Start Building Your Community</Link>
            </Button>
          </div>
        </SectionLayout>

        {/* Final Call to Action Panel */}
        <SectionLayout id="join" className="bg-gradient-to-t from-background to-primary/5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center justify-center rounded-full bg-accent/10 p-3 mb-6 lg:mx-0 mx-auto">
                 <Users className="h-8 w-8 text-accent" />
                </div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Ready to Reconnect and Thrive?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/90 md:text-xl">
                Step into a community built on genuine interaction and mutual support. Your journey to deeper, local connections starts now with Heyesa.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 shadow-xl transform transition-transform duration-200 hover:scale-105">
                  {/* This button in the "join" section of the new landing page might eventually point to /signup */}
                  <Link href="/about/our-vision#join">Join Heyesa Today</Link>
                </Button>
              </div>
            </div>
             <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Joyful diverse group of people celebrating community and connection"
                layout="fill"
                objectFit="cover"
                data-ai-hint="community celebration hands"
                className="transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </SectionLayout>
      </main>
      <Footer />
    </div>
  );
}

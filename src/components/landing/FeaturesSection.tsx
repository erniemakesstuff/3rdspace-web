
import Image from 'next/image';
import SectionLayout from '@/components/ui/SectionLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BotMessageSquare, MapPin, Sparkles, Handshake } from 'lucide-react';

interface HowToStep {
  number: number;
  icon: JSX.Element;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageHint: string;
}

const howToSteps: HowToStep[] = [
  {
    number: 1,
    icon: <BotMessageSquare className="h-8 w-8 text-primary" />,
    title: "Share Your Story with Our AI",
    description: "Talk to us, chat with our AI agent to tell us more about you, what you're going through, how you'd like to be supported, or what you can offer someone else. This helps us understand your unique needs and contributions.",
    imageUrl: "https://placehold.co/600x400.png",
    imageAlt: "Illustration of a person chatting with an AI bot",
    imageHint: "ai chat conversation",
  },
  {
    number: 2,
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Connect in Your Local Hubs",
    description: "We don't want to keep you on the app. We want you in the world, in the communities around you. Heyesa focuses on granular locations like your favorite coffee shops, community centers, and parks.",
    imageUrl: "https://placehold.co/600x400.png",
    imageAlt: "Illustration of a map pointing to local community spots",
    imageHint: "local map community",
  },
  {
    number: 3,
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Discover Meaningful Matches",
    description: "Based on the places you frequent, we identify potential connections. Our AI then thoughtfully filters these matches against your earlier conversation to ensure they are symbiotic and aligned with your needs and offerings.",
    imageUrl: "https://placehold.co/600x400.png",
    imageAlt: "Illustration of profiles being matched by AI with a focus on compatibility",
    imageHint: "ai matching profiles",
  },
  {
    number: 4,
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: "Foster Real-World Connections",
    description: "Our AI 'mutual friend' helps kick-off and guide discussions. The ultimate goal is to help you build genuine relationships and get you back into the world, engaging in your communities, and off the app.",
    imageUrl: "https://placehold.co/600x400.png",
    imageAlt: "Illustration of people connecting and shaking hands in a community setting",
    imageHint: "community handshake friends",
  },
];

export default function FeaturesSection() {
  return (
    <SectionLayout id="features" bgColor="bg-primary/5">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          How Heyesa Works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          Here's a simple guide to how Heyesa helps you build genuine local connections:
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {howToSteps.map((step) => (
          <Card key={step.number} className="flex flex-col bg-background shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center mb-2">
                <div className="flex-shrink-0 mr-3 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                  {step.icon}
                </div>
                <CardTitle className="font-headline text-xl text-primary">{step.number}. {step.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-sm text-foreground/80 mb-4 flex-grow">{step.description}</p>
              <div className="relative aspect-video overflow-hidden rounded-md shadow-inner mt-auto">
                <Image 
                  src={step.imageUrl} 
                  alt={step.imageAlt} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={step.imageHint}
                  className="transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
}

import SectionLayout from '@/components/ui/SectionLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, ShieldCheck, ClipboardList, Target, UsersRound, BotMessageSquare } from 'lucide-react';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <BotMessageSquare className="h-10 w-10 text-primary" />,
      title: 'AI "Mutual Friend" Introductions',
      description: 'Our AI acts as a friendly intermediary, making thoughtful introductions between users based on shared interests and needs within your local spots and the digital communities around them.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'AI Conversation Moderator',
      description: 'Ensuring respectful and constructive dialogue, our AI moderator helps maintain a positive environment for everyone to connect and collaborate.',
    },
    {
      icon: <ClipboardList className="h-10 w-10 text-primary" />,
      title: 'Needs & Services Profiles',
      description: 'Focus on what you can offer and what you seek. Profiles highlight skills, resources, and needs to foster mutual support and collaboration.',
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: 'Goal Searching',
      description: 'Find others in your community who share your passions and goals, whether it\'s a park cleanup, a book club, or a local project.',
    },
    {
      icon: <UsersRound className="h-10 w-10 text-primary" />,
      title: 'Community-Focused Onboarding',
      description: 'Join with the clear intention of building your community. Share what you bring and what you need to get started.',
    },
    {
      icon: <Handshake className="h-10 w-10 text-primary" />,
      title: 'Focus on Local Hubs & Digital Connections',
      description: 'We emphasize connecting in real-world local hubs and fostering supportive digital environments around them. Find and engage with people in your favorite coffee shop, library, park, or community center, and extend those connections online.',
    },
  ];

  return (
    <SectionLayout id="features" bgColor="bg-primary/5">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          How Heyesa Works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          We provide the tools to help you build meaningful, local connections.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col bg-background shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex-shrink-0">
              <div className="mb-4 flex justify-center items-center h-16 w-16 rounded-full bg-primary/10 mx-auto">
                {feature.icon}
              </div>
              <CardTitle className="font-headline text-xl text-primary text-center">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground/80 text-center">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
}

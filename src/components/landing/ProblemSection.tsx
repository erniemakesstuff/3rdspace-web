import SectionLayout from '@/components/ui/SectionLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingDown, Users, Store } from 'lucide-react'; // Users for church, Store for malls/bars

export default function ProblemSection() {
  const stats = [
    {
      icon: <Store className="h-8 w-8 text-accent" />,
      value: "87%",
      description: "of malls may close within 10 years.",
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      value: "47% to 30%",
      description: "Church attendance decline.",
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-accent" />,
      value: "16%",
      description: "of neighborhood bars closed (2004-2014).",
    },
  ];

  return (
    <SectionLayout id="problem" bgColor="bg-primary/5">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          The Isolation Epidemic
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground/90">
          We have ceded our third spaces to online forums, message boards, social media groups, and matchmaking apps. Despite being more connected, and having more ways to “stay connected” we’ve never felt more isolated. In 2023, more than half of all US adults reported feeling isolated.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-background shadow-lg text-center">
            <CardHeader>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-4">
                {stat.icon}
              </div>
              <CardTitle className="font-headline text-4xl font-bold text-accent">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-12 text-center text-lg leading-relaxed text-foreground/90">
        The current paradigm doesn’t work. Searching for relationships of convenience doesn’t work. We need to return to solutions that have proven to work: third spaces. Growing connections slowly, but surely, in the communities we live in.
      </p>
    </SectionLayout>
  );
}

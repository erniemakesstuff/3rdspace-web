import SectionLayout from '@/components/ui/SectionLayout';
import Image from 'next/image';

export default function MissionSection() {
  return (
    <SectionLayout id="mission">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Mission: Building Real Connections
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/90">
            We want to build community and address social isolation, full stop. We acknowledge yet resist the near inevitability of platform decay by adhering to a set of north star principles around strong, thriving communities that exist for the benefit of people, not businesses or organizations.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">
            We view the current landscape of dating, social media, and app-addiction as a “Tyranny of the Commons” problem that calls for focused, collective action. We view algorithms and AI as tools that must serve human needs and desires, rather than shaping human behavior to serve technological growth, or shareholder value.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">
            We want to see people thriving at their local community center, library, church, social club, “p-patch”, food-forest, or park – in short, all of the shared local spots where we gather - not sitting at home, alone, doom scrolling or swiping for the next superficial connection. We also mourn the decline of for-profit shared spaces where profit-motive is often in conflict with human connection.
          </p>
          <p className="mt-4 text-lg font-semibold leading-relaxed text-primary">
            We want vibrant communal spaces—both physical and digital—where people can meet, socialize, and organize for common goals.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">
            We are intentionally neutral on the goals of all individuals. Our focus is: Are you engaging in local spots and their associated digital communities, and are you connecting meaningfully with other people?
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Diverse group of people collaborating"
              layout="fill"
              objectFit="cover"
              data-ai-hint="diverse group collaboration"
              className="transform transition-transform duration-500 hover:scale-105"
            />
        </div>
      </div>
    </SectionLayout>
  );
}

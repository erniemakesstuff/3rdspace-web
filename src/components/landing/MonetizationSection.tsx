import SectionLayout from '@/components/ui/SectionLayout';
import { Lightbulb } from 'lucide-react';

export default function MonetizationSection() {
  return (
    <SectionLayout id="monetization" bgColor="bg-primary/5">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-6">
            <Lightbulb className="h-8 w-8 text-accent" />
        </div>
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Our Approach to Sustainability
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/90">
          To support our mission of building thriving communities, Heyesa will explore ethical and non-intrusive ways to sustain the platform.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-foreground/90">
          One potential avenue is through AI-recommended advertisement placements. Our AI, acting as a helpful "mutual friend," may occasionally suggest relevant paid products or services that align with user discussions and needs, much like a trusted friend might recommend something useful. We are committed to ensuring that any monetization strategy enhances, rather than detracts from, the core experience of community building and respects user privacy. 74% of shoppers indicate word-of-mouth plays a major factor in their purchasing decisions, and we aim for our AI's suggestions to feel like a natural part of helpful guidance.
        </p>
      </div>
    </SectionLayout>
  );
}

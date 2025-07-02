
import SectionLayout from '@/components/ui/SectionLayout';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function DifferentiationSection() {
  const points = [
    "Local community hubs and their associated digital spaces are central to our application.",
    "We cater to users with a vested desire to build community, not to only have their personal desires satisfied.",
    "Users are grouped by their specific local hubs (like your favorite coffee shop or community center) and the digital communities around them, not just broad geography.",
    "Artificial Intelligence (AI) is the “mutual friend” that makes introductions and guides conversations.",
    "AI matches people based on services-needs alignment to foster tangible collaboration.",
    "AI moderates discussions to ensure respectful dialogue and a safe environment.",
    "AI guides conversations subtly, without explicitly revealing private needs, fostering natural discovery."
  ];

  return (
    <SectionLayout id="differentiation">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            What Makes Us Different?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/90">
            We're not just another social app. Heyesa is built on a foundation of fostering genuine, local community and meaningful interactions.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-accent" />
                <span className="text-foreground/90">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
            <Image
              src="https://truevine-media-storage.s3.us-west-2.amazonaws.com/3rd_feature_c4.png"
              alt="Unique community gathering"
              layout="fill"
              objectFit="cover"
              data-ai-hint="unique community gathering"
              className="transform transition-transform duration-500 hover:scale-105"
            />
        </div>
      </div>
    </SectionLayout>
  );
}

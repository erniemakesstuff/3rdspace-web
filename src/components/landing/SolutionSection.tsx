import SectionLayout from '@/components/ui/SectionLayout';
import Image from 'next/image';

export default function SolutionSection() {
  return (
    <SectionLayout id="solution">
      <div className="grid items-center gap-12 lg:grid-cols-2">
         <div className="relative order-last lg:order-first aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Friends meeting in a park"
              layout="fill"
              objectFit="cover"
              data-ai-hint="friends meeting park"
              className="transform transition-transform duration-500 hover:scale-105"
            />
        </div>
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Solution: Inverting the Model
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/90">
            We propose inverting the model of our convenience-oriented culture; our fast-food, DoorDash way of relationships. Welcome to Third Space Connector.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">
            Instead of seeking an application designed to “meet our needs,” users join to offer their unique services or values. We make the convenience application a facilitator, not the primary coordinator. The coordinator is driven by the physical locations themselves. This removes the perverse incentive to “keep users engaged on the app.”
          </p>
          <ul className="mt-6 space-y-3 text-lg text-foreground/90">
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent"></span>
              Free-form, untemplated ways to express needs and offers.
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent"></span>
              Grouping mechanisms around social needs, unbiased by our own unconscious biases.
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent"></span>
              Metrics focused on genuine connection and repeat engagement in third spaces.
            </li>
             <li className="flex items-start">
              <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent"></span>
              AI as a "mutual friend" to make introductions, moderate discussions, and guide conversations.
            </li>
          </ul>
           <p className="mt-4 text-lg leading-relaxed text-foreground/90">
            Our starting metric for launch: how often are users revisiting locations with other users? Are they visiting third spaces in an ongoing fashion? We aim to measure the quality of experience and community health, not just usage.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}

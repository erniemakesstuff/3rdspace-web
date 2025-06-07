
import Link from 'next/link';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import MissionSection from '@/components/landing/MissionSection';
import ProblemSection from '@/components/landing/ProblemSection';
import SolutionSection from '@/components/landing/SolutionSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import DifferentiationSection from '@/components/landing/DifferentiationSection';
import MonetizationSection from '@/components/landing/MonetizationSection';
import CallToActionSection from '@/components/landing/CallToActionSection';
import Footer from '@/components/landing/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ListChecks } from 'lucide-react';
import SectionLayout from '@/components/ui/SectionLayout';

export default function DetailedVisionPage() {
  const tocItems = [
    { name: 'Our Mission', href: '#mission' },
    { name: 'The Problem We Address', href: '#problem' },
    { name: 'Our Proposed Solution', href: '#solution' },
    { name: 'Key Features', href: '#features' },
    { name: 'What Makes Us Different', href: '#differentiation' },
    { name: 'Our Sustainability', href: '#monetization' },
    { name: 'Join Heyesa', href: '#join' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <SectionLayout id="vision-toc" className="py-12 md:py-16" bgColor="bg-primary/5">
          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-accent/10 p-3 mb-4 mx-auto">
                <ListChecks className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-headline text-3xl text-primary">Explore Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {tocItems.map((item) => (
                  <li key={item.name} className="text-center">
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-foreground/80 hover:text-accent hover:underline transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </SectionLayout>

        <HeroSection />
        <MissionSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <DifferentiationSection />
        <MonetizationSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}

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

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
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

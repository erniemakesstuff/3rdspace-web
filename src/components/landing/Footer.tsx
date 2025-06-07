
import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import { Separator } from '@/components/ui/separator';
import { Mail, Facebook } from 'lucide-react';

export default function Footer() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdiULMdn2EE6n8BZjejdhUcLa3xrrEe2gJoQ-fY-4nbBBMHBg/viewform?usp=header";
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" aria-label="Home" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-sm text-foreground/70">
              Building community, one connection at a time.
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-headline text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about/our-vision#mission" className="text-foreground/70 hover:text-primary">Our Mission</Link></li>
              <li><Link href="/about/our-vision#features" className="text-foreground/70 hover:text-primary">How It Works</Link></li>
              <li><Link href={googleFormUrl} className="text-foreground/70 hover:text-primary" target="_blank" rel="noopener noreferrer">Join Now</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-headline text-lg font-semibold text-primary">Connect With Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:ErnieMakesStuff@gmail.com" className="flex items-center text-foreground/70 hover:text-primary">
                  <Mail className="mr-2 h-4 w-4" />
                  ErnieMakesStuff@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/markbrannan" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground/70 hover:text-primary">
                  <Facebook className="mr-2 h-4 w-4" />
                  Mark Brannan on Facebook
                </a>
              </li>
            </ul>
            <p className="mt-3 text-sm text-foreground/70">
              Follow us on other social media for updates and community stories. (More links to be added)
            </p>
          </div>
        </div>
        <Separator className="my-8 bg-border/60" />
        <div className="text-center text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} Heyesa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

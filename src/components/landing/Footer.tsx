import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
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
              <li><Link href="#mission" className="text-foreground/70 hover:text-primary">Our Mission</Link></li>
              <li><Link href="#features" className="text-foreground/70 hover:text-primary">How It Works</Link></li>
              <li><Link href="#join" className="text-foreground/70 hover:text-primary">Join Now</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-headline text-lg font-semibold text-primary">Connect With Us</h3>
            <p className="text-sm text-foreground/70">
              Follow us on social media for updates and community stories. (Links to be added)
            </p>
            {/* Social media icons can go here */}
          </div>
        </div>
        <Separator className="my-8 bg-border/60" />
        <div className="text-center text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} Third Space Connector. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

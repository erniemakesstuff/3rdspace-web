import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const navItems = [
    { name: 'Mission', href: '#mission' },
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Features', href: '#features' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#join">Join Now</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu can be added here later */}
          <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}

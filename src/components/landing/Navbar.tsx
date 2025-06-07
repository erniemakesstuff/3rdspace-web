
import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const navItems = [
    { name: 'Mission', href: '#mission', pageSpecific: true },
    { name: 'Problem', href: '#problem', pageSpecific: true },
    { name: 'Solution', href: '#solution', pageSpecific: true },
    { name: 'Features', href: '#features', pageSpecific: true },
    { name: 'About Us', href: '/about' },
  ];

  // For the landing page, we want internal links. For other pages, link to homepage sections.
  // This simple check assumes landing page is at root '/'.
  // A more robust solution might involve Next.js router checks if available server-side.
  const isLandingPage = typeof window !== 'undefined' && window.location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => {
            const href = (item.pageSpecific && !isLandingPage) ? `/${item.href}` : item.href;
            return (
              <Link
                key={item.name}
                href={href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            );
          })}
          <Button asChild variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href={isLandingPage ? "#join" : "/#join"}>Join Now</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-accent text-accent hover:bg-accent/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="mb-6">
                <Link href="/" aria-label="Home">
                  <SheetClose asChild>
                    <Logo />
                  </SheetClose>
                </Link>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => {
                   const href = (item.pageSpecific && !isLandingPage) ? `/${item.href}` : item.href;
                  return (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={href}
                        className="text-md font-medium text-foreground/80 transition-colors hover:text-primary py-2"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  );
                })}
                 <Separator className="my-2 bg-border/60" />
                <SheetClose asChild>
                  <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                     <Link href={isLandingPage ? "#join" : "/#join"}>Join Now</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

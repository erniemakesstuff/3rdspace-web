
"use client";

import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect } from 'react';

interface NavItemLink {
  name: string;
  href: string;
  pageSpecific?: boolean; // For landing page section links or page-specific base paths
}

interface NavItemGroup {
  name: string;
  isDropdown: true;
  links: NavItemLink[];
}

type NavItem = NavItemLink | NavItemGroup;

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // This check runs only on the client-side
    setCurrentPath(window.location.pathname);
  }, []);


  const navItems: NavItem[] = [
    { name: 'Mission', href: '#mission', pageSpecific: true }, // Points to #mission on /about/our-vision
    { name: 'Problem', href: '#problem', pageSpecific: true }, // Points to #problem on /about/our-vision
    { name: 'Solution', href: '#solution', pageSpecific: true }, // Points to #solution on /about/our-vision
    { name: 'Features', href: '#features', pageSpecific: true }, // Points to #features on /about/our-vision
    {
      name: 'About',
      isDropdown: true,
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Origin', href: '/about/our-origin' },
        { name: 'Our Vision', href: '/about/our-vision' },
      ]
    },
  ];

  const getHref = (item: NavItemLink) => {
    if (item.pageSpecific) {
      // If on the new landing page (/), section links should point to the detailed vision page
      if (currentPath === '/') {
        return `/about/our-vision${item.href}`;
      }
      // If on the vision page itself, section links are direct hashes
      if (currentPath === '/about/our-vision') {
        return item.href;
      }
      // Otherwise (e.g., on /about or /about/our-origin), also point to vision page sections
      return `/about/our-vision${item.href}`;
    }
    return item.href;
  };

  const getJoinNowHref = () => {
    if (currentPath === '/') {
      return '#join'; // Join section on new landing page
    }
    if (currentPath === '/about/our-vision') {
      return '#join'; // Join section on detailed vision page
    }
    return '/about/our-vision#join'; // Default to join section on detailed vision page
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <nav className="hidden items-center space-x-2 md:flex">
          {navItems.map((item) => {
            if ('isDropdown' in item && item.isDropdown) {
              return (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-sm font-medium text-foreground/80 hover:text-primary focus-visible:ring-0 focus-visible:ring-offset-0">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-background border-border shadow-lg">
                    {item.links.map(subItem => (
                      <DropdownMenuItem key={subItem.name} asChild className="cursor-pointer hover:bg-accent focus:bg-accent">
                        <Link href={getHref(subItem)} className="text-sm font-medium text-foreground/80 hover:text-primary w-full">
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            } else {
              return (
                <Link
                  key={item.name}
                  href={getHref(item)}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary px-3 py-2 rounded-md"
                >
                  {item.name}
                </Link>
              );
            }
          })}
          <Button asChild variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground ml-4">
            <Link href={getJoinNowHref()}>Join Now</Link>
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
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  if ('isDropdown' in item && item.isDropdown) {
                    // For mobile, list all dropdown items directly for easier tapping
                    return (
                      <React.Fragment key={item.name}>
                        {/* Optional: Add a non-clickable header for the group */}
                        {/* <p className="px-2 py-2 text-xs font-semibold uppercase text-muted-foreground">{item.name}</p> */}
                        {item.links.map(subItem => (
                          <SheetClose asChild key={subItem.name}>
                            <Link
                              href={getHref(subItem)}
                              className="text-md font-medium text-foreground/80 transition-colors hover:text-primary py-2 px-2 block"
                            >
                              {subItem.name}
                            </Link>
                          </SheetClose>
                        ))}
                      </React.Fragment>
                    );
                  } else {
                    return (
                      <SheetClose asChild key={item.name}>
                        <Link
                          href={getHref(item)}
                          className="text-md font-medium text-foreground/80 transition-colors hover:text-primary py-2 px-2 block"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    );
                  }
                })}
                 <Separator className="my-2 bg-border/60" />
                <SheetClose asChild>
                  <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-2">
                     <Link href={getJoinNowHref()}>Join Now</Link>
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

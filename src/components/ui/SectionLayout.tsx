import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionLayoutProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: string; // e.g., 'bg-background' or 'bg-primary/5'
}

export default function SectionLayout({ children, className, id, bgColor = 'bg-transparent' }: SectionLayoutProps) {
  return (
    <section id={id} className={cn('py-16 md:py-20 lg:py-24', bgColor, className)}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}

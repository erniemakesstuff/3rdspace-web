import { Network } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2 text-primary">
      <Network className="h-8 w-8" />
      <span className="text-2xl font-headline font-semibold">
        Third Space Connector
      </span>
    </div>
  );
}


export default function Logo() {
  return (
    <div className="flex items-center gap-2 text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path d="M12 2C9.24 2 7 4.24 7 7c0 2.21 1.26 4.11 3 5.19V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6.81c1.74-1.08 3-2.98 3-5.19 0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm-1 12v-2h2v2H11z"/>
      </svg>
      <span className="text-2xl font-headline font-semibold">
        Heyesa
      </span>
    </div>
  );
}

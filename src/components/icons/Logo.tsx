
export default function Logo() {
  return (
    <div className="flex items-center gap-2 text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        {/* Jar of Oil Icon - Inspired by 2 Kings 4 */}
        {/* Simplified representation: a basic jar/urn shape */}
        <path d="M7 2C6.44772 2 6 2.44772 6 3V4H5C4.44772 4 4 4.44772 4 5V7H3C2.44772 7 2 7.44772 2 8V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V8C22 7.44772 21.5523 7 21 7H20V5C20 4.44772 19.5523 4 19 4H18V3C18 2.44772 17.5523 2 17 2H7Z M8 4H16V5H8V4ZM6 6H18V7H6V6ZM4 9H20V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V9Z" />
      </svg>
      <span className="text-2xl font-headline font-semibold">
        Heyesa
      </span>
    </div>
  );
}

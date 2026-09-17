import { navigation } from "@/data/resume";

export default function JumpNav() {
  return (
    <nav
      aria-label="Page sections"
      className="site-nav sticky top-0 z-50 -mx-6 mb-10 border-b border-neutral-900/80 bg-neutral-950/80 px-6 py-3 backdrop-blur-md"
    >
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {navigation.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-xs uppercase tracking-[0.18em] text-neutral-500 transition-colors duration-200 hover:text-neutral-200 focus-visible:text-neutral-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-neutral-500"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

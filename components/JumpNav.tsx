import { navigation } from "@/data/resume";

export default function JumpNav() {
  return (
    <nav
      aria-label="Page sections"
      className="site-nav sticky top-0 z-50 -mx-6 mb-16 bg-neutral-950 px-6 py-4 sm:-mx-8 sm:px-8"
    >
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {navigation.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="link-underline text-[11px] uppercase tracking-[0.22em] text-neutral-500 transition-colors duration-200 hover:text-neutral-200 focus-visible:text-neutral-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-neutral-500"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

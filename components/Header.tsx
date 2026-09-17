import { profile } from "@/data/resume";

export default function Header() {
  return (
    <header className="animate-enter space-y-5">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
          {profile.name}
        </h1>
        <p className="text-lg text-neutral-300">{profile.headline}</p>
        <p className="text-sm text-neutral-500">{profile.location}</p>
      </div>

      <p className="max-w-2xl text-base leading-relaxed text-neutral-400">
        {profile.summary}
      </p>

      <nav aria-label="Profile links" className="flex flex-wrap gap-x-4 gap-y-2">
        {profile.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-neutral-300 underline-offset-4 transition-colors duration-200 hover:text-neutral-100 hover:underline focus-visible:text-neutral-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-neutral-500"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

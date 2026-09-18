import Image from "next/image";
import { profile } from "@/data/resume";

export default function Header() {
  return (
    <header className="space-y-8">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <h1 className="animate-enter text-3xl font-medium tracking-tight text-neutral-100 sm:text-4xl">
            {profile.name}
          </h1>
          <p className="animate-enter animate-enter-delay-1 text-base text-neutral-300 sm:text-lg">
            {profile.headline}
          </p>
          <p className="animate-enter animate-enter-delay-2 text-sm text-neutral-500">
            {profile.location}
          </p>
        </div>

        {profile.photo ? (
          <div className="animate-photo relative h-24 w-24 shrink-0 overflow-hidden rounded-full sm:h-28 sm:w-28">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="112px"
              className="object-cover object-[50%_12%] transition-transform duration-500 ease-out hover:scale-[1.04]"
            />
          </div>
        ) : null}
      </div>

      <p className="animate-enter animate-enter-delay-3 max-w-xl text-base leading-7 text-neutral-400">
        {profile.summary}
      </p>

      <nav
        aria-label="Profile links"
        className="animate-enter animate-enter-delay-4 flex flex-wrap gap-x-5 gap-y-2"
      >
        {profile.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="link-underline text-sm text-neutral-400 transition-colors duration-200 hover:text-neutral-100 focus-visible:text-neutral-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-neutral-500"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

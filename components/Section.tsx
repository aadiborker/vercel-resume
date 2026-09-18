import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 space-y-8 border-t border-neutral-900 pt-12 ${className}`.trim()}
    >
      <h2 className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

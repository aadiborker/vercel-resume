import { projects, navigation } from "@/data/resume";
import Section from "@/components/Section";

const section = navigation.find((item) => item.id === "projects")!;

export default function Projects() {
  return (
    <Section id={section.id} title={section.label}>
      <ul className="space-y-8">
        {projects.map((project) => (
          <li
            key={project.name}
            className="space-y-2 border-l border-transparent pl-0 transition-[border-color,padding] duration-300 hover:border-neutral-700 hover:pl-4"
          >
            <h3 className="text-lg font-medium text-neutral-100">
              {project.href ? (
                <a
                  href={project.href}
                  className="underline-offset-4 transition-colors duration-200 hover:text-white hover:underline focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-neutral-500"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="leading-relaxed text-neutral-400">
              {project.description}
            </p>
            <p className="text-sm text-neutral-500">
              {project.tech.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

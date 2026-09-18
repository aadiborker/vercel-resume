import { projects, navigation } from "@/data/resume";
import Section from "@/components/Section";

const section = navigation.find((item) => item.id === "projects")!;

export default function Projects() {
  return (
    <Section id={section.id} title={section.label}>
      <ul className="space-y-10">
        {projects.map((project) => (
          <li key={project.name} className="space-y-2">
            <h3 className="text-base font-medium text-neutral-100 sm:text-lg">
              {project.href ? (
                <a
                  href={project.href}
                  className="link-underline focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-neutral-500"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="leading-7 text-neutral-400">{project.description}</p>
            <p className="text-sm text-neutral-500">
              {project.tech.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

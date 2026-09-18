import { experience, navigation } from "@/data/resume";
import Section from "@/components/Section";

const section = navigation.find((item) => item.id === "experience")!;

export default function Experience() {
  return (
    <Section id={section.id} title={section.label}>
      <ul className="space-y-12">
        {experience.map((role) => (
          <li
            key={`${role.company}-${role.title}-${role.start}`}
            className="experience-entry space-y-4"
          >
            <div className="space-y-1">
              <h3 className="text-base font-medium text-neutral-100 sm:text-lg">
                {role.title}
              </h3>
              <p className="text-neutral-300">
                {role.company}
                <span className="text-neutral-500"> · </span>
                {role.location}
              </p>
              <p className="text-sm text-neutral-500">
                {role.start} – {role.end}
              </p>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-neutral-400">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="leading-7">
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}

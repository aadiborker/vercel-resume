import { skills, navigation } from "@/data/resume";
import Section from "@/components/Section";

const section = navigation.find((item) => item.id === "skills")!;

export default function Skills() {
  return (
    <Section id={section.id} title={section.label}>
      <ul className="space-y-6">
        {skills.map((group) => (
          <li key={group.category} className="space-y-1">
            <h3 className="text-sm font-medium text-neutral-300">
              {group.category}
            </h3>
            <p className="leading-relaxed text-neutral-400">
              {group.items.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

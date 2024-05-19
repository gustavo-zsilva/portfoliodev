import StackIcon from "tech-stack-icons";
import { promises as fs } from "fs";
import { Section } from "@/layouts/Section";

type Tech = {
  name: string;
  iconName: string;
  experience: number;
};

export async function Techs() {
  const file = await fs.readFile(process.cwd() + "/stack.json", "utf8");
  const techList: Tech[] = JSON.parse(file);

  return (
    <Section
      title="Tech Stack"
      subtitle="Technologies I most use"
      id="tech-stacks"
    >
      <div className="grid grid-cols-3 gap-6 sm:flex sm:flex-wrap sm:justify-between sm:px-12 lg:px-0">
        {techList.map(({ name, iconName }) => (
          <div
            key={iconName}
            className="flex flex-col items-center gap-2 sm:w-24"
          >
            <StackIcon name={iconName} className="w-[45px]" />
            <span className="uppercase text-sm text-light-gray">{name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

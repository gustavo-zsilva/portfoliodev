import StackIcon from "tech-stack-icons";
import { promises as fs } from "fs";
import { Section } from "@/layouts/Section";

type Tech = {
  name: string;
  iconName: string;
  experience: number;
};

export async function Skillset() {
  const file = await fs.readFile(process.cwd() + "/stack.json", "utf8");
  const techList: Tech[] = JSON.parse(file);

  const progressBarWidth = {
    1: "w-1/4",
    2: "w-2/4",
    3: "w-3/4",
    4: "w-[90%]",
  };

  return (
    <Section title="Skillset" className="w-screen px-6">
      <ul className="flex w-full overflow-x-scroll gap-4">
        {techList.map(({ name, iconName, experience }) => (
          <li key={iconName} className="flex flex-col gap-3 min-w-[10rem]">
            <div className="flex items-center gap-3">
              <StackIcon name={iconName} className="w-[40px]" />
              <h1 className="font-semibold">{name}</h1>
            </div>

            <div className="flex ring-1 ring-inset ring-light-gray w-full h-4 relative rounded-full overflow-hidden">
              <div
                className={`
                    absolute
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500
                    to-baby-blue
                    top-0
                    bottom-0
                    left-0
                    ${progressBarWidth[experience as keyof typeof progressBarWidth]}
                  `}
              />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

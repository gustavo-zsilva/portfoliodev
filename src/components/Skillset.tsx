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
    <Section
      title="Skillset"
      className="
        w-screen
        max-w-screen-lg
        m-auto
      "
    >
      <div
        className="
          inline-flex
          flex-nowrap
          gap-4
          w-full
          px-6
          overflow-hidden
          [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]
        "
      >
        <ul className="flex items-center justify-center md:justify-start gap-4 animate-infinite-scroll">
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
        <ul
          className="flex items-center justify-center md:justify-start gap-4 animate-infinite-scroll"
          aria-hidden="true"
        >
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
      </div>
    </Section>
  );
}

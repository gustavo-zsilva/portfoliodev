import { Section } from "@/layouts/Section";

import {
  FaRegLightbulb,
  FaRegClipboard,
  FaRegPaperPlane,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { SkillBox } from "./SkillBox";

export function HowIWork() {
  return (
    <Section title="How I Work" className="px-6">
      <p className="text-center leading-7">
        My approach to web development blends{" "}
        <span className="bg-yellow-300 bg-opacity-20">
          deep research, user-centered design, and total commitment.
        </span>{" "}
        I start with a holistic understanding of the project and focus on
        incremental deliveries to ensure quality and adaptability. I value
        collaboration and quality, always striving to enhance my skills and
        outcomes, <b>with an unwavering commitment to excellence.</b>
      </p>
      <div className="grid grid-cols-2 place-items-center gap-8">
        <SkillBox Icon={FaRegLightbulb} iconSize={22} title="Inspiration" />
        <SkillBox Icon={FaRegClipboard} iconSize={22} title="Planning" />
        <SkillBox Icon={FaRegPaperPlane} iconSize={22} title="Prototyping" />
        <SkillBox Icon={FaCode} iconSize={22} title="Coding" />
      </div>
    </Section>
  );
}

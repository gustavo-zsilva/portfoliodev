import { Section } from "@/layouts/Section";
import { HighlightedText } from "@/lib/StyledText";
import { SkillBox } from "./SkillBox";

import {
  FaRegLightbulb,
  FaRegClipboard,
  FaRegPaperPlane,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

export function HowIWork() {
  return (
    <Section title="How I Work" id="how-i-work">
      <p className="text-center leading-7">
        My approach to web development blends{" "}
        <HighlightedText>
          deep research, user-centered design, and total commitment.
        </HighlightedText>{" "}
        I start with a holistic understanding of the project and focus on
        incremental deliveries to ensure quality and adaptability. I value
        collaboration and quality, always striving to enhance my skills and
        outcomes, <b>with an unwavering commitment to excellence.</b>
      </p>
      <div className="grid grid-cols-2 place-items-center gap-8 md:grid-cols-4">
        <SkillBox Icon={FaRegLightbulb} iconSize={22} title="Inspiration" />
        <SkillBox Icon={FaRegClipboard} iconSize={22} title="Planning" />
        <SkillBox Icon={FaRegPaperPlane} iconSize={22} title="Prototyping" />
        <SkillBox Icon={FaCode} iconSize={22} title="Coding" />
      </div>
    </Section>
  );
}

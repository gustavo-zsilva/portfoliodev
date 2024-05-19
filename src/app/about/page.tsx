import Link from "next/link";

import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Skillset } from "@/components/Skillset";
import { Section } from "@/layouts/Section";
import { GradientText, HighlightedText } from "@/lib/StyledText";

import { FaArrowRightLong } from "react-icons/fa6";

export default async function About() {
  return (
    <main className="space-y-10 md:space-y-20">
      <Header />
      <Section title="About me" className="px-6" initial={{ opacity: 0 }}>
        <p className="text-center leading-7 md:text-lg lg:text-xl lg:leading-10">
          Hi there! 👋 My name is Gustavo, and I am a passionate{" "}
          <GradientText>Fullstack Developer</GradientText> and{" "}
          <GradientText>Freelancer</GradientText>. <br /> With a knack for
          building innovative and efficient solutions for the web, I bring a
          unique blend of creativity and technical expertise to every project I
          undertake. Whether it's{" "}
          <HighlightedText>designing intuitive user interfaces</HighlightedText>{" "}
          or{" "}
          <HighlightedText>developing robust backend systems</HighlightedText>,
          I thrive on transforming ideas into reality and delivering exceptional
          results.
          <br />
          <b>Let's build something amazing together!</b>
        </p>
      </Section>
      <Skillset />
      <Section title="My Experience" className="px-6">
        <div
          className="
            border-l-4
            border-dotted
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:border-l-0
            lg:border-t-4
          "
        >
          <ExperienceSection title="Started Journey" year="2019">
            Started my journey on the dev life, learning C# & Python as my first
            languages
          </ExperienceSection>
          <ExperienceSection title="Discovered Javascript" year="2020">
            Started building basic apps for the web
          </ExperienceSection>
          <ExperienceSection title="Advancing my Studies" year="2020 - 2023">
            Mastered React, NextJS, Typescript & web technologies
          </ExperienceSection>
          <ExperienceSection
            title="Building for Real People"
            year="2024 - Today"
          >
            Building high standard, performatic web apps for companies &
            microentrepreneurs
            <Link
              href="/contact"
              className="
                flex
                items-center
                gap-4
                bg-blue-500
                text-white
                py-2
                px-6
                mt-6
                w-fit
                font-semibold
                transition-shadow
                shadow-lg
                rounded-lg
                hover:bg-blue-600
                hover:shadow-blue-500/35
              "
            >
              Contact Me
              <FaArrowRightLong size={20} />
            </Link>
          </ExperienceSection>
        </div>
      </Section>
      <Footer />
    </main>
  );
}

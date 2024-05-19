import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Skillset } from "@/components/Skillset";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Section } from "@/layouts/Section";
import { GradientText, HighlightedText } from "@/lib/StyledText";

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
      <ExperienceTimeline />
      <Footer />
    </main>
  );
}

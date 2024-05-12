import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Skillset } from "@/components/Skillset";
import { Section } from "@/layouts/Section";

export default async function About() {
  return (
    <main className="space-y-10">
      <Header />
      <Section title="About me" className="px-6">
        <p className="text-center leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, rem.
          Voluptates ducimus consequatur atque in, veniam voluptate, blanditiis
          repudiandae doloribus amet debitis consequuntur esse aliquam ut
          corporis quas iste temporibus?
        </p>
      </Section>
      <Skillset />
      <Section title="Work Experience" className="px-6">
        <div className="flex">
          <div className="h-[400px] w-1 bg-white rounded-full" />
          <section className="flex">
            <div className="size-4 bg-white rounded-full ring-4 ring-white ring-offset-4 ring-offset-dark -translate-x-[60%]" />
            <p>work experience</p>
          </section>
        </div>
      </Section>
      <Footer />
    </main>
  );
}

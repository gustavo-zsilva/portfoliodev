import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Techs } from "@/components/Techs";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="space-y-10">
      <Header />
      <Main />
      <Techs />
      <Projects />
      <Footer />
    </main>
  );
}

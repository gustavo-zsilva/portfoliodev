import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Techs } from "@/components/Techs";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-10 flex-col items-center px-4 text-white">
      <Header />
      <Main />
      <Techs />
      <Projects />
      <Footer />
    </main>
  );
}

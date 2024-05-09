import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Techs } from "@/components/Techs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 text-white">
      
      <Header />

      <Main />
      
      <Techs />
    </main>
  );
}

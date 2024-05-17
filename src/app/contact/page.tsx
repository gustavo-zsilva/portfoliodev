import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="space-y-10 w-full flex flex-col justify-between h-screen">
      <Header />
      <Contact />
      <Footer />
    </main>
  );
}

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section } from "@/layouts/Section";

export default function About() {
    return (
        <main className="space-y-10">
            <Header />
            <Section
                title="About me"
            >
                <p className="leading-7">
                    Tenho 4 anos de experiência na área de desenvolvimento web,
                    tendo já criado diversos aplicativos como soluções para demandas.
                    Sou ávido em aprender conceitos novos, principalmente em minha área de atuação como desenvolvedor.
                    Constantemente busco aprimorar minha capacidade de aprender assuntos e adquirir novas habilidades por meio de desafios,
                    o que me proporcionou um vasto repertório de projetos em que tive que realizar com conceitos
                    até então inexplorados por mim.
                </p>
            </Section>
            <Footer />
        </main>
    )
}
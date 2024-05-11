import { Section } from "@/layouts/Section";
import { Client } from 'get-pinned-repos';
import { ProjectCard } from "./ProjectCard";

type PinnedRepo = {
    name: string,
    url: string,
    primaryLanguage: {
        name: string,
        color: string,
        id: string,
    },
    id: string,
    description: string,
    stargazerCount: number,
}


export async function Projects() {
    Client.setToken("MY_GITHUB_SECRET")
    const pinnedRepos: PinnedRepo[] = await Client.getPinnedRepos("gustavo-zsilva")

    return (
        <Section
            title="Projects"
            subtitle="Some of my best creations"
            id="projects"
        >
            <ul className="space-y-6">
                {pinnedRepos.map(repo => <ProjectCard key={repo.id} repo={repo} />)}
            </ul>
        </Section>
    )
}
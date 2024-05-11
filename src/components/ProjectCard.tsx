import { ExternalLink } from '@/lib/ExternalLink'
import { MdOutlineStar } from "react-icons/md";

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

type ProjectCardProps = {
    repo: PinnedRepo,
}

export function ProjectCard({ repo }: ProjectCardProps) {
    return (
        <div className="bg-gradient-to-br from-pink to-baby-blue rounded-md transition-all hover:p-1">
            <ExternalLink
                href={repo.url}
                className="flex flex-col bg-light-dark rounded-md p-4 gap-2"
            >
                <h1 className="text-lg uppercase font-bold">
                    {repo.name}
                </h1>
                <p className="line-clamp-2">
                    {repo.description}
                </p>

                <footer className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4">
                        <div className={`
                            bg-[${repo.primaryLanguage.color}]
                            bg-[#3178c6]
                            border
                            size-4
                            rounded-full
                        `}
                        />
                        <span className="text-sm">
                            {repo.primaryLanguage.name}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdOutlineStar />
                        <span>{repo.stargazerCount}</span>
                    </div>
                </footer>
            </ExternalLink>
        </div>
    )
}
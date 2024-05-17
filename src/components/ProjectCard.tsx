import { ExternalLink } from "@/lib/ExternalLink";
import { MdOutlineStar } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

type PinnedRepo = {
  name: string;
  url: string;
  primaryLanguage: {
    name: string;
    color: string;
    id: string;
  };
  id: string;
  description: string;
  stargazerCount: number;
};

type ProjectCardProps = {
  repo: PinnedRepo;
};

export function ProjectCard({ repo }: ProjectCardProps) {
  return (
    <div className="bg-gradient-to-br from-pink to-baby-blue rounded-xl transition-all hover:p-0.5 hover:rounded-lg">
      <ExternalLink
        href={repo.url}
        className="flex flex-col bg-dark border-[2px] border-light-dark rounded-lg p-4 gap-2 sm:h-full"
      >
        <header className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">{repo.name}</h1>
          <FiArrowUpRight size={22} className="text-baby-blue" />
        </header>
        <p className="line-clamp-2 text-light-gray">{repo.description}</p>

        <footer className="flex items-center justify-between mt-4 text-light-gray">
          <div className="flex items-center gap-4">
            <div
              className={`
                            border
                            size-4
                            rounded-full
                        `}
              style={{
                background: repo.primaryLanguage.color,
              }}
            />
            <span className="text-sm">{repo.primaryLanguage.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineStar />
            <span>{repo.stargazerCount}</span>
          </div>
        </footer>
      </ExternalLink>
    </div>
  );
}

import { ExternalLink } from "@/lib/ExternalLink";
import { MdOutlineStar } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { HTMLMotionProps, motion } from "framer-motion";

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

type ProjectCardProps = HTMLMotionProps<"li"> & {
  repo: PinnedRepo;
};

export function ProjectCard({ repo, ...props }: ProjectCardProps) {
  return (
    <motion.li
      {...props}
      className="hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600 p-0.5 rounded-lg"
    >
      <ExternalLink
        href={repo.url}
        className="flex flex-col bg-white dark:bg-dark border-2 border-light-gray border-opacity-20 dark:border-light-dark rounded-lg p-4 gap-2 sm:h-full"
      >
        <header className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">{repo.name}</h1>
          <FiArrowUpRight size={22} className="text-baby-blue" />
        </header>
        <p className="line-clamp-2 text-light-dark dark:text-light-gray h-full">
          {repo.description}
        </p>

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
    </motion.li>
  );
}

"use client";

import { Section } from "@/layouts/Section";
import { ProjectCardSkeleton } from "@/layouts/ProjectCardSkeleton";
import { ProjectCard } from "./ProjectCard";
import { useFetch } from "@/utils/useFetch";

import { motion } from "framer-motion";

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

export function Projects() {
  const { data, isLoading } = useFetch<{ data: PinnedRepo[] }>(
    "http://localhost:3000/api",
  );
  const pinnedRepos = data?.data;

  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Section
      title="Projects"
      subtitle="Some of my best creations"
      id="projects"
    >
      <motion.ul
        initial="hidden"
        animate="visible"
        className="space-y-6 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-6 md:grid-cols-3"
      >
        {isLoading &&
          [0, 1, 2, 3, 4, 5].map((index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        {!isLoading &&
          pinnedRepos?.map((repo, index) => (
            <ProjectCard
              key={repo.id}
              repo={repo}
              custom={index}
              variants={itemVariants}
            />
          ))}
      </motion.ul>
    </Section>
  );
}

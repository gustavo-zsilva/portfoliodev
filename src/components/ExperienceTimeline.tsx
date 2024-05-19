"use client";

import Link from "next/link";

import { Section } from "@/layouts/Section";
import { ExperienceSection } from "./ExperienceSection";
import { FaArrowRightLong } from "react-icons/fa6";

import { motion } from "framer-motion";

export function ExperienceTimeline() {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 5,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <Section title="My Experience" className="px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={listVariants}
        className="
            border-l-4
            border-dotted
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:border-l-0
            lg:border-t-4
          "
      >
        <ExperienceSection
          variants={itemVariants}
          title="Started Journey"
          year="2019"
        >
          Started my journey on the dev life, learning C# & Python as my first
          languages
        </ExperienceSection>
        <ExperienceSection
          variants={itemVariants}
          title="Discovered Javascript"
          year="2020"
        >
          Started building basic apps for the web
        </ExperienceSection>
        <ExperienceSection
          variants={itemVariants}
          title="Advancing my Studies"
          year="2020 - 2023"
        >
          Mastered React, NextJS, Typescript & web technologies
        </ExperienceSection>
        <ExperienceSection
          variants={itemVariants}
          title="Building for Real People"
          year="2024 - Today"
        >
          Building high standard, performatic web apps for companies &
          microentrepreneurs
          <Link
            href="/contact"
            className="
                flex
                items-center
                gap-4
                bg-blue-500
                text-white
                py-2
                px-6
                mt-6
                w-fit
                font-semibold
                transition-shadow
                shadow-lg
                rounded-lg
                hover:bg-blue-600
                hover:shadow-blue-500/35
              "
          >
            Contact Me
            <FaArrowRightLong size={20} />
          </Link>
        </ExperienceSection>
      </motion.div>
    </Section>
  );
}

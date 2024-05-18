"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { HTMLMotionProps, motion } from "framer-motion";

type SectionProps = HTMLMotionProps<"section"> & {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({
  children,
  title,
  subtitle,
  className,
  ...props
}: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={twMerge("w-full space-y-10", className)}
      {...props}
    >
      <header className="text-center">
        <h1 className="font-bold text-2xl mb-3">{title}</h1>
        <p className="text-light-gray">{subtitle}</p>
      </header>

      {children}
    </motion.section>
  );
}

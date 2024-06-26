"use client";

import Image from "next/image";
import { mono } from "@/utils/fonts";
import { GradientText } from "@/lib/StyledText";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

export function Main() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-2xl flex flex-col items-center justify-center gap-6 lg:flex-row-reverse lg:justify-between lg:py-20"
    >
      <picture className="bg-red-500 rounded-full p-3 bg-gradient-to-br from-pink to-baby-blue">
        <div className="size-[120px] lg:size-[250px] relative">
          <Image
            src="https://github.com/gustavo-zsilva.png"
            fill
            alt="Profile Picture"
            sizes="(min-width: 1024px) 100vw"
            priority
            className="rounded-full outline outline-8 outline-white dark:outline-dark"
          />
        </div>
      </picture>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="text-center font-bold leading-9 px-4 lg:px-0 lg:text-3xl lg:max-w-lg lg:text-left">
          Hi!&nbsp; <span className="font-normal">👋</span>
          <br />
          My name is&nbsp;
          <GradientText>Gustavo</GradientText>
          &nbsp;and I build stuff for the&nbsp;
          <span className="bg-[url('/images/underline.png')] bg-contain bg-[center_top_.82rem] bg-no-repeat">
            web.
          </span>
        </div>

        <span className="border border-light-dark dark:border-blue-50 text-sm px-4 py-1 rounded-full lg:self-start">
          Florianópolis, Brazil
        </span>

        <div className="flex flex-col items-center gap-6 lg:self-start">
          <p
            className={`${mono.className} text-sm divide-x-2 divide-light-dark dark:divide-blue-50`}
          >
            <span className="pr-2">Fullstack Developer</span>
            <span className="pl-2">Freelancer</span>
          </p>
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
    </motion.section>
  );
}

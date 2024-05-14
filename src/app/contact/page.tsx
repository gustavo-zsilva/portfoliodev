"use client";

import { useState, useEffect } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section } from "@/layouts/Section";

import { MdOutlineEmail } from "react-icons/md";
import { mono } from "@/utils/fonts";

import { FaCircleCheck } from "react-icons/fa6";
import { FiDownload, FiLink } from "react-icons/fi";
import { ExternalLink } from "@/lib/ExternalLink";

export default function Contact() {
  function copyEmailToClipboard() {
    navigator.clipboard.writeText("gustavozontadasilva@gmail.com");
    setIsToastOpen(true);
  }

  const [isToastOpen, setIsToastOpen] = useState(false);

  useEffect(() => {
    if (!isToastOpen) return;

    setTimeout(() => {
      setIsToastOpen(false);
    }, 3000);
  }, [isToastOpen]);

  return (
    <main className="space-y-10 flex flex-col justify-between h-screen">
      <Header />
      <Section
        title="Let's build an awesome project together!"
        className="bg-[url(/images/contact-bg-dark.png)] bg-cover"
      >
        <div className="text-center space-y-4 [&_a]:inline-flex [&_a]:items-center [&_a]:gap-2">
          <p>To hire me, please contact me via email</p>

          <button
            className="p-2 border inline-flex items-center gap-2 border-light-gray rounded-sm"
            onClick={copyEmailToClipboard}
          >
            <MdOutlineEmail size={20} />
            <span className={`${mono.className} text-base`}>
              gustavozontadasilva@gmail.com
            </span>
          </button>

          <p>Also:</p>

          <div className="space-y-6">
            <a
              href="/files/cv.pdf"
              download
              className="bg-teal-600 px-6 py-2 rounded-full transition-all hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-200/10 cursor-pointer"
            >
              Download CV
              <FiDownload size={20} />
            </a>
            <ExternalLink
              href="https://github.com/gustavo-zsilva"
              className="hover:underline underline-offset-4"
            >
              See all projects
              <FiLink size={20} />
            </ExternalLink>
          </div>
        </div>

        {isToastOpen && (
          <div
            className="fixed animate-fade right-4 bottom-4 max-w-xs bg-teal-100 border border-teal-200 text-sm text-teal-800 px-6 py-3 rounded-lg"
            role="alert"
          >
            <div className="flex items-center gap-4">
              <FaCircleCheck size={22} />
              <h2>Email copiado com sucesso!</h2>
            </div>
          </div>
        )}
      </Section>
      <Footer />
    </main>
  );
}

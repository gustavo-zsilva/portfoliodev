"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Socials } from "./Socials";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  function redirectToSection(elementId: string) {
    router.push(`/${elementId}`);
  }

  return (
    <header className="w-full flex flex-col items-center px-4">
      <Image
        src="/images/logo-dark.png"
        alt="Logo"
        width={90}
        height={90}
        priority
      />
      <nav className="flex flex-wrap gap-x-10 gap-y-2 justify-center">
        <Link href="/" className={`${pathname === "/" && "font-semibold"}`}>
          Home
        </Link>
        <Link
          href="/about"
          className={`${pathname === "/about" && "font-semibold"}`}
        >
          About
        </Link>
        <button onClick={() => redirectToSection("#tech-stacks")}>
          Tech Stack
        </button>
        <button onClick={() => redirectToSection("#how-i-work")}>
          How I Work
        </button>
        <button onClick={() => redirectToSection("#projects")}>Projects</button>
        <Link
          href="/contact"
          className={`${pathname === "/contact" && "font-semibold"}`}
        >
          Contact
        </Link>
      </nav>
      <Socials className="mt-4" />
    </header>
  );
}

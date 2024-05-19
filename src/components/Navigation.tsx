"use client";

import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type NavigationProps = ComponentProps<"nav">;

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();
  const router = useRouter();

  function redirectToSection(elementId: string) {
    router.push(`/${elementId}`);
  }

  return (
    <nav
      className={twMerge(
        `flex flex-wrap gap-x-10 gap-y-2 justify-center`,
        className,
      )}
    >
      <Link
        href="/"
        className={`${pathname === "/" && "font-semibold text-shadow shadow-white/20"}`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${pathname === "/about" && "font-semibold text-shadow shadow-white/20"}`}
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
        className={`${pathname === "/contact" && "font-semibold text-shadow shadow-white/20"}`}
      >
        Contact
      </Link>
    </nav>
  );
}

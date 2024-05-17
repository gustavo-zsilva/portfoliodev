import Image from "next/image";

import { Socials } from "./Socials";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="w-full flex flex-col lg:flex-row items-center px-4 lg:justify-between">
      <Image
        src="/images/logo-dark.png"
        alt="Logo"
        width={90}
        height={90}
        priority
      />
      <Navigation />
      <Socials className="mt-4 lg:m-0" />
    </header>
  );
}

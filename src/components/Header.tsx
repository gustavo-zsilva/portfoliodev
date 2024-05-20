import Link from "next/link";

import { Socials } from "./Socials";
import { Navigation } from "./Navigation";
import { ThemeSwitch } from "./ThemeSwitch";
import { ThemeImage } from "./ThemeImage";

export function Header() {
  return (
    <header className="w-full flex flex-col lg:flex-row items-center lg:justify-between">
      <Link href="/">
        <ThemeImage
          srcLight="/images/logo-light.png"
          srcDark="/images/logo-dark.png"
          alt="Logo"
          width={90}
          height={90}
        />
      </Link>
      <Navigation />
      <div className="flex items-center mt-4 lg:m-0 gap-4">
        <Socials />
        <ThemeSwitch />
      </div>
    </header>
  );
}

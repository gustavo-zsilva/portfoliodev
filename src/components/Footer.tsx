import { Socials } from "./Socials";
import { Navigation } from "./Navigation";
import { ThemeImage } from "./ThemeImage";

export function Footer() {
  return (
    <footer className="flex flex-col items-center w-full gap-6 pb-10 text-light-dark dark:text-light-gray">
      <div className="flex items-center gap-4 w-full">
        <div className="size-0.5 flex flex-1 bg-light-gray rounded-full" />
        <Socials />
        <div className="size-0.5 flex flex-1 bg-light-gray rounded-full" />
      </div>

      <Navigation className="hidden sm:flex sm:w-full sm:justify-between md:px-10" />

      <div className="md:flex md:items-center md:w-full md:justify-between md:px-10">
        <div className="flex flex-col">
          <a href="#">+55 48 98847-9786</a>
          <a href="#">gustavozontadasilva@gmail.com</a>
        </div>

        <div className="flex flex-col items-center md:flex-row-reverse">
          <ThemeImage
            srcLight="/images/logo-light.png"
            srcDark="/images/logo-dark.png"
            alt="Logo"
            width={90}
            height={90}
          />
          <span>Made with 💜 by Gustavo Z.</span>
        </div>
      </div>
    </footer>
  );
}

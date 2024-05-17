import Image from "next/image";
import { Socials } from "./Socials";
import { Navigation } from "./Navigation";

export function Footer() {
  return (
    <footer className="flex flex-col items-center w-full gap-6 pb-10 text-light-gray">
      <div className="flex items-center gap-4 w-full">
        <div className="size-0.5 flex flex-1 bg-light-gray rounded-full" />
        <Socials />
        <div className="size-0.5 flex flex-1 bg-light-gray rounded-full" />
      </div>

      <Navigation className="hidden sm:flex sm:w-full sm:justify-between md:px-10" />

      <div className="md:flex md:items-center md:w-full md:justify-between md:px-10">
        <div className="text-center">
          <p>+55 48 98847-9786</p>
          <p>gustavozontadasilva@gmail.com</p>
        </div>

        <div className="flex flex-col items-center md:flex-row-reverse">
          <Image
            src="/images/logo-dark.png"
            alt="logo"
            width={90}
            height={90}
          />
          <span>Made with 💜 by Gustavo Z.</span>
        </div>
      </div>
    </footer>
  );
}

import Image from 'next/image'
import { Socials } from "./Socials";

export function Footer() {
    return (
        <footer className="flex flex-col items-center w-full gap-6 pb-10">
            <div className="flex items-center gap-4 w-full">
                <div className="size-0.5 flex flex-1 bg-light-gray rounded-full" />
                <Socials />
                <div className="size-0.5 flex flex-1 bg-light-gray rounded-full" />
            </div>

            <div className="text-center">
                <p>+55 48 98847-9786</p>
                <p>gustavozontadasilva@gmail.com</p>
            </div>

            <div className="flex flex-col items-center">
                <Image
                    src="/logo-dark.png"
                    alt="logo"
                    width={90}
                    height={90}
                />
                <span>Made with 💜 by Gustavo Z.</span>
            </div>
        </footer>
    )
}
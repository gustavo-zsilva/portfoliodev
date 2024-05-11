import Image from 'next/image'
import Link from 'next/link'

import { Socials } from './Socials'

export function Header() {
    return (
        <header className="w-full h-[20vh] flex flex-col items-center px-4">
            <Image
                src="/logo-dark.png"
                alt="Logo"
                width={90}
                height={90}
            />
            <nav className="flex flex-wrap gap-x-10 gap-y-2 justify-center">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <a href="#tech-stacks">Tech Stack</a>
                <a href="#projects">Projects</a>
                <Link href="/contact">Contact</Link>
            </nav>
            <Socials className="mt-4" />
        </header>
    )
}
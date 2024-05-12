'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Socials } from './Socials'

export function Header() {
    const pathname = usePathname()

    return (
        <header className="w-full flex flex-col items-center px-4">
            <Image
                src="/logo-dark.png"
                alt="Logo"
                width={90}
                height={90}
            />
            <nav className="flex flex-wrap gap-x-10 gap-y-2 justify-center">
                <Link href="/" className={`${pathname === '/' && 'font-semibold'}`}>Home</Link>
                <Link href="/about" className={`${pathname === '/about' && 'font-semibold'}`}>About</Link>
                <a href="#tech-stacks">Tech Stack</a>
                <a href="#projects">Projects</a>
                <Link href="/contact" className={`${pathname === '/contact' && 'font-semibold'}`}>Contact</Link>
            </nav>
            <Socials className="mt-4" />
        </header>
    )
}
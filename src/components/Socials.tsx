import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { ExternalLink } from '@/lib/ExternalLink'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

type SocialsProps = ComponentProps<'div'> & {
    size?: number;
}

export function Socials({ className, size = 24 }: SocialsProps) {
    return (
        <div className={twMerge("flex gap-4", className)}>
            <ExternalLink
                href="https://github.com/gustavo-zsilva"
                className="p-3 bg-light-dark rounded-full m-auto"
            >
                <FaGithub size={size} />
            </ExternalLink>
            <ExternalLink
                href="https://www.linkedin.com/in/gustavo-zsilva/"
                className="p-3 bg-light-dark rounded-full m-auto"
            >
                <FaLinkedinIn size={size} />
            </ExternalLink>
            <ExternalLink
                href="https://www.instagram.com/gustavo.zslv/"
                className="p-3 bg-light-dark rounded-full m-auto"
            >
                <FaInstagram size={size} />
            </ExternalLink>
        </div>
    )
}
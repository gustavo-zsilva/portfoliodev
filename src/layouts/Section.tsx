import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type SectionProps = ComponentProps<'section'> & {
    title: string,
    subtitle?: string,
}

export function Section({ children, title, subtitle, className, ...props }: SectionProps) {
    return (
        <section className={twMerge('w-full space-y-10', className)} {...props}>
            <header className="text-center">
                <h1 className="font-bold text-2xl mb-3">
                    {title}
                </h1>
                <p>
                    {subtitle}
                </p>
            </header>

            {children}
        </section>
    )
}
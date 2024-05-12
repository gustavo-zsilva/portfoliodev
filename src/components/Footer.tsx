import { Socials } from "./Socials";

export function Footer() {
    return (
        <footer className="w-full">
            <div className="flex items-center gap-4">
                <div className="size-0.5 flex flex-1 bg-white rounded-full" />
                <Socials />
                <div className="size-0.5 flex flex-1 bg-white rounded-full" />
            </div>
        </footer>
    )
}
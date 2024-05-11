import Image from 'next/image'
import { mono } from '@/utils/fonts'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export function Main() {
    return (
        <section className="text-2xl flex flex-col items-center justify-center gap-6">

            <picture className="bg-red-500 rounded-full p-3 bg-gradient-to-br from-pink to-baby-blue">
                <Image
                    src="https://github.com/gustavo-zsilva.png"
                    width={100}
                    height={100}
                    alt="Profile Picture"
                    priority
                    className="rounded-full outline outline-8 outline-dark"
                />
            </picture>

            <div className="text-center font-bold leading-9 px-4">
                <span className="flex justify-center">
                    Hi!&nbsp; <span className="font-normal">👋</span>
                </span>
                My name is&nbsp;
                <span className="bg-gradient-to-r from-blue-500 to-baby-blue text-transparent bg-clip-text">
                    Gustavo
                </span>
                &nbsp;and I build stuff for the&nbsp;
                <span className="bg-[url('/underline.png')] bg-contain bg-[center_top_.82rem] bg-no-repeat">
                    web.
                </span>
            </div>

            <span className="border border-white text-sm px-4 py-1 rounded-full">
                Florianópolis, Brazil
            </span>

            <p className={`${mono.className} text-sm divide-x-2`}>
                <span className="px-2">Fullstack Developer</span>
                <span className="px-2">Freelancer</span>
            </p>
            <MdOutlineKeyboardArrowDown />

        </section>
    )
}
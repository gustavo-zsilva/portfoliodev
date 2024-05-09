import StackIcon from 'tech-stack-icons'
import { promises as fs } from 'fs';

export async function Techs() {

    const file = await fs.readFile(process.cwd() + '/stack.json', 'utf8')
    const techList: Object = JSON.parse(file)

    console.log(techList);
    

    return (
        <section className="w-full text-center">
            <h1 className="font-bold text-2xl mb-3">Tech Stack</h1>
            <p>Technologies I most use</p>

            <div className="grid grid-cols-3 gap-6 mt-10">
                {Object.entries(techList).map(([name, iconCode]) => (
                    <div className="flex flex-col justify-center items-center gap-2">
                        <StackIcon name={iconCode} className="w-[45px]" />
                        <span className="uppercase text-sm opacity-75">{name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
import StackIcon from 'tech-stack-icons'
import { promises as fs } from 'fs';
import { Section } from '@/layouts/Section';

export async function Techs() {

    const file = await fs.readFile(process.cwd() + '/stack.json', 'utf8')
    const techList: Object = JSON.parse(file)

    return (
        <Section
            title="Tech Stack"
            subtitle="Technologies I most use"
            id="tech-stacks"
        >
            <div className="grid grid-cols-3 gap-6">
                {Object.entries(techList).map(([name, iconCode]) => (
                    <div
                        key={iconCode}
                        className="flex flex-col items-center gap-2"
                    >
                        <StackIcon name={iconCode} className="w-[45px]" />
                        <span className="uppercase text-sm opacity-75">{name}</span>
                    </div>
                ))}
            </div>
        </Section>
    )
}
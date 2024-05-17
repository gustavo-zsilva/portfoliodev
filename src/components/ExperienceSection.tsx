import { ReactNode } from "react";

type ExperienceProps = {
  children: ReactNode;
  title: string;
  year: string;
};

export function ExperienceSection({ children, title, year }: ExperienceProps) {
  return (
    <section className="flex gap-6 lg:flex-col lg:flex-1">
      <div
        className="
            min-w-3
            min-h-3
            bg-blue-400
            ring-4
            rounded-full
            ring-dark
            dark:ring-white
            ring-offset-4
            ring-offset-white
            dark:ring-offset-dark
            -translate-x-[70%]
            translate-y-[50%]
            shadow-glow
            shadow-blue-500/90
            flex
            self-start
            lg:-translate-x-0
            lg:-translate-y-[70%]
        "
      />
      <main>
        <header>
          <h1 className="font-bold">{title}</h1>
          <sub>{year}</sub>
        </header>
        <div className="mt-4 flex flex-col">{children}</div>
      </main>
    </section>
  );
}

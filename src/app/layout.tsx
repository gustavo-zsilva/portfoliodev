import type { Metadata } from "next";
import { poppins } from '@/utils/fonts'
import "./globals.css";

export const metadata: Metadata = {
  title: "Gustavo Zonta | Web Dev",
  description: "My web dev portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`
        ${poppins.className}
        flex
        min-h-screen
        gap-10
        flex-col
        items-center
        px-4
        text-white
        bg-dark
      `}>
        {children}
      </body>
    </html>
  );
}

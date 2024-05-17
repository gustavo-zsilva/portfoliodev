import type { Metadata } from "next";
import { poppins } from "@/utils/fonts";
import { Providers } from "./providers";
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`
        ${poppins.className}
        flex
        flex-col
        items-center
        min-h-screen
        max-w-[1024px]
        px-4
        bg-[#fff]
        text-black
        dark:text-blue-50
        dark:bg-dark
        lg:m-auto
        lg:px-0
      `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

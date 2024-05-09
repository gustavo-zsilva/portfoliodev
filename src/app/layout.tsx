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
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

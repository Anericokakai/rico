import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | rico.dev ",
    default: "Home | rico.dev",
  },
  description: "Software Engineer, Web Developer, Full Stack Developer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden bg-black">
      <body className={inter.className}>
        <section className=" px-auto w-full px- bg-black ">{children}</section>
      </body>
    </html>
  );
}

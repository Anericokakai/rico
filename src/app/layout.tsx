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
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={inter.className}>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('rico-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}catch(e){}})()` }} />
        <section className="w-full">{children}</section>
      </body>
    </html>
  );
}

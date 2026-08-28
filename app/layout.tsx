import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Initiative Labs",
  description: "Physical intelligence, built in the open.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg font-sans text-fg">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:bg-accent focus-visible:px-4 focus-visible:py-3 focus-visible:font-mono focus-visible:text-[11px] focus-visible:uppercase focus-visible:tracking-[0.14em] focus-visible:text-bg"
        >
          Skip to content
        </a>
        <Nav />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex flex-1 flex-col focus:outline-none"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

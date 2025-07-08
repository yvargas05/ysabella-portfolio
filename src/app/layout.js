import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cormorant",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-greatvibes",
});

export const metadata = {
  title: "Ysabella&apos;s Portfolio", // escaped apostrophe
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.className} ${greatVibes.className} flex flex-col min-h-screen`}
      >
        {/* Navigation */}
        <nav className="fixed top-6 right-10 flex gap-6 font-serif text-lg z-50 font-bold">
          <Link href="/" className="hover:text-[var(--color-hover)] transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-[var(--color-hover)] transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-[var(--color-hover)] transition">
            Projects
          </Link>
          <Link href="/resume" className="hover:text-[var(--color-hover)] transition">
            Resume
          </Link>
          <Link href="/contact" className="hover:text-[var(--color-hover)] transition">
            Contact
          </Link>
        </nav>

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="text-medium text-center text-black-300 dark:text-gray-500 mb-10 z-50">
          <p>© 2025 Ysabella Vargas</p>
          <div className="mt-2 flex justify-center gap-4">
            <a
              href="https://github.com/yvargas05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/github.png"
                alt="GitHub icon"
                width={24}
                height={24}
                className="hover:opacity-80 transition"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ysabellavargas05/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn icon"
                width={24}
                height={24}
                className="hover:opacity-80 transition"
              />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

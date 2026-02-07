import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Lost Sierra Lodge | Portola & Graeagle",
  description:
    "Luxury, mountain-modern group lodge near Portola and Graeagle. Hot tub, pool hall, poker table, dog friendly. Book direct.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900">
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold tracking-tight">
              The Lost Sierra Lodge
            </Link>

            <nav className="hidden gap-6 text-sm md:flex">
              <Link href="/stay" className="hover:underline">
                Stay
              </Link>
              <Link href="/guide" className="hover:underline">
                Guide
              </Link>
              <Link href="/gallery" className="hover:underline">
                Gallery
              </Link>
              <Link href="/policies" className="hover:underline">
                Policies
              </Link>
              <Link
                href="/book"
                className="rounded-full bg-black px-4 py-2 text-white hover:opacity-90"
              >
                Book Now
              </Link>
            </nav>

            <Link
              href="/book"
              className="rounded-full bg-black px-4 py-2 text-sm text-white hover:opacity-90 md:hidden"
            >
              Book
            </Link>
          </div>
        </header>

        {children}

        <footer className="border-t">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} The Lost Sierra Lodge</p>
            <div className="flex gap-4">
              <Link href="/policies" className="hover:underline">
                Policies
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

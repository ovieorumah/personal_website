import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ovie Tony Orumah | Fractional BI Architect",
  description: "Build a cost-effective BI foundation with experienced expertise.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-50 bg-white border-b border-black">
          <nav className="w-full px-6 py-4 flex justify-between items-center relative">
            <div className="font-bold text-2xl tracking-tighter w-1/3">
              <Link href="/">Ⓞ</Link>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 text-xs uppercase font-bold tracking-widest hidden md:block">
              Ovie Orumah
            </div>
            <ul className="flex gap-6 text-xs uppercase font-bold tracking-widest w-1/3 justify-end">
              <li><Link href="#about" className="hover:line-through transition-all">About</Link></li>
              <li><Link href="#experience" className="hover:line-through transition-all">Experience</Link></li>
              <li><Link href="#services" className="hover:line-through transition-all">Services</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-white border-t border-black py-8 text-center flex flex-col md:flex-row justify-between items-center px-6 text-xs uppercase font-bold tracking-widest">
          <p>
            &copy; {new Date().getFullYear()} Ovie Tony Orumah.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/ovie-tony-orumah-384041177" target="_blank" rel="noreferrer" className="hover:line-through transition-all">LinkedIn</a>
            <a href="mailto:ovieorumah@gmail.com" className="hover:line-through transition-all">Email</a>
          </div>
        </footer>
      </body>
    </html>
  );
}

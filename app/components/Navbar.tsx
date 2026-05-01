"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-[60] px-6 md:px-12 py-5 flex items-center justify-center gap-50 bg-black/80 backdrop-blur-md border-b border-white/[0.06] transition-all duration-300">

            {/* Logo */}
            <a href="#hero" className="text-xl font-bold tracking-tighter text-white group">
                Omi<span className="text-neutral-500 group-hover:text-white transition-colors">.</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10 text-sm font-medium text-neutral-500">
                {["Work", "About", "Contact"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="relative hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Hamburger — mobile only */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
                className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full hover:bg-white/[0.06] transition-colors"
            >
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 top-[73px] w-full bg-black flex flex-col items-start px-8 py-12 gap-8 md:hidden transition-all duration-500 ease-in-out ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                {["Work", "About", "Contact"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setMenuOpen(false)}
                        className="text-4xl font-semibold text-white hover:italic transition-all"
                    >
                        {item}
                    </a>
                ))}

                <div className="mt-auto w-full pt-8 border-t border-white/[0.08]">
                    <p className="text-sm text-neutral-500 uppercase tracking-widest">Socials</p>
                    <div className="flex gap-6 mt-4 font-medium text-white">
                        <a href="#" className="hover:underline">LinkedIn</a>
                        <a href="#" className="hover:underline">GitHub</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
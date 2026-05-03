"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-[60] px-6 md:px-12 py-5 flex items-center justify-between bg-black/80 backdrop-blur-md border-b border-white/[0.06] transition-all duration-300 font-['Geist']">

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
                className="md:hidden relative z-[70] flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full"
            >
                <span className={`block w-5 h-0.5 bg-white transition-all duration-500 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-5 h-0.5 bg-white transition-all duration-500 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-white transition-all duration-500 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>

            {/* Mobile Contact Overlay */}
            <div className={`fixed inset-0 z-[65] w-full h-screen bg-black flex flex-col items-center justify-center px-8 md:hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
                }`}>

                {/* Main Action */}
                <div className="text-center mb-16">
                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.4em] mb-4">
                        Project Inquiry
                    </p>
                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="text-5xl font-semibold text-white tracking-tighter hover:italic transition-all duration-300"
                    >
                        Contact Me!
                    </a>
                </div>

                {/* Full Details Grid */}
                <div className="grid grid-cols-1 gap-10 w-full max-w-xs text-center">

                    {/* Email */}
                    <div className="space-y-2">
                        <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-[0.3em]">Email</span>
                        <a href="mailto:hello@omi.design" className="block text-lg text-white font-medium hover:text-neutral-400 transition-colors">
                            oppongmeshack54@gmail.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-[0.3em]">Phone</span>
                        <a href="tel:+233000000000" className="block text-lg text-white font-medium">
                            +233 (0) 24 022 1242
                        </a>
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                        <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-[0.3em]">Location</span>
                        <p className="text-lg text-white font-medium">
                            Kumasi, Ghana
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="pt-8 border-t border-white/10 flex justify-center gap-8 text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                        <a href="https://www.linkedin.com/in/oppongmpiani/" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://github.com/Meshack000" className="hover:text-white transition-colors">GitHub</a>
                        <a href="https://www.behance.net/oppongmeshack" className="hover:text-white transition-colors">Behance</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
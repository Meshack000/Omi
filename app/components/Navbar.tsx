"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [dark, setDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex items-center justify-between bg-stone-50/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-stone-200 dark:border-neutral-800 transition-colors duration-300">

            {/* Logo */}
            <a href="#hero" className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-stone-100">
                Omi
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                <a href="#work" className="hover:text-neutral-900 dark:hover:text-stone-100 transition-colors duration-200">Work</a>
                <a href="#about" className="hover:text-neutral-900 dark:hover:text-stone-100 transition-colors duration-200">About</a>
                <a href="#contact" className="hover:text-neutral-900 dark:hover:text-stone-100 transition-colors duration-200">Contact</a>
            </div>

            {/* Right side — dark toggle + hamburger */}
            <div className="flex items-center gap-3">
                {/* Dark mode toggle */}
                <button
                    onClick={() => setDark(!dark)}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-stone-200 dark:bg-neutral-800 hover:bg-stone-300 dark:hover:bg-neutral-700 transition-colors duration-200 text-base"
                >
                    {dark ? "☀️" : "🌙"}
                </button>

                {/* Hamburger — mobile only */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9"
                >
                    <span className={`block w-5 h-0.5 bg-neutral-900 dark:bg-stone-100 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-neutral-900 dark:bg-stone-100 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-neutral-900 dark:bg-stone-100 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-stone-50 dark:bg-neutral-950 border-b border-stone-200 dark:border-neutral-800 flex flex-col items-start px-6 py-6 gap-6 md:hidden transition-all duration-300">
                    <a href="#work" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-stone-100 transition-colors">Work</a>
                    <a href="#about" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-stone-100 transition-colors">About</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-stone-100 transition-colors">Contact</a>
                </div>
            )}

        </nav>
    );
}
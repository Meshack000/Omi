"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socials = [
        {
            name: "Behance",
            href: "https://www.behance.net/oppongmpiani/",
            icon: faBehance,
            color: "#1769FF"
        },
        {
            name: "X",
            href: "hhttps://x.com/iammariopop",
            icon: faXTwitter,
            color: "#1DA1F2"
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/oppongmpiani/",
            icon: faLinkedin,
            color: "#0A66C2"
        },
    ];

    return (
        <footer className="w-full bg-[#000000] text-[#f0ede8] py-16 font-sans">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">

                    {/* Omi Branding Section */}
                    <div className="flex flex-col items-center md:items-start group">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl transition-transform group-hover:scale-105">
                                <span className="text-black font-black text-base tracking-tighter">O</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tighter  leading-none">Omi.</span>
                                <span className="text-[9px] text-white/20 uppercase tracking-[0.4em] mt-1">Creative Tech Guy</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Icons in Official Colors */}
                    <div className="flex items-center gap-10">
                        {socials.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.15 }}
                                className="relative transition-all duration-300"
                            >
                                <FontAwesomeIcon icon={social.icon} className="w-15 h-15" style={{ color: social.color }} />
                            </motion.a>
                        ))}
                    </div>

                </div>

                {/* Footer Meta */}
                <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-white/10 uppercase tracking-[0.2em]">
                        Next.js, Vite & Tailwind
                    </p>
                    <p className="text-[10px] text-white/10 uppercase tracking-[0.2em]">
                        © {currentYear} — Omi Portfolio
                    </p>
                </div>

                
            </div>
        </footer>
    );
}
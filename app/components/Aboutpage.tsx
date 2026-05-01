"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    const [index, setIndex] = useState(0);

    const sections = [
        {
            title: "About Me 👋",
            image: "/images/2.jpg",
            content: (
                <div className="space-y-4">
                    <p>UI/UX designer and frontend developer focused on building clean, responsive, and user-centered digital experiences.</p>
                    <p>I enjoy turning ideas into modern interfaces that are both visually engaging and easy to use.</p>
                </div>
            ),
        },
        {
            title: "Education 🎓",
            image: "/images/4.jpg",
            content: (
                <div className="space-y-4">
                    <p>Graduated with a degree in Computer Engineering, building a strong foundation in programming and system design.</p>
                    <p>My journey began at Prempeh College in Kumasi as a Science student, where I developed a deep interest in technology and problem-solving.</p>
                </div>
            ),
        },
        {
            title: "Background 🌍",
            image: "/images/1.jpg",
            content: (
                <div className="space-y-4">
                    <p>Started with curiosity about how websites work, which grew into a passion for design and development.</p>
                    <p>I’ve worked on real projects, creating websites and interfaces that focus on usability, performance, and clean design.</p>
                </div>
            ),
        },
    ];

    const nextSection = () => {
        setIndex((prev) => (prev + 1) % sections.length);
    };

    const fadeIn = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
    };

    const imageVariant = {
        initial: { opacity: 0, filter: "blur(10px)", scale: 1.1 },
        animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
        exit: { opacity: 0, filter: "blur(10px)", scale: 0.9 },
        transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] }
    };

    return (
        <section id="about" className="relative min-h-screen bg-[#080808] font-sans text-[#f0ede8] flex items-center justify-center py-20 overflow-hidden">
            {/* Texture Layer */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/images/noise.png')]" />

            <div className="max-w-4xl w-full mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">

                    {/* Animated Full Color Image Container */}
                    <div className="shrink-0">
                        <div className="relative w-[260px] md:w-[300px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-neutral-900">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={sections[index].image}
                                    variants={imageVariant}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={sections[index].image}
                                        alt={sections[index].title}
                                        fill
                                        className="object-cover" // Grayscale removed
                                        priority
                                        sizes="(max-width: 768px) 260px, 300px"
                                    />
                                    {/* Subtle Overlay to help text pop */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30" />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 max-w-md w-full">
                        <div className="flex items-center justify-between mb-4">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={sections[index].title}
                                    variants={fadeIn}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="text-2xl font-medium tracking-tight"
                                >
                                    {sections[index].title}
                                </motion.h2>
                            </AnimatePresence>

                            <button
                                onClick={nextSection}
                                className="p-2 hover:bg-white/5 rounded-full transition-colors group"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 group-hover:text-white transition-colors">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </div>

                        <div className="w-full h-[1px] bg-white/10 mb-8" />

                        <div className="min-h-[160px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    variants={fadeIn}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="text-white/50 leading-relaxed font-light text-base md:text-lg"
                                >
                                    {sections[index].content}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="pt-8 flex items-center gap-6">
                            <a href="mailto:hello@yoursite.com" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all border-b border-white/10 pb-1">
                                Connect
                            </a>
                            <a href="#work" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 hover:text-white transition-all">
                                Case Studies ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
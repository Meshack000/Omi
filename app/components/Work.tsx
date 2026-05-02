"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 'design' | 'development';
type Project = {
    name: string;
    category: string;
    src: string;
    url?: string;
    description?: string; // Added for modal content
};

const projects: Record<Tab, Project[]> = {
    design: [
        {
            name: "Zeni — Student Finance App",
            category: "Mobile App UI/UX Design",
            src: "/images/f.jpg",
            url: "https://www.behance.net/gallery/246651877/Zeni-Student-Finance-Mobile-App-UIUX-Design", // Add your link here
            description: "A comprehensive financial management tool designed specifically for students to track expenses and manage loans."
        },
        {
            name: "GCB Redesigned Mobile Banking App",
            category: "UI/UX Redesign Case Study",
            src: "/images/y.jpg",
            url: "https://www.linkedin.com/posts/oppongmpiani_i-redesigned-the-gcb-mobile-banking-app-activity-7455164072045572096-Msx_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmfJZsBqcmq9JUpb2FLoCfORnA3iK71Izo", // Add your link here
            description: "Modernizing the traditional banking experience with a focus on accessibility and speed."
        }, 
        { name: "Movie App Design", category: "System Design", src: "/images/yy.jpg", description: "A sleek interface for discovering and streaming cinema, featuring a custom recommendation engine." },
        { name: "FitTrack – Smart Fitness", category: " Mobile App UI Design", src: "/images/p.jpg", description: "Gamified fitness tracking with real-time biometric data visualization." },
        { name: "Music App Design", category: "Visual Design", src: "/images/uuuu.jpg", description: "An immersive audio experience focusing on album art and smooth transitions." },
        { name: "Enterprise AI Platform", category: "UI/UX Design", src: "/images/u.jpg", description: "B2B dashboard for monitoring large-scale AI model performance and data sets." },
    ],
    development: [
        { name: "School Management System", category: "React & Tailwind", src: "/images/school.jpg", url: "https://modern-school-erp.vercel.app/", description: "A full-scale ERP for educational institutions." },
        // ... (Keep your other development projects here)
    ]
};

export default function Work() {
    const [activeTab, setActiveTab] = useState<Tab>('design');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="work" className="bg-black px-6 md:px-16 lg:px-24 py-32 font-['Geist'] relative">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.5em] mb-4">Portfolio</h2>
                    <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-10">Selected Projects</h3>

                    {/* Toggle Switch */}
                    <div className="relative flex p-1 bg-white/3 border border-white/8 rounded-full backdrop-blur-2xl">
                        <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeTab === 'development' ? 'left-[calc(50%+2px)]' : 'left-1'}`} />
                        <button onClick={() => setActiveTab('design')} className={`relative z-10 px-10 py-3 text-xs font-bold uppercase tracking-widest transition-colors duration-300 rounded-full ${activeTab === 'design' ? 'text-black' : 'text-neutral-500 hover:text-neutral-300'}`}>Design</button>
                        <button onClick={() => setActiveTab('development')} className={`relative z-10 px-10 py-3 text-xs font-bold uppercase tracking-widest transition-colors duration-300 rounded-full ${activeTab === 'development' ? 'text-black' : 'text-neutral-500 hover:text-neutral-300'}`}>Development</button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {projects[activeTab].map((project) => (
                        <div key={project.name} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
                            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 transition-all duration-500 group-hover:border-white/12">
                                <Image src={project.src} alt={project.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-in-out" />
                            </div>
                            <div className="mt-6">
                                <h4 className="text-white text-lg font-medium tracking-tight">{project.name}</h4>
                                <p className="text-neutral-600 text-[10px] font-bold uppercase tracking-[0.2em] mt-1.5 transition-colors group-hover:text-neutral-400">{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Glassmorphism Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Card */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-4xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-10 text-white/50 hover:text-white transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                            </button>

                            {/* Image Side */}
                            <div className="w-full md:w-1/2 relative aspect-video md:aspect-auto min-h-[300px]">
                                <Image src={selectedProject.src} alt={selectedProject.name} fill className="object-cover" />
                            </div>

                            {/* Info Side */}
                            {/* Info Side */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.3em] mb-2">
                                    {selectedProject.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-tight">
                                    {selectedProject.name}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed mb-10">
                                    {selectedProject.description || "Project details and case study information will appear here."}
                                </p>

                                {/* The Action Button */}
                                {selectedProject.url ? (
                                    <a
                                        href={selectedProject.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn relative inline-flex items-center justify-center px-8 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-300 hover:pr-12 active:scale-95 w-fit"
                                    >
                                        <span className="relative z-10">View Live Project</span>
                                        <svg
                                            className="absolute right-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0"
                                            width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M3.5 3.5H11.5V11.5M11.5 3.5L3.5 11.5" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    </a>
                                ) : (
                                    <div className="px-6 py-3 border border-white/10 rounded-full text-neutral-500 text-[10px] font-bold uppercase tracking-widest w-fit">
                                        Case Study Coming Soon
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
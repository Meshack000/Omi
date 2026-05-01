"use client";
import { useState } from 'react';

const projects = {
    design: [
        { name: "PassIt Branding", category: "Logo & UI", image: "/passit.jpg" },
        { name: "Enterprise AI", category: "UI/UX", image: "/ai-ui.jpg" },
        { name: "Cloud Migration", category: "Product Design", image: "/cloud.jpg" },
        { name: "Spotify Redesign", category: "Visual Design", image: "/spotify.jpg" },
        { name: "Linear Icons", category: "Iconography", image: "/linear.jpg" },
        { name: "Nexus Platform", category: "UI Design", image: "/nexus.jpg" },
    ],
    development: [
        { name: "School Website", category: "React & Tailwind", image: "/school.jpg" },
        { name: "E-commerce App", category: "Next.js", image: "/store.jpg" },
        { name: "Portfolio v2", category: "Front-end", image: "/portfolio.jpg" },
        { name: "SaaS Dashboard", category: "React", image: "/saas.jpg" },
        { name: "Fintech API", category: "Development", image: "/fintech.jpg" },
        { name: "AI Chatbot", category: "Next.js", image: "/bot.jpg" },
    ]
};

export default function Work() {
    const [activeTab, setActiveTab] = useState('design');

    return (
        <section id="work" className="bg-black px-6 md:px-16 lg:px-24 py-32 overflow-hidden font-['Geist']">
            <div className="max-w-6xl mx-auto">

                {/* Header & Tagline */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.5em] mb-4">
                        Selected Works
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">
                        Crafting Digital Excellence
                    </h3>

                    {/* Custom Toggle Switch */}
                    <div className="relative flex p-1 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-xl">
                        <div
                            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full transition-all duration-500 ease-in-out ${activeTab === 'development' ? 'left-[calc(50%+2px)]' : 'left-1'
                                }`}
                        />
                        <button
                            onClick={() => setActiveTab('design')}
                            className={`relative z-10 px-8 py-2.5 text-sm font-medium transition-colors duration-300 rounded-full ${activeTab === 'design' ? 'text-black' : 'text-neutral-500 hover:text-neutral-300'
                                }`}
                        >
                            Design
                        </button>
                        <button
                            onClick={() => setActiveTab('development')}
                            className={`relative z-10 px-8 py-2.5 text-sm font-medium transition-colors duration-300 rounded-full ${activeTab === 'development' ? 'text-black' : 'text-neutral-500 hover:text-neutral-300'
                                }`}
                        >
                            Development
                        </button>
                    </div>
                </div>

                {/* 3x3 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects[activeTab].map((project, index) => (
                        <div
                            key={project.name}
                            className="group animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Glass Image Container */}
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.05] transition-all duration-500 group-hover:border-white/[0.15]">
                                {/* Placeholder for your work images */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                                {/* Overlay Shine */}
                                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000" />
                            </div>

                            {/* Name & Category Beneath */}
                            <div className="mt-5 px-1">
                                <h4 className="text-white text-lg font-medium tracking-tight">
                                    {project.name}
                                </h4>
                                <p className="text-neutral-500 text-sm mt-1 uppercase tracking-widest text-[10px] font-bold">
                                    {project.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
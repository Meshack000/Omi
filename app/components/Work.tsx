"use client";

import { useState } from 'react';
import Image from 'next/image'; // Optimized for Next.js

type Tab = 'design' | 'development';
type Project = {
    name: string;
    category: string;
    src: string;
    url?: string;
};

const projects: Record<Tab, Project[]> = {
    design: [
        { name: "PassIt Branding", category: "Logo & UI", src: "/images/f.jpg" },

        { name: "Cloud Migration Dashboard", category: "Product Design", src: "/images/y.jpg" },
        { name: "Nexus Design System", category: "System Design", src: "/images/yy.jpg" },
        { name: "Spotify Concept", category: "Visual Design", src: "/images/p.jpg" },
        { name: "Geometric Icon Set", category: "Iconography", src: "/images/uuuu.jpg" },
        { name: "Enterprise AI Platform", category: "UI/UX Design", src: "/images/u.jpg" },

    ],
    development: [
        {
            name: "School Management System",
            category: "React & Tailwind",
            src: "/images/school.jpg",
            url: "https://modern-school-erp.vercel.app/"
        },
        {
            name: "Next.js E-commerce",
            category: "Full-Stack",
            src: "/images/shop.jpg",
            url: "https://demo.vercel.store/"
        },
        {
            name: "Portfolio Studio Site",
            category: "Frontend",
            src: "/images/portfolio-new.jpg",
            url: "https://playfair-studio.webflow.io/"
        },
        {
            name: "SaaS Analytics Engine",
            category: "Next.js & API",
            src: "/images/saas.jpg",
            url: "https://tremor.so/"
        },
        {
            name: "Auth Flow Library",
            category: "TypeScript",
            src: "/images/auth.jpg",
            url: "https://clerk.com/docs/components/overview"
        },
        {
            name: "React Component Library",
            category: "UI Dev",
            src: "/images/components.jpg",
            url: "https://base-ui.com/react/components/"
        },
        {
            name: "Cloud Sync Utility",
            category: "Node.js",
            src: "/images/sync.jpg",
            url: "https://rclone.org/"
        },
        {
            name: "AI Chat Interface",
            category: "React",
            src: "/images/chat.jpg",
            url: "https://www.librechat.ai/"
        },
        {
            name: "Responsive Admin Panel",
            category: "Tailwind CSS",
            src: "/images/admin.jpg",
            url: "https://tailadmin.com/demo"
        },
    ]
};

export default function Work() {
    const [activeTab, setActiveTab] = useState<Tab>('design');

    return (
        <section id="work" className="bg-black px-6 md:px-16 lg:px-24 py-32 font-['Geist']">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.5em] mb-4">
                        Portfolio
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-10">
                        Selected Projects
                    </h3>

                    {/* Toggle Switch */}
                    <div className="relative flex p-1 bg-white/3 border border-white/8 rounded-full backdrop-blur-2xl">
                        <div
                            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeTab === 'development' ? 'left-[calc(50%+2px)]' : 'left-1'
                                }`}
                        />
                        <button
                            onClick={() => setActiveTab('design')}
                            className={`relative z-10 px-10 py-3 text-xs font-bold uppercase tracking-widest transition-colors duration-300 rounded-full ${activeTab === 'design' ? 'text-black' : 'text-neutral-500 hover:text-neutral-300'
                                }`}
                        >
                            Design
                        </button>
                        <button
                            onClick={() => setActiveTab('development')}
                            className={`relative z-10 px-10 py-3 text-xs font-bold uppercase tracking-widest transition-colors duration-300 rounded-full ${activeTab === 'development' ? 'text-black' : 'text-neutral-500 hover:text-neutral-300'
                                }`}
                        >
                            Development
                        </button>
                    </div>
                </div>

                {/* 3x3 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {projects[activeTab].map((project) => (
                        <div key={project.name} className="group">
                            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 transition-all duration-500 group-hover:border-white/12">
                                <Image
                                    src={project.src}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Glass Overlay Shine */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-in-out" />
                            </div>

                            <div className="mt-6">
                                <h4 className="text-white text-lg font-medium tracking-tight">
                                    {project.name}
                                </h4>
                                <p className="text-neutral-600 text-[10px] font-bold uppercase tracking-[0.2em] mt-1.5 transition-colors group-hover:text-neutral-400">
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
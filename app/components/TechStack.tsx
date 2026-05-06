import {
    SiNextdotjs,
    SiReact,
    SiJavascript,
    SiTypescript,
    SiFigma,
    SiTailwindcss,
    SiFramer,
} from "react-icons/si";

const tools = [
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    
    { name: "Figma", icon: SiFigma, color: "text-pink-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
    { name: "Framer Motion", icon: SiFramer, color: "text-purple-400" },
];

export default function TechStack() {
    return (
        <section className="bg-black px-6 md:px-16 lg:px-24 py-24 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.5em] mb-4">
                        Core Stack
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                        My Tech Stack
                    </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {tools.map((tool) => (
                        <div
                            key={tool.name}
                            className="group relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl 
                                     bg-white/[0.01] border border-white/[0.05] backdrop-blur-2xl
                                     transition-all duration-700 hover:bg-white/[0.04] hover:border-white/[0.12]"
                        >
                            {/* Inner Radial Glow - appears only on hover */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />

                            <tool.icon
                                title={tool.name}
                                className={`relative z-10 text-3xl md:text-4xl ${tool.color} transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
                            />

                            {/* Top Edge Shine */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
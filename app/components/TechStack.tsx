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
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "Figma", icon: SiFigma, color: "text-pink-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
    { name: "Framer Motion", icon: SiFramer, color: "text-purple-400" },
];

export default function TechStack() {
    return (
        <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-none">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-stone-100 mb-3">
                    My Tech Stack
                </h2>
                <p className="text-sm md:text-base text-neutral-400 mb-12">
                    The tools and technologies I build with, streamline my workflow, and
                    bring my designs to life
                </p>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {tools.map((tool) => (
                        <tool.icon
                            key={tool.name}
                            title={tool.name}
                            className={`text-5xl md:text-6xl ${tool.color} hover:scale-110 transition-transform duration-200`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}


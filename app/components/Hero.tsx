export default function Hero() {

     const works = [
                {name: 'Surelink', url: 'https://surelink-frontend.onrender.com/' },
         { name: 'Nivida Hotel', url: 'https://nividahotel.netlify.app/' },
         { name: 'Ommitech', url: 'https://ommitech.netlify.app/' },
                ];

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 pt-24 pb-16 bg-black overflow-hidden font-['Geist']"
        >
            {/* Steady Background Glows - Blue & Cyan */}
            {/* Cyan Blob */}
            <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#0ABFBC] opacity-[0.04] blur-[140px] rounded-full animate-slow-drift pointer-events-none"></div>

            {/* Deep Blue Blob */}
            <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-blue-600 opacity-[0.03] blur-[160px] rounded-full animate-slow-drift pointer-events-none" style={{ animationDuration: '25s' }}></div>

            <div className="relative z-10 text-center flex flex-col items-center">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-semibold text-white flex flex-wrap justify-center items-center gap-3 tracking-tight">
                        I Design 🧑‍💻 & Build Functional Experiences
                    </h1>

                    <h2 className="text-4xl md:text-6xl font-semibold text-white flex flex-wrap justify-center items-center gap-3 tracking-tight">
                        Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ABFBC] to-blue-400">Design & Code</span> 🎨
                    </h2>
                </div>

                <p className="mt-10 text-base md:text-lg text-neutral-400 max-w-2xl leading-relaxed text-center">
                    My expertise lies in creating clean, functional interfaces that deliver real value to users and businesses alike. Based in Kumasi, Ghana — open to collaborations worldwide.
                </p>

                {/* Glass Pills */}
               

               
                <div className="mt-12 flex flex-wrap justify-center items-center gap-3">
                    <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.2em] w-full mb-3 text-center">
                        Selected Works
                    </span>

                    {works.map((work) => (
                        <a
                            key={work.name}
                            href={work.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl text-neutral-300 text-sm font-medium hover:bg-white/[0.07] hover:border-white/[0.15] hover:text-white transition-all duration-500 cursor-pointer inline-block"
                        >
                            {work.name}
                        </a>
                    ))}
                </div>
           

                
            </div>
        </section>
    );
}
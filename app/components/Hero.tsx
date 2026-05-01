export default function Hero() {
    return (
        <section
             id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-16">
            {/* Content */}
            <div className="relative z-10 space-y-3">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-stone-100 flex flex-wrap items-center gap-3">
                    I Design
                    <span className="inline-block text-2xl md:text-3xl">🧑‍💻</span>
                    & Build Functional Experiences
                </h1>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-stone-100 flex flex-wrap items-center gap-3">
                    Through{" "}
                    <span className="text-blue-500">Design & Code</span>
                    <span className="inline-block text-2xl md:text-3xl">🎨</span>
                </h2>
            </div>

            {/* Bio */}
            <p className="relative z-10 mt-8 text-sm md:text-base text-neutral-400 max-w-xl leading-relaxed">
                My expertise lies in creating clean, functional interfaces that deliver
                real value to users and businesses alike. I've collaborated with diverse
                clients to design and build products that leave a lasting impression.
            </p>

            {/* Brands */}
            <div className="relative z-10 mt-8 flex flex-wrap items-center gap-6">
                <span className="text-sm text-neutral-500">Proud to have worked with:</span>
                <div className="flex flex-wrap items-center gap-5 text-sm text-neutral-400">
                    <span>Surelink</span>
                    <span>Nivida Hotel</span>
                    <span>Ommitech</span>
                </div>
            </div>
        </section>
    );
}
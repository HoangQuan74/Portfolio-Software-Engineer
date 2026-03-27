export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wood/5 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-wood/8 rounded-full blur-3xl animate-glow-pulse [animation-delay:1.5s]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-wood/30 bg-wood-glow mb-8">
          <span className="w-2 h-2 rounded-full bg-wood animate-glow-pulse" />
          <span className="text-sm text-wood font-medium font-mono">
            Available for work
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
          Hi, I&apos;m
          <br />
          <span className="text-gradient">Hoang Quan</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-4 leading-relaxed font-semibold">
          Software Engineer
        </p>
        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Passionate about building scalable backend systems, designing cloud
          infrastructure, and automating everything in between.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group px-8 py-3.5 bg-wood text-black font-semibold rounded-full hover:bg-wood-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
          >
            View Projects
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-zinc-700 text-zinc-300 font-semibold rounded-full hover:border-wood/50 hover:text-wood transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-wood rounded-full animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

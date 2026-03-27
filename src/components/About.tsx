const stats = [
  { value: "2002", label: "Born" },
  { value: "♈", label: "Aries" },
  { value: "🌿", label: "Wood Element" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-wood font-mono text-sm mb-3">01 — About</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Driven to build
            <br />
            <span className="text-gradient">what matters</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-zinc-400 text-lg leading-relaxed">
              I&apos;m Hoang Quan, a Software Engineer with a strong passion for
              building robust and elegant digital products. Born under the Aries
              sign — I&apos;m bold, driven, and always ready to take on new
              challenges head-on.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I believe in sustainable growth and continuous improvement, much
              like the Wood element that defines me — resilient, adaptive, and
              always reaching upward. Every line of code I write is crafted with
              purpose and care.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I specialize in backend development and DevOps — designing APIs,
              building microservices, setting up CI/CD pipelines, and managing
              cloud infrastructure. Always learning, always shipping.
            </p>
          </div>

          {/* Stats cards */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-wood/30 transition-colors duration-300"
              >
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

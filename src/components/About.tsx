const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "Go", label: "Primary Language" },
  { value: "99%+", label: "Uptime Delivered" },
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
              Backend Engineer with 3+ years of experience specializing in
              Golang and NestJS, focused on building scalable microservices and
              high-throughput APIs. I&apos;ve delivered production systems across
              gaming, travel, and location-based domains — maintaining {">"}99%
              uptime and driving measurable performance improvements through
              query optimization, caching, and observability tooling.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I value clean architecture, reliable delivery, and close
              collaboration across engineering teams.
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

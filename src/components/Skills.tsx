const skillCategories = [
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Python",
      "Java",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Linux"],
  },
  {
    title: "Databases & Tools",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Git", "Nginx", "Kafka"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-wood font-mono text-sm mb-3">02 — Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Technologies I
            <br />
            <span className="text-gradient">work with</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:border-wood/30 hover:bg-zinc-900/60 transition-all duration-500"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-6 group-hover:text-wood transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 hover:border-wood/40 hover:text-wood transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

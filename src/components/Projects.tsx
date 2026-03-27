const projects = [
  {
    title: "Microservices Platform",
    description:
      "Distributed microservices architecture with service discovery, API gateway, and event-driven communication.",
    tags: ["Node.js", "Docker", "Kubernetes", "Kafka"],
    link: "#",
  },
  {
    title: "CI/CD Pipeline Automation",
    description:
      "End-to-end CI/CD pipeline with automated testing, container builds, and zero-downtime deployments.",
    tags: ["GitHub Actions", "Docker", "Terraform", "AWS"],
    link: "#",
  },
  {
    title: "REST API Service",
    description:
      "High-performance RESTful API with authentication, rate limiting, caching, and comprehensive documentation.",
    tags: ["Python", "PostgreSQL", "Redis", "Nginx"],
    link: "#",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Cloud infrastructure provisioning and management using IaC principles with monitoring and auto-scaling.",
    tags: ["Terraform", "AWS", "Prometheus", "Grafana"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-wood font-mono text-sm mb-3">03 — Projects</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Things I&apos;ve
            <br />
            <span className="text-gradient">built</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:border-wood/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.05)]"
            >
              {/* Project number */}
              <span className="absolute top-6 right-6 text-sm font-mono text-zinc-700 group-hover:text-wood/40 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="text-xl font-bold mb-3 group-hover:text-wood transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-md bg-wood/10 text-wood/80 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="text-wood"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

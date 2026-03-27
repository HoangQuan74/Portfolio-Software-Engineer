const projects = [
  {
    title: "Block24 — Gaming Platform CMS/CRM",
    description:
      "Built and maintained a CMS/CRM backend for a gaming platform — user management, transactions, and system config. Set up Prometheus observability across 200+ endpoints, achieving ~35% error reduction and >99% uptime.",
    tags: ["Go", "Gin", "PostgreSQL", "Prometheus", "Docker"],
    link: "https://github.com/HoangQuan74",
  },
  {
    title: "Locogo — Location-Based Platform",
    description:
      "Developed backend services for a location-based product — geospatial query handling and API integrations. Optimized DB queries for geographic datasets with efficient search and filtering.",
    tags: ["Go", "Gin", "PostgreSQL", "Docker"],
    link: "https://github.com/HoangQuan74",
  },
  {
    title: "Genutrips — Travel & Booking Platform",
    description:
      "Architected microservices covering booking, authentication, notifications, and configuration management. Implemented TCP/IP inter-service communication with >99% data consistency and reduced critical bugs by 40%.",
    tags: ["NestJS", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    link: "https://github.com/HoangQuan74",
  },
  {
    title: "Job Search API Service",
    description:
      "Developed and maintained backend services for client outsourcing projects. Optimized job search APIs via query tuning and indexing — reduced response time by ~40%. Introduced Redis caching layer for traffic spikes.",
    tags: ["NestJS", "MySQL", "Redis"],
    link: "https://github.com/HoangQuan74",
  },
  {
    title: "Retail Store API",
    description:
      "Microservices-oriented retail backend with 4 independent services — public API, admin API, WebSocket notifications via Redis Pub/Sub, and NATS JetStream event consumer for analytics, inventory, and Elasticsearch search indexing.",
    tags: ["Go", "Gin", "PostgreSQL", "Redis", "NATS", "Elasticsearch", "K8s"],
    link: "https://github.com/HoangQuan74/retail-store-api",
  },
  {
    title: "Goodie — Food Delivery Platform",
    description:
      "Food delivery platform built on microservices architecture with API Gateway, gRPC inter-service communication, Kafka event streaming, WebSocket real-time updates, and ELK stack observability.",
    tags: ["Go", "gRPC", "Kafka", "PostgreSQL", "MongoDB", "Redis"],
    link: "https://github.com/HoangQuan74/goodie-api",
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

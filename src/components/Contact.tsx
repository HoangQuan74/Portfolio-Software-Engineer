const socials = [
  { label: "GitHub", href: "https://github.com/HoangQuan74", icon: "GH" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hoangquan1604/",
    icon: "LI",
  },
  { label: "Email", href: "mailto:quannguyennhathoang16042002@gmail.com", icon: "EM" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-16">
          <p className="text-wood font-mono text-sm mb-3">04 — Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Let&apos;s work
            <br />
            <span className="text-gradient">together</span>
          </h2>
        </div>

        <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Have an exciting project or collaboration opportunity? Don&apos;t
          hesitate to reach out — I&apos;m always open to new ideas and
          challenges.
        </p>

        {/* CTA */}
        <a
          href="mailto:quannguyennhathoang16042002@gmail.com"
          className="group inline-flex items-center gap-3 px-10 py-4 bg-wood text-black font-bold text-lg rounded-full hover:bg-wood-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] mb-16"
        >
          Send me an email
          <span className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </a>

        {/* Socials */}
        <div className="flex items-center justify-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-sm font-mono text-zinc-400 hover:border-wood/50 hover:text-wood hover:bg-wood/5 transition-all duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

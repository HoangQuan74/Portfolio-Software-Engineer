export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-zinc-400">Hoàng Quân</span>. All rights
          reserved.
        </p>
        <p className="text-sm text-zinc-700 font-mono">
          Built with <span className="text-wood">Next.js</span> &{" "}
          <span className="text-wood">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}

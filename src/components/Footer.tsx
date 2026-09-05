import { profile } from "@/data/profile";
import LocalClock from "./LocalClock";

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 py-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-ink-500 md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <LocalClock />
        <p>Built with Next.js, TypeScript, Tailwind &amp; Framer Motion</p>
      </div>
    </footer>
  );
}

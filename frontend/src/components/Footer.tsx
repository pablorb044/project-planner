
import { Compass } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t-[3px] border-[#a58a5b] bg-[#1d3045] px-6 py-5 text-[#f7f5ef]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        {/* Left: New project link */}
        <a
          href="#start-project"
          className="flex items-center justify-center gap-3 transition-colors hover:text-white md:flex-1 md:justify-start"
        >
          <Compass
            className="h-6 w-6 shrink-0 text-[#c5a36d]"
            strokeWidth={1.8}
          />
          <span className="font-heading text-sm font-semibold tracking-wide text-[#f0dfbd] hover:text-white">
            Ready to chart your next software adventure?
          </span>
        </a>

        {/* Center: Back to landing page */}
        <a
          href="/"
          className="font-heading text-lg font-bold tracking-wider text-[#c5a36d] transition-colors hover:text-white md:flex-1 md:text-center"
        >
          Project Planner <span className="text-[#aebbc8]">· 2026</span>
        </a>

        {/* Right: Social links */}
        <div className="flex items-center justify-center gap-4 text-sm font-semibold tracking-wide md:flex-1 md:justify-end">
          <a
            href="https://www.linkedin.com/in/pablo-redondo-blanco-41270b432"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d6c5a3] transition-colors hover:text-white"
          >
            LinkedIn
          </a>

          <span className="text-[#a58a5b]">·</span>

          <a
            href="https://github.com/pablorb044/project-planner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d6c5a3] transition-colors hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

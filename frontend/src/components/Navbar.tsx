
import { CompassRose } from './Icons'

export function Navbar() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-[1380px] items-center justify-between px-6 pb-2 pt-5 md:px-12">
      <div className="flex items-center gap-3.5">
        <CompassRose
          className="h-11 w-11 text-[#1d3045]"
          accentColor="#1d3045"
        />

        <div className="flex items-center gap-3">
          <span
            className="text-[19px] font-bold uppercase tracking-[0.06em] text-[#1d3045] md:text-[21px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            PROJECT PLANNER
          </span>

          <span className="hidden h-px w-10 bg-[#BFA782] sm:inline-block" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden h-px w-10 bg-[#BFA782] sm:inline-block" />

        <p
          className="text-[16px] italic tracking-[0.01em] text-[#1d3045] md:text-[18px]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Plan. Explore. Build.
        </p>
      </div>
    </header>
  )
}

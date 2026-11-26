
import { Compass, Telescope, Map, Flag } from 'lucide-react'

const values = [
  { label: 'Define your goals', Icon: Compass },
  { label: 'Explore options', Icon: Telescope },
  { label: 'Plan your strategy', Icon: Map },
  { label: 'Reach your destination', Icon: Flag },
]

export function HeroValueStrip() {
  return (
    <section className="border-y-[3px] border-[#a58a5b] bg-[#1d3045] px-6 py-2">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 md:grid-cols-4">
        {values.map(({ label, Icon }, index) => (
          <div
            key={label}
            className={`flex flex-row items-center justify-center gap-2 px-3 py-1 text-center ${
              index % 2 === 0 ? 'border-r border-[#a58a5b]/40 md:border-r' : ''
            } ${
              index < 3 ? 'md:border-r md:border-[#a58a5b]/40' : ''
            } ${
              index === 3 ? 'md:border-r-0' : ''
            }`}
          >
            <Icon
              size={19}
              strokeWidth={1.5}
              className="shrink-0 text-[#c5a36d]"
              aria-hidden="true"
            />

            <span className="text-xs font-medium tracking-wide text-[#f7f5ef] sm:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

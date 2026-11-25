
import { Compass, Telescope, Map, Flag } from 'lucide-react'

const values = [
  {
    label: 'Define your goals',
    Icon: Compass,
  },
  {
    label: 'Explore options',
    Icon: Telescope,
  },
  {
    label: 'Plan your strategy',
    Icon: Map,
  },
  {
    label: 'Reach your destination',
    Icon: Flag,
  },
]

export function HeroValueStrip() {
  return (
    <section className="bg-[#1d3045] px-6 py-3 sm:py-4">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 md:grid-cols-4">
        {values.map(({ label, Icon }, index) => (
          <div
            key={label}
            className={`flex flex-col items-center justify-center gap-2 px-3 py-2 text-center ${
              index < 3 ? 'md:border-r md:border-[#a58a5b]/40' : ''
            } ${
              index % 2 === 0
                ? 'border-r border-[#a58a5b]/40 md:border-r'
                : 'md:border-r-0'
            }`}
          >
            <Icon
            size={24}
            strokeWidth={1.5}
            className="text-[#c5a36d]"
            aria-hidden="true"
            />

            <span className="text-sm font-medium tracking-wide text-[#f7f5ef] sm:text-base">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

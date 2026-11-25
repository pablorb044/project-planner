
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  accentColor?: string
}

export function CompassRose({
  accentColor = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" {...props}>
      <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="1.2" opacity=".6" />
      <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth=".8" strokeDasharray="2 2" opacity=".5" />

      <polygon points="50,50 26,26 44,50" fill="currentColor" opacity=".45" />
      <polygon points="50,50 26,26 50,44" fill="currentColor" opacity=".85" />
      <polygon points="50,50 74,26 50,44" fill="currentColor" opacity=".45" />
      <polygon points="50,50 74,26 56,50" fill="currentColor" opacity=".85" />
      <polygon points="50,50 74,74 56,50" fill="currentColor" opacity=".45" />
      <polygon points="50,50 74,74 50,56" fill="currentColor" opacity=".85" />
      <polygon points="50,50 26,74 50,56" fill="currentColor" opacity=".45" />
      <polygon points="50,50 26,74 44,50" fill="currentColor" opacity=".85" />

      <polygon points="50,4 43,43 50,50" fill={accentColor} />
      <polygon points="50,4 57,43 50,50" fill="currentColor" opacity=".65" />
      <polygon points="96,50 57,43 50,50" fill={accentColor} />
      <polygon points="96,50 57,57 50,50" fill="currentColor" opacity=".65" />
      <polygon points="50,96 57,57 50,50" fill={accentColor} />
      <polygon points="50,96 43,57 50,50" fill="currentColor" opacity=".65" />
      <polygon points="4,50 43,57 50,50" fill={accentColor} />
      <polygon points="4,50 43,43 50,50" fill="currentColor" opacity=".65" />

      <circle cx="50" cy="50" r="3" fill={accentColor} />
    </svg>
  )
}

export function ShipBadgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" aria-hidden="true" {...props}>
      <path d="M3 17h18l-2 3H5l-2-3Z" fill="currentColor" fillOpacity=".2" />
      <path d="M12 3v14M7 6v11M17 7v10" strokeLinecap="round" />
      <path d="M12 4c3 1.5 4 4.5 0 6M12 10c3.5 1.5 4.5 4.5 0 6M7 7c2.2 1 3 3.2 0 4.5M7 11.5c2.5 1 3.2 3.2 0 4.5M17 8c2 1 2.8 3 0 4" />
      <path d="M2 20c2 1 4 1 6 0s4-1 6 0 4 1 6 0" strokeLinecap="round" />
    </svg>
  )
}

export function MapFoldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" aria-hidden="true" {...props}>
      <polygon points="3,6 9,4 15,6 21,4 21,18 15,20 9,18 3,20"
        strokeLinejoin="round" />
      <line x1="9" y1="4" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="20" />
      <path d="M6 12c2-1 4 1 6 0s4-2 6 0" strokeDasharray="1.5 1.5" />
    </svg>
  )
}

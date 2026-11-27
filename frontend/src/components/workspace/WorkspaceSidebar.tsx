
import {
  BookOpen,
  Compass,
  FlaskConical,
  Map,
  Route,
  Ship,
  DraftingCompass,
  X,
} from 'lucide-react'

export type PlanningSection =
  | 'definition'
  | 'feasibility'
  | 'technical_design'
  | 'scope'
  | 'roadmap'

interface WorkspaceSidebarProps {
  projectName: string
  activeSection: PlanningSection
  onSectionChange: (section: PlanningSection) => void
  isMobileOpen?: boolean
  onClose?: () => void
}

const sections = [
  {
    id: 'definition',
    label: 'Project definition',
    description: 'Establish your direction',
    icon: BookOpen,
  },
  {
    id: 'feasibility',
    label: 'Feasibility',
    description: 'Explore the possibilities',
    icon: FlaskConical,
  },
  {
    id: 'technical_design',
    label: 'Technical design',
    description: 'Chart your approach',
    icon: DraftingCompass,
  },
  {
    id: 'scope',
    label: 'Scope & MVP',
    description: 'Define your boundaries',
    icon: Map,
  },
  {
    id: 'roadmap',
    label: 'Roadmap',
    description: 'Plan your journey',
    icon: Route,
  },
] as const

function CompassRose() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12 shrink-0"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M32 2 L36 27 L62 32 L36 36 L32 62 L28 36 L2 32 L28 27 Z"
        fill="#c6a66b"
      />
      <path
        d="M32 9 L34 30 L55 32 L34 34 L32 55 L30 34 L9 32 L30 30 Z"
        fill="#f1dfb8"
      />
      <path
        d="M32 17 L35 29 L47 32 L35 35 L32 47 L29 35 L17 32 L29 29 Z"
        fill="#1d3045"
      />
      <circle cx="32" cy="32" r="3" fill="#c6a66b" />
    </svg>
  )
}

function WorkspaceSidebar({
  projectName,
  activeSection,
  onSectionChange,
  isMobileOpen = false,
  onClose = () => {},
}: WorkspaceSidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex min-h-screen w-[270px] shrink-0 flex-col overflow-y-auto bg-[#203b59] px-5 py-7 text-[#f4eee2] transition-transform duration-300 ease-in-out md:sticky md:top-0 md:h-screen md:min-h-0 md:w-[76px] md:px-3 lg:w-[270px] lg:px-5 ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
    >
      {/* Brand */}
      <div className="relative mb-10 flex items-center gap-3">
        <CompassRose />

        <div className="min-w-0 md:hidden lg:block">
          <h1
            style={{ color: '#e2c58d' }}
            className="whitespace-nowrap font-serif text-xl tracking-wide drop-shadow-[0_0_8px_rgba(226,197,141,0.45)]"
          >
            Project Planner
          </h1>
          <p className="mt-0.5 whitespace-nowrap text-[10px] uppercase tracking-[0.22em] text-[#c6a66b]">
            Plan. Explore. Build.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="absolute -top-6 -right-4 rounded-md p-2 text-[#e2c58d] transition-colors hover:bg-white/10 md:hidden"
        >
          <X size={21} />
        </button>
      </div>

      {/* Project information */}
      <div className="mb-8 border-y-2 border-[#c6a66b]/70 py-5 md:hidden lg:block">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c6a66b] drop-shadow-[0_0_8px_rgba(226,197,141,0.45)]">
          Current expedition
        </p>

        <p className="break-words font-serif text-lg leading-snug text-[#fffaf0]">
          {projectName}
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1" aria-label="Project planning sections">
        <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b8c2cd] md:hidden lg:block">
          Project plan
        </p>

        <div className="space-y-2">
          {sections.map((section, index) => {
            const Icon = section.icon
            const isActive = activeSection === section.id

            return (
              <button
                key={section.id}
                type="button"
                title={section.label}
                onClick={() => {
                  onSectionChange(section.id)
                  onClose()
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors md:justify-center md:px-0 lg:justify-start lg:px-3 ${
                  isActive
                    ? 'bg-[#f0e7d5] text-[#203b59] shadow-sm'
                    : 'text-[#e1e6eb] hover:bg-[#ffffff]/10'
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${
                    isActive
                      ? 'bg-[#e2d4b8] text-[#203b59]'
                      : 'bg-[#ffffff]/10 text-[#d3b77f] group-hover:bg-[#ffffff]/15'
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </span>

                <span className="min-w-0 flex-1 md:hidden lg:block">
                  <span className="block text-sm font-semibold">
                    {section.label}
                  </span>
                  <span
                    className={`mt-0.5 block text-[11px] ${
                      isActive ? 'text-[#657184]' : 'text-[#b8c2cd]'
                    }`}
                  >
                    {section.description}
                  </span>
                </span>

                <span
                  className={`text-[10px] md:hidden lg:block ${
                    isActive ? 'text-[#9b8052]' : 'text-[#8293a4]'
                  }`}
                >
                  0{index + 1}
                </span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* Expedition artwork and footer */}
      <div className="mt-8 border-t-2 border-[#c6a66b]/70 pt-6 md:hidden lg:block">
        <div className="mb-5 flex items-center justify-between px-2">
          <Ship size={48} strokeWidth={1} className="text-[#d3b77f]" />
          <Compass size={38} strokeWidth={1} className="text-[#c6a66b]" />
        </div>

        <p className="text-center font-serif text-sm italic tracking-wide text-[#e4d5b8] drop-shadow-[0_0_8px_rgba(226,197,141,0.45)]">
          Every great project begins with a journey.
        </p>

        <p className="mt-4 text-center text-[9px] uppercase tracking-[0.2em] text-[#aebbc8]">
          Project Planner · 2026
        </p>
      </div>
    </aside>
  )
}

export default WorkspaceSidebar

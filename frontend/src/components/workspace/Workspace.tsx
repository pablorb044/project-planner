
import { useState } from 'react'
import {
  Compass,
  Menu,
  MessageCircle,
  Send,
  Sparkles,
} from 'lucide-react'

import WorkspaceSidebar, {
  type PlanningSection,
} from './WorkspaceSidebar'
import workspaceMapTexture from '../../assets/images/WorkspaceMapTexture.jpg'

interface WorkspaceProps {
  projectId: string
}

function Workspace({ projectId }: WorkspaceProps) {
  const [activeSection, setActiveSection] =
    useState<PlanningSection>('definition')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const sectionContent: Record<
    PlanningSection,
    { title: string; description: string; greeting: string }
  > = {
    definition: {
      title: 'Project definition',
      description: 'Establish the foundations of your project.',
      greeting:
        "Welcome! Let's start by exploring your project idea. Tell me what you have in mind, what problem you want to solve, and who you imagine will benefit from it.",
    },
    feasibility: {
      title: 'Feasibility',
      description: 'Explore the possibilities and assess your resources.',
      greeting:
        "Let's examine whether your project is viable. We'll explore the resources, constraints, risks and opportunities that could influence its development.",
    },
    technical_design: {
      title: 'Technical design',
      description: 'Chart the technical direction of your project.',
      greeting:
        "Now let's explore the technical side. We'll compare technologies, architecture options and technical decisions that make sense for your project.",
    },
    scope: {
      title: 'Scope & MVP',
      description: 'Define what to build first and where to draw the line.',
      greeting:
        "Let's decide what your first version should include. We'll distinguish essential features from everything that can wait for a later release.",
    },
    roadmap: {
      title: 'Roadmap',
      description: 'Turn your decisions into a structured development journey.',
      greeting:
        "Let's turn your project plan into a practical roadmap. We'll organise the work into stages, identify dependencies and establish a sensible development order.",
    },
  }

  const currentSection = sectionContent[activeSection]

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  return (
    <div
      className="flex min-h-screen bg-[#e8dcc5] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${workspaceMapTexture})` }}
    >
      {/* Mobile navigation backdrop */}
      {isMobileMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
          className="fixed inset-0 z-40 bg-[#172536]/60 backdrop-blur-[2px] md:hidden"
        />
      )}

      <WorkspaceSidebar
        projectName="Untitled project"
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isMobileOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />

      <main className="flex min-w-0 flex-1 flex-col p-4 sm:p-6 lg:p-10">
        {/* Section header */}
        
        <header className="mb-7">
            <div className="mb-4 flex items-center gap-3 md:hidden">
            <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#c6a66b]/60 bg-[#f7f5ef]/65 text-[#203b59] shadow-sm backdrop-blur-sm transition-colors hover:bg-[#f7f5ef]/85"
            >
                <Menu size={21} />
            </button>

            <span className="font-serif text-lg text-[#1d3045]">
                Project Planner
            </span>
            </div>
        <div className="inline-block max-w-full rounded-xl border border-[#d8c6a3] bg-[#f7f5ef]/95 px-6 py-5 shadow-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b7657]">
            Your expedition / Project plan
            </p>

            <h1 className="font-serif text-3xl text-[#1d3045]">
            {currentSection.title}
            </h1>

            <p className="mt-2 text-sm text-[#777a78]">
            {currentSection.description}
            </p>
        </div>
        </header>

        {/* Conversation workspace */}
        <section className="flex min-h-[620px] flex-1 flex-col overflow-hidden rounded-xl border border-[#d8d0c1] bg-[#f7f5ef] shadow-lg">
          {/* Conversation header */}
          <div className="flex items-center justify-between gap-3 border-b border-[#e3e0d7] px-4 py-4 sm:px-6 sm:py-5">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e9e1d2] text-[#8b7657]">
                <Compass size={21} strokeWidth={1.6} />
              </div>

              <div className="min-w-0">
                <h2 className="font-serif text-lg text-[#1d3045]">
                  Planning assistant
                </h2>
                <p className="text-xs text-[#777a78]">
                  Your project companion
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-2 text-xs text-[#8b7657] sm:flex">
              <MessageCircle size={15} />
              <span>Project conversation</span>
            </div>
          </div>

          {/* Conversation area */}
          <div className="flex flex-1 flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="h-px flex-1 bg-[#e3e0d7]" />
              <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.12em] text-[#a39a89] sm:text-[10px] sm:tracking-[0.18em]">
                Beginning of your journey
              </span>
              <div className="h-px flex-1 bg-[#e3e0d7]" />
            </div>

            {/* Agent welcome message */}
            <div className="flex max-w-2xl items-start gap-3 sm:gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e9e1d2] text-[#8b7657]">
                <Sparkles size={18} strokeWidth={1.6} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="mb-2 text-xs font-semibold text-[#1d3045]">
                  Planning assistant
                </p>

                <div className="rounded-r-xl rounded-bl-xl border border-[#e3e0d7] bg-white p-4 shadow-sm sm:p-5">
                  <p className="mb-3 font-serif text-lg text-[#1d3045]">
                    Welcome, explorer.
                  </p>

                  <p className="break-words text-sm leading-7 text-[#555b60]">
                    {currentSection.greeting}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1" />

            {/* Message composer - visual placeholder */}
            <div className="mt-10 rounded-xl border border-[#d8d0c1] bg-white p-3 shadow-sm">
              <div className="flex items-end gap-3">
                <div className="min-h-12 min-w-0 flex-1 px-3 py-3 text-sm text-[#aaa397]">
                  Your message will go here...
                </div>

                <button
                  type="button"
                  disabled
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#203b59]/40 text-white"
                >
                  <Send size={17} />
                </button>
              </div>

              <p className="mt-2 border-t border-[#eeeae2] px-3 pt-2 text-[10px] text-[#aaa397]">
                Your planning assistant will be available here.
              </p>
            </div>
          </div>
        </section>

        <p className="mt-4 break-all text-right text-[10px] text-[#8b7657]/80">
          Project reference: {projectId}
        </p>
      </main>
    </div>
  )
}

export default Workspace

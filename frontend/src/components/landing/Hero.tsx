
import { useState, type FormEvent } from 'react'
import { ShipBadgeIcon, MapFoldIcon } from '../Icons'
import { Navbar } from '../Navbar'
import { PrimaryDarkButton } from '../Buttons'
import HeroArtwork from '../../assets/images/HeroArtwork.jpg'

interface HeroProps {
  onCreateProject?: () => void
  onAccessProject?: (projectKey: string) => void
}

function Hero({ onCreateProject, onAccessProject }: HeroProps) {
  const [projectKey, setProjectKey] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const key = projectKey.trim()

    if (key && onAccessProject) {
      onAccessProject(key)
    }
  }

  return (
    <main className="text-[#292d30]">
    <section className="relative isolate min-h-[680px] overflow-hidden bg-[#e8d5b8] lg:min-h-[680px]">

        {/* Navbar */}
        <Navbar />

        {/* Contenido del hero */}
        <div className="relative z-10 mx-auto max-w-[1380px] px-6 pb-14 pt-12 md:px-12 md:pt-14">
          <div className="max-w-[790px]">
            
          {/* Presentación del proyecto */}
            <div className="rounded-xl border-2 border-[#b18c58]/85 bg-[#f0e1c5]/65 p-5 shadow-[0_5px_18px_rgba(70,48,25,0.08)] backdrop-blur-sm sm:p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7657]">
              Your next project starts here
            </p>

            <h1 className="max-w-[700px] text-5xl font-semibold leading-[1.08] text-[#1d3045] sm:text-6xl">
              Turn your idea
              <span className="block italic">
                into a great expedition.
              </span>
            </h1>

            <p className="mt-5 max-w-[570px] text-sm leading-7 text-[#555b5d] sm:text-base">
              Explore your idea, evaluate its feasibility and build a clear
              development roadmap with the help of an AI planning assistant.
            </p>
              </div>

            {/* Separador editorial */}
            <div className="my-7 flex max-w-[700px] items-center gap-3">
              <span className="h-px flex-1 bg-[#b18c58]/60" />
              <span className="h-2 w-2 rotate-45 border border-[#a58a5b]" />
              <span className="h-px flex-1 bg-[#b18c58]/60" />
            </div>

            {/* Tarjetas de acceso */}
            <div className="grid max-w-[790px] grid-cols-1 gap-4 sm:grid-cols-2">
              <article className="flex flex-col rounded-lg border-2 border-[#b99b70]/80 bg-[#f0e1c5]/95 p-5 shadow-[0_5px_18px_rgba(70,48,25,0.10)] backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1d3045] text-[#f7f5ef]">
                    <ShipBadgeIcon className="h-5 w-5" />
                  </div>

                  <h2 className="font-heading text-lg text-[#1d3045]">
                    Start a new project
                  </h2>
                </div>

                <p className="mt-3 flex-1 text-sm leading-6 text-[#777a78]">
                  Describe your project idea and let the AI assistant help
                  you plan the journey.
                </p>

                <PrimaryDarkButton
                  onClick={onCreateProject}
                  className="mt-5 w-full"
                >
                  Start a new project
                  <span aria-hidden="true">→</span>
                </PrimaryDarkButton>
              </article>

              <article className="flex flex-col rounded-lg border-2 border-[#b99b70]/80 bg-[#f0e1c5]/95 p-5 shadow-[0_5px_18px_rgba(70,48,25,0.10)] backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1d3045] text-[#f7f5ef]">
                    <MapFoldIcon className="h-5 w-5" />
                  </div>

                  <h2 className="font-heading text-lg text-[#1d3045]">
                    Continue your journey
                  </h2>
                </div>

                <p className="mt-3 flex-1 text-sm leading-6 text-[#777a78]">
                  Enter your project key to recover an existing project.
                </p>

                <form onSubmit={handleSubmit} className="mt-5 flex gap-2">
                  <input
                    type="text"
                    value={projectKey}
                    onChange={(event) => setProjectKey(event.target.value)}
                    placeholder="Your project key"
                    aria-label="Project key"
                    required
                    className="min-w-0 flex-1 rounded-md border border-[#c5ad89]/70 bg-[#e8d5b8]/70 px-3 py-2 text-sm text-[#292d30] outline-none transition-colors placeholder:text-[#99958c] focus:border-[#a58a5b] focus:ring-2 focus:ring-[#a58a5b]/15"
                  />

                  <PrimaryDarkButton type="submit" className="shrink-0 px-4">
                    Continue
                  </PrimaryDarkButton>
                </form>
              </article>
            </div>
          </div>
        </div>
                {/* Ilustración principal */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <img
            src={HeroArtwork}
            alt=""
            className="
              absolute inset-0
              h-full w-full
              object-cover object-left
              sm:object-right
            "
          />
        </div>
      </section>
    </main>
  )
}

export default Hero

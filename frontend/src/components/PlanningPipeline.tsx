import MapTexture from '../assets/images/MapTexture.jpg'

import {
  Lightbulb,
  Scale,
  Workflow,
  Layers,
  Route,
} from 'lucide-react'

const stages = [
  {
    number: '01',
    title: 'Project definition',
    description:
      'Clarify the problem, identify the target users and define the purpose of your project.',
    Icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Feasibility',
    description:
      'Evaluate resources, constraints, risks and whether your idea is realistic.',
    Icon: Scale,
  },
  {
    number: '03',
    title: 'Technical design',
    description:
      'Explore technologies, architecture and the technical decisions behind your project.',
    Icon: Workflow,
  },
  {
    number: '04',
    title: 'Scope & MVP',
    description:
      'Prioritise essential features and establish a realistic first version.',
    Icon: Layers,
  },
  {
    number: '05',
    title: 'Roadmap',
    description:
      'Turn your decisions into an organised sequence of tasks and milestones.',
    Icon: Route,
  },
]

export function PlanningPipeline() {
  return (
    <section
      className="relative bg-[#e8d5b8] px-6 py-20 sm:py-24"
      style={{
        backgroundImage: `url(${MapTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#a58a5b]">
            The planning process
          </span>

          <h2 className="text-3xl font-semibold sm:text-4xl">
            From first idea to a clear plan
          </h2>

          <p className="mt-5 text-sm font-medium leading-7 text-[#777a78] sm:text-base">
            Every successful project starts with thoughtful planning.
            Explore each stage and shape your idea into a structured,
            achievable plan.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map(({ number, title, description, Icon }) => (
            <article
              key={number}
              className="group rounded-xl border border-[#b99b70]/70 bg-[#f0e1c5]/80 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#b18c58] hover:shadow-[0_8px_24px_rgba(29,48,69,0.07)]"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="font-semibold tracking-widest text-[#b18c58]">
                  {number}
                </span>

                <Icon
                  size={25}
                  strokeWidth={1.5}
                  className="text-[#1d3045] transition-colors group-hover:text-[#a58a5b]"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mb-3 text-xl">
                {title}
              </h3>

              <p className="text-sm leading-6 text-[#777a78]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

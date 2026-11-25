import './App.css'
import Hero from './components/landing/Hero'
import { HeroValueStrip } from './components/HeroValueStrip'
import { PlanningPipeline } from './components/PlanningPipeline'

function App() {
  return (
    <>
      <Hero />
      <HeroValueStrip />
      <PlanningPipeline />
    </>
  )
}

export default App
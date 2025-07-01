import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import CombinedStarryBackground from './components/UI/CombinedStarryBackground'

export const App = () => {
  return (
    <>
      <CombinedStarryBackground
        starDensity={0.0003}
        minDelay={1500}
        maxDelay={4000}
        starColor="#33c2cc"
        trailColor="#57db96"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <Navbar />
          <Hero />
        </div>
      </CombinedStarryBackground>
    </>
  )
}

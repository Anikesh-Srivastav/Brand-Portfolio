import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import {CombinedStarryBackground} from './components/UI/CombinedStarryBackground'
import { About } from './sections/About'
import SplashCursor from './components/UI/SplashCursor'

export const App = () => {
  return (
<>
  {/* Full screen fixed background */}
  <CombinedStarryBackground
    starDensity={0.0003}
    minDelay={1500}
    maxDelay={4000}
    starColor="#33c2cc"
    trailColor="#57db96"
    className="fixed inset-0 z-0"
  >
    <div className="absolute inset-0 z-0 pointer-events-none">
      <SplashCursor />
    </div>
  </CombinedStarryBackground>


  {/* Scrollable content container */}
  <div className="relative z-10 container mx-auto max-w-7xl">
    <Navbar />
    <Hero />
    <About />
  </div>
</>
  );
};
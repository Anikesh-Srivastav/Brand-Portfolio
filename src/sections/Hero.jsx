import { Canvas } from "@react-three/fiber"
import { HeroText } from "../components/HeroText"


export const Hero = () => {
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <figure 
        className="absolute inset-0"
        style={{width: '100vh', height: '100vh'}}
        >
          <Canvas></Canvas>
      </figure>
    </section>
  )
}

import React, { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import TrustedPartners from '@/components/sections/TrustedPartners'
import SetupInSaudi from '@/components/sections/SetupInSaudi'
import Footer from '@/components/layout/Footer'
import Lenis from 'lenis'
import { CustomCursor } from '@/components/ui/custom-cursor'

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
    })

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-primary-bg overflow-x-clip font-sans selection:bg-green-500 selection:text-white">
      {/* Premium custom mouse follower */}
      <CustomCursor />

      {/* Premium Grain Texture Overlay */}
      <div className="noise-bg" />

      {/* Global Background Mesh Gradients */}
      <div className="absolute top-[5%] left-[5%] w-[500px] h-[500px] bg-[#22C55E]/2 rounded-full blur-[140px] pointer-events-none animate-mesh-1" />
      <div className="absolute top-[35%] right-[5%] w-[600px] h-[600px] bg-[#2563EB]/2 rounded-full blur-[160px] pointer-events-none animate-mesh-2" />
      <div className="absolute bottom-[25%] left-[5%] w-[600px] h-[600px] bg-[#22C55E]/1.5 rounded-full blur-[160px] pointer-events-none animate-mesh-2" />
      <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] bg-[#2563EB]/2 rounded-full blur-[140px] pointer-events-none animate-mesh-1" />

      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyChooseUs />
      <TrustedPartners />
      <SetupInSaudi />
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Factory
} from 'lucide-react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'

const TrustedPartners: React.FC = () => {
  const cards = [
    {
      title: 'Industrial & Energy',
      tag: 'Energy Sectors',
      description: 'Connecting global industries with local opportunities to drive sustainable growth and economic impact.',
      icon: Factory,
      image: '/trusted_industrial.png'
    },
    {
      title: 'Business Growth',
      tag: 'Strategic Scaling',
      description: 'Smart strategies and innovative solutions to accelerate your business growth in the Saudi market.',
      icon: TrendingUp,
      image: '/trusted_business.png'
    },
    {
      title: 'Local Expertise',
      tag: 'Vision Alignment',
      description: 'In-depth local knowledge and strong networks to help you navigate and succeed in Saudi Arabia.',
      icon: Users,
      image: '/trusted_expertise.png'
    }
  ]

  // Framer Motion Animation Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  }

  return (
    <section id="trusted-partners" className="relative bg-primary-bg overflow-visible -my-16 lg:-my-24 py-10">
      {/* Background Decorative Glow Spots */}
      <div className="absolute top-[20%] left-[-15%] w-[45%] h-[45%] bg-[#22C55E]/3 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[45%] h-[45%] bg-[#2563EB]/4 rounded-full blur-[180px] pointer-events-none" />

      {/* Container Scroll - Entire Content is placed inside the tilting card */}
      <ContainerScroll titleComponent={null}>
        <div className="space-y-8 md:space-y-12 text-left">
          
          {/* Layer 1: Split Header Row (Now inside the tilted card) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-[1200px] mx-auto w-full px-4">
            
            {/* Left Column: Heading */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono tracking-[0.25em] text-[#22C55E] uppercase font-bold">
                  Your Trusted Partners
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4.5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Highly Motivated Team with{' '}
                <span className="text-[#22C55E]">
                  Innovative Ideas
                </span>
              </h2>
            </div>

            {/* Right Column: Paragraph and Callout */}
            <div className="lg:col-span-6 space-y-5">
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                We love what we do and therefore come up with the best possible solutions to help you set and grow your business in Saudi Arabia quickly. We are your trusted partners you can count on.
              </p>
              
              {/* Callout box with shield icon */}
              <div className="flex items-center gap-4 py-1.5">
                <div className="w-12 h-12 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/5 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#22C55E]" />
                </div>
                <div className="text-sm sm:text-base">
                  <span className="text-[#22C55E] font-bold">Trusted. Reliable. Results Driven.</span>
                  <span className="text-[#94A3B8] font-semibold block sm:inline sm:ml-2">
                    Your success is our commitment.
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Layer 2: Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto w-full px-4 items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {cards.map((card, idx) => {
              return (
                <motion.div
                  key={idx}
                  className="group relative bg-secondary-bg/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-[#22C55E]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5),0_0_35px_rgba(34,197,94,0.08)] flex flex-col overflow-hidden"
                  variants={itemVariants}
                >
                  {/* Visual Glare Reflective Sweep Effect on Hover (20 Lakh Look) */}
                  <div className="absolute inset-0 w-[60%] h-full bg-linear-to-r from-transparent via-white/4 to-transparent skew-x-[-25deg] left-[-80%] group-hover:left-[130%] transition-all duration-[1.2s] ease-out z-20 pointer-events-none" />

                  {/* 1. Top Image section with hover zoom */}
                  <div className="relative w-full h-[160px] md:h-[190px] overflow-hidden shrink-0">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    {/* Subtle visual dark blue scrim blending seamlessly into the card body to prevent sharp lines */}
                    <div className="absolute inset-0 bg-linear-to-t from-secondary-bg/75 via-secondary-bg/20 to-transparent pointer-events-none" />
                    
                 
                  </div>

                  {/* 2 & 3. Card Body text area + Layout-Safe Floating Icon Overlay */}
                  <div className="p-6 md:p-8 pt-0 flex-1 flex flex-col justify-between space-y-4">
                    
                  
                    
                 
                    <div className="space-y-2 text-left flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-[#22C55E] transition-colors duration-300">
                        {card.title}
                      </h3>
                      
                      {/* Small horizontal accent line */}
                      <div className="w-8 h-[2px] bg-[#22C55E] rounded-full group-hover:w-12 transition-all duration-500" />
                      
                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pt-1.5 font-semibold">
                        {card.description}
                      </p>
                    </div>

                    {/* Learn More link with sliding arrow */}
                    <div className="pt-4 text-left shrink-0">
                      <a 
                        href="#consultation" 
                        className="inline-flex items-center gap-2 text-[#22C55E] hover:text-[#4ade80] font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </ContainerScroll>
    </section>
  )
}

export default TrustedPartners

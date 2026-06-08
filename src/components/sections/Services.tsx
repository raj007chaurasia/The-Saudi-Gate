import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  accentColor: 'blue' | 'green'
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  accentColor
}) => {
  // Staggered variants for scroll entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const
      } 
    }
  }

  // Motion values for 3D tilt tracking
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring animations for clean, responsive tilt updates
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = (e.clientX - rect.left) / width - 0.5
    const mouseY = (e.clientY - rect.top) / height - 0.5
    x.set(mouseX)
    y.set(mouseY)

    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // Color theme classes
  const isBlue = accentColor === 'blue'

  const buttonClass = isBlue
    ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white'
    : 'bg-green-500/10 text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-[#020817]'

  const overlayClass = isBlue
    ? 'absolute inset-0 bg-linear-to-t from-primary-bg/90 via-primary-bg/35 to-transparent group-hover:from-primary-bg/80 transition-all duration-700'
    : 'absolute inset-0 bg-linear-to-t from-primary-bg/90 via-primary-bg/35 to-transparent group-hover:from-primary-bg/80 transition-all duration-700'

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        variants={cardVariants}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.025 }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative h-[380px] rounded-3xl overflow-hidden bg-[#070b15]/30 hover:bg-[#070b15]/50 border border-white/5 hover:border-white/15 shadow-2xl transition-[border-color,background-color,box-shadow] duration-500 hover:shadow-black/50 cursor-pointer flex flex-col justify-end p-7"
      >
        {/* Spotlight Radial Background Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
          style={{
            background: 'radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(34, 197, 94, 0.08) 0%, rgba(0, 242, 254, 0.04) 45%, transparent 80%)'
          }}
        />

        {/* Background Image Container with zoom */}
        <div className="absolute inset-0 overflow-hidden" style={{ transform: 'translateZ(-10px)' }}>
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover object-center scale-100 group-hover:scale-108 transition-all duration-[1.2s] ease-out opacity-85 group-hover:opacity-95 brightness-[0.75] group-hover:brightness-[0.95]"
          />
        </div>

        {/* Tint Gradient Overlay */}
        <div className={overlayClass} />

        {/* Bottom Section: Text Content & Arrow */}
        <div className="relative z-10 flex flex-col gap-4" style={{ transform: 'translateZ(20px)' }}>
          <div>
            <h3 className="text-xl font-extrabold text-white tracking-wide mb-3 group-hover:text-white transition-colors">
              {title}
            </h3>
            <p className="text-sm text-[#94A3B8] font-medium leading-relaxed max-w-[90%]">
              {description}
            </p>
          </div>

          {/* Action Button */}
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${buttonClass} group-hover:translate-x-1.5 group-hover:-translate-y-0.5 shadow-md`}>
              <ArrowRight className="w-5 h-5 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const Services: React.FC = () => {
  const servicesList = [
    {
      title: 'Business Setup',
      description: 'We have ample years of experience in the core areas of business setup in Saudi Arabia for any type of business that you need.',
      imageSrc: '/riyadh_skyline_hero.png',
      accentColor: 'blue' as const,
    },
    {
      title: 'Commercial License',
      description: 'We provide business commercial licenses solutions and guidance on ISIC4 activities that serve your purpose in Saudi Arabia.',
      imageSrc: '/corporate_building_facade.png',
      accentColor: 'green' as const,
    },
    {
      title: 'Industrial Production',
      description: 'Expand to Saudi Arabia Industrial market and let your customers and clients find your products made in Saudi.',
      imageSrc: '/industrial_refinery_night.png',
      accentColor: 'blue' as const,
    },
    {
      title: 'MISA License',
      description: 'We can help you obtain MISA license (SAGIA) and complete the required setup in compliance with Saudi investment law.',
      imageSrc: '/corporate_building_facade.png',
      accentColor: 'green' as const,
    },
    {
      title: 'Hybrid Setup',
      description: 'We can assist to provide you with a convenient hybrid setup model to manage your support operations in Saudi Arabia.',
      imageSrc: '/riyadh_skyline_hero.png',
      accentColor: 'blue' as const,
    },
    {
      title: 'SABER, SFDA, and Imports',
      description: 'Expand to Saudi Arabia customs for import and regulated products. We can support to obtain required approvals and compliance.',
      imageSrc: '/cargo_terminal_logistics.png',
      accentColor: 'green' as const,
    },
  ]

  return (
    <section id="services" className="relative bg-primary-bg text-white py-24 overflow-hidden border-t border-white/5">
      {/* Background Decorative Neon Glow Spots */}
      <div className="absolute top-[20%] left-[-15%] w-[45%] h-[45%] bg-[#2563EB]/25 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[45%] h-[45%] bg-[#22C55E]/25 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-16 flex flex-col items-center">
          <div className="flex items-center gap-3">
            <span className="text-md font-mono font-bold tracking-[0.25em] text-[#22C55E] uppercase ">
              HIRE US
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4.5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            How can we <span className="text-[#22C55E]">help</span> you?
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Comprehensive solutions to start, grow, and expand your business in Saudi Arabia.
          </p>
        </div>

        {/* 6-Card Services Grid with Framer Motion Stagger */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
        >
          {servicesList.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              accentColor={service.accentColor}
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Services

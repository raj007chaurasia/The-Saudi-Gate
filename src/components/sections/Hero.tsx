import React from 'react'
import {
  Briefcase,
  Scale,
  Globe,
  Award,
  ArrowRight,
  ChevronRight,
  Building2,
  FileCheck
} from 'lucide-react'
import { ShinyButton } from '@/components/ui/shiny-button'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  const avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80'
  ]

  const rightMenuLinks = [
    {
      title: 'Company Formation',
      description: '100% Foreign Ownership',
      icon: Building2,
      href: '#company-formation'
    },
    {
      title: 'Licenses & Approvals',
      description: 'Fast & Compliant',
      icon: FileCheck,
      href: '#licenses-approvals'
    },
    {
      title: 'PRO & Government Services',
      description: 'End-to-End Support',
      icon: Scale,
      href: '#pro-government'
    },
    {
      title: 'Industrial & Investment',
      description: 'Consulting Solutions',
      icon: Briefcase,
      href: '#industrial-investment'
    }
  ]

  return (
    <section
      className="relative w-full min-h-[960px] lg:min-h-screen flex flex-col justify-between pt-28 overflow-hidden"
    >
      {/* Background Image with Premium Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 filter blur-sm pointer-events-none"
        style={{ backgroundImage: "url('/riyadh_skyline_hero.png')" }}
      />

      {/* Dark Radial Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-primary-bg/90 via-primary-bg/60 to-primary-bg/95 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-primary-bg/25 to-primary-bg/85 pointer-events-none" />

      {/* Premium Neon/Light Leak Backdrops */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-[#22C55E]/10 rounded-full blur-[140px] pointer-events-none glow-spot-pulse" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#2563EB]/8 rounded-full blur-[160px] pointer-events-none glow-spot-pulse" />

      {/* Main Grid Content Area */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center py-10">

        {/* Left Column: Heading, Subtitle, and CTAs (Col span 7) */}
        <motion.div
          className="lg:col-span-7 flex flex-col space-y-8 text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.12
              }
            }
          }}
        >

          {/* Tagline */}
          <motion.div
            className="flex items-center gap-3"
            variants={{
              hidden: { opacity: 0, x: -25 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
          >
            <span className="text-xs font-mono tracking-[0.25em] text-[#22C55E] uppercase font-bold">
              Your Partner in Saudi Arabia
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7.5xl font-extrabold text-white tracking-tight leading-[1.12]"
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            A Saudi Agency That <br />
            Thrives On Your <span className="bg-clip-text text-transparent bg-linear-to-r from-accent-green via-[#4ade80] to-[#10b981] drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">Success</span>
          </motion.h1>

          {/* Subparagraph */}
          <motion.p
            className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl font-medium"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >
            We are a premier business setup and consulting agency to help you establish a remarkable corporate presence and seamlessly align with Saudi Vision 2030.
          </motion.p>

          {/* Small Grid Info Cards */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } }
            }}
          >

            {/* Feature 1 */}
            <motion.div
              className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300 group cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
            >
              <div className="w-10 h-10 rounded-full border border-green-500/20 bg-green-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
                <Briefcase className="w-5 h-5 text-[#22C55E]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs leading-tight">Business Setup</span>
                <span className="text-[10px] text-[#94A3B8]">Made Simple</span>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300 group cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
            >
              <div className="w-10 h-10 rounded-full border border-green-500/20 bg-green-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
                <Scale className="w-5 h-5 text-[#22C55E]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs leading-tight">Government</span>
                <span className="text-[10px] text-[#94A3B8]">Approvals</span>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300 group cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
            >
              <div className="w-10 h-10 rounded-full border border-green-500/20 bg-green-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
                <Globe className="w-5 h-5 text-[#22C55E]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs leading-tight">Local Expertise</span>
                <span className="text-[10px] text-[#94A3B8]">Global Standards</span>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300 group cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
            >
              <div className="w-10 h-10 rounded-full border border-green-500/20 bg-green-500/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
                <Award className="w-5 h-5 text-[#22C55E]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs leading-tight">Vision 2030</span>
                <span className="text-[10px] text-[#94A3B8]">Aligned</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Consultation CTA + Avatars Block */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >

            {/* Consultation Button */}
            <ShinyButton href="#consultation">
              Get Free Consultation
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </ShinyButton>

            {/* Overlapping circular partner avatars */}
            <div className="flex items-center gap-3.5 p-2 px-3 rounded-2xl bg-white/1 border border-white/3 backdrop-blur-sm">
              <div className="flex -space-x-3.5">
                {avatars.map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt={`Saudi Gate Consultant Partner ${idx + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-primary-bg object-cover hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer"
                  />
                ))}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-extrabold text-sm flex items-center gap-1.5">
                  Trusted by 500+ Clients
                </span>
                <span className="text-xs text-[#94A3B8] font-semibold tracking-wide">Across Saudi Arabia</span>
              </div>
            </div>

          </motion.div>

        </motion.div>

        {/* Right Column: Floating Vertical Navigation Glass Card (Col span 5) */}
        <motion.div
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -8, 0],
            transition: {
              x: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
              opacity: { duration: 0.9, delay: 0.15 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
            }
          }}
        >
          <div className="w-full max-w-[460px] glass-card rounded-3xl p-7 border border-white/8 shadow-2xl relative overflow-hidden backdrop-blur-md hover-card-premium">
            {/* Decorative gradients inside the menu container */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-green-500/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="flex flex-col gap-1">
              {rightMenuLinks.map((link, idx) => {
                const Icon = link.icon
                return (
                  <a
                    key={idx}
                    href={link.href}
                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/4 border border-transparent hover:border-white/5 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/5 border border-green-500/10 group-hover:bg-[#22C55E]/15 group-hover:border-[#22C55E]/40 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.25)] transition-all duration-500 flex items-center justify-center shrink-0">
                        <Icon className="w-5.5 h-5.5 text-[#22C55E] transition-transform group-hover:scale-105 duration-300" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-white font-bold text-base group-hover:text-[#22C55E] transition-colors duration-300">
                          {link.title}
                        </span>
                        <span className="text-xs text-[#94A3B8] font-semibold mt-0.5">
                          {link.description}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-[#22C55E] group-hover:translate-x-1.5 transition-all duration-300" />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>

      </div>

      <div className="relative w-full overflow-hidden leading-none z-10 -mb-px">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" className="fill-secondary-bg" />
        </svg>
      </div>
    </section>
  )
}

export default Hero

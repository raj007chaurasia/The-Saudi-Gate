import React from 'react'
import { motion, type Variants } from 'framer-motion'
import {
  Users,
  Target,
  Handshake,
  ShieldCheck,
  MessageSquareMore,
  ArrowRight
} from 'lucide-react'

const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success.',
      icon: Users
    },
    {
      title: 'Proven Results',
      description: 'Delivering measurable results that accelerate growth.',
      icon: Target
    },
    {
      title: 'End-to-End Support',
      description: 'From setup to expansion, we\'re with you at every step.',
      icon: Handshake
    },
    {
      title: 'Trusted Partner',
      description: 'Your trusted partner for long-term success in KSA.',
      icon: ShieldCheck
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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <section id="why-choose-us" className="relative bg-primary-bg py-24 sm:py-32 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-[20%] left-[-15%] w-[45%] h-[45%] bg-[#22C55E]/4 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[45%] h-[45%] bg-[#2563EB]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-24">

        {/* Layer 1: Flourishing Business Banner (Premium Glassmorphism Implementation) */}
        <motion.div
          className="relative w-full rounded-[32px] overflow-hidden min-h-[480px] lg:min-h-[520px] flex items-center shadow-[0_40px_80px_rgba(0,0,0,0.65)] border border-white/10"
          initial={{ opacity: 0, scale: 0.98, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/flourishing_business_bg.png')" }}
          />

          {/* High-end gradient scrim: Dark transparent on left to fade out the image and ensure premium text readability */}
          <div className="absolute inset-0 bg-linear-to-r from-primary-bg via-primary-bg/75 to-primary-bg/20 lg:from-primary-bg/95 lg:via-primary-bg/75 lg:to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-primary-bg/60 via-transparent to-black/20" />

          {/* Banner Content Container (Overlaying the background directly for modern glass feel) */}
          <div className="relative z-10 w-full max-w-[800px] px-8 sm:px-14 py-12 flex flex-col justify-center space-y-6">

            {/* Premium Interactive Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold tracking-[0.25em] text-[#22C55E] uppercase w-fit shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              Strategic Growth
            </div>

            <h2 className="text-3xl sm:text-4.5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Let us together build a <br />
              <span className="relative inline-block text-[#22C55E]">
                flourishing
              </span>{' '}
              business
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              When connected with us, you aren't growing your business alone. We have your back and put in our best to contribute to the growth of your entire team and organization. So, if you are looking for the right agency that'll help you build a good presence in Saudi Arabia and bring in more conversions and revenue, we are right here!
            </p>

            <div className="pt-2">
              <a
                href="#consultation"
                className="group relative inline-flex items-center gap-4 bg-white/5 hover:bg-[#22C55E]/10 border border-white/10 hover:border-[#22C55E]/40 text-white font-bold text-xs uppercase tracking-wider rounded-full pl-6 pr-2 py-2 transition-all duration-400 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]"
              >
                Connect with us
                <div className="w-9 h-9 rounded-full bg-[#22C55E] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <ArrowRight className="w-4.5 h-4.5 text-white group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </div>

          </div>
        </motion.div>

        {/* Layer 2: Why Choose Us Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Sunset skyline image with floating overlay card */}
          <motion.div
            className="lg:col-span-5 relative group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full rounded-[24px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.55)] border border-white/10 group-hover:border-white/20 transition-all duration-700 aspect-1.33">
              <img
                src="/riyadh_sunset_why_choose_us.png"
                alt="Riyadh skyline skyline reflecting beautiful sunset clouds"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-[1.5s]"
              />
              {/* Gradient overlay for contrast */}
              <div className="absolute inset-0 bg-linear-to-t from-primary-bg/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating micro-card in bottom-left */}
              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-primary-bg/80 border border-white/10 backdrop-blur-md flex items-center gap-4 max-w-[340px] sm:max-w-[360px] shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="w-12 h-12 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#22C55E]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-extrabold text-sm sm:text-base leading-tight">
                    Your Growth, Our Mission
                  </span>
                  <span className="text-xs text-[#94A3B8] font-semibold mt-1">
                    We turn your vision into sustainable success in Saudi Arabia.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content details */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#22C55E]/40 block"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-[#22C55E] uppercase font-bold">
                Why Choose Us
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4.5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Why Choose <span className="text-[#22C55E]">Us?</span>
              </h2>

              {/* Squiggly underline SVG */}
              <div className="pt-1">
                <svg className="text-[#22C55E]/60 w-[240px] h-4" viewBox="0 0 300 20" fill="none">
                  <motion.path
                    d="M 5,10 C 15,0 20,20 30,10 C 40,0 45,20 55,10 C 65,0 70,20 80,10 C 90,0 95,20 105,10 C 115,0 120,20 130,10 C 140,0 145,20 155,10 C 165,0 170,20 180,10 C 190,0 195,20 205,10 C 215,0 220,20 230,10 C 240,0 245,20 255,10 C 265,0 270,20 280,10"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
                  />
                </svg>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              If you are looking for the best business development and solutions services to grow your business in Saudi Arabia, we are here to help. We are certified experts with tremendous experience in business setup, development, and expansion in Saudi Arabia who'll walk with you all through.
            </p>

            {/* Talk Callout Box (Luxurious Left-Border Highlight) */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/2 hover:bg-white/4 border-l-2 border-l-[#22C55E] border-y-white/5 border-r-white/5 border-y border-r relative overflow-hidden group shadow-lg transition-all duration-300">
              <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-green-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="w-12 h-12 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/5 flex items-center justify-center shrink-0 group-hover:bg-[#22C55E]/10 transition-colors duration-300">
                <MessageSquareMore className="w-5.5 h-5.5 text-[#22C55E]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[#22C55E] font-extrabold text-sm sm:text-base leading-snug">
                  We can help you bring your ideas to life.
                </span>
                <span className="text-xs sm:text-sm text-[#94A3B8] font-semibold mt-1">
                  Let's talk about what we can build and raise together.
                </span>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Layer 3: Four Value Cards (High-end Luxury Cards) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <motion.div
                key={index}
                className="group relative bg-secondary-bg/30 backdrop-blur-md p-6 sm:p-7 rounded-[20px] border border-white/5 hover:border-[#22C55E]/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(34,197,94,0.08)] flex items-center gap-4.5"
                variants={itemVariants}
              >
                {/* Subtle internal glowing backdrop spot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#22C55E]/1 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Decorative border glow on hover */}
                <div className="absolute inset-0 rounded-[20px] bg-linear-to-r from-transparent via-[#22C55E]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-[#22C55E]/5 border border-[#22C55E]/15 flex items-center justify-center shrink-0 group-hover:bg-[#22C55E]/15 group-hover:border-[#22C55E]/30 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] transition-all duration-500">
                  <IconComponent className="w-5.5 h-5.5 text-[#22C55E]" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col text-left">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-[#22C55E] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mt-1 font-semibold">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default WhyChooseUs

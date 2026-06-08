import React, { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { Magnetic } from '@/components/ui/magnetic'
import { 
  BookOpen, 
  ArrowUpRight, 
  ArrowRight,
  Building2, 
  Sparkles, 
  Activity, 
  Handshake, 
  FileCheck, 
  Contact, 
  ShieldCheck, 
  Building,
  Clock,
  Calendar
} from 'lucide-react'

// Custom IRC badge component for the MISA article
const IrcIcon: React.FC<{ className?: string }> = ({ className }) => (
  <span className={`text-[10px] font-black tracking-tighter leading-none select-none font-mono ${className || ''}`}>
    IRC
  </span>
)

interface CardData {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }> | any
  category: 'setup' | 'compliance' | 'growth'
  href: string
  readTime: string
  date: string
  featured?: boolean
  highlights?: string[]
}

const SetupInSaudi: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', name: 'All Insights' },
    { id: 'setup', name: 'Company Setup' },
    { id: 'compliance', name: 'SFDA & Compliance' },
    { id: 'growth', name: 'Incentives & Growth' }
  ]

  const cards: CardData[] = [
    {
      title: 'Company Formation in Saudi Arabia: How To Navigate Your Business Setup Journey',
      description: 'Saudi Arabia has become one of the most attractive destinations for foreign investors, manufacturers, and scale-ups entering the Middle East. Learn the step-by-step process of establishing your entity.',
      icon: Building2,
      category: 'setup',
      readTime: '6 min read',
      date: 'June 2026',
      href: '#company-formation',
      featured: true,
      highlights: [
        '100% Foreign Ownership (No Local Partner Required)',
        'Full MISA Investor License Advisory Support',
        'Corporate Bank Account Opening & Capital Requirements',
        'Fast-Track Government & Ministry Approvals'
      ]
    },
    {
      title: 'Saudi Guide for Cosmetics Business Development in Saudi Arabia Through SFDA GHAD',
      description: 'Saudi Arabia has become one of the fastest-growing cosmetics markets in the GCC. Navigate the official registration guidelines and GHAD platform compliance requirements.',
      icon: Sparkles,
      category: 'compliance',
      readTime: '5 min read',
      date: 'May 2026',
      href: '#cosmetics-guide'
    },
    {
      title: 'Saudi Gate for Business Development of Medical Devices, Cosmetics, and Pharmaceutical Products in Saudi Arabia Through SFDA GHAD',
      description: 'A comprehensive guide on licensing requirements, technical documentation, and regulatory approvals for medical products.',
      icon: Activity,
      category: 'compliance',
      readTime: '8 min read',
      date: 'May 2026',
      href: '#medical-pharmaceutical'
    },
    {
      title: 'Leveraging The Saudi Gate Services to Launch and Develop Your Business in Saudi Arabia',
      description: 'How our specialized regulatory services help corporate entities establish local operations rapidly, mitigating compliance risks.',
      icon: Handshake,
      category: 'growth',
      readTime: '4 min read',
      date: 'April 2026',
      href: '#leveraging-services'
    },
    {
      title: 'Leveraging the SAR 100 Work Permit Incentive for Manufacturing Startups in Saudi Arabia',
      description: 'Understand the key ministerial incentives aimed at encouraging industrial expansion, manufacturing growth, and talent localization.',
      icon: FileCheck,
      category: 'growth',
      readTime: '5 min read',
      date: 'March 2026',
      href: '#work-permit-incentive'
    },
    {
      title: 'The New Era of MISA in Saudi Arabia: Transitioning from Licensing to the Investment Registration Certificate (IRC)',
      description: 'Explore MISA’s latest regulatory shifts, commercial streamlining, and how the new IRC model affects foreign investment entries.',
      icon: IrcIcon,
      category: 'setup',
      readTime: '7 min read',
      date: 'March 2026',
      href: '#misa-new-era'
    },
    {
      title: 'MISA License in Saudi Arabia: Company Setup and Market Entry Guide',
      description: 'Complete breakdown of administrative documents, commercial license validation, and legal structures available for international firms.',
      icon: Contact,
      category: 'setup',
      readTime: '6 min read',
      date: 'February 2026',
      href: '#misa-license'
    },
    {
      title: 'Trademarks and Company Registration in Saudi Arabia: Complete Business Protection and Setup Guide by The Saudi Gate',
      description: 'Safeguard your intellectual property, register local trade names, and secure legal corporate branding across the Kingdom.',
      icon: ShieldCheck,
      category: 'compliance',
      readTime: '5 min read',
      date: 'January 2026',
      href: '#trademarks-registration'
    },
    {
      title: 'Opening a Company in Saudi Arabia: Complete Guide for Investors by The Saudi Gate',
      description: 'Detailed analysis of corporate tax setups, regional headquarters (RHQ) rules, capital structures, and company bylaws.',
      icon: Building,
      category: 'setup',
      readTime: '7 min read',
      date: 'January 2026',
      href: '#opening-company'
    }
  ]

  const filteredCards = selectedCategory === 'all' 
    ? cards 
    : cards.filter(card => card.category === selectedCategory)

  // Framer Motion Animation Variants for the Grid
  const gridVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.98, 
      transition: { duration: 0.2 } 
    }
  }

  return (
    <section id="setup" className="relative bg-primary-bg py-24 sm:py-32 overflow-hidden border-t border-white/5">
            {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff/[0.015]_1px,transparent_1px),linear-gradient(to_bottom,#ffffff/[0.015]_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] bg-[#22C55E]/2 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] w-[40%] h-[40%] bg-[#2563EB]/2 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          
          {/* Tagline */}
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#22C55E]/40 block"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-[#22C55E] uppercase font-bold">
              RESOURCES & INSIGHTS
            </span>
            <span className="h-px w-6 bg-[#22C55E]/40 block"></span>
          </div>

          {/* Book Icon */}
          <div className="w-9 h-9 rounded-full bg-[#22C55E]/5 border border-[#22C55E]/10 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-[#22C55E]" />
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4.5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] max-w-xl">
            Get Latest <span className="text-[#22C55E]">Information</span>
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal max-w-2xl pt-1">
            Stay informed with expert briefings, regulatory updates, and strategic guides designed to help corporate entities establish local operations in Saudi Arabia.
          </p>
        </div>

        {/* Interactive Category Filter Menu */}
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1 bg-white/2 border border-white/5 p-1 rounded-full backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-5 py-2 rounded-full text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {/* Active capsule background */}
                {selectedCategory === cat.id && (
                  <motion.div 
                    layoutId="activeTabSaudi"
                    className="absolute inset-0 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Divider Grid Layout */}
        <div className="relative border border-white/10 bg-white/10 rounded-2xl overflow-hidden max-w-[1240px] mx-auto w-full">
          <motion.div 
            layout="position"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <AnimatePresence mode="popLayout">
              {filteredCards.map((card, idx) => {
                const Icon = card.icon
                const isFeatured = card.featured && selectedCategory === 'all'
                
                // Card indexes e.g. 01, 02, 03...
                const displayIndex = String(idx + 1).padStart(2, '0')
                const categoryLabel = card.category.toUpperCase()

                // Calculate effective columns used up to this card to detect orphan rows
                const totalCards = filteredCards.length
                const isLast = idx === totalCards - 1

                // Count how many "grid slots" are used before this card
                let slotsBefore = 0
                for (let i = 0; i < idx; i++) {
                  slotsBefore += (filteredCards[i].featured && selectedCategory === 'all') ? 2 : 1
                }
                const posInRow = slotsBefore % 3 // 0, 1, or 2
                const slotsRemaining = 3 - posInRow

                // If it's the last card and alone on its row (posInRow === 0), span all 3
                // If it's the last card and there's 2 slots left, span 2
                const isOrphan = isLast && slotsRemaining > 1 && !isFeatured
                const spanClass = isFeatured
                  ? 'lg:col-span-2 md:col-span-2'
                  : isOrphan
                    ? (slotsRemaining === 3 ? 'lg:col-span-3 md:col-span-2' : 'lg:col-span-2 md:col-span-2')
                    : ''

                return (
                  <motion.div
                    layout
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    key={card.title}
                    className={`group relative p-8 sm:p-10 flex flex-col justify-between min-h-[360px] sm:min-h-[380px] bg-primary-bg hover:bg-secondary-bg/30 transition-colors duration-400 ${spanClass}`}
                  >
                    {/* Top Row: Meta index + Icon */}
                    <div className="flex justify-between items-start w-full">
                      <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#22C55E]/80 uppercase font-semibold">
                        <span>{categoryLabel}</span>
                        <span className="text-white/20">//</span>
                        <span className="text-white/40">{displayIndex}</span>
                      </div>
                      
                      <div className="w-5 h-5 flex items-center justify-center text-white/20 group-hover:text-[#22C55E] transition-colors duration-300">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    {/* Middle Row: Content */}
                    <div className="flex-1 flex flex-col justify-center my-6 text-left">
                      <h3 className={`font-bold text-white tracking-tight leading-snug group-hover:text-[#22C55E] transition-colors duration-300 ${
                        isFeatured ? 'text-xl sm:text-2.5xl max-w-xl' : 'text-lg sm:text-xl'
                      }`}>
                        <a href={card.href}>
                          {card.title}
                        </a>
                      </h3>
                      
                      <p className="text-slate-400 text-[13px] sm:text-sm leading-relaxed font-normal mt-3 line-clamp-3 group-hover:text-slate-200 transition-colors duration-300">
                        {card.description}
                      </p>

                      {/* Featured Takeaways Block */}
                      {isFeatured && card.highlights && (
                        <div className="mt-6 hidden sm:grid grid-cols-2 gap-4 border-t border-white/5 pt-5">
                          {card.highlights.slice(0, 4).map((highlight, index) => (
                            <div key={index} className="flex items-start gap-2 text-[11px] text-slate-400 font-medium leading-relaxed">
                              <span className="w-1 h-1 rounded-full bg-[#22C55E] shrink-0 mt-2" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Row: Separator & Read Link */}
                    <div className="w-full">
                      <div className="w-full h-px bg-white/5 mb-6" />
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {card.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {card.date}
                          </span>
                        </div>

                        <a 
                          href={card.href}
                          className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-white/40 group-hover:text-[#22C55E] transition-all duration-300"
                        >
                          <span>{isFeatured ? 'READ THE SYSTEMIC GUIDE' : 'READ BRIEF'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:rotate-45 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Corporate Call to Action Banner */}
        <div className="relative border border-white/10 bg-linear-to-r from-primary-bg via-secondary-bg/60 to-primary-bg rounded-2xl overflow-hidden max-w-[1240px] mx-auto w-full p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Ambient background blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#22C55E]/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="space-y-3 text-left max-w-2xl relative z-10">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-[#22C55E] uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              Strategic Setup Advisory
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Ready to establish or expand your business in the Kingdom?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              Get in touch with our senior advisors for direct, expert assistance with MISA licensing, SFDA compliance, and strategic setup support.
            </p>
          </div>

          <div className="shrink-0 relative z-10 group">
            <Magnetic>
              <a 
                href="#consultation"
                className="btn-glass-gradient"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#22C55E] group-hover:text-[#00F2FE] transform group-hover:translate-x-1.5 transition-all duration-300" />
              </a>
            </Magnetic>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SetupInSaudi

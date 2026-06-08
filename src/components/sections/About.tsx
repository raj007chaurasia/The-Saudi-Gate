import React, { useRef, useState, useEffect } from 'react'
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Building2, 
  Handshake
} from 'lucide-react'
import { motion, useInView, animate } from 'framer-motion'

interface CounterProps {
  value: number
  suffix?: string
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix = "" }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1], // Premium easeOutExpo ease curve
        onUpdate: (latest: number) => {
          setCount(Math.floor(latest))
        }
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-primary-bg text-white py-20 overflow-hidden">
      {/* Background Decorative Glow Spots */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#22C55E]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] bg-[#2563EB]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-green-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Area: Text & Cards (Col span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            {/* Tag & Headings */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#22C55E]/40 block"></span>
                <span className="text-xs font-mono tracking-[0.25em] text-[#22C55E] uppercase font-bold">
                  Who We Are
                </span>
              </div>
              <h2 className="text-3xl sm:text-4.5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                About <span className="text-[#22C55E]">Us</span>
              </h2>
              <p className="text-lg sm:text-xl font-bold text-white/90 leading-snug">
                A trusted partner in the vibrant cities of{' '}
                <span className="text-[#22C55E] border-b border-[#22C55E]/30 pb-0.5">Dammam</span> and{' '}
                <span className="text-[#22C55E] border-b border-[#22C55E]/30 pb-0.5">Khobar</span>, Saudi Arabia.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                We are committed to helping businesses establish, grow, and thrive in Saudi Arabia by delivering reliable, efficient, and tailored solutions that create lasting value.
              </p>
            </motion.div>

            {/* Mission & Vision Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } }
              }}
            >
              
              {/* Mission Card */}
              <motion.div 
                className="relative glass-card p-7 rounded-3xl border border-white/5 hover:border-green-500/25 group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(34,197,94,0.12)]"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <div className="absolute top-4 right-5 text-sm font-bold text-white/10 group-hover:text-green-500/20 transition-colors">
                  01
                </div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center justify-center group-hover:bg-[#22C55E]/20 transition-all duration-300">
                    <Target className="w-5.5 h-5.5 text-[#22C55E]" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    Mission
                  </h3>
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Our mission is to empower our clients to enter the Saudi market and realize its full potential by providing affordable, effective, custom business solutions in Saudi Arabia.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div 
                className="relative glass-card p-7 rounded-3xl border border-white/5 hover:border-green-500/25 group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(34,197,94,0.12)]"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <div className="absolute top-4 right-5 text-sm font-bold text-white/10 group-hover:text-green-500/20 transition-colors">
                  02
                </div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center justify-center group-hover:bg-[#22C55E]/20 transition-all duration-300">
                    <Eye className="w-5.5 h-5.5 text-[#22C55E]" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    Vision
                  </h3>
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Our vision is to become a regional leader in providing the best and unique business services to improve our client's presence and business strength in Saudi Arabia.
                </p>
              </motion.div>

            </motion.div>

          </div>

          {/* Right Area: Riyadh Boardroom Visual (Col span 5) */}
          <motion.div 
            className="lg:col-span-5 flex items-center justify-center lg:pl-4"
            initial={{ opacity: 0, scale: 0.96, x: 35 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full h-full min-h-[360px] sm:min-h-[440px] rounded-3xl overflow-hidden glass-card border border-white/10 group shadow-2xl hover:border-white/20 transition-all duration-700">
              
              {/* Boardroom Image */}
              <img
                src="/riyadh_boardroom_hero.png"
                alt="Saudi Gate Industries Executive Boardroom overlooking Riyadh skyline at dusk"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-2000"
              />
              
              {/* Premium dark tint overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-primary-bg/95 via-transparent to-black/30 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-navbar border border-white/5 backdrop-blur-md">
                <h4 className="font-bold text-white text-base">Riyadh Corporate Office</h4>
                <p className="text-xs text-[#94A3B8] mt-1">Direct access to the Kingdom's key ministries and industrial zones.</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Statistics Bar Section */}
        <motion.div 
          className="mt-14 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl glass-card border border-white/8 relative overflow-hidden shadow-2xl hover:border-green-500/10 transition-all duration-500">
            {/* Ambient glow in stats card */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/5 rounded-full blur-[50px] pointer-events-none" />
            
            {/* 1. Stats Counter 500+ */}
            <motion.div 
              className="flex items-center gap-4 p-4 group hover:bg-[#080d19] border border-transparent hover:border-white/5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all duration-500 rounded-2xl cursor-pointer hover:scale-[1.02]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-[#22C55E]/20 group-hover:border-[#22C55E]/30 transition-all duration-500">
                <Users className="w-6 h-6 text-[#22C55E]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  <AnimatedCounter value={500} suffix="+" />
                </span>
                <span className="text-xs sm:text-sm text-[#94A3B8] font-semibold">
                  Happy Clients
                </span>
              </div>
            </motion.div>

            {/* 2. Stats Counter 10+ */}
            <motion.div 
              className="flex items-center gap-4 p-4 group hover:bg-[#080d19] border border-transparent hover:border-white/5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all duration-500 rounded-2xl cursor-pointer hover:scale-[1.02]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-[#22C55E]/20 group-hover:border-[#22C55E]/30 transition-all duration-500">
                <Award className="w-6 h-6 text-[#22C55E]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  <AnimatedCounter value={10} suffix="+" />
                </span>
                <span className="text-xs sm:text-sm text-[#94A3B8] font-semibold">
                  Years Experience
                </span>
              </div>
            </motion.div>

            {/* 3. Stats Counter 1000+ */}
            <motion.div 
              className="flex items-center gap-4 p-4 group hover:bg-[#080d19] border border-transparent hover:border-white/5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all duration-500 rounded-2xl cursor-pointer hover:scale-[1.02]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-[#22C55E]/20 group-hover:border-[#22C55E]/30 transition-all duration-500">
                <Building2 className="w-6 h-6 text-[#22C55E]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  <AnimatedCounter value={1000} suffix="+" />
                </span>
                <span className="text-xs sm:text-sm text-[#94A3B8] font-semibold">
                  Businesses Established
                </span>
              </div>
            </motion.div>

            {/* 4. Stats Counter 98% */}
            <motion.div 
              className="flex items-center gap-4 p-4 group hover:bg-[#080d19] border border-transparent hover:border-white/5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all duration-500 rounded-2xl cursor-pointer hover:scale-[1.02]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-[#22C55E]/20 group-hover:border-[#22C55E]/30 transition-all duration-500">
                <Handshake className="w-6 h-6 text-[#22C55E]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  <AnimatedCounter value={98} suffix="%" />
                </span>
                <span className="text-xs sm:text-sm text-[#94A3B8] font-semibold">
                  Client Satisfaction
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

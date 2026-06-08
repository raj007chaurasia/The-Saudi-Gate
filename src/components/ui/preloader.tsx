import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'done'>('loading')
  const progressRef = useRef(0)

  useEffect(() => {
    let animId: number
    const startTime = performance.now()
    const duration = 2400

    function tick(now: number) {
      const elapsed = now - startTime
      const raw = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - raw, 3)
      const value = Math.round(eased * 100)

      if (value !== progressRef.current) {
        progressRef.current = value
        setProgress(value)
      }

      if (raw < 1) {
        animId = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setPhase('done')
          setTimeout(onComplete, 1100)
        }, 400)
      }
    }

    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <>
          {/* Top curtain */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            className="fixed top-0 left-0 right-0 h-1/2 bg-[#010510] z-99999"
          />
          {/* Bottom curtain */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            className="fixed bottom-0 left-0 right-0 h-1/2 bg-[#010510] z-99999"
          />

          {/* Main content — fades first, then curtains follow */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-99999 select-none pointer-events-auto overflow-hidden"
          >
            {/* Architectural grid lines — faint vertical guides */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
              <div className="absolute left-[20%] top-0 bottom-0 w-px bg-white" />
              <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white" />
              <div className="absolute left-[80%] top-0 bottom-0 w-px bg-white" />
            </div>

            {/* Full-width thin progress line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.04]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#22C55E] to-[#00D4AA]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>

            {/* Layout: asymmetric split */}
            <div className="h-full flex flex-col justify-between px-8 sm:px-14 lg:px-20 py-10 sm:py-14">

              {/* Top row */}
              <div className="flex items-start justify-between">
                {/* Logo + brand */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-4"
                >
                  <img
                    src="/logo.png"
                    alt="The Saudi Gate"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-white font-extrabold text-sm sm:text-base tracking-tight uppercase leading-tight">
                      The Saudi Gate
                    </span>
                    <span className="text-[10px] text-slate-600 font-semibold tracking-[0.15em] uppercase">
                      Industries Est.
                    </span>
                  </div>
                </motion.div>

                {/* Year / location tag */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="hidden sm:flex flex-col items-end gap-1"
                >
                  <span className="text-[10px] font-mono tracking-[0.3em] text-slate-600 uppercase">
                    Est. 2026
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.2em] text-slate-700 uppercase">
                    KSA
                  </span>
                </motion.div>
              </div>

              {/* Center — large typographic counter */}
              <div className="flex-1 flex items-center">
                <div className="w-full">
                  {/* Big number */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <span className="text-[clamp(5rem,15vw,12rem)] font-black text-white/[0.04] leading-none font-mono tracking-tighter block">
                      {String(progress).padStart(3, '0')}
                    </span>

                    {/* Overlaid smaller, brighter counter */}
                    <div className="absolute bottom-4 sm:bottom-6 left-1 sm:left-2 flex items-baseline gap-1">
                      <span className="text-3xl sm:text-5xl font-black text-white leading-none font-mono tracking-tight tabular-nums">
                        {String(progress).padStart(3, '0')}
                      </span>
                      <span className="text-base sm:text-xl font-bold text-[#22C55E] font-mono">
                        %
                      </span>
                    </div>
                  </motion.div>

                  {/* Horizontal rule */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-px bg-white/[0.06] origin-left mt-4 mb-5"
                  />

                  {/* Descriptor text row */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-50" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22C55E]" />
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-slate-500 uppercase">
                        Preparing your experience
                      </span>
                    </div>

                    <span
                      className="text-right text-slate-700/60 text-lg sm:text-2xl font-medium leading-none hidden sm:block"
                      dir="rtl"
                      style={{ fontFamily: 'system-ui, sans-serif' }}
                    >
                      البوابة الوسيطة للصناعات
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Bottom row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex items-end justify-between"
              >
                <div className="flex items-center gap-6">
                  {['Riyadh', 'Dammam'].map((city, i) => (
                    <div key={city} className="flex items-center gap-2">
                      <span className="text-[9px] font-mono tracking-[0.25em] text-slate-600 uppercase">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="w-3 h-px bg-white/10" />
                      <span className="text-[10px] font-mono tracking-[0.15em] text-slate-500 uppercase">
                        {city}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono tracking-[0.2em] text-slate-700 uppercase hidden sm:inline">
                    Business Setup · Industrial Consulting
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

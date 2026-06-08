import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      const remaining = 100 - current
      const increment = Math.max(1, Math.floor(Math.random() * (remaining * 0.15 + 2)))
      current += increment
      if (current >= 100) {
        current = 100
        setCount(100)
        clearInterval(interval)
        setTimeout(() => {
          setIsDone(true)
          setTimeout(onComplete, 850)
        }, 300)
      } else {
        setCount(current)
      }
    }, 45)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-full bg-primary-bg z-99999 flex flex-col justify-between p-8 sm:p-12 select-none pointer-events-auto"
        >
          {/* Top Row: Title */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col text-left">
              <span className="text-white font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase">
                The Saudi Gate
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">
                Industries Est.
              </span>
            </div>
            
            <div className="text-[10px] font-mono tracking-widest text-[#22C55E] uppercase font-bold">
              RIYADH / DAMMAM
            </div>
          </div>

          {/* Middle Row: Progress Counter */}
          <div className="flex items-baseline justify-start text-left">
            <span className="text-7xl sm:text-9xl font-black text-white leading-none font-mono tracking-tighter">
              {String(count).padStart(3, '0')}
            </span>
            <span className="text-xl sm:text-3xl font-black text-[#22C55E] ml-2 leading-none font-mono">
              %
            </span>
          </div>

          {/* Bottom Row: Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left border-t border-white/5 pt-6">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              Initializing Digital Core Services...
            </p>
            <p className="text-[10px] font-mono text-[#22C55E] uppercase tracking-widest animate-pulse font-bold">
              SYSTEM ONLINE
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

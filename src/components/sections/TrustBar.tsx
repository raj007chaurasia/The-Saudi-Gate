import React from 'react'
import { Shield, UserCheck, Clock, Handshake } from 'lucide-react'

const TrustBar: React.FC = () => {
  return (
    <section className="bg-linear-to-b from-secondary-bg via-[#040c1b] to-primary-bg py-14 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

        {/* Trust 1 */}
        <div className="flex items-center gap-4 text-left p-4 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-500 group cursor-pointer">
          <div className="w-12 h-12 rounded-xl border border-green-500/15 bg-green-500/5 flex items-center justify-center shrink-0 group-hover:bg-[#22C55E]/15 group-hover:border-[#22C55E]/30 transition-all duration-500">
            <Shield className="w-5.5 h-5.5 text-[#22C55E]" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-sm sm:text-base leading-tight group-hover:text-[#22C55E] transition-colors duration-300">Secure & Reliable</span>
            <span className="text-slate-400 text-xs font-semibold mt-0.5">Process</span>
          </div>
        </div>

        {/* Trust 2 */}
        <div className="flex items-center gap-4 text-left p-4 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-500 group cursor-pointer">
          <div className="w-12 h-12 rounded-xl border border-green-500/15 bg-green-500/5 flex items-center justify-center shrink-0 group-hover:bg-[#22C55E]/15 group-hover:border-[#22C55E]/30 transition-all duration-500">
            <UserCheck className="w-5.5 h-5.5 text-[#22C55E]" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-sm sm:text-base leading-tight group-hover:text-[#22C55E] transition-colors duration-300">Local Experts</span>
            <span className="text-slate-400 text-xs font-semibold mt-0.5">On Ground</span>
          </div>
        </div>

        {/* Trust 3 */}
        <div className="flex items-center gap-4 text-left p-4 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-500 group cursor-pointer">
          <div className="w-12 h-12 rounded-xl border border-green-500/15 bg-green-500/5 flex items-center justify-center shrink-0 group-hover:bg-[#22C55E]/15 group-hover:border-[#22C55E]/30 transition-all duration-500">
            <Clock className="w-5.5 h-5.5 text-[#22C55E]" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-sm sm:text-base leading-tight group-hover:text-[#22C55E] transition-colors duration-300">Quick Turnaround</span>
            <span className="text-slate-400 text-xs font-semibold mt-0.5">Time</span>
          </div>
        </div>

        {/* Trust 4 */}
        <div className="flex items-center gap-4 text-left p-4 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-500 group cursor-pointer">
          <div className="w-12 h-12 rounded-xl border border-green-500/15 bg-green-500/5 flex items-center justify-center shrink-0 group-hover:bg-[#22C55E]/15 group-hover:border-[#22C55E]/30 transition-all duration-500">
            <Handshake className="w-5.5 h-5.5 text-[#22C55E]" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-sm sm:text-base leading-tight group-hover:text-[#22C55E] transition-colors duration-300">Long Term</span>
            <span className="text-slate-400 text-xs font-semibold mt-0.5">Partnership</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default TrustBar

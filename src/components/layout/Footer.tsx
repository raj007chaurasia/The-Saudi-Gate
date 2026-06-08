import React from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight
} from 'lucide-react'

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Setup in Saudi', href: '#setup' },
    { name: 'Contact', href: '#consultation' },
    { name: 'Privacy Policy', href: '#privacy-policy' }
  ]

  const services = [
    { name: 'Business Setup', href: '#services' },
    { name: 'Commercial License', href: '#services' },
    { name: 'Industrial Production', href: '#services' },
    { name: 'MISA License', href: '#services' },
    { name: 'Hybrid Setup', href: '#services' },
    { name: 'SABER, SFDA & Imports', href: '#services' }
  ]

  return (
    <footer className="relative bg-linear-to-b from-primary-bg to-[#01040a] text-white pt-20 pb-8 overflow-hidden border-t border-white/10">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-[#22C55E]/2 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          
          {/* Column 1: Brand Info (Col span 4) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            
            {/* Unified Logo Branding */}
            <a href="#home" className="flex items-center gap-3.5 group">
              <div className="relative flex items-center justify-center w-14 h-14 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/logo.png"
                  alt="The Saudi Gate Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-base tracking-tight leading-tight uppercase">
                  The Saudi Gate
                </span>
                <span className="text-xs text-[#94A3B8] font-semibold tracking-wider leading-none">
                  Industries Est.
                </span>
                <span className="text-[9px] text-[#22C55E] font-medium tracking-normal text-left mt-0.5" dir="rtl">
                  البوابة الوسيطة للصناعات
                </span>
              </div>
            </a>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We are a specialized consulting agency committed to helping corporate entities establish a remarkable presence in Saudi Arabia, fully aligned with Saudi Vision 2030.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="#facebook" 
                className="w-9 h-9 rounded-full border border-white/5 bg-white/2 flex items-center justify-center text-slate-400 hover:text-[#22C55E] hover:border-[#22C55E]/30 hover:bg-[#22C55E]/5 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a 
                href="#twitter" 
                className="w-9 h-9 rounded-full border border-white/5 bg-white/2 flex items-center justify-center text-slate-400 hover:text-[#22C55E] hover:border-[#22C55E]/30 hover:bg-[#22C55E]/5 transition-all duration-300"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="#linkedin" 
                className="w-9 h-9 rounded-full border border-white/5 bg-white/2 flex items-center justify-center text-slate-400 hover:text-[#22C55E] hover:border-[#22C55E]/30 hover:bg-[#22C55E]/5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-5 text-left md:pl-4">
            <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#22C55E] uppercase font-bold">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 text-sm hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-flex items-start gap-2 group font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#22C55E] transition-colors mt-[7px] shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Col span 3) */}
          <div className="lg:col-span-3 space-y-5 text-left">
            <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#22C55E] uppercase font-bold">
              Our Services
            </h4>
            <ul className="space-y-3.5">
              {services.map((svc, idx) => (
                <li key={idx}>
                  <a 
                    href={svc.href} 
                    className="text-slate-400 text-sm hover:text-white hover:translate-x-1.5 transition-all duration-300 inline-flex items-start gap-2 group font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#22C55E] transition-colors mt-[7px] shrink-0" />
                    <span>{svc.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Briefing CTA (Col span 3) */}
          <div className="lg:col-span-3 space-y-6 text-left">
            <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#22C55E] uppercase font-bold">
              Contact Us
            </h4>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm font-medium">
                <Phone className="w-4.5 h-4.5 text-[#22C55E] shrink-0 mt-0.5" />
                <a href="tel:+966506946722" className="hover:text-white transition-colors">
                  +966 50 694 6722
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm font-medium">
                <Mail className="w-4.5 h-4.5 text-[#22C55E] shrink-0 mt-0.5" />
                <a href="mailto:info@thesaudigate.com" className="hover:text-white transition-colors">
                  info@thesaudigate.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm font-medium leading-relaxed">
                <MapPin className="w-4.5 h-4.5 text-[#22C55E] shrink-0 mt-0.5" />
                <span>
                  2341 King Abdulaziz Rd, Dammam, Saudi Arabia
                </span>
              </li>
            </ul>

            {/* Connect button */}
            <div className="pt-2">
              <a 
                href="#consultation"
                className="group relative inline-flex items-center justify-center w-full rounded-full text-white uppercase font-bold text-[10px] tracking-widest h-11 border border-white/10 hover:border-[#22C55E]/30 bg-white/2 hover:bg-[#22C55E]/5 transition-all duration-300"
              >
                <span>Connect with us</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#22C55E] ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="border-t border-white/5 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-medium">
              Copyright © 2026 The Saudi Gate Industries Est. | Powered by The Saudi Gate Industries Est.
            </p>
            <span className="hidden sm:inline text-white/10 text-xs">|</span>
            <p className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-medium">
              Designed & Developed by{' '}
              <a 
                href="https://adryter.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#22C55E] hover:text-[#10B981] transition-colors font-bold uppercase"
              >
                adryter
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy-policy" className="text-[10px] font-mono tracking-wider text-slate-500 hover:text-white uppercase font-medium transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/10 text-xs select-none">|</span>
            <a href="#terms" className="text-[10px] font-mono tracking-wider text-slate-500 hover:text-white uppercase font-medium transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer

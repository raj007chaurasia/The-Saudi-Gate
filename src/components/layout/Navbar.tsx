import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Magnetic } from '@/components/ui/magnetic'
import { TextScramble } from '@/components/ui/text-scramble'

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)



  // Listen to window scroll to toggle sticky styling
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Setup in Saudi', href: '#setup' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-500 ${isSticky ? 'pt-2' : 'pt-0'}`}>
        <div
          className={`mx-auto max-w-[1440px] px-6 sm:px-10 transition-all duration-500 ${isSticky
              ? 'glass-navbar-sticky rounded-b-2xl py-3 border-t-0 shadow-2xl'
              : 'glass-navbar sm:rounded-3xl py-5 sm:mt-6 border shadow-xl'
            }`}
          style={{ width: 'calc(100% - 2rem)' }}
        >
          <div className="flex items-center justify-between gap-4">

            {/* Logo Area */}
            <a
              href="#home"
              className="flex items-center gap-3.5 focus:outline-none focus:ring-2 focus:ring-[#22C55E] rounded-lg p-1 group"
              onClick={() => setActiveLink('Home')}
            >
              <div className="relative flex items-center justify-center w-12 h-12 bg-white/5 rounded-xl border border-white/10 group-hover:border-green-500/30 transition-all duration-500">
                <svg
                  viewBox="0 0 100 100"
                  className="w-8 h-8 text-[#22C55E] drop-shadow-[0_0_8px_rgba(34,197,94,0.5)] fill-none stroke-current"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M25 90 C 25 45, 75 45, 75 90" stroke="url(#logo-grad-green)" />
                  <path d="M38 90 C 38 60, 62 60, 62 90" stroke="url(#logo-grad-green)" strokeWidth="5" />
                  <path d="M50 48 Q 50 15, 20 25" />
                  <path d="M50 48 Q 50 10, 50 5" />
                  <path d="M50 48 Q 50 15, 80 25" />
                  <path d="M50 48 Q 45 28, 28 35" />
                  <path d="M50 48 Q 55 28, 72 35" />
                  <path d="M50 90 L 50 48" strokeWidth="8" />
                  <defs>
                    <linearGradient id="logo-grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22C55E" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                </svg>
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

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link-underline transition-all duration-300 ${activeLink === link.name ? 'active' : ''
                    }`}
                  onClick={() => setActiveLink(link.name)}
                >
                  <TextScramble text={link.name} />
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Magnetic>
                <a
                  href="#consultation"
                  className="btn-premium-v2"
                >
                  <span>Free Consultation</span>
                </a>
              </Magnetic>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
                aria-label="Toggle Main Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>


          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-30 flex flex-col justify-between pt-28 pb-8 px-6 glass-dropdown lg:hidden animate-fade-up overflow-y-auto"
        >
          <div className="absolute top-20 right-0 w-80 h-80 bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col gap-5 w-full mt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-white border-b border-white/5 pb-2 hover:text-[#22C55E] transition-colors"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setActiveLink(link.name)
                }}
              >
                <TextScramble text={link.name} />
              </a>
            ))}
          </div>

          {/* Sticky Bottom Mobile CTA */}
          <div className="w-full mt-8 pt-4 border-t border-white/10 z-10">
            <a
              href="#consultation"
              className="btn-premium-v2 w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Free Consultation</span>
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar

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
              <div className="relative flex items-center justify-center w-16 h-16 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
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

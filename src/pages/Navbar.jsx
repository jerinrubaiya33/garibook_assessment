import { useEffect, useState } from 'react'
import { User, Languages, ChevronDown, Download, Check } from 'lucide-react'
import roadSvg from '../assets/road-svg.svg'

const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Earn With Garibook', href: '#earn-with-garibook' },
  { label: 'Garibook Business', href: '#garibook-business' },
  { label: 'Garibook Club', href: '#garibook-club' },
  { label: 'Campaign', href: '#campaign' },
  { label: 'Blogs', href: '#blogs' },
]

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3 shrink-0 group focus:outline-none whitespace-nowrap">
      <img
        src={roadSvg}
        alt="Garibook Logo"
        className="h-10 xl:h-12 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex flex-col">
        <span className="text-2xl xl:text-3xl font-bold leading-none tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-[#0d6efd]">
          garibook
        </span>
      </div>
    </a>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedLang, setSelectedLang] = useState('English')
  const [isLangOpen, setIsLangOpen] = useState(false)

  // Dynamically inject Space Grotesk if not present
  useEffect(() => {
    if (!document.getElementById('space-grotesk-link')) {
      const fontLink = document.createElement('link')
      fontLink.id = 'space-grotesk-link'
      fontLink.rel = 'stylesheet'
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
      document.head.appendChild(fontLink)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (label) => {
    setActiveLink(label)
    setIsOpen(false)
  }

  const handleLanguageSelect = (lang) => {
    setSelectedLang(lang)
    setIsLangOpen(false)
  }

  return (
    <header
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white transition-all duration-300 ease-out ${isScrolled ? 'py-4 backdrop-blur-md bg-white shadow-xs' : 'py-6'
        }`}
    >
      <div className="w-full max-w-[1536px]  mx-auto px-5 sm:px-7 xl:px-8 flex items-center justify-between flex-nowrap gap-5 xl:gap-7">

        {/* Logo */}
        <Logo />

        {/* Navigation Bar */}
        <nav className="hidden xl:flex items-center flex-nowrap gap-0.5  2xl:gap-2 bg-[#0d6efd] py-3.5 px-6 rounded-full shadow-md shrink-0">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeLink === label

            return (
              <a
                key={label}
                href={href}
                onClick={() => handleLinkClick(label)}
                className={`relative group px-3 2xl:px-4 py-4 text-lg 2xl:text-lg whitespace-nowrap shrink-0 transition-colors duration-200 text-white flex flex-col items-center justify-center ${isActive ? 'font-normal' : 'font-semibold hover:text-white/90'
                  }`}
              >
                <span>{label}</span>

                <svg
                  className={`absolute bottom-0 w-3/4 h-2 pointer-events-none transition-all duration-300 ease-out origin-center ${isActive
                      ? 'opacity-100 scale-x-100'
                      : 'opacity-0 scale-x-50 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  viewBox="0 0 100 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 5 12 Q 50 2 95 12"
                    stroke="#fdd300"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="opacity-90"
                  />
                </svg>
              </a>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden xl:flex items-center flex-nowrap gap-4 2xl:gap-6 shrink-0 whitespace-nowrap">

          {/* Download App Button (Yellow) */}
          <button
            type="button"
            className="bg-[#fdd300] hover:bg-[#e6c003] text-slate-900 font-bold px-5 2xl:px-6 py-2.5 rounded-full shadow-xs 
            hover:shadow-md transition-all duration-200 flex items-center gap-2 text-base 2xl:text-lg active:scale-95 shrink-0"
          >
            <Download size={20} className="stroke-[2.5]" />
            <span>Download App</span>
          </button>

          {/* Sign In Button */}
          <button
            type="button"
            className="relative text-slate-800 hover:text-[#0d6efd] font-semibold text-base 2xl:text-lg flex items-center gap-2 py-1 transition-colors duration-200 group shrink-0"
          >
            <User size={20} className="text-[#0d6efd] transition-transform duration-300 group-hover:scale-110" />
            <span>Sign in</span>
            <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#0d6efd] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
          </button>

          {/* Language Dropdown */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="relative text-slate-800 hover:text-[#0d6efd] font-semibold text-base 2xl:text-lg flex items-center gap-2 py-1 transition-colors duration-200 group"
            >
              <Languages size={20} className="text-[#0d6efd] transition-transform duration-300 group-hover:scale-110" />
              <span>{selectedLang}</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 text-[#0d6efd] ${isLangOpen ? 'rotate-180' : ''
                  }`}
              />
              <span
                className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#0d6efd] origin-left transition-transform duration-300 ease-out rounded-full ${isLangOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
              />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2.5 w-40 bg-white border border-slate-200/80 rounded-xl shadow-xl py-1.5 z-50 overflow-hidden transform transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                <button
                  type="button"
                  onClick={() => handleLanguageSelect('English')}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-base font-semibold transition-colors ${selectedLang === 'English'
                      ? 'text-[#0d6efd] bg-blue-50/80'
                      : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      EN
                    </span>
                    <span>English</span>
                  </div>
                  {selectedLang === 'English' && <Check size={16} className="text-[#0d6efd]" />}
                </button>

                <button
                  type="button"
                  onClick={() => handleLanguageSelect('বাংলা')}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-base font-semibold transition-colors ${selectedLang === 'বাংলা'
                      ? 'text-[#0d6efd] bg-blue-50/80'
                      : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      BN
                    </span>
                    <span>বাংলা</span>
                  </div>
                  {selectedLang === 'বাংলা' && <Check size={16} className="text-[#0d6efd]" />}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile / Tablet Hamburger Toggle */}
        <button
          type="button"
          className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100/80 transition-colors shrink-0 mr-15"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-1 w-full bg-[#0d6efd] rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-1 w-full bg-[#0d6efd] rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`h-1 w-full bg-[#0d6efd] rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-md -ml-5 border-b border-slate-200 px-7 py-5 space-y-4 shadow-xl mt-3.5 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-1.5">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => handleLinkClick(label)}
                className={`px-4.5 py-3 rounded-lg text-lg font-semibold whitespace-nowrap transition-colors ${activeLink === label
                    ? 'bg-[#0d6efd] text-white'
                    : 'text-slate-800 hover:bg-slate-100'
                  }`}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="pt-4 px-10 -ml-8 border-t border-slate-100 flex flex-col gap-3">
            <button
              type="button"
              className="w-full py-3 bg-[#fdd300] hover:bg-amber-500 text-slate-900 font-bold text-lg rounded-xl
              shadow-xs flex items-center justify-center gap-2 active:scale-98 transition-transform"
            >
              <Download size={20} className="stroke-[2.5]" />
              <span>Download App</span>
            </button>

            <button className="w-full py-2.5 text-[#0d6efd] font-bold text-lg flex items-center justify-center gap-2">
              <User size={20} />
              Sign in
            </button>

            <div className="flex rounded-lg overflow-hidden border border-slate-200 p-1 bg-slate-50">
              <button
                type="button"
                onClick={() => handleLanguageSelect("English")}
                className={`flex-1 py-2.5 text-center font-semibold text-base rounded-md transition-all ${selectedLang === "English"
                    ? "bg-[#0d6efd] text-white shadow-xs"
                    : "text-slate-600"
                  }`}
              >
                English
              </button>

              <button
                type="button"
                onClick={() => handleLanguageSelect("বাংলা")}
                className={`flex-1 py-2.5 text-center font-semibold text-base rounded-md transition-all ${selectedLang === "বাংলা"
                    ? "bg-[#0d6efd] text-white shadow-xs"
                    : "text-slate-600"
                  }`}
              >
                বাংলা
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
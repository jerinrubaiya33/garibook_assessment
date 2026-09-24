import card1 from "../assets/city.png";
import card2 from "../assets/drive.png";
import card3 from "../assets/travel.png";
import card4 from "../assets/hour.png";

// Placeholder image imports for the other tabs
import businessImg from "../assets/business.png"; 
import clubImg from "../assets/club.png"; 
import vmsImg from "../assets/vms.png"; 

import { useState, useRef, useLayoutEffect } from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const CATEGORIES = [
  { id: 'Rides', label: 'Rides' },
  { id: 'Garibook Business', label: 'Garibook Business' },
  { id: 'Garibook Club', label: 'Garibook Club' },
  { id: 'VMS', label: 'VMS' },
];

const CATEGORY_CONTENT = {
  'Garibook Business': {
    title: 'Modern Car Rentals for Business',
    description: 'Simplify your corporate transportation, ensure on-time team mobility, and gain control with our VMS.',
    buttonText: 'Learn More',
    image: businessImg,
    imageLeft: true,
  },
  'Garibook Club': {
    title: 'Turn Your Car into Earnings with Garibook Club',
    description: 'Garibook Club is more than just a community. Join a vibrant network of car enthusiasts, all fueled by the same passion: the open road and the thrill of making money doing what they love.',
    buttonText: 'Join the Club',
    image: clubImg,
    imageLeft: true,
  },
  'VMS': {
    title: 'Vehicle Management System - VMS',
    description: 'Just like Garibook Business makes traveling easy for your team, our Vehicle Management System (VMS) helps you take care of your own cars. VMS is a great tool that works with Garibook Business to make sure your vehicles are used the best way possible.',
    buttonText: 'Explore VMS',
    image: vmsImg,
    imageLeft: true,
  },
};

export default function Service() {
  const [activeCategory, setActiveCategory] = useState('Rides');

  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  
  // Desktop Refs
  const canvasRef = useRef(null);
  const roadPathRef = useRef(null);
  const carRef = useRef(null);

  // Mobile Refs
  const mobileRoadPathRef = useRef(null);
  const mobileRoadMaskRef = useRef(null);

  useLayoutEffect(() => {
    if (activeCategory !== 'Rides') return;

    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        // --- DESKTOP GSAP ANIMATION (Car follows path) ---
        gsap.to(carRef.current, {
          motionPath: {
            path: roadPathRef.current,
            align: roadPathRef.current,
            start: 0.1,
            alignOrigin: [0.15, 0.76],
          },
          ease: 'none',
          scrollTrigger: {
            trigger: pinRef.current,
            start: () => {
              const nav = document.querySelector('header');
              const navH = nav
                ? nav.offsetHeight - (window.scrollY <= 10 ? 16 : 0)
                : 120;
              const blockH = pinRef.current ? pinRef.current.offsetHeight : 0;
              const lowest = blockH
                ? window.innerHeight - blockH - 16
                : navH + 40;
              return 'top top+=' + Math.max(navH, Math.round(lowest));
            },
            end: () => '+=' + Math.round(window.innerHeight * 1.6),
            pin: true,
            anticipatePin: 1,
            scrub: 1,
          },
        });
      } else {
        // --- MOBILE GSAP ANIMATION (Mask grows to reveal static dashes) ---
        const maskEl = mobileRoadMaskRef.current;
        const pathEl = mobileRoadPathRef.current;
        if (maskEl && pathEl) {
          const pathLength = maskEl.getTotalLength();
          
          // Hide the mask completely on initial load
          gsap.set(maskEl, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });

          // Unroll/grow the mask smoothly on scroll
          gsap.to(maskEl, {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: pathEl,
              start: 'top center+=150',
              end: 'bottom center',
              scrub: 1,
            },
          });
        }
      }
    }, sectionRef);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    window.addEventListener('resize', refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener('load', refresh);
      window.removeEventListener('resize', refresh);
      ctx.revert();
    };
  }, [activeCategory]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentContent = CATEGORY_CONTENT[activeCategory];

  return (
    <div ref={sectionRef} className="min-h-screen bg-white -mt-10 font-sans text-slate-900 flex flex-col justify-between relative selection:bg-[#0d6efd] selection:text-white p-4 md:p-8 lg:p-12">
      <main className="max-w-7xl mx-auto w-full flex-grow">

        {/* Top Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-24">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5 text-slate-900">
            Our Services
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  style={{
                    backgroundColor: isActive ? '#0d6efd' : '#f1f5f9',
                    color: isActive ? '#ffffff' : '#334155',
                  }}
                  className="px-5 py-3 lg:px-8 lg:py-4.5 rounded-full mt-2 lg:mt-6 font-semibold text-sm lg:text-lg transition-all shadow-sm hover:opacity-95"
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Content Area */}
        {activeCategory === 'Rides' ? (
          /* Rides View */
          <div ref={pinRef}>
            <div className="mb-8 lg:mb-20 max-w-xl">
              <h2 className="text-2xl lg:text-5xl ml-2 lg:ml-10 font-extrabold text-slate-900 tracking-tight">
                Every Ride One Platform
              </h2>
            </div>

            {/* ================= DESKTOP VIEW (HORIZONTAL GSAP CANVAS) ================= */}
            <div className="hidden lg:block">
              <div ref={canvasRef} className="relative w-full max-w-[1000px] mx-auto aspect-[1000/520] my-4 select-none">
                <svg
                  className="w-full h-full absolute inset-0 overflow-visible"
                  viewBox="0 0 1000 520"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M 120 180 L 480 180 C 780 180 880 220 880 320 C 880 420 780 460 480 460 L 120 460"
                    ref={roadPathRef}
                    stroke="#fdd300"
                    strokeWidth="10"
                    strokeDasharray="20 15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <circle cx="120" cy="180" r="13" fill="#fdd300" stroke="#ffffff" strokeWidth="3" />
                  <circle cx="480" cy="180" r="13" fill="#fdd300" stroke="#ffffff" strokeWidth="3" />
                  <circle cx="880" cy="320" r="13" fill="#fdd300" stroke="#ffffff" strokeWidth="3" />
                  <circle cx="120" cy="460" r="13" fill="#fdd300" stroke="#ffffff" strokeWidth="3" />

                  <g ref={carRef} transform="translate(290, 150)">
                    <path d="M 12 18 L 22 8 L 42 8 L 52 18 Z" fill="#ffffff" stroke="#d97706" strokeWidth="2" />
                    <path d="M 2 18 C 2 15 5 15 8 15 L 56 15 C 60 15 62 18 62 22 L 62 28 C 62 30 60 31 58 31 L 6 31 C 3 31 2 29 2 26 Z" fill="#fdd300" stroke="#b45309" strokeWidth="2" />
                    <circle cx="16" cy="31" r="6" fill="#1e293b" />
                    <circle cx="16" cy="31" r="2.5" fill="#ffffff" />
                    <circle cx="48" cy="31" r="6" fill="#1e293b" />
                    <circle cx="48" cy="31" r="2.5" fill="#ffffff" />
                  </g>
                </svg>

                {/* Speech Bubble Cards */}
                <div className="absolute left-[14.5%] bottom-[68%] -translate-x-full w-[24%] z-10 pointer-events-auto">
                  <div className="relative bg-[#0d6efd] rounded-2xl p-3 sm:p-4 md:p-5 text-white shadow-xl border border-blue-400/30 flex flex-col items-start">
                    <img src={card1} alt="Intercity icon" className="w-12 h-12 sm:w-14 sm:h-14 object-contain brightness-0 invert mb-2" />
                    <h3 className="font-bold text-xs sm:text-sm md:text-lg mb-0.5 leading-snug">Intercity Car Rental</h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-blue-100 leading-relaxed font-normal">Travel between cities with comfort and confidence.</p>
                    <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#0d6efd]" />
                  </div>
                </div>

                <div className="absolute left-[48%] bottom-[68%] -translate-x-1/2 w-[24%] z-10 pointer-events-auto">
                  <div className="relative bg-[#0d6efd] rounded-2xl p-3 sm:p-4 md:p-5 text-white shadow-xl border border-blue-400/30 flex flex-col items-start">
                    <img src={card2} alt="Ride share icon" className="w-12 h-12 sm:w-14 sm:h-14 object-contain brightness-0 invert mb-2" />
                    <h3 className="font-bold text-xs sm:text-sm md:text-lg mb-0.5 leading-snug">Ride share</h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-blue-100 leading-relaxed font-normal">Go anywhere in the city, quickly and easily.</p>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#0d6efd]" />
                  </div>
                </div>

                <div className="absolute left-[85.5%] bottom-[42%] w-[26%] z-10 pointer-events-auto">
                  <div className="relative bg-[#0d6efd] rounded-2xl p-3 sm:p-4 md:p-5 text-white shadow-xl border border-blue-400/30 flex flex-col items-start">
                    <img src={card3} alt="Airport icon" className="w-12 h-12 sm:w-14 sm:h-14 object-contain brightness-0 invert mb-2" />
                    <h3 className="font-bold text-xs sm:text-sm md:text-lg mb-0.5 leading-snug">Airport Rental</h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-blue-100 leading-relaxed font-normal">Whether you’re flying abroad or returning home, enjoy a comfortable and worry-free airport journey.</p>
                    <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#0d6efd]" />
                  </div>
                </div>

                <div className="absolute left-[12%] bottom-[16%] -translate-x-1/2 w-[24%] z-10 pointer-events-auto">
                  <div className="relative bg-[#0d6efd] rounded-2xl p-3 sm:p-4 md:p-5 text-white shadow-xl border border-blue-400/30 flex flex-col items-start">
                    <img src={card4} alt="Hourly icon" className="w-12 h-12 sm:w-14 sm:h-14 object-contain brightness-0 invert mb-2" />
                    <h3 className="font-bold text-xs sm:text-sm md:text-lg mb-0.5 leading-snug">Hourly Rental</h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-blue-100 leading-relaxed font-normal">Rent a car by the hour, tailored to your needs.</p>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#0d6efd]" />
                  </div>
                </div>
              </div>
            </div>

            {/* ================= MOBILE & TABLET VIEW (MASKED GROWING DASHED ROAD) ================= */}
            <div className="block lg:hidden relative w-full my-6 px-2">
              <div className="relative w-full max-w-md mx-auto aspect-[380/920] select-none">
                <svg
                  className="w-full h-full absolute inset-0 overflow-visible"
                  viewBox="0 0 380 920"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <mask id="mobileRoadMask">
                      <path
                        d="M 90 70 C 260 170, 320 250, 280 340 C 220 450, 70 520, 110 630 C 150 720, 280 800, 240 880"
                        ref={mobileRoadMaskRef}
                        stroke="#ffffff"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </mask>
                  </defs>

                  {/* Dashed Road Path controlled by the mask (Grows organically without moving/sliding dashes) */}
                  <path
                    d="M 90 70 C 260 170, 320 250, 280 340 C 220 450, 70 520, 110 630 C 150 720, 280 800, 240 880"
                    ref={mobileRoadPathRef}
                    stroke="#fdd300"
                    strokeWidth="10"
                    strokeDasharray="20 15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    mask="url(#mobileRoadMask)"
                  />

                  <circle cx="90" cy="70" r="8" fill="#fdd300" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="280" cy="340" r="8" fill="#fdd300" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="110" cy="630" r="8" fill="#fdd300" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="240" cy="880" r="8" fill="#fdd300" stroke="#ffffff" strokeWidth="2" />
                </svg>

                {/* Card 1: Intercity */}
                <div className="absolute top-[0%] left-[2%] w-[58%] z-10">
                  <div className="relative bg-[#0d6efd] rounded-2xl p-3.5 text-white shadow-lg border border-blue-400/30 flex flex-col items-start">
                    <img src={card1} alt="Intercity icon" className="w-10 h-10 object-contain brightness-0 invert mb-1.5" />
                    <h3 className="font-bold text-sm mb-0.5 leading-tight">Intercity Car Rental</h3>
                    <p className="text-[11px] text-blue-100 leading-snug">Travel between cities with comfort and confidence.</p>
                    <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#0d6efd]" />
                  </div>
                </div>

                {/* Card 2: Ride share */}
                <div className="absolute top-[28%] right-[2%] w-[58%] z-10">
                  <div className="relative bg-[#0d6efd] rounded-2xl p-3.5 text-white shadow-lg border border-blue-400/30 flex flex-col items-start">
                    <img src={card2} alt="Ride share icon" className="w-10 h-10 object-contain brightness-0 invert mb-1.5" />
                    <h3 className="font-bold text-sm mb-0.5 leading-tight">Ride share</h3>
                    <p className="text-[11px] text-blue-100 leading-snug">Go anywhere in the city, quickly and easily.</p>
                    <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#0d6efd]" />
                  </div>
                </div>

                {/* Card 3: Hourly Rental */}
                <div className="absolute top-[58%] left-[2%] w-[58%] z-10">
                  <div className="relative bg-[#0d6efd] rounded-2xl p-3.5 text-white shadow-lg border border-blue-400/30 flex flex-col items-start">
                    <img src={card4} alt="Hourly icon" className="w-10 h-10 object-contain brightness-0 invert mb-1.5" />
                    <h3 className="font-bold text-sm mb-0.5 leading-tight">Hourly Rental</h3>
                    <p className="text-[11px] text-blue-100 leading-snug">Rent a car by the hour, tailored to your needs.</p>
                    <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#0d6efd]" />
                  </div>
                </div>

                {/* Card 4: Airport Rental */}
                <div className="absolute top-[83%] right-[2%] w-[60%] z-10">
                  <div className="relative bg-[#0d6efd] rounded-2xl p-3.5 text-white shadow-lg border border-blue-400/30 flex flex-col items-start">
                    <img src={card3} alt="Airport icon" className="w-10 h-10 object-contain brightness-0 invert mb-1.5" />
                    <h3 className="font-bold text-sm mb-0.5 leading-tight">Airport Rental</h3>
                    <p className="text-[11px] text-blue-100 leading-snug">Enjoy a comfortable and worry-free airport journey.</p>
                    <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#0d6efd]" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* Garibook Business, Garibook Club, & VMS Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-0 -mt-8 lg:-mt-20 my-auto">
            {/* Image Column */}
            <div className={`w-full flex justify-center ${currentContent?.imageLeft ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
              <img
                src={currentContent?.image}
                alt={currentContent?.title}
                className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto object-contain bg-transparent border-none"
              />
            </div>

            {/* Content Column */}
            <div className={`flex flex-col items-start ${currentContent?.imageLeft ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
              <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 md:mb-6">
                {currentContent?.title}
              </h2>
              <p className="text-slate-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                {currentContent?.description}
              </p>
              <button className="bg-[#0d6efd] hover:bg-blue-700 text-white font-semibold px-6 py-3 md:px-8 md:py-3.5 rounded-full shadow-md transition-all text-sm md:text-base">
                {currentContent?.buttonText}
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{ backgroundColor: '#fdd300' }}
          className="w-10 h-10 md:w-12 md:h-12 text-white rounded-2xl shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        >
          <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button
          aria-label="Support chat"
          style={{ backgroundColor: '#0d6efd' }}
          className="w-12 h-12 md:w-14 md:h-14 text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 border-2 border-white"
        >
          <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}
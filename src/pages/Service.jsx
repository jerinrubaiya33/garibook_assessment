import card1 from "../assets/city.png";
import card2 from "../assets/drive.png";
import card3 from "../assets/travel.png";
import card4 from "../assets/hour.png";

// Placeholder image imports for the other tabs (replace with your actual asset paths)
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
    imageLeft: true, // Left image (aligned with Club and VMS)
  },
  'Garibook Club': {
    title: 'Turn Your Car into Earnings with Garibook Club',
    description: 'Garibook Club is more than just a community. Join a vibrant network of car enthusiasts, all fueled by the same passion: the open road and the thrill of making money doing what they love.',
    buttonText: 'Join the Club',
    image: clubImg,
    imageLeft: true, // Left image
  },
  'VMS': {
    title: 'Vehicle Management System - VMS',
    description: 'Just like Garibook Business makes traveling easy for your team, our Vehicle Management System (VMS) helps you take care of your own cars. VMS is a great tool that works with Garibook Business to make sure your vehicles are used the best way possible.',
    buttonText: 'Explore VMS',
    image: vmsImg,
    imageLeft: true, // Left image
  },
};

export default function Service() {
  const [activeCategory, setActiveCategory] = useState('Rides');

  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const canvasRef = useRef(null);
  const roadPathRef = useRef(null);
  const carRef = useRef(null);

  // GSAP animation runs only when 'Rides' is active
  useLayoutEffect(() => {
    if (activeCategory !== 'Rides') return;

    const ctx = gsap.context(() => {
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
    }, sectionRef);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener('load', refresh);
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
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
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
                  className="px-8 py-4.5 rounded-full mt-6 font-semibold text-lg transition-all shadow-sm hover:opacity-95"
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Content Area */}
        {activeCategory === 'Rides' ? (
          /* Rides View (GSAP Canvas Section) */
          <div ref={pinRef}>
            <div className="mb-20 max-w-xl">
              <h2 className="text-2xl md:text-5xl ml-10 font-extrabold text-slate-900 tracking-tight">
                Every Ride One Platform
              </h2>
            </div>

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
        ) : (
          /* Garibook Business, Garibook Club, & VMS Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-0 -mt-20 my-auto">
            {/* Image Column */}
            <div className={`w-full flex justify-center ${currentContent?.imageLeft ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
              <img
                src={currentContent?.image}
                alt={currentContent?.title}
                className="w-full max-w-lg h-auto object-contain bg-transparent border-none"
              />
            </div>

            {/* Content Column */}
            <div className={`flex flex-col items-start ${currentContent?.imageLeft ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                {currentContent?.title}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                {currentContent?.description}
              </p>
              <button className="bg-[#0d6efd] hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-md transition-all">
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
          className="w-12 h-12 text-white rounded-2xl shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
        <button
          aria-label="Support chat"
          style={{ backgroundColor: '#0d6efd' }}
          className="w-14 h-14 text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 border-2 border-white"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
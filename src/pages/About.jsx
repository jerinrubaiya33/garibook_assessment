import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const stats = [
    { value: '300,000+', label: 'Trip Requests' },
    { value: '850,000+', label: 'Total Customers' },
    { value: '35,000+', label: 'Active Drivers' },
    { value: '64', label: 'Districts Covered' },
  ];

  const sectionRef = useRef(null);
  const roadRef = useRef(null);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const road = roadRef.current;
      const cards = cardRefs.current.filter(Boolean);

      // --- 1. Prepare the yellow "road" line (dashed path revealed by a mask) ---
      const drawLength = road.getTotalLength();
      gsap.set(road, {
        strokeDasharray: drawLength,
        strokeDashoffset: drawLength,
      });

      // --- 2. Cards start hidden, offset in the direction they slide from ---
      const enterFrom = [90, -90, 0, 90]; // right, left, bottom, right
      gsap.set(cards, { opacity: 0, scale: 0.8, y: 40 });
      cards.forEach((card, i) => gsap.set(card, { x: enterFrom[i] ?? 90 }));

      // --- 3. Scroll-scrubbed timeline: starts the moment the section enters
      // from the bottom of the viewport. Scrolling down draws the road top to
      // bottom and brings the cards in one by one; scrolling up unwinds it
      // one by one (cards vanish, then the road retracts) ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'top 15%',
          scrub: 1,
        },
      });

      tl.to(road, {
        strokeDashoffset: 0,
        duration: 1.6,
        ease: 'power1.inOut',
      }).to(
        cards,
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.3,
          ease: 'back.out(1.5)',
        },
        '-=0.4' // cards start slightly before the road finishes drawing
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-white min-h-screen lg:-mt-65 mt-25 text-slate-900 font-sans px-4 sm:px-6 py-12 lg:py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side: Title */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-4 text-center lg:text-left">
            From Everyday Rides to Meaningful Journeys
          </h1>
        </div>

        {/* Right Side: Staggered Layout */}
        <div ref={sectionRef} className="flex flex-col space-y-4 relative z-0">
          {/* Dashed Curved Line - Visible on all screens now */}
          <svg
            className="absolute inset-0 w-full h-full -z-10 pointer-events-none block"
            viewBox="0 0 500 650"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Mask that "draws" the dashed road line on scroll */}
              <mask
                id="aboutRoadMask"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="500"
                height="650"
              >
                <path
                  ref={roadRef}
                  d="M 380 65 C 200 130, 80 150, 120 270 C 150 390, 260 350, 275 450 C 290 520, 370 510, 320 580"
                  stroke="#FFFFFF"
                  strokeWidth="30"
                  strokeLinecap="round"
                  fill="none"
                />
              </mask>
            </defs>
            <path
              d="M 380 65 C 200 130, 80 150, 120 270 C 150 390, 260 350, 275 450 C 290 520, 370 510, 320 580"
              stroke="#FACC15"
              strokeWidth="10"
              strokeDasharray="12 16"
              strokeLinecap="round"
              mask="url(#aboutRoadMask)"
            />
          </svg>

          {stats.map((stat, index) => {
            // Maintains desktop zig-zag layout flow while scaling down widths and margins smoothly on mobile/tablet
            const marginClasses = [
              'ml-auto mr-0 w-52 sm:w-64',    // Card 1: Far Right
              'ml-0 mr-auto w-52 sm:w-64',    // Card 2: Far Left
              'mx-auto w-52 sm:w-64',         // Card 3: Middle
              'ml-auto mr-8 sm:mr-12 w-52 sm:w-64', // Card 4: Bottom Right
            ];

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`p-4 sm:p-6 bg-blue-600 rounded-2xl shadow-md text-center text-white relative z-10 ${marginClasses[index]}`}
              >
                <span className="block text-xl sm:text-2xl md:text-3xl font-bold">
                  {stat.value}
                </span>
                <span className="block text-xs sm:text-sm text-blue-100 mt-1">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default About;
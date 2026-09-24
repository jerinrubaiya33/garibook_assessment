import { Download } from 'lucide-react';
import driverImage from '../assets/driver_app.jpg';

const DriverPoster = () => {
  return (
    <div className="min-h-screen  w-full bg-white flex items-center justify-center p-6">
      {/* EXACT original desktop grid container classes preserved */}
      <div className="max-w-6xl w-full -mt-50 grid grid-cols-1 md:grid-cols-2 gap-x12 items-center relative">
        
        {/* LEFT COLUMN: Titles and Button */}
        {/* order-2 on mobile pushes it below the image; md:order-none keeps desktop default */}
        <div className="flex flex-col items-start justify-center space-y-6 z-10 relative order-2 md:order-none">
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
              0% Commission
            </h1>
            <h2 className="text-5xl sm:text-6xl font-black tracking-tight" style={{ color: '#0d6efd' }}>
              100% Freedom
            </h2>
          </div>

          <button 
            className="px-8 py-4 font-bold text-lg rounded-xl flex items-center gap-3 transition-opacity hover:opacity-90 shadow-md text-slate-900"
            style={{ backgroundColor: '#fdd300' }}
          >
            <Download className="w-6 h-6" />
            Download Smart Driver App
          </button>
        </div>

        {/* RIGHT COLUMN: Image with Curved Dashed Arrows */}
        {/* order-1 on mobile brings it to the top; md:order-none keeps desktop default */}
        <div className="flex justify-center items-center relative order-1 md:order-none">
          
          <svg
            className="hidden md:block absolute -left-40 top-1/2 -translate-y-1/2 w-[340px] h-[260px] pointer-events-none z-20 overflow-visible"
            viewBox="0 0 340 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* --- TOP ARROW LINE --- */}
            <path
              d="M 320 120 Q 180 50 30 62"
              stroke="#0d6efd"
              strokeWidth="3.5"
              strokeDasharray="7 6"
              strokeLinecap="round"
              fill="none"
            />
            {/* TOP ARROWHEAD (<) */}
            <path
              d="M 42 52 L 30 62 L 40 73"
              stroke="#0d6efd"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* --- BOTTOM ARROW LINE --- */}
            <path
              d="M 320 140 Q 180 210 30 142"
              stroke="#0d6efd"
              strokeWidth="3.5"
              strokeDasharray="7 6"
              strokeLinecap="round"
              fill="none"
            />
            {/* BOTTOM ARROWHEAD (<) */}
            <path
              d="M 42 131 L 30 142 L 40 153"
              stroke="#0d6efd"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

          {/* Driver App Image (Bigger on mobile via max-w constraints, original desktop class retained via md:max-h-[850px]) */}
          <img
            src={driverImage}
            alt="Smart Driver"
            className="max-w-[340px] sm:max-w-[420px] md:max-h-[850px] w-full h-auto object-cover relative z-10"
          />
        </div>

      </div>
    </div>
  );
};

export default DriverPoster;
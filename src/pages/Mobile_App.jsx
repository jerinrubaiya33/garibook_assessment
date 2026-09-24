import React, { useState } from 'react';
import { 
  Apple, 
  Play, 
  QrCode, 
  Smartphone, 
  Check, 
  Copy 
} from 'lucide-react';
import DriverPoster from '../components/DriverPoster';

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#fdd300] selection:text-slate-900 flex flex-col justify-between overflow-x-hidden">
      
      {/* MAIN HERO SECTION */}
      <main className="w-full max-w-6xl mx-auto px-6 py-6 md:py-12 flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* LEFT COLUMN: Angled Mobile Phone Mockup & Backdrop */}
        {}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center py-6 my-auto">
          
          {/* Solid Yellow Backdrop Circle */}
          <div 
            className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] rounded-full bg-[#fdd300] transition-colors duration-500 shadow-xl opacity-95 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" 
          />

          {/* Phone Frame Wrapper */}
          <div className="relative z-10 transform -rotate-6 sm:-rotate-12 hover:rotate-0 transition-transform duration-700 ease-out cursor-pointer group">
            
            {/* Outer Phone Bezel Frame */}
            <div className="relative w-[200px] sm:w-[230px] h-[410px] sm:h-[460px] bg-slate-900 rounded-[34px] p-2 shadow-2xl ring-1 ring-slate-800/50 flex flex-col justify-between">
              
              {/* Outer Side Buttons */}
              <div className="absolute -left-[7px] top-20 w-[2.5px] h-7 bg-slate-800 rounded-l-md" />
              <div className="absolute -left-[7px] top-30 w-[2.5px] h-9 bg-slate-800 rounded-l-md" />
              <div className="absolute -right-[7px] top-24 w-[2.5px] h-12 bg-slate-800 rounded-r-md" />

              {/* Inner Mobile Screen Display */}
              <div className="relative w-full h-full bg-white rounded-[26px] overflow-hidden flex flex-col border border-slate-200 shadow-inner">
                
                {/* Dynamic Island / Top Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-20 bg-slate-900 rounded-b-lg z-30 flex items-center justify-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-950 border border-slate-800" />
                  <div className="w-1 h-1 rounded-full bg-blue-950/60" />
                </div>

                {/* Mobile Status Bar */}
                <div className="w-full px-4 pt-1.5 pb-0.5 flex justify-between items-center text-[8px] text-slate-800 font-bold z-20">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                    <div className="w-2 h-1 rounded-[1px] border border-slate-800 flex items-center px-[1px]">
                      <div className="w-full h-0.5 bg-slate-800" />
                    </div>
                  </div>
                </div>

                {/* Mobile Screen Content */}
                <div className="flex-1 bg-white flex flex-col items-center justify-center p-3 text-center">
                  
                  {/* Road SVG Logo Graphic */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-1.5 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                    <svg 
                      viewBox="0 0 100 100" 
                      className="w-full h-full drop-shadow-sm" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="50" r="45" fill="#0d6efd" fillOpacity="0.08" />
                      <path 
                        d="M30 82 L42 22 C42 22, 45 18, 50 18 C55 18, 58 22, 58 22 L70 82 Z" 
                        fill="#0d6efd" 
                      />
                      <path 
                        d="M50 24 V34 M50 42 V54 M50 62 V76" 
                        stroke="#ffffff" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                      />
                      <path 
                        d="M50 12 C44.4772 12 40 16.4772 40 22 C40 29.5 50 38 50 38 C50 38 60 29.5 60 22 C60 16.4772 55.5228 12 50 12 Z" 
                        fill="#fdd300" 
                        stroke="#0d6efd" 
                        strokeWidth="2" 
                      />
                      <circle cx="50" cy="21" r="3.5" fill="#0d6efd" />
                    </svg>
                  </div>

                  {/* Smaller Mobile Brand Title */}
                  <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-[#3C3C3C] font-sans">
                    garibook
                  </h3>
                </div>

                {/* Mobile Home Indicator Bar */}
                <div className="w-full pb-1 pt-0.5 flex justify-center bg-white">
                  <div className="w-16 h-0.5 bg-slate-300 rounded-full" />
                </div>

              </div>
            </div>

            {/* Micro Floating Badge */}
            <div className="absolute -bottom-2 -right-2 bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 px-2.5 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 transition-transform group-hover:scale-105">
              <div className="flex -space-x-1">
                <div className="w-4 h-4 rounded-full bg-blue-500 border border-white flex items-center justify-center text-[7px] text-white font-bold">JD</div>
                <div className="w-4 h-4 rounded-full bg-purple-500 border border-white flex items-center justify-center text-[7px] text-white font-bold">SK</div>
                <div className="w-4 h-4 rounded-full bg-[#fdd300] text-slate-900 border border-white flex items-center justify-center text-[7px] font-bold">4.9★</div>
              </div>
              <div className="text-left">
                <p className="text-[9px] font-bold text-slate-900 leading-tight">100k+ Downloads</p>
                <p className="text-[7px] text-slate-500 leading-tight">Rated 4.9 by users</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Download Text & Action Buttons */}
        {}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-4 text-left">
          
          {/* Main Title Banner (Scaled down for sleeker look) */}
          <div className="space-y-0.5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight uppercase leading-none">
              DOWNLOAD
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-wider uppercase">
              OUR <span className="text-[#fdd300]">APP.</span>
            </h2>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
            
            {/* Compact QR Code Box */}
            <div className="group relative bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all cursor-pointer flex flex-col items-center">
              <div className="relative w-20 h-20 bg-slate-900 rounded-md p-1.5 flex items-center justify-center text-white">
                <svg className="w-full h-full text-white fill-current" viewBox="0 0 24 24">
                  <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm11-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm13-2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4 0h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4 0h2v2h-2v-2zm0-4h2v2h-2v-2zm-2-2h2v2h-2v-2zm8 0h2v2h-2v-2z" />
                </svg>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 rounded bg-[#fdd300] border border-slate-900 flex items-center justify-center text-slate-900 shadow-xs">
                    <Smartphone className="w-2.5 h-2.5" />
                  </div>
                </div>
              </div>
              <span className="text-[9px] font-semibold text-slate-600 mt-1.5 flex items-center gap-1 group-hover:text-slate-900">
                <QrCode className="w-2.5 h-2.5" /> Scan to Download
              </span>
            </div>

            {/* Store Buttons Stack (Icons without circle background, white colors) */}
            {}
            <div className="flex flex-col gap-2.5 w-full sm:w-auto">
              
              {/* Apple App Store Button */}
              <a 
                href="#appstore" 
                className="group relative flex items-center gap-2.5 bg-slate-950 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 min-w-[170px]"
              >
                {/* Direct Icon without circle background */}
                <Apple className="w-5 h-5 text-white fill-current shrink-0" />
                
                <div className="text-left">
                  <p className="text-[9px] text-slate-400 font-medium uppercase tracking-wide leading-tight">
                    Download on the
                  </p>
                  <p className="text-xs font-bold text-white leading-tight">
                    App Store
                  </p>
                </div>
              </a>

              {/* Google Play Store Button */}
              <a 
                href="#googleplay" 
                className="group relative flex items-center gap-2.5 bg-slate-950 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 min-w-[170px]"
              >
                {/* Direct Icon without circle background and with pure white fill */}
                <Play className="w-4 h-4 text-white fill-white shrink-0" />
                
                <div className="text-left">
                  <p className="text-[9px] text-slate-400 font-medium uppercase tracking-wide leading-tight">
                    GET IT ON
                  </p>
                  <p className="text-xs font-bold text-white leading-tight">
                    Google Play
                  </p>
                </div>
              </a>

            </div>

          </div>

          {/* Compact SMS Direct Link Option */}
          <div className="pt-1 flex items-center gap-2 text-[10px] text-slate-500">
            <span>Or receive SMS download link:</span>
            <button 
              onClick={handleCopyLink}
              className="flex items-center gap-1 font-semibold text-slate-800 hover:text-blue-600 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-600">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Direct Link</span>
                </>
              )}
            </button>
          </div>

        </div>

      </main>
      <DriverPoster/>
    </div>
  );
}
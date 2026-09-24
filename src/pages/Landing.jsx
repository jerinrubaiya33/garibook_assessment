import React, { useState } from "react";
import carImage from "../assets/car_15475028.png";
import carSVGImage from "../assets/car.jpg";
import cngImage from "../assets/vehicle_16204661.png";
import truckImage from "../assets/truck2.jpg";
import truckImageSVG from "../assets/pick-up_6678109.png";
import bicycleImage from "../assets/bicycle.png";
import bikeImage from "../assets/bike.png";
import CarBookingForm from "../components/CarBookingForm";

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState("car");

  const vehicleData = {
    car: {
      heroImage: carSVGImage,
      icon: carImage,
      label: "Car",
    },
    cng: {
      heroImage: cngImage,
      icon: cngImage,
      label: "CNG",
    },
    truck: {
      heroImage: truckImage,
      icon: truckImage,
      label: "Truck",
    },
    bicycle: {
      heroImage: bikeImage,
      icon: bicycleImage,
      label: "Bicycle",
    },
  };

  return (
    <div className="min-h-screen mt-30 bg-white text-slate-900 flex flex-col justify-between font-sans antialiased">
      {/* Inline styles with custom animation for the truck */}
      <style>{`
        @keyframes growIn {
          0% {
            transform: scale(0.7);
            opacity: 0.3;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes growInBicycle {
          0% {
            transform: scale(0.9);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.35);
            opacity: 1;
          }
        }
        /* Custom larger scale for the truck hero image */
        @keyframes growInTruck {
          0% {
            transform: scale(0.85);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
        .animate-grow-car {
          animation: growIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-grow-bicycle {
          animation: growInBicycle 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-grow-truck {
          animation: growInTruck 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Hero Split Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 sm:px-8 flex items-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-12 lg:py-0 relative z-10">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start space-y-6 max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Find The Perfect Ride
            <br /> For Every Journey.
            </h1>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto relative">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-4xl bg-[#fdd300] hover:bg-[#e6c003] text-black font-bold text-lg shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer relative z-10"
              >
                <span>Book a Ride</span>
                <img
                  src={vehicleData[selectedVehicle].icon}
                  alt={`${vehicleData[selectedVehicle].label} Icon`}
                  className="w-6 h-6 object-contain grayscale"
                />
              </button>
            </div>
          </div>

          {/* Right Column: Image on Top, Vehicle Bar Below */}
          <div className="w-full flex flex-col items-center justify-center relative">

            {/* Main Vehicle Image (Top) with scale logic */}
            <div className="w-full h-[300px] sm:h-[380px] lg:h-[440px] flex items-center justify-center relative overflow-hidden">
              <img
                key={selectedVehicle}
                src={vehicleData[selectedVehicle].heroImage}
                alt={`${selectedVehicle} on the road`}
                className={`w-full h-full object-contain mix-blend-multiply ${
                  selectedVehicle === "bicycle"
                    ? "animate-grow-bicycle"
                    : selectedVehicle === "truck"
                    ? "animate-grow-truck"
                    : "animate-grow-car"
                }`}
              />
            </div>

            {/* Vehicle Options Bar */}
            <div className="-mt-4 sm:-mt-6 relative z-10 flex items-center space-x-2 sm:space-x-3 bg-white/80 backdrop-blur-md p-1.5 sm:p-2 rounded-full shadow-md border border-slate-200/60">
              
              {/* Car Button */}
              <button
                type="button"
                onClick={() => setSelectedVehicle("car")}
                aria-label="Car category"
                className={`p-3 rounded-full transition-all duration-200 cursor-pointer relative z-10 ${
                  selectedVehicle === "car"
                    ? "bg-[#fdd300] text-black shadow-md scale-105"
                    : "text-slate-500 hover:text-black hover:bg-slate-100"
                }`}
              >
                <img
                  src={carImage}
                  alt="Car"
                  className="w-9 h-10 object-contain grayscale"
                />
              </button>

              {/* CNG Button */}
              {/* <button
                type="button"
                onClick={() => setSelectedVehicle("cng")}
                aria-label="CNG category"
                className={`p-3 rounded-full transition-all duration-200 cursor-pointer relative z-10 ${
                  selectedVehicle === "cng"
                    ? "bg-[#fdd300] text-black shadow-md scale-105"
                    : "text-slate-500 hover:text-black hover:bg-slate-100"
                }`}
              >
                <img
                  src={cngImage}
                  alt="CNG"
                  className="w-8 h-8 object-contain grayscale"
                />
              </button> */}

              {/* Truck Button */}
              <button
                type="button"
                onClick={() => setSelectedVehicle("truck")}
                aria-label="Truck category"
                className={`p-3 rounded-full transition-all duration-200 cursor-pointer relative z-10 ${
                  selectedVehicle === "truck"
                    ? "bg-[#fdd300] text-black shadow-md scale-105"
                    : "text-slate-500 hover:text-black hover:bg-slate-100"
                }`}
              >
                <img
                  src={truckImageSVG}
                  alt="Truck"
                  className="w-11 h-11 object-contain grayscale"
                />
              </button>

              {/* Bicycle Button */}
              <button
                type="button"
                onClick={() => setSelectedVehicle("bicycle")}
                aria-label="Bicycle category"
                className={`p-3 rounded-full transition-all duration-200 cursor-pointer relative z-10 ${
                  selectedVehicle === "bicycle"
                    ? "bg-[#fdd300] text-black shadow-md scale-105"
                    : "text-slate-500 hover:text-black hover:bg-slate-100"
                }`}
              >
                <img
                  src={bicycleImage}
                  alt="Bicycle"
                  className="w-11 h-11 object-contain grayscale"
                />
              </button>

            </div>

          </div>

        </div>

        {/* Dashed Arrow SVG Layer */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="dash-arrow-mask" maskUnits="userSpaceOnUse">
                <path
                  d="M 750 510 
                     C 680 540, 580 560, 540 500 
                     C 510 450, 600 450, 560 500 
                     C 510 550, 360 480, 235 422"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="40"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 1000,
                    strokeDashoffset: 1000,
                    animation: "sweepMask 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
                  }}
                />
              </mask>
            </defs>

            <style>{`
              @keyframes sweepMask {
                from {
                  stroke-dashoffset: 1000;
                }
                to {
                  stroke-dashoffset: 0;
                }
              }
            `}</style>

            <g mask="url(#dash-arrow-mask)">
              <path
                d="M 750 510 
                   C 680 540, 580 560, 540 500 
                   C 510 450, 600 450, 560 500 
                   C 510 550, 360 480, 245 425"
                stroke="#0d6efd"
                strokeWidth="3.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />

              <path
                d="M 252 416 L 235 422 L 250 437"
                fill="none"
                stroke="#0d6efd"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </main>
       {/* Booking Form Component */}
      <CarBookingForm />
    </div>
  );
}
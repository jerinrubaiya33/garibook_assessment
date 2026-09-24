import React, { useState } from "react";

const CARS = [
    { id: "sedan", name: "Sedan", seats: "4 Seats", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&auto=format&fit=crop&q=80" },
    { id: "noah", name: "Noah", seats: "7 Seats", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&auto=format&fit=crop&q=80" },
    { id: "hiace", name: "HiAce", seats: "11 Seats", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&auto=format&fit=crop&q=80" },
    { id: "sedan-economy", name: "Sedan Economy", seats: "4 Seats", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&auto=format&fit=crop&q=80" },
    { id: "chander-gari", name: "Chander Gari", seats: "8 Seats", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&auto=format&fit=crop&q=80" },
];

export default function CarBookingForm() {
    const [car, setCar] = useState(CARS[0]);
    const [carOpen, setCarOpen] = useState(false);
    const [tripType, setTripType] = useState("One Way");
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [day, setDay] = useState(22);
    const [month, setMonth] = useState("Sep");
    const [time, setTime] = useState("10:25");
    const [period, setPeriod] = useState("PM");

    const book = (e) => {
        e.preventDefault();
        console.log({
            car: car.name,
            tripType,
            pickup,
            destination,
            date: `${day} ${month}`,
            time: `${time} ${period}`,
        });
    };

    return (
        <div
            className="min-h-screen w-full bg-white px-4 py-10 sm:px-6 sm:py-16"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
            />

            <div className="mx-auto max-w-6xl">
                {/* Main Blue Card */}
                <form
                    onSubmit={book}
                    className="relative z-10 rounded-[32px] border border-white/20 bg-[#0d6efd] p-6 shadow-[0_30px_70px_-40px_rgba(16,28,78,0.25)] sm:p-10"
                >
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-[#EEF1FA]">
                        {/* Vehicle Type */}
                        <section className="flex flex-col justify-between lg:pr-10">
                            <div>
                                <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-white">
                                    Vehicle Type
                                </p>
                                <div className="relative mt-4">
                                    <button
                                        type="button"
                                        onClick={() => setCarOpen(!carOpen)}
                                        className="flex w-full items-center justify-between rounded-2xl border border-[#E4E9F8] bg-[#F7F9FF] p-3.5 text-left transition hover:border-[#0d6efd]/50"
                                    >
                                        <span className="flex items-center gap-3.5">
                                            <img
                                                src={car.image}
                                                alt={car.name}
                                                className="h-12 w-18 rounded-xl object-cover"
                                            />
                                            <span>
                                                <span className="block text-[17px] font-bold text-[#101C4E]">{car.name}</span>
                                                <span className="block text-sm font-semibold text-[#8A93B2]">{car.seats}</span>
                                            </span>
                                        </span>
                                        <svg
                                            className={`h-5 w-5 text-[#0d6efd] transition-transform ${carOpen ? "rotate-180" : ""}`}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>

                                    {carOpen && (
                                        <div className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-[#E4E9F8] bg-white shadow-[0_20px_50px_-20px_rgba(16,28,78,0.3)]">
                                            {CARS.map((c) => (
                                                <button
                                                    key={c.id}
                                                    type="button"
                                                    onClick={() => {
                                                        setCar(c);
                                                        setCarOpen(false);
                                                    }}
                                                    className={`flex w-full items-center gap-3.5 px-4 py-3 text-left transition ${c.id === car.id ? "bg-[#F0F4FF]" : "hover:bg-[#F7F9FF]"
                                                        }`}
                                                >
                                                    <img src={c.image} alt={c.name} className="h-10 w-14 rounded-lg object-cover" />
                                                    <span>
                                                        <span className="block text-base font-bold text-[#101C4E]">{c.name}</span>
                                                        <span className="block text-xs font-semibold text-[#8A93B2]">{c.seats}</span>
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Trip Type Selector */}
                            <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#F7F9FF] p-1.5 border border-[#E4E9F8]">
                                {["One Way", "Round Way", "Hourly"].map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() => setTripType(type)}
                                        className={`flex-1 rounded-xl py-2.5 text-sm font-bold transition-all duration-200 ${tripType === type
                                                ? "bg-[#0d6efd] text-white"
                                                : "text-[#626C8D] hover:text-[#101C4E]"
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Route */}
                        <section className="lg:px-10">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                                Route
                            </p>
                            <div className="relative mt-4">
                                <div className="relative z-10">
                                    <span className="absolute left-[13px] top-1/2 -translate-y-1/2">
                                        <span className="block h-3 w-3 rounded-full border-[3px] border-[#0d6efd] bg-white" />
                                    </span>
                                    <input
                                        type="text"
                                        value={pickup}
                                        onChange={(e) => setPickup(e.target.value)}
                                        placeholder="Enter Pickup Location"
                                        className="w-full rounded-2xl border border-[#E4E9F8] bg-[#F7F9FF] py-3.5 pl-10 pr-4 text-base font-semibold text-[#101C4E] outline-none transition placeholder:font-medium placeholder:text-[#A6AEC9] focus:border-[#0d6efd]"
                                    />
                                </div>

                                <div className="relative z-0 my-1 flex justify-start pl-[7px]">
                                    <svg
                                        className="h-10 w-10 text-[#0d6efd]"
                                        viewBox="0 0 40 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 2 C8 18, 32 18, 32 24 C32 30, 8 30, 8 40"
                                            stroke="#fdd300"
                                            strokeWidth="2.5"
                                            strokeDasharray="4 4"
                                            strokeLinecap="round"
                                            fill="none"
                                        />
                                        <path
                                            d="M3 39L8 46L13 39"
                                            stroke="#fdd300"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                        />
                                    </svg>
                                </div>

                                <div className="relative z-10">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                                        <svg className="h-5 w-5 text-[#0d6efd]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        placeholder="Enter Drop-off Location"
                                        className="w-full rounded-2xl border border-[#E4E9F8] bg-[#F7F9FF] py-3.5 pl-10 pr-4 text-base font-semibold text-[#101C4E] outline-none transition placeholder:font-medium placeholder:text-[#A6AEC9] focus:border-[#0d6efd]"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* My Dates & Submit */}
                        <section className="flex flex-col lg:pl-10">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                                My Dates
                            </p>

                            <div className="mt-4 flex items-stretch justify-between rounded-2xl bg-[#F7F9FF] p-3.5">
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setDay(Math.max(1, day - 1))}
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4E9F8] bg-white text-[#0d6efd] transition hover:bg-[#F0F4FF]"
                                    >
                                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
                                    </button>
                                    <div className="px-1 text-center">
                                        <div className="text-3xl font-extrabold leading-none text-[#101C4E]">{day}</div>
                                        <div className="mt-1 text-xs font-bold uppercase tracking-wider text-[#8A93B2]">
                                            {month}
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setDay(Math.min(31, day + 1))}
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4E9F8] bg-white text-[#0d6efd] transition hover:bg-[#F0F4FF]"
                                    >
                                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="border-l border-[#E4E9F8] pl-4 text-center">
                                    <div className="text-2xl font-extrabold leading-none text-[#101C4E]">{time}</div>
                                    <div className="mt-2 flex justify-center gap-1">
                                        {["AM", "PM"].map((p) => (
                                            <button
                                                key={p}
                                                type="button"
                                                onClick={() => setPeriod(p)}
                                                className={`rounded-full px-3.5 py-1 text-xs font-bold transition ${period === p
                                                        ? "bg-[#101C4E] text-white"
                                                        : "bg-white text-[#8A93B2] hover:text-[#101C4E]"
                                                    }`}
                                            >
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-5 w-full rounded-full bg-[#FFD337] py-4 text-base font-extrabold text-[#101C4E] transition hover:bg-[#F5C518] active:scale-[0.99]"
                            >
                                Continue
                            </button>
                        </section>
                    </div>
                </form>

                {/* Overlapping Yellow Card */}
                <div className="relative -mt-6 z-0 flex flex-col items-center justify-between gap-4 rounded-b-[32px] rounded-t-[20px] bg-[#FFD337] px-8 pt-10 pb-6 text-center shadow-lg sm:flex-row sm:text-left">
                    <div className="flex items-center gap-3">
                        <svg
                            className="h-7 w-7 shrink-0 text-[#0d6efd]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                        </svg>
                        <span className="text-xl font-bold tracking-tight text-[#0d6efd] sm:text-2xl">
                            Do you want Airport PickUp Service?
                        </span>
                    </div>
                    <button
                        type="button"
                        className="w-full shrink-0 rounded-full bg-[#0d6efd] px-8 py-3 text-base font-extrabold text-white transition hover:bg-[#0b5ed7] active:scale-[0.99] sm:w-auto"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
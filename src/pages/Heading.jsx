import carImage from "../assets/club.png";
import driverImage from "../assets/driver.jpg";
import fareImage from "../assets/fare.jpg";

import airportImage from "../assets/airport.jpg";
import familyImage from "../assets/fam_trip.jpg";
import longTourImage from "../assets/tour.jpg";

const Heading = () => {
    const features = [
        {
            id: 1,
            title: "Choose the Car",
            description: "Pick what suits your comfort.",
            image: carImage,
        },
        {
            id: 2,
            title: "Choose the Driver",
            description: "Based on ratings and reviews.",
            image: driverImage,
        },
        {
            id: 3,
            title: "Choose the Fare",
            description: "Select the bid that fits your budget.",
            image: fareImage,
        }
    ];

    const services = [
        {
            id: 1,
            title: "Airport Rentals",
            image: airportImage,
            isMiddle: false,
        },
        {
            id: 2,
            title: "Family Trips",
            image: familyImage,
            isMiddle: true,
        },
        {
            id: 3,
            title: "Long Tours",
            image: longTourImage,
            isMiddle: false,
        }
    ];

    return (
        <div className="w-full bg-transparent text-slate-900 min-h-screen font-sans mt-30">

            {/* Title Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-12 text-center">
                <h1 className="text-4xl sm:text-6xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Freedom in <br /> Every Journey <span className="text-[#fdd300]">.</span>
                </h1>
            </section>

            {/* 3 Key Feature Columns */}
            <section className="max-w-6xl mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                    {features.map((feature) => (
                        <div key={feature.id} className="group flex flex-col items-start space-y-3">
                            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 transition-transform duration-300 group-hover:scale-105 mb-2">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                                {feature.title}
                            </h3>

                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Banner Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
                <div className="bg-[#FFFCEF] rounded-3xl p-8 sm:p-12 md:p-16">
                    {/* Section Title */}
                    <div className="mb-10 text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            More Than Miles — <br />
                            We Bring People Together
                        </h2>
                    </div>

                    {/* Service Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <div 
                                key={service.id} 
                                className="flex flex-col h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden group shadow-md bg-transparent relative"
                            >
                                {/* Top Header Block with Angled Shape */}
                                {!service.isMiddle && (
                                    <div 
                                        className="bg-[#fdd300] px-6 py-4 w-full flex items-center shrink-0 z-10"
                                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
                                    >
                                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0d6efd] tracking-wide pb-1">
                                            {service.title}
                                        </h3>
                                    </div>
                                )}

                                {/* Image Container */}
                                <div className="relative flex-1 w-full overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Bottom Header Block with Angled Shape */}
                                {service.isMiddle && (
                                    <div 
                                        className="bg-[#0d6efd] px-6 py-4 w-full flex items-center shrink-0 z-10"
                                        style={{ clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)" }}
                                    >
                                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#fdd300] tracking-wide pt-1">
                                            {service.title}
                                        </h3>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Heading;
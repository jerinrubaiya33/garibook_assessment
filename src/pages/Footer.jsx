import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  const footerNavigation = {
    Garibook: [
      'About Us',
      'Customer Reviews',
      'Career',
      'Newsroom',
      'Garibook Map',
    ],
    Services: [
      'Intercity Rental',
      'Airport Pick and Drop',
      'Hourly Rental',
      'Vehicle Management System (VMS)',
    ],
    'Become Our Partner': [
      'Become a Smart Driver',
      'Become a member of Garibook Club',
      'Garibook Business for Corporate Travel',
    ],
    Contacts: [
      'support@garibook.com',
      'Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road- 144, Gulshan, Dhaka-1212',
      '+88 09 678 11 22 33',
    ],
  };

  return (
    <footer className="relative bg-[#1160D6] mt-16 text-white pt-10 pb-6 px-6 md:px-12 lg:px-20 overflow-hidden font-sans">
      {/* Top Wavy Border Design */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-8 md:h-12 text-white fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,90 900,-40 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto pt-4">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          
          {/* Navigation Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
            {Object.entries(footerNavigation).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-xl mb-2 tracking-wide">{category}</h3>
                <ul className="space-y-1 text-md  font-normal text-gray-100">
                  {links.map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Legal Section */}
        <div className="mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-base font-normal text-gray-200 gap-2">
          <p>© 2026 garibook, Inc. All Rights Reserved</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
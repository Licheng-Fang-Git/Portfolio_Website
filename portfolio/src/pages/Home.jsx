import React from 'react';
import logo from '../assets/logo.jpg'
export default function Home() {
  // Replace '#3b82f6' with the specific hex code from your logo
  const logoColor = "text-[#3b82f6]"; 

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24 gap-12">
      {/* Left Side: Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-6xl font-black text-gray-900 tracking-tight">
                Welcome to ZHIMOVE
                <img 
                    src={logo} 
                    alt="ZHIMOVE Logo" 
                    class="rounded-full w-24 h-24 object-cover"
                />
        </h1>
        <div className="flex flex-col items-center md:items-start">
        <p className={`text-2xl font-bold uppercase tracking-widest ${logoColor} animate-slide-left`}>
            Fast • Affordable • Reliable
        </p>
          <button className="mt-12 bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
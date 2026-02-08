import React from 'react';

export default function Contact() {
  const brandGold = "text-[#b28a5d]";

  return (
    <div className="py-16 animate-fade-up">
      <h2 className="text-4xl font-extrabold text-center mb-12">Contact Us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        
        {/* Contact Info from Business Card */}
        <div className="space-y-8">
          <div>
            <h3 className={`text-2xl font-bold ${brandGold} mb-2`}>Zhijian Chen</h3>
            <p className="text-gray-500 font-medium italic">Owner & Operator</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="bg-gray-100 p-3 rounded-full">📞</span>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-lg font-semibold">(917) 445-2681</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="bg-gray-100 p-3 rounded-full">📅</span>
              <div>
                <p className="text-sm text-gray-400">Availability</p>
                <p className="text-lg font-semibold">Available 7 Days</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="bg-gray-100 p-3 rounded-full">📍</span>
              <div>
                <p className="text-sm text-gray-400">Area</p>
                <p className="text-lg font-semibold">Serving Brooklyn & NYC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#b28a5d] outline-none" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#b28a5d] outline-none" />
          <input type="text" placeholder="Service Name" className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#b28a5d] outline-none" />
          <textarea placeholder="How can we help?" rows="4" className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#b28a5d] outline-none"></textarea>
          <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
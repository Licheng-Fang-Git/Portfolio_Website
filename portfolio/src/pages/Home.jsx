import React from 'react';
import logo from '../assets/logo.jpg'
import { useState } from 'react';
import { Star } from 'lucide-react';

export default function Home() {
  // Replace '#3b82f6' with the specific hex code from your logo
  const logoColor = "text-[#3b82f6]"; 
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('zhimove_reviews');
    return saved ? JSON.parse(saved) : [];
  });
  const brandGold = "#b28a5d"; // Gold from the business card


  // localStorage.removeItem('zhimove_reviews');


  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24 gap-12">
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl font-black text-gray-900 tracking-tight">
                  Welcome to ZHIMOVE
                  <img 
                      src={logo} 
                      alt="ZHIMOVE Logo" 
                      className="rounded-full w-24 h-24 object-cover"
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

      {/* New Reviews Section */}
      <section className="py-12 animate-fade-up">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className='mb-4'>Most recent</div>
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">No reviews yet. Be the first!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0,6).map((review, index) => ( 
              <div key={index} className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                  <div>
                      <p className="font-bold text-gray-900">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.submittedAt.slice(0,9)}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < review.ratings.overall ? brandGold : "none"} 
                          color={i < review.ratings.overall ? brandGold : "#d1d5db"} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 italic mb-4">"{review.comment}"</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {review.serviceType.map(s =>                   
                    <span key = {s} className="text-[10px] uppercase font-bold px-2 py-1 bg-gray-100 rounded-md text-gray-500">
                      {s}
                    </span>)
                  }

                  {review.serviceSpecifics.map(s =>                   
                    <span key = {s} className="text-[10px] uppercase font-bold px-2 py-1 bg-blue-50 rounded-md text-blue-500">
                      {s}
                    </span>)
                  }   

                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
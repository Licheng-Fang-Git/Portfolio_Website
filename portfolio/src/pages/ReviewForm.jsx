import React, { useState } from 'react';
import { Star } from 'lucide-react';

const MOVE_SERVICES = [
    { id: 1, title: "Small Apartment & Dorm Moves", price: "$500", desc: "Custom modern websites." },
    { id: 2, title: "Furniture Transport", price: "$300", desc: "Get found on Google." },
    { id: 3, title: "Marketplace & Store Pickups", price: "$200", desc: "Identity for your business." },
    { id: 4, title: "Loading & Unloading Help", price: "$200", desc: "Identity for your business." },
  ];

const JUNK_SERVICES = [
  { id: 1, title: "Furniture Removal", price: "$500", desc: "Custom modern websites." },
  { id: 2, title: "Household Junk", price: "$300", desc: "Get found on Google." },
  { id: 3, title: "Small cleanouts", price: "$200", desc: "Identity for your business." },
  { id: 4, title: "Curbside Pickup", price: "$200", desc: "Identity for your business." },
];

export default function ReviewForm() {
  const [ratings, setRatings] = useState({ overall: 0, food: 0, service: 0, atmosphere: 0 });
  const [hover, setHover] = useState({ overall: 0, food: 0, service: 0, atmosphere: 0 });
  const [serviceType, setServiceType] = useState([])
  
  const brandGold = "#b28a5d"; // Gold from the business card

  // Helper to render stars for different categories
  const StarRating = (category) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={28}
          className="cursor-pointer transition-colors"
          fill={(hover[category] || ratings[category]) >= star ? brandGold : "none"}
          color={(hover[category] || ratings[category]) >= star ? brandGold : "#d1d5db"}
          onMouseEnter={() => setHover({ ...hover, [category]: star })}
          onMouseLeave={() => setHover({ ...hover, [category]: 0 })}
          onClick={() => setRatings({ ...ratings, [category]: star })}
        />
      ))}
    </div>
  );

  function changeServiceTypes(services){
    let service_specifics = [];
    console.log(services)
    if (services == 'Moving'){
        MOVE_SERVICES.map(s => service_specifics.push(s.title) );
    }
    if (services == 'Junk Removal'){
        JUNK_SERVICES.map(s => service_specifics.push(s.title) );
    }
    setServiceType([...serviceType, ... service_specifics]);
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-6 animate-fade-up">
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-500">
            U
          </div>
          <div>
            <p className="font-bold text-gray-900">User Name</p>
            <p className="text-xs text-gray-400">Posting publicly</p>
          </div>
        </div>

        {/* Star Categories */}
        <div className="space-y-6 mb-8">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Overall</span>
            {StarRating('overall')}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Service</span>
            {StarRating('service')}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Reliability</span>
            {StarRating('atmosphere')}
          </div>
        </div>

        {/* Text Area */}
        <textarea
          placeholder="Share details of your own experience with ZHIMOVE"
          className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#b28a5d] focus:border-transparent outline-none min-h-[120px] mb-6"
        />

        {/* Chip Selectors */}
        <div className="space-y-6">
          <div>
            <p className="font-semibold mb-3">Service Type?</p>
            <div className="flex flex-wrap gap-2">
              {['Moving', 'Junk Removal', 'Local Delivery'].map(type => (
                <button key={type} onClick={() => changeServiceTypes(type)} className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 font-medium text-sm transition">
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">Project size?</p>
            <div className="flex flex-wrap gap-2">
              {serviceType.map(size => (
                <button key={size} className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 font-medium text-sm transition">
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button className="w-full mt-10 bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition shadow-lg">
          Post Review
        </button>
      </div>
    </div>
  );
}
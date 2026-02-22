import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOVE_SERVICES = [
    { id: 1, title: "Small Apartment & Dorm Moves", price: "$50 to $110", desc: "Local studio / small 1 bed room" },
    { id: 2, title: "Furniture Transport", price: "$300", desc: "" },
    { id: 3, title: "Marketplace & Store Pickups", price: "$200", desc: "Identity for your business." },
    { id: 4, title: "Loading & Unloading Help", price: "$200", desc: "Identity for your business." },
  ];

const JUNK_SERVICES = [
  { id: 1, title: "Furniture Removal", price: "$500", desc: "Custom modern websites." },
  { id: 2, title: "Household Junk", price: "$300", desc: "Get found on Google." },
  { id: 3, title: "Small cleanouts", price: "$200", desc: "Identity for your business." },
  { id: 4, title: "Curbside Pickup", price: "$200", desc: "Identity for your business." },
];

const HANDYMAN_SERVICES = [
  {id:1, title:"Furniture Assembly", price:"$35 to $50 per item", desc: "Beds Desks IKEA"},
  {id:2, title:"Furniture Disassembly", price:"$25 to $35 per item", desc: "Moving or disposal"},
  {id:3, title:"Small Handy Tasks", price:"$25 to $35 per item", desc: "Moving or disposal"},
];

export default function ReviewForm() {
  const [ratings, setRatings] = useState({ overall: 0, service: 0, reliability: 0 });
  const [hover, setHover] = useState({ overall: 0, service: 0, reliability: 0 });
  const [serviceTypes, setServiceTypes] = useState([])
  const [serviceType, setServiceType] = useState([])
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [serviceSpecifics, setServiceSpecifics] = useState([]);
  const navigate = useNavigate();
  const brandGold = "#b28a5d"; 

  const StarRating = (category) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          type="button"
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
    
      if(!(serviceType.includes(services))){
        setServiceType(prev => [...prev, services])
        console.log(serviceType, services)
        let service_specifics = [];
        console.log(services)
        if (services == 'Moving'){
            MOVE_SERVICES.map(s => service_specifics.push(s.title));
        }
        if (services == 'Junk Removal'){
            JUNK_SERVICES.map(s => service_specifics.push(s.title) );
        }
        if(services == 'Handyman / Assembly'){
          HANDYMAN_SERVICES.map(s => service_specifics.push(s.title))
        }
        setServiceTypes(prevServiceTypes => [... prevServiceTypes, ... service_specifics]);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newReview = {
      name, // We will pull this from Auth later
      ratings,
      comment,
      serviceType,
      serviceSpecifics,
      submittedAt: new Date().toLocaleString('en-US')
    };
    console.log(newReview);

      // 1. Get existing reviews from LocalStorage (or empty array if none)
    const existingReviews = JSON.parse(localStorage.getItem('zhimove_reviews') || '[]');
    
    // 2. Add the new one
    const updatedReviews = [newReview, ...existingReviews];
    
    // 3. Save back to LocalStorage
    localStorage.setItem('zhimove_reviews', JSON.stringify(updatedReviews));

    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6 animate-fade-up">
    <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div>
              <p className="font-bold text-gray-900">Posting publicly</p>
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
                {StarRating('reliability')}
              </div>
            </div>

            {/* Text Area */}
            <textarea
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#b28a5d] focus:border-transparent outline-none min-h-[10px] mb-6"
            />

            {/* Text Area */}
            <textarea
              value={comment} 
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share details of your own experience with ZHIMOVE"
              className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#b28a5d] focus:border-transparent outline-none min-h-[120px] mb-6"
            />

            {/* Chip Selectors */}
            <div className="space-y-6">
              <div>
                <p className="font-semibold mb-3">Service Type:</p>
                <div className="flex flex-wrap gap-2">
                  {['Moving', 'Junk Removal', 'Handyman / Assembly'].map(type => (
                    <button key={type} type="button" onClick={() => changeServiceTypes(type)} className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 font-medium text-sm transition">
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold mb-3">Specific Service:</p>
                <div className="flex flex-wrap gap-2">
                  {serviceTypes.map(size => (
                    <button key={size} type="button" onClick={() => setServiceSpecifics([...serviceSpecifics, size])} className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 font-medium text-sm transition">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button type="submit" className="w-full mt-10 bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition shadow-lg">
              Post Review
            </button>
        </div>
      </form>
    </div>
  );
}
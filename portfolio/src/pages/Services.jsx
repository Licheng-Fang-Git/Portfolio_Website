const MOCK_SERVICES = [
    { id: 1, title: "Small Apartment & Dorm Moves", price: "$50 to $110", desc: "Local studio / small 1 bed room" },
    { id: 2, title: "Furniture Transport", price: "$25 to $40", desc: "Couch Mattress Dresser" },
    { id: 3, title: "Marketplace & Store Pickups", price: "$25 to $45", desc: "Facebook IKEA Target" },
    { id: 4, title: "Loading & Unloading Help", price: "$40 to $80", desc: "No truck" },
  ];

const JUNK_SERVICES = [
  { id: 1, title: "Furniture Removal", price: "$30 to $50", desc: "Tables Shevles" },
  { id: 2, title: "Single Household Junk", price: "$25 to $30", desc: "Mattress Chair" },
  { id: 3, title: "Small cleanouts", price: "$25 to $50", desc: "Few bags / boxes" },
  { id: 4, title: "Curbside Pickup", price: "$20 to $30", desc: "Items outside" },
];

const HANDYMAN_SERVICES = [
  {id:1, title:"Furniture Assembly", price:"$35 to $50 per item", desc: "Beds Desks IKEA"},
  {id:2, title:"Furniture Disassembly", price:"$25 to $35 per item", desc: "Moving or disposal"},
  {id:3, title:"Small Handy Tasks", price:"$25 to $35 per item", desc: "Moving or disposal"},
]

export default function Services() {
  return (
    <>
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Moving Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_SERVICES.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
            <div className="mt-4 font-semibold text-lg">{service.price}</div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Inquire Now
            </button>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Junk Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {JUNK_SERVICES.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
            <div className="mt-4 font-semibold text-lg">{service.price}</div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Inquire Now
            </button>
          </div>
        ))}
      </div>
      </div>

    <div className="mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Handyman / Assembly</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {HANDYMAN_SERVICES.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
            <div className="mt-4 font-semibold text-lg">{service.price}</div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Inquire Now
            </button>
          </div>
        ))}
      </div>
      </div>
  </>
  );
}
const MOCK_SERVICES = [
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
  </>
  );
}
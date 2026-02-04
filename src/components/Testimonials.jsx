import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sara El Amrani",
    role: "Traveler • Marrakech",
    rating: 5,
    text: "The villa photos were accurate and the booking was super smooth. We found a perfect stay in minutes.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Adam Collins",
    role: "Business Trip • Casablanca",
    rating: 4,
    text: "Fast search and great filters. I loved how easy it was to compare places and see amenities clearly.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Yasmine Benali",
    role: "Family Vacation • Agadir",
    rating: 5,
    text: "Beautiful listings and a premium feel. We booked a beachfront villa and it was exactly what we expected.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="px-4 md:px-30 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-bold text-4xl">What Our Clients Say</h2>

        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              <div className="mt-3">
                <Stars rating={t.rating} />
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">
                “{t.text}”
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Happy Clients", value: "10k+" },
            { label: "Verified Listings", value: "2.4k+" },
            { label: "Countries", value: "40+" },
            { label: "Avg Rating", value: "4.9/5" },
          ].map((s) => (
            <div
              key={s.label}
              className="border rounded-xl p-5 bg-gray-50 text-center"
            >
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-sm text-gray-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

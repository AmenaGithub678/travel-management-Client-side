import React from "react";
import { motion } from "framer-motion";
import { FaTag, FaRegCalendarCheck } from "react-icons/fa";


const offersData = [
  {
    id: 1,
    title: "Cox’s Bazar 3 Days 2 Nights",
    description: "Enjoy the world’s longest sea beach with luxury hotels and seafood delights.",
    image: "https://i.ibb.co/TBkk7bK0/p-3.jpg",
    price: 15000,
    discountPrice: 12000,
    discountPercentage: 20,
    validity: "Valid till 30 Sep 2025",
    category: "Beach"
  },
  {
    id: 2,
    title: "Sundarbans Adventure Tour",
    description: "Explore the largest mangrove forest and Royal Bengal Tigers safely.",
    image: "https://i.ibb.co/cKDLR0JH/p1.jpg",
    price: 20000,
    discountPrice: 16000,
    discountPercentage: 20,
    validity: "Valid till 31 Oct 2025",
    category: "Adventure"
  },
  {
    id: 3,
    title: "Bandarban Hills Package",
    description: "Discover hills, tribal culture, and waterfalls in scenic Bandarban.",
    image: "https://i.ibb.co/bjFsTwZb/p4-g1.jpg",
    price: 18000,
    discountPrice: 15000,
    discountPercentage: 15,
    validity: "Valid till 15 Nov 2025",
    category: "Hill"
  }
];

const OffersPage = () => {
  return (
    <div className="bg-accent min-h-screen py-12 px-4 md:px-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
  <img
    width="64"
    height="64"
    src="https://img.icons8.com/nolan/64/get-a-discount.png"
    alt="get-a-discount"
    className="animate-bounce"
  />
  <h1 className="text-4xl font-bold text-primary animate-bounce">Special Offers</h1>
</div>

        <p className="text-black mt-3">
          Grab the best travel deals and save more on your next adventure in Bangladesh.
        </p>
      </div>

      {/* Offers Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {offersData.map((offer) => (
          <motion.div
            key={offer.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              {/* Title */}
              <h2 className="text-xl font-semibold text-secondary mb-2">
                {offer.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-3">
                {offer.description}
              </p>

              {/* Price Section */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg font-bold text-primary">
                  ৳{offer.discountPrice}
                </span>
                <span className="line-through text-gray-400">
                  ৳{offer.price}
                </span>
                <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <FaTag /> {offer.discountPercentage}% Off
                </span>
              </div>

              {/* Validity */}
              <div className="flex items-center text-sm text-gray-500 mb-4 gap-2">
                <FaRegCalendarCheck />
                {offer.validity}
              </div>

              {/* Button */}
              <button className="w-full bg-secondary text-white py-2 rounded-lg font-semibold hover:bg-primary transition">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;

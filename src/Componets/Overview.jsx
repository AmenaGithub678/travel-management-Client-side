import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaMobileAlt, FaBookOpen } from 'react-icons/fa';
import overviewVideo from '../assets/Video/video.mp4';

const texts = [
  "Discover the Heart of Bangladesh",
  "Connect with Tour Guides Instantly",
  "Book, Travel, and Explore Safely",
  "Welcome to TourMates – Your Journey Begins Here",
];

const cardContent = [
  {
    icon: <FaMapMarkedAlt size={40}  />,
    title: "Find Places",
    description:
      "Discover top attractions, museums, restaurants, and hidden gems in Bangladesh.",
  },
  {
    icon: <FaMobileAlt size={40}  />,
    title: "Get Tips",
    description:
      "Get offline travel tips and guidance right from your phone.",
  },
  {
    icon: <FaBookOpen size={40}  />,
    title: "Read & Listen",
    description:
      "Expert-reviewed location details with text and audio options.",
  },
];

export default function Overview() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  h-screen overflow-hidden ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={overviewVideo}
        autoPlay
        loop
        muted
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4  ">
        {/* Animated Text */}
        <motion.h2
          key={currentText}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary text-2xl md:text-4xl font-bold mb-10"
        >
          {texts[currentText]}
        </motion.h2>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardContent.map((card, index) => (
  <div
    key={index}
    className="p-6 rounded-xl shadow-md hover:shadow-xl transition max-w-xs mx-auto "
  >
    <div className="mb-3 text-secondary mx-auto w-fit">
      {card.icon}
    </div>
    <h3 className="text-xl text-primary font-semibold mb-2">{card.title}</h3>
    <p className="text-gray-700">{card.description}</p>
  </div>
))}

        </div>
      </div>
    </div>
  );
}

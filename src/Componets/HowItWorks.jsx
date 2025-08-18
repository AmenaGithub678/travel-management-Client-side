import React from 'react';
import { motion } from "framer-motion";
import { FaSuitcase, FaUserFriends, FaRegCalendarCheck, FaPlaneDeparture, FaShareAlt } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div className="py-10 lg:py-16 px-3 lg:px-8 bg-info">
      
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-4 text-primary">
        How Our Website Works
      </h2>
      <div className="w-20 sm:w-24 h-1 bg-secondary mx-auto mb-10 lg:mb-12 rounded-full"></div>

      <ul className="timeline timeline-vertical">
        {/* Step 1 */}
        <li>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="timeline-start lg:timeline-start timeline-box bg-accent rounded-xl shadow-md 
              transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-info group 
              text-center lg:text-left" // ✅ mobile text centered
          >
            <h3 className="text-lg sm:text-xl font-bold flex items-center justify-center lg:justify-start gap-1 text-primary">
              <FaSuitcase size={30} className="text-secondary text-lg sm:text-base lg:text-2xl transition-transform duration-300 group-hover:rotate-12" />
              Browse Packages
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mt-2">
              Explore destinations and choose from exciting tour packages.
            </p>
          </motion.div>
          <div className="timeline-middle">
            <FaSuitcase 
            className="text-secondary h-6 w-6 sm:h-8 sm:w-8" />
          </div>
          <hr className="bg-secondary" />
        </li>

        {/* Step 2 */}
        <li>
          <hr className="bg-secondary" />
          <div className="timeline-middle">
            <FaUserFriends className="text-secondary h-6 w-6 sm:h-8 sm:w-8" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="timeline-end timeline-box bg-accent rounded-xl shadow-md 
              transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-info group 
              text-center lg:text-left"
          >
            <h3 className="text-lg sm:text-xl font-bold flex items-center justify-center lg:justify-start gap-1 text-primary">
              <FaUserFriends size={30} className="text-secondary text-lg sm:text-base lg:text-2xl transition-transform duration-300 group-hover:rotate-12" />
              Meet Tour Guides
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mt-2">
              See our experienced guides and select your perfect match.
            </p>
          </motion.div>
          <hr className="bg-secondary" />
        </li>

        {/* Step 3 */}
        <li>
          <hr className="bg-secondary" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="timeline-start timeline-box bg-accent rounded-xl shadow-md 
              transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-info group 
              text-center lg:text-left"
          >
            <h3 className="text-lg sm:text-xl font-bold flex items-center justify-center lg:justify-start gap-1 text-primary">
              <FaRegCalendarCheck size={30} className="text-secondary text-lg sm:text-base lg:text-2xl transition-transform duration-300 group-hover:rotate-12" />
              Book Your Trip
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mt-2">
              Fill in the booking form and secure your package easily.
            </p>
          </motion.div>
          <div className="timeline-middle">
            <FaRegCalendarCheck className="text-secondary h-6 w-6 sm:h-8 sm:w-8" />
          </div>
          <hr className="bg-secondary" />
        </li>

        {/* Step 4 */}
        <li>
          <hr className="bg-secondary" />
          <div className="timeline-middle">
            <FaPlaneDeparture className="text-secondary h-6 w-6 sm:h-8 sm:w-8" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="timeline-end timeline-box bg-accent rounded-xl shadow-md 
              transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-info group 
              text-center lg:text-left"
          >
            <h3 className="text-lg sm:text-xl font-bold flex items-center justify-center lg:justify-start gap-1 text-primary">
              <FaPlaneDeparture size={30} className="text-secondary text-lg sm:text-base lg:text-2xl transition-transform duration-300 group-hover:rotate-12" />
              Confirm & Travel
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mt-2">
              Once confirmed, enjoy a stress-free and unforgettable journey.
            </p>
          </motion.div>
          <hr className="bg-secondary" />
        </li>

        {/* Step 5 */}
        <li>
          <hr className="bg-secondary" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="timeline-start timeline-box bg-accent rounded-xl shadow-md 
              transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-info group 
              text-center lg:text-left"
          >
            <h3 className="text-lg sm:text-xl font-bold flex items-center justify-center lg:justify-start gap-1 text-primary">
              <FaShareAlt size={30} className="text-secondary text-lg sm:text-base lg:text-2xl transition-transform duration-300 group-hover:rotate-12" />
              Share Your Story
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mt-2">
              After your trip, share your experience with other travelers.
            </p>
          </motion.div>
          <div className="timeline-middle">
            <FaShareAlt className="text-secondary h-6 w-6 sm:h-8 sm:w-8" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HowItWorks;

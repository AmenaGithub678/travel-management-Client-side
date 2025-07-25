import React from 'react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FaHeart } from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
const PlacesSection = () => {
const places = [
  {
    title: "Shait Gumbad Mosque",
    description:
      "Built in 1459, this is the largest and most magnificent traditional mosque in Bangladesh.",
    image: "https://i.ibb.co/PsYSSr2X/bagerhat.jpg",
  },
  {
    title: "Sundarbans",
    description: "The world’s largest mangrove forest, home to the Royal Bengal Tiger.",
    image: "https://i.ibb.co/xS7SD16L/sundorbon.jpg",
  },
  {
    title: "Kaptai",
    description: "World’s longest natural sandy sea beach, perfect for sea lovers.",
    image: "https://i.ibb.co/MydPV3tS/kaptai.jpg",
  },
  {
    title: "Sajek Valley",
    description: "Known as the 'Roof of Rangamati', famous for its foggy hills and serenity.",
    image: "https://i.ibb.co/gZnYLNV0/sajek.jpg",
  },
  {
    title: "jaflong zero point",
    description: "A 17th-century Mughal fort complex in the heart of Old Dhaka.",
    image: "https://i.ibb.co/cK7d38Hz/OIP.png",
  },
  {
    title: "Bandarban",
    description: "The earliest urban archaeological site so far discovered in Bangladesh.",
    image: "https://i.ibb.co/8DMxjsQF/bandorbon.jpg",
  },
];

    return (
 <div className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl text-primary font-bold text-center mb-10">Explore Amazing Places</h2>

     <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  }}
  pagination={{ clickable: true }}
  modules={[EffectCoverflow, Pagination, Navigation]}
  className="max-w-6xl mx-auto"
>
  {places.map((place, index) => (
    <SwiperSlide
      key={index}
      style={{
        width: '400px', 
      }}
      className="bg-white rounded-lg overflow-hidden shadow-md relative px-5"
    >
      <div className="relative">
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-64 object-cover"
        />
        <Tippy
          content={
            <div className="text-left">
              <h2 className="font-bold text-sm mb-1">Save your favorite</h2>
              <p className="text-xs">Sign in to save and get information.</p>
            </div>
          }
          placement="top"
        >
          <button className="absolute top-2 right-2 text-white p-2 rounded-full">
            <FaHeart className="text-red-400" />
          </button>
        </Tippy>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{place.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{place.description}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </div>
    );
};

export default PlacesSection;
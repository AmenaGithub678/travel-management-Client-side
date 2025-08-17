import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Typewriter } from 'react-simple-typewriter';
import banner1 from '../assets/banner/banner1.jpg';
import banner2 from '../assets/banner/banner2.jpg';
import banner3 from '../assets/banner/banner3.jpg';
import banner4 from '../assets/banner/banner4.jpg';
const Banner = () => {



const slides = [
  {
    image: banner1,
    title: "Unlock the Beauty of Bangladesh",
    text: "From the tea gardens of Sylhet to the beaches of Cox’s Bazar — discover breathtaking places, meet passionate guides, and create memories that last a lifetime.",
  },
  {
    image: banner2,
    title: "Your Journey Begins with TourMates",
    text: "Plan trips effortlessly, connect with local experts, and explore Bangladesh like never before. Let's travel, share stories, and explore together.",
  },
  {
    image: banner3,
    title: "Beyond Destinations, We Create Experiences",
    text: "It’s more than a tour. It’s your story. Let TourMates help you find adventure, culture, and connection on every step of the journey.",
  },
  {
    image: banner4,
    title: "Explore Together. Smile Forever.",
    text: "Whether you're chasing waterfalls or savoring local cuisine — TourMates brings people together through seamless travel and unforgettable stories.",
  },
];

    return (
<div className="w-full h-[500px] relative">
<Swiper
modules={[Autoplay, Pagination, Navigation]}
autoplay={{ delay: 4000, disableOnInteraction: false }}
pagination={{ clickable: true }}
navigation
        loop
        className="w-full h-full"
      >
 {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
                 <h1 className="mb-4 text-4xl font-bold max-w-3xl text-primary">
                  <Typewriter
                    words={[slide.title]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={2000}
                  />
                </h1>
                <p className="mb-6 max-w-2xl text-lg text-secondary
                text-center">{slide.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
};

export default Banner;

import {  useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const TourGuideList = () => {
  
    const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

 const { data: guides = [], isLoading } = useQuery({
  queryKey: ['randomTourGuides'],
  queryFn: async () => {
    const res = await axiosSecure.get('/tour-guides/random');
    return res.data;
  },
});
  if (isLoading) {
    return <p className="text-center py-10">Loading...</p>;
  }
    return (
        <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6">Meet Our Tour Guides</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
        freeMode={true}
        modules={[FreeMode]}
      >
        {guides.map((guide) => (
          <SwiperSlide key={guide._id}>
            <div  
              onClick={() => navigate(`/tour-guide/${guide._id}`)}
              className="cursor-pointer border rounded-xl p-4 shadow hover:shadow-lg transition duration-300 bg-white"
            >
              <img
                src={guide.photo}
                alt={guide.name}
                className="w-full h-52 object-cover rounded-xl"
              />
              <div className="mt-4 space-y-1">
                <h3 className="text-xl font-semibold">{guide.name}</h3>
                <p className="text-sm text-gray-500">{guide.city}</p>
                <p className="text-sm text-gray-500">{guide.experience}</p>   
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    );
};

export default TourGuideList;
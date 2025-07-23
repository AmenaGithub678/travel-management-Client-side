import React from 'react';
import { Navigate } from 'react-router';

const guides = [
  { id: 1, name: "Alex", photo: "https://i.ibb.co/GvQpDZDk/tour-guide-6816049-1280.jpg" },
  { id: 2, name: "Maya", photo: "https://i.ibb.co/GvQpDZDk/tour-guide-6816049-1280.jpg" },
];
const TourGuideList = () => {
    return (
        <section>
      <h2 className="text-2xl font-semibold mb-4">Meet Our Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {guides.map((guide) => (
          <div
            key={guide.id}
            className="cursor-pointer border p-4 rounded hover:shadow"
            onClick={() => Navigate(`/tour-guide/${guide.id}`)}
          >
            <img src={guide.photo} alt={guide.name} className=" w-full object-cover rounded" />
            <p className="mt-2 text-center font-semibold">{guide.name}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default TourGuideList;
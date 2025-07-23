import React from 'react';
import { useParams } from 'react-router';

const guides = [
  {
    id: 1,
    name: "Zafor Ahmed",
    city: "Cox's Bazar",
    photo: "https://i.ibb.co/GvQpDZDk/tour-guide-6816049-1280.jpg",
    languages: ["Bangla", "English", "Hindi"],
    rating: 4.9,
    reviews: 32,
    specialties: ["Sea Beach Tours", "Cultural Heritage"],
    bio: "Zafor has been guiding tourists in Cox's Bazar for 8+ years. Known for his deep local knowledge and friendly approach.",
    price: "৳1500/day",
    availability: "Everyday"
  },
  {
    id: 2,
    name: "Shamima Nasrin",
    city: "Sundarbans",
    photo: "https://i.ibb.co/GvQpDZDk/tour-guide-6816049-1280.jpg",
    languages: ["Bangla", "English"],
    rating: 4.8,
    reviews: 27,
    specialties: ["Wildlife Tours", "Boat Safari"],
    bio: "Shamima is passionate about wildlife and has led over 100 Sundarbans tours.",
    price: "৳2000/day",
    availability: "Weekends Only"
  },
  {
    id: 3,
    name: "Hasan Ali",
    city: "Sylhet",
    photo: "https://i.ibb.co/GvQpDZDk/tour-guide-6816049-1280.jpg",
    languages: ["Bangla", "English"],
    rating: 4.7,
    reviews: 21,
    specialties: ["Tea Garden Tours", "Adventure Trekking"],
    bio: "Hasan is a local from Sylhet who loves showing off the scenic tea estates and hills.",
    price: "৳1800/day",
    availability: "Mon - Fri"
  },
  {
    id: 4,
    name: "Rehana Khatun",
    city: "Dhaka",
    photo: "https://i.ibb.co/GvQpDZDk/tour-guide-6816049-1280.jpg",
    languages: ["Bangla", "English", "Hindi"],
    rating: 4.9,
    reviews: 34,
    specialties: ["Old Dhaka Walk", "Food Tours"],
    bio: "Rehana gives an unforgettable taste of Old Dhaka’s food and history.",
    price: "৳1000/day",
    availability: "Mon - Sat"
  },
  {
    id: 5,
    name: "Mamun Hossain",
    city: "Bandarban",
    photo: "https://i.ibb.co/GvQpDZDk/tour-guide-6816049-1280.jpg",
    languages: ["Bangla", "Chakma", "English"],
    rating: 4.6,
    reviews: 18,
    specialties: ["Hill Tracking", "Tribal Culture"],
    bio: "Born and raised in the hills of Bandarban, Mamun connects you to nature and indigenous culture.",
    price: "৳2200/day",
    availability: "Flexible"
  },
];

const TourGuideProfile = () => {
    const { id } = useParams();
  const guide = guides.find(g => g.id === parseInt(id));

  if (!guide) return <p className="text-red-500 p-6">Guide not found.</p>;
    return (
     <div className="max-w-3xl mx-auto py-10 px-4">
      <img src={guide.photo} alt={guide.name} className="w-full h-72 lg:h-100 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{guide.name}</h1>
      <p className="text-gray-500">{guide.city}</p>
      <p className="mt-2"><strong>Languages:</strong> {guide.languages.join(', ')}</p>
      <p><strong>Specialties:</strong> {guide.specialties.join(', ')}</p>
      <p><strong>Rating:</strong> {guide.rating} ⭐ ({guide.reviews} reviews)</p>
      <p><strong>Availability:</strong> {guide.availability}</p>
      <p><strong>Price:</strong> {guide.price}</p>
      <p className="mt-4 italic">{guide.bio}</p>
    </div>
    );
};

export default TourGuideProfile;
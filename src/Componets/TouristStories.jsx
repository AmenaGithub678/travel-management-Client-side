import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import { FacebookShareButton, FacebookIcon } from 'react-share';

const TouristStories = () => {

const navigate = useNavigate();
const {user}= useAuth();    

const axiosSecure = useAxiosSecure();

const { data: stories = [] } = useQuery({
  queryKey: ['touristStories'],
  queryFn: async () => {
    const res = await axiosSecure.get('/stories/random');
    return res.data;
  },
});
  

  const handleShare = () => {
    if (!user) {
      navigate('/login');
    }
  };

    return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Tourist Stories</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stories.map((story) => (
          <div key={story._id} className="bg-white rounded-2xl shadow-lg p-4">
            <img
              src={story.images?.[0]} // ✅ fixed here
              alt="Story"
              className="rounded-xl h-40 w-full object-cover"
            />
            <h3 className="text-xl font-semibold mt-3">{story.title}</h3>
            <p className="text-sm mt-1">{story.description?.slice(0, 80)}...</p>
            <div className="flex justify-between items-center mt-4">
              {user ? (
                <FacebookShareButton
                  url={`http://localhost:5173/stories/${story._id}`} 
                  quote={story.title}
                  hashtag="#TravelStory"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="btn btn-sm bg-blue-600 text-white"
                >
                  Login to Share
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/dashboard/manage-stories")}
          className="btn btn-outline btn-primary"
        >
          View All Stories
        </button>
      </div>
    </div>
    );
};

export default TouristStories;
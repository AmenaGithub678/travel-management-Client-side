import React, { useEffect, useState } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Community = () => {
const axiosSecure = useAxiosSecure();
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosSecure.get('/stories')
      .then(res => {
        if (Array.isArray(res.data)) {
          setStories(res.data);
        } else {
          setError('Invalid data format');
        }
        setLoading(false);
      })
      .catch(err => {
        // console.error('Error fetching stories:', err);
        setError('Failed to load stories.');
        setLoading(false);
      });
  }, [axiosSecure]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;


    return (
    <div className="min-h-screen p-6 bg-accent">
      <h2 className="text-primary text-3xl font-bold text-center mb-6">Community Stories</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {stories.map(story => (
          <div key={story._id} className="card bg-white shadow-lg">
            <figure className="h-52 overflow-hidden">
              <img
                src={story.images?.[0] || 'https://via.placeholder.com/400x300?text=No+Image'}
                alt={story.title}
                className="object-cover w-full h-full
                "
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-primary">{story.title}</h3>
              <p className="text-sm text-secondary">{story.description?.slice(0, 100)}...</p>
              <div className="mt-4 flex gap-3 items-center">
                <FacebookShareButton url={window.location.href} quote={story.title}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={window.location.href} title={story.title}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton url={window.location.href} title={story.title}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Community;
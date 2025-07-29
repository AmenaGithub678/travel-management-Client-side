import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { axiosSecure } from '../../../hooks/useAxiosSecure';
const TourGuideProfile = () => {
const { id } = useParams();
  
  // Fetch guide details
  const { data: guide = {}, isLoading: guideLoading } = useQuery({
    queryKey: ['guide', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tour-guides/${id}`);
      return res.data;
    },
  });

  // Fetch stories by guide's email (only when email is available)
  const { data: stories = [], isLoading: storiesLoading } = useQuery({
    queryKey: ['stories-by-guide', guide?.email],
    enabled: !!guide?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/stories?email=${guide.email}`);
      return res.data;
    },
  });

  if (guideLoading) return <p className="text-center py-10">Loading guide info...</p>;

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      {/* Guide Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-10 bg-white shadow rounded-xl p-6">
        <div>
          <img
            src={guide.photo}
            alt={guide.name}
            className="w-full h-72 object-cover rounded-xl"
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">{guide.name}</h2>
          <p className="text-gray-600">📧 Email: {guide.email}</p>
          <p className="text-gray-600">📞 Phone: {guide.phone}</p>
          <p className="text-gray-600">🏠 Address: {guide.address}</p>
        </div>
      </div>

      {/* Stories Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">📝 Stories by {guide.name}</h3>
        {storiesLoading ? (
          <p>Loading stories...</p>
        ) : stories.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {stories.map(story => (
              <div key={story._id} className="border p-4 rounded-xl shadow bg-white">
                <h4 className="text-xl font-semibold mb-2">{story.title}</h4>
                <p className="text-gray-700 mb-2">{story.description}</p>
                {story.images?.length > 0 && (
                  <img
                    src={story.images[0]}
                    alt="Story"
                    className="w-full h-40 object-cover rounded"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No stories published yet by this guide.</p>
        )}
      </div>
    </section>
  );
};

export default TourGuideProfile;

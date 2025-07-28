import TourGallery from './TourGallery';
import AboutTour from './AboutTour';

import { useNavigate, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import TourPlan from './TourPlan';
import BookinForm from './BookinForm';
import { axiosSecure } from '../../hooks/useAxiosSecure';

const PackageDetails = () => {
   const { id } = useParams();
  const navigate = useNavigate();

  // Fetch specific package details
  const { data: pack, isLoading, isError } = useQuery({
    queryKey: ['packageDetails', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/packages/${id}`);
      return res.data;
    },
  });

  // Fetch all guides (you can later filter if needed)
  const { data: allGuides = [], isLoading: guideLoading } = useQuery({
    queryKey: ['allGuides'],
    queryFn: async () => {
      const res = await axiosSecure.get('/tour-guides');
      return res.data;
    },
  });

  if (isLoading) return <div className="text-center my-10">Loading package...</div>;
  if (isError) return <div className="text-center text-red-500">Failed to load package.</div>;


    return (
       <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Tour Image Gallery */}
      <TourGallery images={pack.gallery} />

      {/* About Tour */}
      <AboutTour description={pack.description} />

      {/* Tour Plan */}
      <TourPlan tourPlan={pack.tourPlan} />

      {/* Tour Guide List */}
      {guideLoading ? (
        <p className="text-center">Loading tour guides...</p>
      ) : (
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">Meet Tour Guides</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {allGuides.map((guide) => (
              <div
                key={guide._id}
                onClick={() => navigate(`/tour-guide/${guide._id}`)}
                className="cursor-pointer p-4 border rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={guide.photo}
                  alt={guide.name}
                  className="w-full h-44 object-cover rounded"
                />
                <div className="mt-3">
                  <h4 className="text-lg font-semibold">{guide.name}</h4>
                  <p className="text-sm text-gray-600">{guide.specialty}</p>
                  <p className="text-sm text-gray-500">{guide.experience} years experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Booking Form */}
      <BookinForm selectedPackage={pack} />
    </div>
    );
};

export default PackageDetails;

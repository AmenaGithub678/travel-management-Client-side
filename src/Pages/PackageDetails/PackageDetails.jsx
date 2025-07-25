
import TourGallery from './TourGallery';
import AboutTour from './AboutTour';
import TourGuideList from './TourGuideList';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import TourPlan from './TourPlan';

const PackageDetails = () => {
    const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: pack, isLoading, isError } = useQuery({
    queryKey: ['packageDetails', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/packages/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <div className="text-center my-10">Loading...</div>;
  if (isError) return <div className="text-center text-red-500">Failed to load package.</div>;
    return (
        <div>
           <TourGallery images={pack.gallery}></TourGallery> 
           <AboutTour description={pack.description}></AboutTour>
       <TourPlan tourPlan={pack.tourPlan}></TourPlan>
       <TourGuideList ></TourGuideList>
        </div>
    );
};

export default PackageDetails;

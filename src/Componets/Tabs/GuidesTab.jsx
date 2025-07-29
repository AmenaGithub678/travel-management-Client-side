import { useQuery } from '@tanstack/react-query';
import GuideCard from '../Cards/GuideCard';

import axios from 'axios';

const GuidesTab = () => {
    
  const { data: guides = [], isLoading, isError } = useQuery({
    queryKey: ['randomGuides'],
    queryFn: async () => {
      const res = await axios.get('https://touriest-management-system.vercel.app/tour-guides/random'); 
      return res.data;
    }
  });  

  if (isLoading) return <div className="text-center my-10">Loading...</div>;
  if (isError) return <div className="text-center text-red-500">Failed to load guides.</div>;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {guides.map(guide => (
        <GuideCard key={guide._id} guide={guide} />
      ))}
    </div>
    );
};

export default GuidesTab;
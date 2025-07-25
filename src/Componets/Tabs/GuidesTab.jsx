import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import GuideCard from '../Cards/GuideCard';

const GuidesTab = () => {
    const axiosSecure = useAxiosSecure();
  const { data: guides = [], isLoading, isError } = useQuery({
    queryKey: ['randomGuides'],
    queryFn: async () => {
      const res = await axiosSecure.get('/tour-guides/random');
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
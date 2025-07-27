import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import PackageCard from '../../Componets/Cards/PackageCard';

const Trips = () => {
    const axiosSecure = useAxiosSecure();

  const { data: packages = [], isLoading } = useQuery({
    queryKey: ['allPackages'],
    queryFn: async () => {
      const res = await axiosSecure.get('/packages');
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
    return (
        <div className="px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map(pack => (
        <PackageCard key={pack._id} pack={pack} />
      ))}
    </div>
    );
};

export default Trips;
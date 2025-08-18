import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import PackageCard from '../../Componets/Cards/PackageCard';
import { MdAirplanemodeActive } from "react-icons/md";

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

    <div className="px-4 py-10 bg-accent">
      {/* Heading Section */}
      <div className="flex items-center justify-center gap-3 mb-8 group">
        <MdAirplanemodeActive className="text-4xl text-primary group-hover:text-secondary transition-transform duration-300 group-hover:rotate-12" />
        <h1 className="text-3xl md:text-4xl font-bold text-primary group-hover:text-secondary transition">
          All Trips in One Click 
        </h1>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map(pack => (
          <PackageCard key={pack._id} pack={pack} />
        ))}
      </div>
    </div>

    );
};

export default Trips;
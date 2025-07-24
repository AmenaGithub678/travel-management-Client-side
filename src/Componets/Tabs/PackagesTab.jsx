import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import PackageCard from '../Cards/PackageCard';

const PackagesTab = () => {
    const axiosSecure = useAxiosSecure();
    const { data: packages = [], isLoading, isError } = useQuery({
    queryKey: ['randomPackages'],
    queryFn: async () => {
      const res = await axiosSecure.get('/packages/random');
      return res.data;
    }
  });

  if (isLoading) {
    return <div className="text-center my-10">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Failed to load packages.</div>;
  }
    return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map(pack => (
        <PackageCard key={pack._id} pack={pack} />
      ))}
    </div>
    );
};

export default PackagesTab;
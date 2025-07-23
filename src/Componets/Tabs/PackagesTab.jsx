import React, { useEffect, useState } from 'react';

const PackagesTab = () => {
     const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/packages/random') // 🔁 Use your backend URL
            .then(res => res.json())
            .then(data => {
                setPackages(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching packages:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center my-10">Loading...</div>;
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
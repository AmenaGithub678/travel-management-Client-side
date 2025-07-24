import React from 'react';
import { Link } from 'react-router';

const PackageCard = ({ pack }) => {
    const { _id, photo, tourType, title, price } = pack;
    return (
    <div className="card bg-base-100 shadow-xl">
     <figure>
    <img src={photo} alt={title} className="w-full h-48 object-cover" />
    </figure>
    <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="text-sm text-gray-500">{tourType}</p>
    <p className="font-semibold">Price: ৳{price}</p>
    <div className="card-actions justify-end">
    <Link
      to={`/package-details/${_id}`}
     >
    <button className="btn btn-sm btn-primary">View Details</button>
    </Link>
                </div>
            </div>
        </div>
    );
    
};

export default PackageCard;
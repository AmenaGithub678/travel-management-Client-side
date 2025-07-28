import React from 'react';
import { Link } from 'react-router';

const GuideCard = ({ guide }) => {
    const { _id, photo, name, specialty, experience } = guide;
    return (
<div className="card bg-base-100 shadow-xl">
<figure>
    <img src={photo} alt={name} className="w-full h-48 object-cover" />
</figure>
<div className="card-body text-center mx-auto">
    <h2 className="card-title">{name}</h2>
    <p className="text-sm">Specialty: {specialty}</p>
    <p className="text-sm">Experience: {experience} years</p>
    <div className="card-actions justify-end">
                    <Link 
                      to={`/tour-guide/${_id}`}
                     >
                        <button className="btn btn-sm btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GuideCard;
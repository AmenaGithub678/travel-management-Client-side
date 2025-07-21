import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png'
const TourLogo = () => {
    return (
     <Link to="/">
            <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={logo} alt="TourMates Logo" className="w-full h-full object-contain skeleton" />
                </div>
               
                <p className="font-bold text-lg hidden sm:block">Tour<span className='text-primary'>M</span>ate<span className='text-primary'>s</span>
                    </p>
            </div>
        </Link>
    );
   
};

export default TourLogo;
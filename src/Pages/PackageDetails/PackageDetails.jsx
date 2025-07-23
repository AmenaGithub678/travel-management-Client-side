import React from 'react';
import TourGallery from './TourGallery';
import AboutTour from './AboutTour';
import TourPlan from './TourPlan';
import TourGuideList from './TourGuideList';

const PackageDetails = () => {
    return (
        <div>
           <TourGallery></TourGallery> 
           <AboutTour></AboutTour>
           <TourPlan></TourPlan>
           <TourGuideList></TourGuideList>
        </div>
    );
};

export default PackageDetails;

import React from 'react';

const AboutTour = ({ description }) => {
   if (!description) return null;
    return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">About This Tour</h2>
      <p className="text-gray-700">
        {description}
      </p>
    </section>
    );
};

export default AboutTour;
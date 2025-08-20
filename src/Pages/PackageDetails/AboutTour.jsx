import React from 'react';

const AboutTour = ({ description }) => {
   if (!description) return null;
    return (
    <section>
      <h2 className="text-2xl font-semibold mb-2 text-secondary">About This Tour</h2>
      <p className="text-primary">
        {description}
      </p>
    </section>
    );
};

export default AboutTour;
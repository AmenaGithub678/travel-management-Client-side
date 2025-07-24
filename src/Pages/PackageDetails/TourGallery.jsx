import React from 'react';

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

const TourGallery = ({ images }) => {
  if (!images || images.length === 0) return null;
    return (
  
    <section>
      <h2 className="text-2xl font-semibold mb-4">Tour Gallery</h2>
      <LightGallery selector="a.gallery-item">
        <div className="grid grid-cols-4 gap-4">
          {images.slice(0, 8).map((img, index) => (
            <a key={index} href={img} className="col-span-1 gallery-item">
              <img src={img} alt={`Tour ${index + 1}`} className="w-full h-full object-cover rounded" />
            </a>
          ))}
        </div>
      </LightGallery>
    </section>
    )
};

export default TourGallery;
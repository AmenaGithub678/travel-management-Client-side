import React from 'react';

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Plugins (optional but nice effects)
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const TourGallery = ({ images }) => {
  if (!images || images.length === 0) return null;

    // Repeat pattern in chunks of 5
  const chunkedImages = [];
  for (let i = 0; i < images.length; i += 5) {
    chunkedImages.push(images.slice(i, i + 5));
  }
    return (
  
  <section className="my-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Tour Gallery</h2>
      <LightGallery plugins={[lgZoom, lgThumbnail]} selector=".gallery-item">
        <div className="space-y-6">
          {chunkedImages.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-4">
              {/* Top Row - 3 small */}
              <div className="grid grid-cols-3 gap-2">
                {group.slice(0, 3).map((img, index) => (
                  <a
                    key={index}
                    href={img}
                    className="gallery-item block overflow-hidden rounded-lg shadow"
                  >
                    <img
                      src={img}
                      alt={`Tour ${index + 1}`}
                      className="h-40 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                ))}
              </div>

              {/* Bottom Row - 2 wide */}
              <div className="grid grid-cols-2 gap-2">
                {group.slice(3, 5).map((img, index) => (
                  <a
                    key={index}
                    href={img}
                    className="gallery-item block overflow-hidden rounded-lg shadow"
                  >
                    <img
                      src={img}
                      alt={`Tour ${index + 4}`}
                      className="h-60 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </LightGallery>
    </section>
    )
};

export default TourGallery;
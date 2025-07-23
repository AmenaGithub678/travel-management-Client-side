import React from 'react';

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

const images = [
  "https://i.ibb.co/TMsyVqnj/banner.jpg",
  "https://i.ibb.co/tpZLnQn6/banner3.jpg",
  "https://i.ibb.co/TMsyVqnj/banner.jpg",
   "https://i.ibb.co/TMsyVqnj/banner.jpg",
  "https://i.ibb.co/tpZLnQn6/banner3.jpg",
  "https://i.ibb.co/TMsyVqnj/banner.jpg",
  "https://i.ibb.co/TMsyVqnj/banner.jpg",
  "https://i.ibb.co/tpZLnQn6/banner3.jpg",

];

const TourGallery = () => {
    return (
  
    <section>
      <h2 className="text-2xl font-semibold mb-4">Tour Gallery</h2>
      <LightGallery 
       selector="a.gallery-item"
      >
        <div className="grid grid-cols-4 gap-4">

          {/* 🔹 Row 1: 1 big + 2 small */}
          <a href={images[0]} className="col-span-2">
            <img src={images[0]} alt="Tour 1" className="w-full h-full object-cover rounded" />
          </a>
          <a href={images[1]} className="col-span-1">
            <img src={images[1]} alt="Tour 2" className="w-full h-full object-cover rounded" />
          </a>
          <a href={images[2]} className="col-span-1">
            <img src={images[2]} alt="Tour 3" className="w-full h-full object-cover rounded" />
          </a>

          {/* 🔹 Row 2: small - big - small */}
          <a href={images[3]} className="col-span-1">
            <img src={images[3]} alt="Tour 4" className="w-full h-full object-cover rounded" />
          </a>
          <a href={images[4]} className="col-span-2">
            <img src={images[4]} alt="Tour 5" className="w-full h-full object-cover rounded" />
          </a>
          <a href={images[5]} className="col-span-1">
            <img src={images[5]} alt="Tour 6" className="w-full h-full object-cover rounded" />
          </a>

          {/* 🔹 Row 3: 2 big images + 1 below */}
          <a href={images[6]} className="col-span-2">
            <img src={images[6]} alt="Tour 7" className="w-full h-full object-cover rounded" />
          </a>
          <a href={images[7]} className="col-span-2">
            <img src={images[7]} alt="Tour 8" className="w-full h-full object-cover rounded" />
          </a>

          {/* 🔹 Last image centered below the two big ones
          <a href={images[8]} className="col-span-2 col-start-2">
            <img src={images[8]} alt="Tour 9" className="w-full h-full object-cover rounded" />
          </a> */}
        </div>
      </LightGallery>
    </section>
    )
};

export default TourGallery;
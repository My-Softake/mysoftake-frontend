"use client"

import Image from "next/image";
import React from "react";

const AreaWeServe = () => {
  const regions = [
    { name: "Bangladesh", src: "/images/bd.png" },
    { name: "China", src: "/images/China.png" },
    { name: "Japan", src: "/images/japan.png" },
    { name: "UAE", src: "/images/uae.png" },
  ];

  return (
    <div className="bg-[#F5F5FA] pt-10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Title Section */}
        <div className="flex flex-col items-center md:mb-16 mb-10">
          <h3 className="font-extrabold text-3xl md:text-4xl text-[#001b3d] text-center   tracking-widest relative">
            Area we Serve
            <span className="block w-16 h-1 bg-[#27A0DB] mt-3 mx-auto"></span>
          </h3>
        </div>

        {/* Dynamic Grid for Countries */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {regions.map((region, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-300"
            >
              <div className="relative h-[60px] w-full md:h-[80px]">
                <Image
                  src={region.src}
                  alt={region.name}
                  fill
                  className="object-contain filter grayscale-[0.2]" 
                />
              </div>
              
              <div className="mt-6 w-full h-[1px] bg-gray-100"></div> 
              
              <p className="font-bold text-xs md:text-sm text-[#001b3d] text-center pt-4 tracking-[0.2em] uppercase">
                {region.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AreaWeServe;
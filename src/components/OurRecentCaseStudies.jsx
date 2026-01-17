"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const OurRecentCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    fetch("/data/CaseStudyData.json")
      .then((res) => res.json())
      .then((data) => {
        setCaseStudies(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

 
  if (!caseStudies || caseStudies.length === 0) {
    return (
      <div className="py-16 bg-black text-center text-white">Loading...</div>
    );
  }

  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-10">
        <h3 className="font-bold text-white text-3xl md:text-4xl text-center mb-12 uppercase tracking-widest">
          Our recent Case studies
        </h3>

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 flex flex-col gap-6">
 
            <CaseStudyCard
              item={caseStudies[0]}
              aspect="aspect-[16/9] lg:h-[400px]"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
              <CaseStudyCard
                item={caseStudies[1]}
                aspect="aspect-[4/3] lg:h-[250px]"
              />
     
              <CaseStudyCard
                item={caseStudies[2]}
                aspect="aspect-[4/3] lg:h-[250px]"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
 
            <CaseStudyCard
              item={caseStudies[3]}
              aspect="aspect-[3/4] lg:h-full min-h-[400px]"
            />
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          <div className="lg:col-span-8">
         
            <CaseStudyCard
              item={caseStudies[4]}
              aspect="aspect-[21/9] lg:h-[300px]"
            />
          </div>
          <div className="lg:col-span-4">
          
            <CaseStudyCard
              item={caseStudies[5]}
              aspect="aspect-[4/3] lg:h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Card Component
const CaseStudyCard = ({ item, aspect }) => {
  const [isActive, setIsActive] = useState(false);

 
  if (!item) return null;

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={`relative group w-full ${aspect} overflow-hidden rounded-2xl cursor-pointer bg-slate-900 transition-all duration-500`}
    >
      <Image
        src={item.images?.[0] || "/images/placeholder.png"}
        alt={item.title}
        fill
        className={`object-cover transition-transform duration-700 ${
          isActive ? "scale-110" : "scale-100"
        }`}
      />

      {/* Blur & Content Layer */}
      <div
        className={`
          absolute inset-0 
          bg-black/40 backdrop-blur-md
          shadow-[inset_0_0_120px_rgba(0,0,0,0.8)] 
          transition-all duration-500 ease-out
          flex flex-col items-center justify-center
          z-20
          ${isActive ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* Animated Arrows */}
        <FaArrowRight
          className={`absolute top-6 left-6 text-white text-2xl md:text-4xl rotate-[45deg] transition-all duration-700 delay-100 ${isActive ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-10 -translate-y-10 opacity-0"}`}
        />
        <FaArrowDown
          className={`absolute top-6 right-6 text-white text-2xl md:text-4xl rotate-[45deg] transition-all duration-700 delay-150 ${isActive ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-10 -translate-y-10 opacity-0"}`}
        />
        <FaArrowLeft
          className={`absolute bottom-6 right-6 text-white text-2xl md:text-4xl rotate-[45deg] transition-all duration-700 delay-200 ${isActive ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-10 translate-y-10 opacity-0"}`}
        />
        <FaArrowUp
          className={`absolute bottom-6 left-6 text-white text-2xl md:text-4xl rotate-[45deg] transition-all duration-700 delay-250 ${isActive ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-10 translate-y-10 opacity-0"}`}
        />

        {/* Text & Button */}
        <div
          className={`text-center px-4 transition-all duration-500 delay-300 ${
            isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h4 className="text-xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
            {item.title}
          </h4>
          <Link href={`/case-study/${item.id || ""}`}>
            <button className="bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-black cursor-pointer hover:bg-[#0EA5E9] hover:text-white transition-all duration-300 shadow-xl uppercase text-xs md:text-sm tracking-widest">
              View detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurRecentCaseStudies;

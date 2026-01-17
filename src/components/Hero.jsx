"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Button from "./sheard/Button";
import Link from "next/link";

const sliderData = [
  { id: 1, title: "Take Your Snow Days to the Next Level", description: "Unlock a wealth of detailed stats (and bragging rights) about your days skiing and snowboarding.", image: "/images/banner_one.png" },
  { id: 2, title: "Experience the Thrill of the Summit", description: "From the highest peaks to the deepest valleys, track every movement.", image: "/images/banner_two.png" },
  { id: 3, title: "Conquer the Cold with Confidence", description: "Gear up for the season. Our advanced analytics help you.", image: "/images/banner_three.png" },
  { id: 4, title: "Nature's Beauty at Your Feet", description: "Capture the moments that matter.", image: "/images/banner_four.png" },
  { id: 5, title: "Peak Performance Every Time", description: "Push your limits and improve your skills.", image: "/images/banner_five.png" },
  { id: 6, title: "Peak Performance Every Time", description: "Push your limits and improve your skills.", image: "/images/banner_six.png" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex(prev => (prev === sliderData.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentIndex(prev => (prev === 0 ? sliderData.length - 1 : prev - 1));

  // Auto-slide
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 2000);
    return () => clearInterval(slideInterval);
  }, []);

  const progressWidth = ((currentIndex + 1) / sliderData.length) * 100;

  // Preview images for bottom slider
  const previewImages = [
    sliderData[(currentIndex - 1 + sliderData.length) % sliderData.length],
    sliderData[currentIndex],
    sliderData[(currentIndex + 1) % sliderData.length],
  ];

  return (
    <div className="relative h-[95vh] sm:h-[700px] lg:h-[850px] overflow-hidden bg-gray-900 text-white">
      {/* Background Hero */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${sliderData[currentIndex].image})` }}
      >
        <div className="absolute inset-0 bg-black/40 bg-linear-to-r from-black/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-between px-4 sm:px-6 lg:px-12 pt-30 lg:pt-24">
        {/* Hero Content */}
        <div className="flex flex-col max-sm:pt-10 lg:flex-row items-center h-full">
          <div className="w-full lg:w-[55%] space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[50px] md:leading-[75px] font-bold max-w-[830px]">
              {sliderData[currentIndex].title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-md">
              {sliderData[currentIndex].description}
            </p>
           <Link href="#" className="">
           
            <Button className="cursor-pointer">Get Started</Button>
           
           </Link>
          </div>
        </div>

        {/* Bottom Controls & Preview */}
        <div className="flex flex-col gap-6 pb-30 lg:pb-20">
          <div className="flex items-center gap-10">
            <div className="flex gap-6 text-xl text-gray-300">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>

            {/* Mobile preview */}
            <div className="flex justify-center gap-4 lg:hidden">
              {previewImages.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg overflow-hidden border ${
                    idx === 1
                      ? "w-36 h-24 border-yellow-400"
                      : "w-28 h-24 border-white/30 opacity-70"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt="preview"
                    width={200}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Controls + Progress */}
          <div className="flex items-center md:justify-end gap-10 md:gap-30">
            <div className="flex gap-3">
              <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-black">
                <svg width="27" height="38" viewBox="0 0 27 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                  <path d="M0.840822 18.3456L25.8408 0.40625L11.0681 18.3456L25.8408 37.4062L0.840822 18.3456Z" fill="#535353" stroke="white"/>
                </svg>
              </button>
              <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-black">
                <svg width="27" height="38" viewBox="0 0 27 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                  <path d="M25.395 19.4582L0.39502 37.3976L15.1677 19.4582L0.39502 0.397583L25.395 19.4582Z" fill="#535353" stroke="white"/>
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3 w-full max-w-[260px]">
              <div className="w-full h-[2px] bg-gray-600 relative">
                <div className="absolute left-0 top-0 h-full bg-yellow-400 transition-all duration-500" style={{ width: `${progressWidth}%` }}/>
              </div>
              <span className="text-lg">{String(currentIndex + 1).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Preview (sliding 2 images) */}
      <div className="absolute right-0 bottom-1/4 translate-x-[6%] z-20 hidden lg:flex items-end gap-6">
        {previewImages.slice(1).map((item, idx) => (
          <div key={idx} className={`rounded-xl overflow-hidden border-2 ${idx === 0 ? "w-72 h-48 border-yellow-400" : "w-56 h-48 border-white/20 opacity-70 scale-95"}`}>
            <Image src={item.image} alt="preview" width={300} height={300} className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

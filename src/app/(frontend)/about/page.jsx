"use client";

import React from "react";
import Link from "next/link";
import CounterSection from "@/components/CounterSection";
import AboutCompany from "@/components/AboutCompany";
import FeaturedOn from "@/components/FeaturedOn";
import OurCreators from "@/components/OurCreators";
import TeamSlider from "@/components/TeamSlider";
import FAQSection from "@/components/FAQSection";

const AboutPage = () => {
  return (
    <main className="bg-white">
      <section className="relative h-[50vh] md:h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/about banner.png')`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl  md:text-5xl lg:text-6xl font-black tracking-tighter pt-16 mb-4 drop-shadow-lg">
            About Us
          </h1>
          

          <div className="flex justify-center items-center gap-3 text-lg font-medium drop-shadow-md">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            <span className="text-gray-200">About Us</span>
          </div>
        </div>
      </section>

      <div>
        <AboutCompany />
        <CounterSection />
        <TeamSlider/>
        <OurCreators />
        <FeaturedOn />
        <FAQSection/>
      </div>
    </main>
  );
};

export default AboutPage;

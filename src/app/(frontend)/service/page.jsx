"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function ServicePage({ service }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/data/service.json");
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Our Core Industries
          </h2>
          <p className="text-gray-600 text-lg pt-2">
            We deliver quality solutions across manufacturing, IT, logistics,
            travel, and construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-[10px] border border-gray-100 shadow-sm duration-700 overflow-hidden flex flex-col h-full"
            >
              <div className="absolute -right-12 -top-12 w-10 h-10 bg-[#27A0DB] rounded-full group-hover:scale-[15] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-80 z-20 pointer-events-none"></div>

              {/* 1. Image Section */}
              <div className="w-full h-60 overflow-hidden relative z-10">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={item.image || "/images/placeholder.png"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* 2. Content Section */}

              <div className="relative z-30 p-8 pt-2 flex flex-col flex-grow">
                <h3 className="text-2xl font-extrabold text-slate-800 mb-4 group-hover:text-black transition-colors duration-500">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-base leading-relaxed mb-8 group-hover:text-black transition-colors duration-500 font-medium">
                  {item.desc}
                </p>

                {/* Button */}
                <div className="mt-auto">
                  <Link href={`/service/${item.id}`}>
                    <button className="flex items-center gap-3 font-bold text-[#27A0DB] group-hover:text-black transition-all duration-500 cursor-pointer">
                      <span className="text-sm tracking-wider">
                        Explore More
                      </span>
                      <BsArrowRight
                        size={20}
                        className="group-hover:translate-x-2 transition-transform duration-500"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

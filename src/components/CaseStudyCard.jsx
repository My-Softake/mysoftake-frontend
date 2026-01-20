"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";

const CaseStudyCard = () => {
  const locale = useLocale();
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {

    fetch("/data/CaseStudyData.json")
      .then((res) => res.json())
      .then((data) => setCaseStudies(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="container mx-auto md:px-10 md:py-16 py-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {caseStudies.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] cursor-pointer"
          >

            {item.images && item.images.length > 0 && (
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
              />
            )}

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/70 to-transparent">

              <span className="text-[#27A0DB] font-semibold text-sm mb-3 tracking-wider uppercase">
                {item.duration}
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                {item.title}
              </h3>

              <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">

                <p className="text-gray-200 text-sm md:text-base border-l-4 border-[#27A0DB] pl-4 italic">
                  {item.results[0]}
                </p>
              </div>

              {/* View Case Study Button */}
              <div className="mt-6">
                <Link href={`/${locale}/case-study/${item.id}`}>
                  <button className="text-white font-bold flex items-center gap-2 group-hover:text-[#27A0DB] transition-colors cursor-pointer">
                    View Case Study
                    <span className="transform group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCard;
"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CaseStudyDetailsPage = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/CaseStudyData.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => String(item.id) === String(id));
        setCaseStudy(selected);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load case study", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-20 text-center">Loading...</div>;
  if (!caseStudy)
    return <div className="p-20 text-center text-red-500">Not Found</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}

      <div
        className="py-10 mt-10 md:py-20"
        style={{
          background: "linear-gradient(135deg, #17386f 0%, #2b59cf 100%)",
        }}
      >
        <div className="container mx-auto px-4 md:px-10">
          {/* Heading */}
          <h1 className="font-semibold text-white text-3xl sm:text-4xl md:text-5xl pt-6 md:pt-10 text-center md:text-left">
            Case Study Details
          </h1>

          {/* Divider & Text */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 mt-8">
            {/* Line */}
            <div className="h-1 w-32 sm:w-48 md:w-[450px] bg-white hidden md:block"></div>

            {/* Description */}
            <p className="font-normal text-sm sm:text-base text-white max-w-xl text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              error quae autem animi pariatur officia eum obcaecati harum
              nesciunt deleniti!
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-10 py-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#001b3d] mb-12">
          {caseStudy.title}
        </h2>

        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b pb-12">
          <div>
            <h4 className="text-[#e85a2a] font-bold uppercase text-sm mb-2">
              Total Duration
            </h4>
            <p className="text-gray-700">{caseStudy.duration}</p>
          </div>
          <div>
            <h4 className="text-[#e85a2a] font-bold uppercase text-sm mb-2">
              Estimated Investment
            </h4>
            <p className="text-gray-700">{caseStudy.investment}</p>
          </div>
          <div>
            <h4 className="text-[#e85a2a] font-bold uppercase text-sm mb-2">
              Project Target
            </h4>
            <p className="text-gray-700">{caseStudy.target}</p>
          </div>
        </div>
        {/* Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-[#001b3d] mb-4">Overview</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {caseStudy.overview}
            </p>
          </div>

          <div className="relative w-full h-[260px] lg:h-[300px] overflow-hidden">
            <Image
              src={caseStudy.images[0]}
              alt="Overview"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center max-sm:mt-5">
          <div>
            <h3 className="text-3xl font-bold text-[#001b3d] mb-4">
              Challenges
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {caseStudy.challenges}
            </p>
          </div>

          <div className="relative w-full h-[260px] lg:h-[300px] overflow-hidden mt-6">
            <Image
              src={caseStudy.images[1]}
              alt="Challenges"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center max-sm:mt-5">
          <div>
            <h3 className="text-3xl font-bold text-[#001b3d] mb-4">Approach</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {caseStudy.approach}
            </p>
          </div>

          <div className="relative w-full h-[260px] lg:h-[300px] overflow-hidden mt-6">
            <Image
              src={caseStudy.images[2]}
              alt="Approach"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Result */}
        <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-16 items-center max-sm:mt-5">
          <div>
            <h3 className="text-3xl font-bold text-[#001b3d] mb-6">Result</h3>
            <ul className="space-y-4">
              {caseStudy.results.map((res, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 font-bold text-[#001b3d]">✓</span>
                  <p className="text-gray-700 text-lg">{res}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailsPage;

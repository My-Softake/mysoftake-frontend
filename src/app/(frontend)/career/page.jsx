"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CareerPage = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    fetch("/data/CareerData.json")
      .then((res) => {
  
        return res.json();
      })
      .then((data) => {
    
        setCaseStudies(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="bg-gray-50">
      {/* HERO */}

      <section className="relative h-[50vh] md:h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/about banner.png')`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 pt-20 md:pt-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 drop-shadow-lg md:leading-[70px]">
            Build Your Career with <br /> My Softake
          </h1>
          <p className="text-white/90 mt-4 max-w-2xl mx-auto">
            Join our team of innovators and help shape the future through
            technology.
          </p>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Join My Softake?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Growth-Oriented Culture",
              desc: "We believe in learning, innovation, and continuous growth.",
            },
            {
              title: "Flexible Work",
              desc: "Remote-friendly environment with flexible working hours.",
            },
            {
              title: "Impactful Projects",
              desc: "Work on real-world projects that create meaningful impact.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-xl shadow bg-gray-50 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <div className=" bg-white">
        <div className="container mx-auto px-6">
          <h3 className="uppercase font-semibold text-[20px] border-b-3 border-[#27A0DB] w-38 pb-2">
            Join Our Team
          </h3>
          <h2 className="text-5xl font-semibold pt-4">Grow Your Career</h2>

          <div className="container mx-auto px-4 py-12  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {caseStudies.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#F5F5F5] border border-gray-300 shadow-sm rounded-sm p-8 md:p-12 w-full max-w-[700px] relative transition-all"
                >
                  {/* Top Badge (Full Time/Category) */}
                  <div className="absolute top-0 left-0 bg-[#0A0A23] text-white px-6 py-3 text-sm font-medium">
                   {item.jobType}
                  </div>

                  <div className="mt-8">
                    

                    {/* Heading */}
                    <h2 className="text-3xl md:text-3xl font-bold text-[#0A1A3F] mb-6 leading-tight">
                      {item.jobTitle}
                    </h2>

                    {/* Description / Result */}
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
                      {item.description}
                    </p>

                    {/* Dynamic Button */}
                   <Link href={`/career/${item.id}`}>
                    <button className="bg-[#27A0DB]   text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center gap-3 transition-colors group">
                      Apply Now
                      <span className="bg-white text-[#27A0DB] rounded-full p-1 transition-transform group-hover:translate-x-1">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </button>
                   
                   </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HIRING PROCESS */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Hiring Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Apply Online",
            "Initial Screening",
            "Technical Interview",
            "Final Selection",
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#2b59cf] text-white font-bold mb-4">
                {i + 1}
              </div>
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
         style={{
            background: "linear-gradient(135deg, #17386f 0%, #2b59cf 100%)",
          }}
      >
        <h2 className="text-3xl font-semibold text-white">
          Ready to Join Our Team?
        </h2>
        <p className="text-white/90 mt-4">
          Send your CV and start your journey with My Softake.
        </p>

        <button className="mt-8 px-12 py-4 bg-white text-[#17386f] font-semibold rounded-md hover:bg-gray-100 transition">
          careers@mysoftake.com
        </button>
      </section>
    </div>
  );
};

export default CareerPage;

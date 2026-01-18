"use client";
import GetInTouch from "@/components/GetInTouch";
import ProductCard from "@/components/sheard/ProductCard";
import React, { useEffect, useState } from "react";
 

const ProjectPage = () => {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch categories
  useEffect(() => {
    fetch("/data/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Fetch projects
  useEffect(() => {
    fetch("/data/projectdata.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  // Filtered projects
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-30">
      <div className="container mx-auto px-10">
        <h3 className="font-bold text-center text-4xl">Our Letest Project</h3>
        <p className="text-base font-normal text-center w-full max-sm:px-3 md:w-[500px] mx-auto pt-5">
          Investigationes demonstraverunt lectores legere me lius quod ii legunt
          saepius. Claritas est etiam processus dynamicus, qui sequitur
          mutationem consuetudium.
        </p>

        {/* Category Buttons */}
        <div className=" flex flex-wrap justify-center gap-3 mt-8 mb-10">
          <button
            className={`px-4 py-2 rounded-full font-medium transition ${
              selectedCategory === "All"
                ? "bg-[#00B3EC] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-[#00B3EC] hover:text-white"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCategory === cat.title
                  ? "bg-[#00B3EC] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-[#00B3EC] hover:text-white"
              }`}
              onClick={() => setSelectedCategory(cat.title)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="">
          <ProductCard projects={filteredProjects} />
        </div>
      </div>
      <div className="">
        <GetInTouch/>
      </div>
    </div>
  );
};

export default ProjectPage;

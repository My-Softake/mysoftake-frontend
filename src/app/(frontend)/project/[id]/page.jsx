"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
 
import { 
  HiOutlineCalendar, 
  HiOutlineTag, 
  HiOutlineUserCircle, 
  HiOutlineCheckCircle, 
  HiOutlineArrowLeft,
  HiOutlineLightBulb,
  HiOutlineDesktopComputer 
} from "react-icons/hi";
 
import Button from "@/components/sheard/Button";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("/data/projectdata.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        const foundProject = data.find((p) => p.id === parseInt(id));
        setProject(foundProject);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center font-bold text-xl">Loading...</div>;
  if (!project) return <div className="h-screen flex flex-col items-center justify-center gap-4">
    <h1 className="text-2xl font-bold">Project Not Found!</h1>
    <Link href="/" className="text-blue-500 underline">Back to home</Link>
  </div>;

  return (
    <main className="bg-[#f9fafb] min-h-screen pb-20 pt-26">
     

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-md">
              <Image
                src={project?.image || "/fallback.jpg"}
                alt={project?.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className=" ">
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                {project?.title}
              </h1>
              <p className="font-normal text-base pb-5">{project?.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project?.tags?.map((tag, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project?.longDescription || project?.description}
                </p>
              </div>
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">You May Also Know How it Uses In IT Field?</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project?.longDescription || project?.description}
                </p>
              </div>
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Result & Benefits of Project</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project?.longDescription || project?.description}
                </p>
              </div>

              {/* Challenges Section */}
              {project?.challenges && (
                <section className="mb-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <HiOutlineLightBulb className="text-yellow-500" /> Key Challenges
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.challenges.map((item, index) => (
                      <div key={index} className="flex gap-3 p-4 bg-gray-200 rounded-xl border border-gray-100">
                        <HiOutlineCheckCircle className="text-blue-600 text-xl flex-shrink-0" />
                        <p className="text-gray-700 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Tech Stack Section */}
              {project?.techStack && (
                <section className="mb-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <HiOutlineDesktopComputer className="text-purple-600" /> Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, i) => (
                      <div key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-lg font-semibold text-gray-700">
                        {tech}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project?.results && (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mt-10">
                  <h4 className="font-bold text-green-900 flex items-center gap-2 mb-2">
                    <HiOutlineCheckCircle className="text-xl" /> Project Outcome
                  </h4>
                  <p className="text-green-800">{project.results}</p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-10">
              <h3 className="text-xl font-bold mb-6 border-b pb-4">Details</h3>
              <div className="space-y-6">
                <InfoItem icon={<HiOutlineUserCircle />} label="Client" value={project?.client} />
                <InfoItem icon={<HiOutlineTag />} label="Category" value={project?.category} />
                <InfoItem icon={<HiOutlineCalendar />} label="Date" value={project?.date} />
                <InfoItem icon={<HiOutlineCheckCircle />} label="Status" value={project?.status} isStatus />
              </div>
              <Link href="/contact" className="">
              
              <Button className="w-full mt-10 !bg-blue-600 !text-white py-4 rounded-xl font-bold cursor-pointer">
                Start Similar Project
              </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

const InfoItem = ({ icon, label, value, isStatus }) => (
  <div className="flex items-start gap-4">
    <div className="text-2xl text-blue-600 mt-1">{icon}</div>
    <div>
      <p className="text-[10px] uppercase text-gray-400 font-black">{label}</p>
      <p className={`font-bold ${isStatus ? "text-green-600" : "text-gray-900"}`}>
        {value || "Not specified"}
      </p>
    </div>
  </div>
);

export default ProjectDetails;
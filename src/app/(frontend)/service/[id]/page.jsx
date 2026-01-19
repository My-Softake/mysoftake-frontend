"use client";

import FAQSection from "@/components/FAQSection";
import Image from "next/image";
import { useEffect, useState, use } from "react";
import { FaCheckCircle, FaTools, FaRegLightbulb } from "react-icons/fa";

const ServiceDetails = ({ params }) => {
  const resolvedParams = use(params);
  const serviceId = resolvedParams.id;

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch("/data/service.json");
        const data = await res.json();

        const selected = data.find(
          (s) => s.id.toString() === serviceId.toString()
        );

        setService(selected || null);
      } catch (error) {
        console.error("Error fetching service details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (serviceId) {
      fetchService();
    }
  }, [serviceId]);

  if (loading)
    return (
      <p className="text-center py-20 text-gray-500">
        Loading service details...
      </p>
    );

  if (!service)
    return (
      <p className="text-center py-20 text-red-500">
        Service not found! (ID: {serviceId})
      </p>
    );

  return (
    <div className="container mx-auto px-10 pb-10 pt-26">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            {service.headline}
          </h2>
          <p className="text-gray-600 text-lg">{service.desc}</p>
        </div>
        <div className="md:w-1/2 relative h-[330px] md:h-[400px] w-full">
          <Image
            src={service.image || "/images/placeholder.png"}
            alt={service.title}
            fill
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>

      {/* Why Choose Us */}

      <div className="">
        <h3 className="text-4xl font-semibold mb-4 flex items-center gap-2">
          Overview
        </h3>
        <p className="text-gray-700">{service.overview_one}</p>
     
        <p className="text-gray-700 pt-2">{service.overview_two}</p>
      </div>

      <div className="pt-5">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          Why Choose Us
        </h3>
        <p className="text-gray-700">{service.why_choose_us}</p>
        <p className="text-gray-700 pt-2">{service.choce_one}</p>
     
      </div>

      {/* Process */}
      <div className="mb-12 pt-10">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          Our Process
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {service.process?.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          Benefits
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {service.benefits?.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </div>

     <div className="">
      <FAQSection/>
     </div>
       
    </div>
  );
};

export default ServiceDetails;

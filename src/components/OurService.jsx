import {
  FaIndustry,
  FaGlobe,
  FaLaptopCode,
  FaTruckMoving,
  FaPlaneDeparture,
  FaHardHat,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Information & technology",
    description:
      "Information technology services provide secure, scaleable solutions that drive efficiency, reliability, and business growth through smart use of technology.",
    icon: <FaIndustry />,
  },
  {
    id: 2,
    title: "Export & Import",
    description:
      "Export and import services enable seamless global trade by ensuring efficient, compliant, and reliable cross-border movement of goods.",
    icon: <FaGlobe />,
  },
  {
    id: 3,
    title: "Manufacturing & Production",
    description:
      "Manufacturing & Production involve transforming raw materials into high-quality finished goods through efficient processes, technology, and skilled operations.",
    icon: <FaLaptopCode />,
  },
  {
    id: 4,
    title: "Transport & logistic",
    description:
      "Transport & Logistics ensure the efficient movement, storage, and delivery of goods through coordinated transportation and supply chain management systems.",
    icon: <FaTruckMoving />,
  },
  {
    id: 5,
    title: "Travel & Tourism",
    description:
      "Travel & Tourism involves facilitating journeys and experiences, connecting people to destinations while managing services, hospitality, and cultural exploration efficiently.",
    icon: <FaPlaneDeparture />,
  },
  {
    id: 6,
    title: "Construction & Infrastructure",
    description:
      "Construction & Infrastructure delivers sustainable, high-quality structures that drive urban growth and development.",
    icon: <FaHardHat />,
  },
];

const OurService = () => {
  return (
    <section className="py-16 bg-[#F3FBFD]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Our Services
          </h2>
          <p className="mt-3 text-black max-w-2xl mx-auto">
            We provide diversified services to support your business growth with
            reliability and excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-card group h-full flex flex-col justify-start"
            >
              <h3 className="text-2xl font-semibold text-white mb-3 pt-5">
                {service.title}
              </h3>
              <p className="text-white text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurService;

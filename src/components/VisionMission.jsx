import Image from "next/image";

const VisionMission = () => {
  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-10">
        {/* Vision Section */}
        <div className="flex flex-col md:flex-row  gap-20 mb-10">
          <div className="w-full md:w-1/2 space-y-4 order-2 md:order-1">
            <h3 className="font-semibold text-4xl">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed text-justify md:text-left">
              MY SOFTAKE PLC envisions becoming a lead-ing global force in
              innovative technology and business solutions. Our vision is to
              create a smarter, more connected future where organi-zations can
              grow confidently with the support of intelligent, efficient, and
              sustainable systems. Through continuous innovation,
              customer-cen-tric development, and a commitment to excel-lence, we
              strive to empower businesses to transform, thrive, and achieve
              long-term success in an ever-evolving digital world.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#27A0DB] rounded-lg -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-500"></div>
              <Image
                src="/images/vision.png"
                alt="Our Vision"
                width={300}
                height={300}
                className="rounded-lg  object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-gray-900 rounded-lg -z-10 group-hover:bottom-0 group-hover:left-0 transition-all duration-500"></div>
              <Image
                src="/images/mision.png"
                alt="Our Mission"
                width={300}
                height={300}
                className="rounded-lg  object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="font-semibold text-4xl">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed text-justify md:text-left">
              MY SOFTAKE PLC. is dedicated to delivering high-quality,
              innovative, and reliable solutions that meet the evolving needs of
              businesses across diverse industries. Our mission is to enhance
              operational efficiency, strengthen digital capabilities, and
              provide value-driven services that support sustain-able growth. We
              work with integrity, professional-ism, and a customer-first
              mindset, ensuring every solution we deliver contributes to
              long-term success, stronger performance, and meaningful impact for
              our clients and communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

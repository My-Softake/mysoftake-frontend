import Image from "next/image";
import React from "react";

const OurPartner = () => {
  return (
    <div className="bg-[#F5F5FA] md:py-10 py-5">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 bg-white rounded-2xl">
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-black text-center py-8 md:py-10">
          Our Partners
        </h3>

        <div className="pb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          <Image
            src="/images/partner one.png"
            alt="partner one"
            width={220}
            height={200}
            className="object-contain w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px]"
          />

          <Image
            src="/images/partner two.png"
            alt="partner two"
            width={220}
            height={200}
            className="object-contain w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px]"
          />

          <Image
            src="/images/partner three.png"
            alt="partner three"
            width={220}
            height={200}
            className="object-contain w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px]"
          />

          <Image
            src="/images/partner four.png"
            alt="partner four"
            width={220}
            height={200}
            className="object-contain w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px]"
          />

          <Image
            src="/images/partner five.png"
            alt="partner five"
            width={220}
            height={200}
            className="object-contain w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px]"
          />
           
        </div>
      </div>
    </div>
  );
};

export default OurPartner;

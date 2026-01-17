import CaseStudts from "@/components/CaseStudts";
import CaseStudyCard from "@/components/CaseStudyCard";
import FAQSection from "@/components/FAQSection";
import GetInTouch from "@/components/GetInTouch";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="conainer mx-auto px-10 md:pt-30 pt-24">
        <div className="">
          <h3 className="text-4xl font-semibold text-black text-center">
            Case Studies
          </h3>
          <p className="font-normal text-base text-black text-center md:w-[550px] w-full mx-auto pt-2">
            My Soft Take simplifies complex business challenges with smart,
            intuitive technology—helping businesses grow faster and smarter.
          </p>
        </div>
        <div className="">
          <CaseStudyCard />
          <FAQSection />
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default page;

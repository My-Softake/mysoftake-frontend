"use client"

import CaseStudyCard from "@/components/CaseStudyCard";
import FAQSection from "@/components/FAQSection";
import GetInTouch from "@/components/GetInTouch";
import { useTranslations } from "next-intl";
import React from "react";

const CaseStudy = () => {
   const t = useTranslations("CaseStudy");
  return (
    <div className="">
      <div className="conainer mx-auto px-10 md:pt-30 pt-24">
        <div className="">
          <h3 className="text-4xl font-semibold text-black dark:text-white text-center">
             {t("title")}
          </h3>
          <p className="font-normal text-base text-black dark:text-white text-center md:w-[550px] w-full mx-auto pt-2">
         {t("description")}
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

export default CaseStudy;


// Case Studies  

//     My Soft Take simplifies complex business challenges with smart,
//             intuitive technology—helping businesses grow faster and smarter.
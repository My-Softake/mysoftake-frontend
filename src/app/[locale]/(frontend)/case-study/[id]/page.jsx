"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const CaseStudyDetailsPage = () => {
  const { id } = useParams();
  const t = useTranslations("CaseStudy");
  const locale = useLocale();

  // Helper to safely get arrays from translations
  const getArray = (key) => {
    try {
      const raw = t.raw(key);
      return Array.isArray(raw) ? raw : [];
    } catch (error) {
      console.warn(`Could not resolve ${key} in messages for locale ${locale}. Error: ${error.message}`);
      return [];
    }
  };

  // Get case study data from translations
  const caseStudy = {
    title: t(`items.${id}.title`),
    duration: t(`items.${id}.duration`),
    investment: t(`items.${id}.investment`),
    target: t(`items.${id}.target`),
    overview: t(`items.${id}.overview`),
    challenges: t(`items.${id}.challenges`),
    approach: t(`items.${id}.approach`),
    results: getArray(`items.${id}.results`),
    images: getArray(`items.${id}.images`)
  };

  // Check if case study exists by trying to get its title
  let caseStudyExists = true;
  try {
    t(`items.${id}.title`);
  } catch {
    caseStudyExists = false;
  }

  if (!caseStudyExists || !caseStudy.title) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">{t("notFound")}</h1>
      </div>
    );
  }

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
            {t("caseStudyDetails")}
          </h1>

          {/* Divider & Text */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 mt-8">
            {/* Line */}
            <div className="h-1 w-32 sm:w-48 md:w-[450px] bg-white hidden md:block"></div>

            {/* Description */}
            <p className="font-normal text-sm sm:text-base text-white max-w-xl text-center md:text-left">
              {t("bannerDescription")}
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
              {t("totalDuration")}
            </h4>
            <p className="text-gray-700">{caseStudy.duration}</p>
          </div>
          <div>
            <h4 className="text-[#e85a2a] font-bold uppercase text-sm mb-2">
              {t("estimatedInvestment")}
            </h4>
            <p className="text-gray-700">{caseStudy.investment}</p>
          </div>
          <div>
            <h4 className="text-[#e85a2a] font-bold uppercase text-sm mb-2">
              {t("projectTarget")}
            </h4>
            <p className="text-gray-700">{caseStudy.target}</p>
          </div>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center mb-6">
          <div>
            <h3 className="text-3xl font-bold text-[#001b3d] mb-4">{t("overview")}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {caseStudy.overview}
            </p>
          </div>

          {caseStudy.images && caseStudy.images.length > 0 && (
            <div className="relative w-full h-[260px] lg:h-[300px] overflow-hidden rounded-lg">
              <Image
                src={caseStudy.images[0]}
                alt={t("overview")}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center mb-6 max-sm:mt-5">
          <div>
            <h3 className="text-3xl font-bold text-[#001b3d] mb-4">
              {t("challenges")}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {caseStudy.challenges}
            </p>
          </div>

          {caseStudy.images && caseStudy.images.length > 1 && (
            <div className="relative w-full h-[260px] lg:h-[300px] overflow-hidden rounded-lg mt-6">
              <Image
                src={caseStudy.images[1]}
                alt={t("challenges")}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center mb-10 max-sm:mt-5">
          <div>
            <h3 className="text-3xl font-bold text-[#001b3d] mb-4">{t("approach")}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {caseStudy.approach}
            </p>
          </div>

          {caseStudy.images && caseStudy.images.length > 2 && (
            <div className="relative w-full h-[260px] lg:h-[300px] overflow-hidden rounded-lg mt-6">
              <Image
                src={caseStudy.images[2]}
                alt={t("approach")}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Result */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 items-center max-sm:mt-5">
          <div>
            <h3 className="text-3xl font-bold text-[#001b3d] mb-6">{t("result")}</h3>
            <ul className="space-y-4">
              {caseStudy.results && caseStudy.results.map((res, idx) => (
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

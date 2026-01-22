"use client";

import React, { useState } from "react";
import { HiOutlineCalendarDays, HiOutlineVideoCamera } from "react-icons/hi2";
import { IoPlayCircleOutline, IoTimeOutline } from "react-icons/io5";
import { LuLink2 } from "react-icons/lu";
import { useTranslations } from "next-intl";

// Components
import BookingWidget from "@/components/BookingWidget";
import Availability from "@/components/Availability";

const Schedule = () => {
  const t = useTranslations("SchedulePage");
  const [activeTab, setActiveTab] = useState("schedule");

  const sidebarItems = [
    { id: "schedule", label: t("schedule"), icon: <LuLink2 size={24} /> },
    {
      id: "meetings",
      label: t("meetings"),
      icon: <HiOutlineVideoCamera size={24} />,
    },
    {
      id: "availability",
      label: t("availability"),
      icon: <IoTimeOutline size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-12">
          {/* --- LEFT SIDEBAR --- */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-2 lg:sticky lg:top-28 lg:h-fit">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-lg font-medium transition-all ${
                  activeTab === item.id
                    ? "text-[#1CA6F0] bg-blue-50/60 shadow-sm"
                    : "text-slate-500 hover:text-slate-900 hover:bg-gray-50"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </aside>

          {/* --- RIGHT MAIN CONTENT AREA --- */}
          <main className="flex-1">
            {/* 1. SCHEDULE TAB */}
            {activeTab === "schedule" && (
              <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out">
                {/* Live Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600 shadow-sm mb-10">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  {t("liveBadge")}
                </div>

                {/* Hero Section */}
                <h1 className="max-w-4xl text-5xl md:text-[4.2rem] leading-[1.05] font-extrabold text-black mb-8 tracking-tight">
                  {t("heroTitle")}
                </h1>

                <p className="max-w-2xl text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
                  {t("heroDesc")}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1CA6F0] hover:bg-[#1691D3] text-white text-lg font-bold px-10 py-4 rounded-2xl transition-all shadow-lg hover:shadow-[#1CA6F0]/20 active:scale-95">
                    <HiOutlineCalendarDays size={26} />
                    {t("createLink")}
                  </button>
                  <button className="inline-flex items-center gap-3 text-gray-800 hover:text-[#1CA6F0] cursor-pointer text-lg font-semibold transition-colors group">
                    <IoPlayCircleOutline
                      size={32}
                      className="text-gray-400 group-hover:text-[#1CA6F0] transition-colors"
                    />
                    {t("watchDemo")}
                  </button>
                </div>

                <div className="mt-5 flex items-start gap-10">
                  <div>
                    <h3 className="font-normal text-2xl text-black">{t("smartRouting")}</h3>
                    <p className="font-normal text-base text-gray-600 w-[200px] pt-4">
                      {t("smartRoutingDesc")}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-normal text-2xl text-black">{t("meetingPolls")}</h3>
                    <p className="font-normal text-base text-gray-600 w-[200px] pt-4">
                      {t("meetingPollsDesc")}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-normal text-2xl text-black">{t("availabilityRules")}</h3>
                    <p className="font-normal text-base text-gray-600 w-[200px] pt-4">
                      {t("availabilityRulesDesc")}
                    </p>
                  </div>
                </div>

                {/* Booking Widget */}
                <div className="w-full">
                  <BookingWidget />
                </div>
              </div>
            )}

            {/* 2. MEETINGS TAB */}
            {activeTab === "meetings" && (
              <div className="animate-in fade-in duration-500">
                <div className="mb-10">
                  <h2 className="text-4xl font-bold text-black mb-3">
                    {t("meetingsTitle")}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {t("meetingsDesc")}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-[2.5rem] p-24 text-center border-2 border-dashed border-slate-200">
                  <div className="inline-flex p-6 rounded-3xl bg-white text-[#1CA6F0] shadow-sm mb-6">
                    <HiOutlineVideoCamera size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {t("noMeetings")}
                  </h3>
                  <p className="text-gray-600 max-w-xs mx-auto">
                    {t("noMeetingsDesc")}
                  </p>
                </div>
              </div>
            )}

            {/* 3. AVAILABILITY TAB */}
            {activeTab === "availability" && (
              <div className="container mx-auto px-10">
                <Availability />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

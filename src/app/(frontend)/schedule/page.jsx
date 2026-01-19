"use client";

import React, { useState } from "react";
import { HiOutlineCalendarDays, HiOutlineVideoCamera } from "react-icons/hi2";
import { IoPlayCircleOutline, IoTimeOutline } from "react-icons/io5";
import { LuLink2 } from "react-icons/lu";

// Components
import BookingWidget from "@/components/BookingWidget";
import Availability from "@/components/Availability";

const Schedule = () => {
  const [activeTab, setActiveTab] = useState("schedule");

  const sidebarItems = [
    { id: "schedule", label: "Schedule", icon: <LuLink2 size={24} /> },
    {
      id: "meetings",
      label: "Meetings",
      icon: <HiOutlineVideoCamera size={24} />,
    },
    {
      id: "availability",
      label: "Availability",
      icon: <IoTimeOutline size={24} />,
    },
  ];

  return (
    // Pura page-ta ke bg color diye wrap kora
    <div className="min-h-screen bg-white dark:bg-black pt-28 pb-20">
      {/* --- MAIN CONTAINER --- */}
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
                    ? "text-[#1CA6F0] bg-blue-50/60 dark:bg-blue-500/10 shadow-sm   dark:border-blue-500/20"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-zinc-900"
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
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm mb-10">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  Live scheduling workspace
                </div>

                {/* Hero Section */}
                <h1 className="max-w-4xl text-5xl md:text-[4.2rem] leading-[1.05] font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
                  Schedule meetings without the back-and-forth.
                </h1>

                <p className="max-w-2xl text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                  Collect meeting polls, and keep every business conversation
                  exactly where it belongs on your calendar.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-6 ">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1CA6F0] hover:bg-[#1691D3] text-white text-lg font-bold px-10 py-4 rounded-2xl transition-all shadow-lg hover:shadow-[#1CA6F0]/20 active:scale-95">
                    <HiOutlineCalendarDays size={26} />
                    Create scheduling link
                  </button>
                  <button className="inline-flex items-center gap-3 text-slate-800 dark:text-white hover:text-[#1CA6F0] cursor-pointer text-lg font-semibold transition-colors group">
                    <IoPlayCircleOutline
                      size={32}
                      className="text-slate-400 group-hover:text-[#1CA6F0] transition-colors"
                    />
                    Watch 90s demo
                  </button>
                </div>
                <div className="mt-5 flex items-center gap-10">
                  <div className="">
                    <h3 className="font-normal text-2xl">Smart routing</h3>
                    <p className="font-normal text-base w-[200px] pt-4">
                      Round‑robin and collective scheduling for teams, with time
                      zones handled automatically.
                    </p>
                  </div>
                  <div className="">
                    <h3 className="font-normal text-2xl">Meeting polls</h3>
                    <p className="font-normal text-base w-[200px] pt-4">
                      Let guests vote on times and confirm the winner with one
                      click.
                    </p>
                  </div>
                  <div className="">
                    <h3 className="font-normal text-2xl">Availability rules</h3>
                    <p className="font-normal text-base w-[200px] pt-4">
                      Define working hours, buffers, and caps per day to protect
                      your focus time.
                    </p>
                  </div>
                </div>

                {/* Booking Widget (Max width control for visual balance) */}
                <div className="w-full">
                  <BookingWidget />
                </div>
              </div>
            )}

            {/* 2. MEETINGS TAB */}
            {activeTab === "meetings" && (
              <div className="animate-in fade-in duration-500">
                <div className="mb-10">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
                    Meetings
                  </h2>
                  <p className="text-lg text-slate-500">
                    Manage your past and upcoming syncs.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-zinc-900/50 rounded-[2.5rem] p-24 text-center border-2 border-dashed border-slate-200 dark:border-white/5">
                  <div className="inline-flex p-6 rounded-3xl bg-white dark:bg-zinc-800 text-[#1CA6F0] shadow-sm mb-6">
                    <HiOutlineVideoCamera size={48} />
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white mb-2">
                    No meetings yet
                  </h3>
                  <p className="text-slate-500 max-w-xs mx-auto">
                    Your scheduled appointments will show up here once
                    confirmed.
                  </p>
                </div>
              </div>
            )}

            {/* 3. AVAILABILITY TAB */}
            {activeTab === "availability" && (
              <div className="container mx-auto px-10">
                <Availability/>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Schedule;





// <div className="animate-in fade-in duration-500">
//                 <div className="mb-10">
//                   <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
//                     Availability
//                   </h2>
//                   <p className="text-lg text-slate-500">
//                     Set your global timezone and working windows.
//                   </p>
//                 </div>

//                 <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-3xl p-10 shadow-sm">
//                   <div className="flex items-center justify-between border-b pb-6 mb-6 dark:border-white/5">
//                     <div>
//                       <p className="text-sm font-bold uppercase tracking-wider text-[#1CA6F0] mb-1">
//                         Weekly Hours
//                       </p>
//                       <p className="text-xl font-medium dark:text-white">
//                         Monday — Friday, 09:00 - 17:00
//                       </p>
//                     </div>
//                     <button className="px-6 py-2.5 bg-slate-900 dark:bg-white dark:text-black text-white rounded-xl font-bold hover:opacity-90 transition">
//                       Edit
//                     </button>
//                   </div>
//                   <p className="text-slate-500 text-sm italic">
//                     Timezone: (GMT+06:00) Dhaka, Bangladesh
//                   </p>
//                 </div>
//               </div>
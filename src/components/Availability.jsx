"use client";
import React, { useState, useEffect } from "react";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { useTranslations } from "next-intl";

export default function Availability() {
  const t = useTranslations("SchedulePage.Availability");
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 10));
  const [allSchedules, setAllSchedules] = useState(null);
  const [displayData, setDisplayData] = useState([]);

  // Fetch JSON Data
  useEffect(() => {
    fetch("/data/AbailityData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllSchedules(data);
        updateDisplayData(currentDate, data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Update UI logic
  const updateDisplayData = (date, data) => {
    if (!data) return;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dateStr = `${year}-${month}-${day}`;

    if (data[dateStr]) {
      setDisplayData(data[dateStr]);
    } else {
      setDisplayData([]);
    }
  };

  const handleWeekView = () => {
    updateDisplayData(currentDate, allSchedules);
  };

  const handleNext = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(currentDate.getDate() + 7);
    setCurrentDate(nextWeek);
    updateDisplayData(nextWeek, allSchedules);
  };

  const handlePrev = () => {
    const prevWeek = new Date(currentDate);
    prevWeek.setDate(currentDate.getDate() - 7);
    setCurrentDate(prevWeek);
    updateDisplayData(prevWeek, allSchedules);
  };

  const handleSync = () => {
    const today = new Date(2026, 2, 10);
    setCurrentDate(today);
    updateDisplayData(today, allSchedules);
  };

  const formatDateRange = () => {
    const end = new Date(currentDate);
    end.setDate(currentDate.getDate() + 6);
    const options = { month: "short", day: "numeric" };
    return `${currentDate.toLocaleDateString("en-US", options)} – ${end.toLocaleDateString("en-US", options)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-between mt-10 mb-10">
        <div>
          <p className="text-gray-600 text-lg">{t("description")}</p>
          <p className="text-gray-600 text-lg">{t("description2")}</p>
        </div>
        <button
          onClick={handleSync}
          className="bg-[#0077B6] text-white px-7 py-3 rounded-xl flex items-center gap-3 hover:bg-[#005F92] transition-all shadow-md active:scale-95"
        >
          <HiOutlineCalendarDays size={26} />
          <span className="text-left leading-tight font-semibold text-[15px]">Sync <br /> calendars</span>
        </button>
      </div>

      {/* Controls Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-4">
          <button
            onClick={handleWeekView}
            className="flex items-center gap-2 px-6 py-3 bg-[#0077B6] text-white rounded-xl font-bold text-sm shadow-sm active:bg-[#003594]"
          >
            <HiOutlineCalendarDays size={20} /> {t("weekView")}
          </button>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex gap-5">
            <button onClick={handlePrev} className="p-3 bg-[#003594] rounded-xl text-white border-r">
              <IoIosArrowBack size={22} />
            </button>
            <button onClick={handleNext} className="p-3 bg-[#003594] rounded-xl text-white">
              <IoIosArrowForward size={22} />
            </button>
          </div>
          <span className="font-bold text-black text-xl min-w-[150px] text-right">{formatDateRange()}</span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-[24px] overflow-hidden shadow-xl shadow-slate-200/50">
        <div className="grid grid-cols-6 border-b border-gray-300 bg-white">
          <div className="p-6 text-center font-bold text-gray-400 border-r text-sm tracking-wider">IST</div>
          {displayData.map((item, i) => (
            <div key={i} className={`p-6 text-center font-bold text-black text-[15px] ${i !== 4 ? "border-r border-gray-300" : ""}`}>
              {item.day} {item.date}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-6 min-h-[550px]">
          <div className="border-r border-gray-300 flex flex-col justify-between p-6 text-gray-600 text-sm font-bold bg-slate-50/30">
            <span>09:00</span>
            <span>11:00</span>
            <span>13:00</span>
            <span>15:00</span>
            <span>17:00</span>
          </div>

          {displayData.length > 0
            ? displayData.map((dayData, i) => (
                <div key={i} className={`relative p-3 ${i !== 4 ? "border-r border-gray-300" : ""} ${dayData.day === "Fri" ? "bg-[#FDFDFD]" : ""}`}>
                  {dayData.events.map((event, idx) => (
                    <div
                      key={idx}
                      className={`mb-5 p-4 rounded-xl border-[1.5px] flex items-center gap-3 font-bold text-sm shadow-sm
                        ${event.type === "blocked" ? "bg-pink-50/80 border-pink-200 text-gray-700" : ""}
                        ${event.type === "free" ? "bg-emerald-50/80 border-emerald-100 text-gray-700 mt-14" : ""}
                        ${event.type === "meeting" ? "bg-sky-50/80 border-sky-100 text-gray-700 mt-2" : ""}
                        ${event.type === "sync" ? "bg-indigo-50/80 border-indigo-100 text-gray-700 mt-24" : ""}
                      `}
                    >
                      <span
                        className={`w-1.5 h-7 rounded-full
                          ${event.type === "blocked" ? "bg-pink-400" : "bg-sky-400"}
                          ${event.type === "free" ? "bg-emerald-400" : ""}
                          ${event.type === "sync" ? "bg-indigo-400" : ""}
                        `}
                      ></span>
                      <span className="truncate">{event.title}</span>
                    </div>
                  ))}

                  {dayData.day === "Fri" && dayData.events.length === 0 && (
                    <div className="absolute inset-3 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center text-center p-6 bg-slate-50/20">
                      <p className="text-gray-600 font-bold text-[15px] leading-snug">{t("noMeetingsFree")}</p>
                    </div>
                  )}
                </div>
              ))
            : (
              <div className="col-span-5 flex flex-col items-center justify-center text-gray-300 gap-2 italic">
                <p>{t("noSchedule")}</p>
              </div>
            )}
        </div>
      </div>

      {/* Legend Footer */}
      <div className="mt-8 flex gap-10 px-2">
        <div className="flex items-center gap-3 text-gray-600 font-bold text-sm uppercase tracking-wide">
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 ring-4 ring-white shadow-sm"></span> {t("bookableSlots")}
        </div>
        <div className="flex items-center gap-3 text-gray-600 font-bold text-sm uppercase tracking-wide">
          <span className="w-3.5 h-3.5 rounded-full bg-sky-400 ring-4 ring-white shadow-sm"></span> {t("existingMeetings")}
        </div>
        <div className="flex items-center gap-3 text-gray-600 font-bold text-sm uppercase tracking-wide">
          <span className="w-3.5 h-3.5 rounded-full bg-pink-400 ring-4 ring-white shadow-sm"></span> {t("blockedTime")}
        </div>
      </div>
    </div>
  );
}

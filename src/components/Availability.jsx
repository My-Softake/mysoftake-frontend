"use client";
import React, { useState, useEffect } from "react";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";

export default function Availability() {
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
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    
    // Check if data exists for this specific week/date
    if (data[dateStr]) {
      setDisplayData(data[dateStr]);
    } else {
      setDisplayData([]); 
    }
  };

  // Week View Logic: Eta call korle current date er soptaho refresh hobe
  const handleWeekView = () => {
    updateDisplayData(currentDate, allSchedules);
    console.log("Loading Full Week View...");
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
    const options = { month: 'short', day: 'numeric' };
    return `${currentDate.toLocaleDateString('en-US', options)} – ${end.toLocaleDateString('en-US', options)}`;
  };

  return (
    <div className="   min-h-screen  selection:bg-sky-100">
      {/* Header Section */}
      <div className="flex justify-between  mt-10 mb-10">
        <div>
           
          <p className="text-slate-600 text-lg">See exactly when you’re free across calendars and event types.</p>
          <p className="text-slate-600 text-lg">Drag to block, tap to open.</p>
        </div>
        <button 
          onClick={handleSync}
          className="bg-[#0077B6] text-white px-7 py-3 rounded-xl flex items-center gap-3 hover:bg-[#005F92] transition-all shadow-md active:scale-95"
        >
          <HiOutlineCalendarDays size={26} />
          <span className="text-left leading-tight font-semibold text-[15px]">Sync <br/> calendars</span>
        </button>
      </div>

      {/* Controls Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-4">
          {/* Week View Button e functionality add kora hoyeche */}
          <button 
            onClick={handleWeekView}
            className="flex items-center gap-2 px-6 py-3 bg-[#0077B6] text-white rounded-xl font-bold text-sm shadow-sm active:bg-[#003594]"
          >
            <HiOutlineCalendarDays size={20}/> Week view
          </button>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex   gap-5 ">
            <button onClick={handlePrev} className="p-3 bg-[#003594] rounded-xl text-white border-r"><IoIosArrowBack size={22}/></button>
            <button onClick={handleNext} className="p-3 bg-[#003594] rounded-xl text-white  "><IoIosArrowForward size={22}/></button>
          </div>
          <span className="font-bold text-slate-800 text-xl min-w-[150px]  text-right">{formatDateRange()}</span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-[24px]  overflow-hidden shadow-xl shadow-slate-200/50">
        <div className="grid grid-cols-6 border-b border-gray-300 bg-white">
          <div className="p-6 text-center font-bold text-slate-400 border-r border-gray-300 text-sm tracking-wider">IST</div>
          {displayData.map((item, i) => (
            <div key={i} className={`p-6 text-center font-bold text-slate-600 text-[15px] ${i !== 4 ? 'border-r border-gray-300' : ''}`}>
              {item.day} {item.date}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-6 min-h-[550px]">
          <div className="border-r border-gray-300 flex flex-col justify-between p-6 text-slate-400 text-sm font-bold bg-slate-50/30">
            <span>09:00</span><span>11:00</span><span>13:00</span><span>15:00</span><span>17:00</span>
          </div>

          {displayData.length > 0 ? displayData.map((dayData, i) => (
            <div key={i} className={`relative p-3 ${i !== 4 ? 'border-r border-gray-300' : ''} ${dayData.day === 'Fri' ? 'bg-[#FDFDFD]' : ''}`}>
              {dayData.events.map((event, idx) => (
                <div key={idx} className={`mb-5 p-4 rounded-xl border-[1.5px] flex items-center gap-3 font-bold text-sm shadow-sm
                    ${event.type === 'blocked' ? 'bg-pink-50/80 border-pink-200 text-slate-700' : ''}
                    ${event.type === 'free' ? 'bg-emerald-50/80 border-emerald-100 text-slate-700 mt-14' : ''}
                    ${event.type === 'meeting' ? 'bg-sky-50/80 border-sky-100 text-slate-700 mt-2' : ''}
                    ${event.type === 'sync' ? 'bg-indigo-50/80 border-indigo-100 text-slate-700 mt-24' : ''}
                  `}>
                  <span className={`w-1.5 h-7 rounded-full 
                    ${event.type === 'blocked' ? 'bg-pink-400' : 'bg-sky-400'} 
                    ${event.type === 'free' ? 'bg-emerald-400' : ''}
                    ${event.type === 'sync' ? 'bg-indigo-400' : ''}
                  `}></span>
                  <span className="truncate">{event.title}</span>
                </div>
              ))}

              {dayData.day === 'Fri' && dayData.events.length === 0 && (
                <div className="absolute inset-3 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-center p-6 bg-slate-50/20">
                  <p className="text-slate-500 font-bold text-[15px] leading-snug">No meetings · <br/> All slots free</p>
                </div>
              )}
            </div>
          )) : (
            <div className="col-span-5 flex flex-col items-center justify-center text-slate-300 gap-2 italic">
               <p>No Schedule loaded for this week.</p>
            </div>
          )}
        </div>
      </div>

      {/* Legend Footer */}
      <div className="mt-8 flex gap-10 px-2">
        <div className="flex items-center gap-3 text-slate-500 font-bold text-sm uppercase tracking-wide">
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 ring-4 ring-white shadow-sm"></span> Bookable slots
        </div>
        <div className="flex items-center gap-3 text-slate-500 font-bold text-sm uppercase tracking-wide">
          <span className="w-3.5 h-3.5 rounded-full bg-sky-400 ring-4 ring-white shadow-sm"></span> Existing meetings
        </div>
        <div className="flex items-center gap-3 text-slate-500 font-bold text-sm uppercase tracking-wide">
          <span className="w-3.5 h-3.5 rounded-full bg-pink-400 ring-4 ring-white shadow-sm"></span> Blocked time
        </div>
      </div>
    </div>
  );
} 
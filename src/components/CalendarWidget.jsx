"use client";

import React, { useState, useRef } from "react";
// React Icons (Chevron icons for consistency)
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const CalendarWidget = ({ selectedDate, onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Week-er shuru (Monday) ber korar logic
  const getStartOfWeek = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  };

  const generateWeekDays = (baseDate) => {
    const weekStart = getStartOfWeek(baseDate);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(day.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const weekDays = generateWeekDays(currentDate);

  const changeWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + direction * 7);
    setCurrentDate(newDate);

    // Auto select first day of the new week
    let newSelected = getStartOfWeek(newDate);
    onDateSelect(newSelected);
  };

  // Swipe logic for Mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) changeWeek(1);
    if (distance < -50) changeWeek(-1);
  };

  const monthYearLabel = weekDays[0].toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="bg-[#F8F9FB] dark:bg-zinc-900/50 p-6 rounded-3xl border border-slate-200 dark:border-white/10 w-full select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
    >
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6 px-2">
        <button
          type="button"
          onClick={() => changeWeek(-1)}
          className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-700 dark:text-slate-300"
        >
          {/* Lucide icons er bodole React Icons HiChevronLeft */}
          <HiChevronLeft size={24} strokeWidth={1} />
        </button>

        <span className="font-bold text-slate-800 dark:text-white text-lg">
          {monthYearLabel}
        </span>

        <button
          type="button"
          onClick={() => changeWeek(1)}
          className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-700 dark:text-slate-300"
        >
          {/* Lucide icons er bodole React Icons HiChevronRight */}
          <HiChevronRight size={24} strokeWidth={1} />
        </button>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {weekDays.map((date, index) => (
          <div
            key={`label-${index}`}
            className="text-slate-500 dark:text-slate-400 font-medium text-xs uppercase mb-3"
          >
            {date.toLocaleString("default", { weekday: "short" }).slice(0, 2)}
          </div>
        ))}

        {weekDays.map((date, index) => {
          const isSelected = date.toDateString() === selectedDate.toDateString();
          const isToday = date.toDateString() === new Date().toDateString();

          return (
            <div key={`date-${index}`} className="flex justify-center items-center">
              <button
                type="button"
                onClick={() => onDateSelect(date)}
                className={`
                  h-10 w-10 sm:h-12 sm:w-12 flex flex-col items-center justify-center rounded-2xl text-sm transition-all duration-200
                  ${
                    isSelected
                      ? "bg-[#D1EFFF] dark:bg-blue-600/30 text-blue-600 dark:text-blue-400 font-bold border-2 border-blue-500 shadow-sm"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 border-2 border-transparent"
                  }
                `}
              >
                <span>{date.getDate()}</span>
                {/* Aajker tarikh-er niche blue dot indicator */}
                {isToday && !isSelected && (
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-0.5"></div>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarWidget;
"use client";

import { useState } from "react";
import Flag from "react-world-flags";
import { HiChevronDown } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion"; // Animation er jonno

const countries = [
  { code: "US", label: "United States" },
  { code: "BD", label: "Bangladesh" },
  { code: "JP", label: "Japan" },
  { code: "VN", label: "Vietnam" },
  { code: "AE", label: "UAE" },
  { code: "BR", label: "Brazil" },
  { code: "GB", label: "United Kingdom" },
  { code: "DE", label: "Germany" },
];

const LanguageDropdown = () => {
  const [selected, setSelected] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (country) => {
    setSelected(country);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full max-w-[100px]">
      {/* Selected Box */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-2 py-2 cursor-pointer transition-all active:scale-90"
      >
        <div className="flex items-center gap-2">
          <Flag code={selected.code} className="w-8 h-5 rounded-sm object-cover shadow-sm" />
        </div>
        <HiChevronDown className={`text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {/* Dropdown List with Animation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay to close */}
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
            
            <motion.ul
              initial={{ opacity: 0, y: -10 }} // Shuru te kemon thakbe
              animate={{ opacity: 1, y: 0 }}    // Open hole kemon hobe
              exit={{ opacity: 0, y: -10 }}     // Bondho hole kemon hobe
              transition={{ duration: 0.2, ease: "easeOut" }} // Koto smooth hobe
              className="absolute z-20 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-xl overflow-y-auto max-h-60 no-scrollbar"
              style={{
                msOverflowStyle: 'none',  /* IE and Edge */
                scrollbarWidth: 'none',   /* Firefox */
              }}
            >
              {/* CSS for Chrome/Safari to hide scrollbar */}
              <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {countries.map((item) => (
                <motion.li 
                  key={item.code}
                  whileHover={{ backgroundColor: "#f3f4f6" }} // Hover effect
                >
                  <button
                    onClick={() => handleSelect(item)}
                    className="flex justify-center items-center w-full py-3 transition-colors border-b border-gray-50 last:border-0"
                  >
                    <Flag code={item.code} className="w-7 h-4 rounded-sm object-cover shadow-sm" />
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageDropdown;
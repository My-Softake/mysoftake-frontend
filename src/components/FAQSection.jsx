"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { FiMessageCircle } from "react-icons/fi";

const FAQ_DATA = [
  {
    question: "How do I add a new institution to compare?",
    answer:
      "You can add institutions through our comparison tool or contact us with details. We verify all submissions to ensure data accuracy.",
    iconColor: "bg-blue-500",
  },
  {
    question: "How often is the data updated?",
    answer:
      "We update our database quarterly and continuously monitor for changes. Institution representatives can request updates anytime.",
    iconColor: "bg-purple-500",
  },
  {
    question: "Is this service free?",
    answer:
      "Yes, our comparison tool is completely free for students. We offer premium features for institutions and educational counselors.",
    iconColor: "bg-emerald-500",
  },
  {
    question: "Can institutions claim their profile?",
    answer:
      "Absolutely, Institution representatives can claim and manage their profiles to ensure information accuracy and add additional details.",
    iconColor: "bg-orange-500",
  },
];
// --- DATA SECTION END ---

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div
      className={`mb-4 border-2 ${
        isOpen ? "border-blue-100 bg-blue-50/30" : "border-gray-100 bg-white"
      } rounded-2xl transition-all duration-300`}
    >
      <button
        onClick={onClick}
        className="w-full p-5 md:p-6 flex items-center text-left group"
      >
        {/* Question Box Icon */}
        <div
          className={`flex-shrink-0 w-12 h-12 ${faq.iconColor} rounded-xl flex items-center justify-center text-white font-black text-xl mr-5`}
        >
          ?
        </div>

        <span
          className={`flex-grow text-lg md:text-xl font-bold tracking-tight transition-colors ${
            isOpen ? "text-blue-600" : "text-slate-800"
          }`}
        >
          {faq.question}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`ml-4 text-2xl ${
            isOpen ? "text-blue-600" : "text-slate-400"
          }`}
        >
          <HiChevronDown />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-6 md:pl-24 md:pr-10 text-left text-slate-600 leading-relaxed text-base md:text-lg">
              <div className="h-px w-full bg-gray-100 mb-4" />
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className=" bg-white">
      <div className="container mx-auto  md:px-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-center  bg-[#BAD4FD] h-8 w-20 mx-auto rounded-full gap-2 mb-4">
            <FiMessageCircle className="text-blue-600" />

            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl text-center font-black text-slate-900 leading-tight">
            Frequently asked questions
          </h2>
          <p className="font-normal text-base text-center text-gray-600">
            Cant find what youre looking for? Were here to help.
          </p>
        </div>

        {/* FAQ List Container */}
        <div className="">
          {FAQ_DATA.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

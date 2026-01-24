"use client";

import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { HiOutlineMail, HiOutlinePhone, HiChevronDown } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { useTranslations, useLocale } from "next-intl";

const ContactPage = () => {
  const t = useTranslations("ContactPage");
  const locale = useLocale();
  const [selectedHelp, setSelectedHelp] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(""); // for custom user input
  const dropdownRef = useRef(null);

  const helpOptions = [
    { key: "webDevelopment", label: t("helpOptions.webDevelopment") },
    { key: "uiUxDesign", label: t("helpOptions.uiUxDesign") },
    { key: "appDevelopment", label: t("helpOptions.appDevelopment") },
    { key: "digitalMarketing", label: t("helpOptions.digitalMarketing") },
    { key: "consultancy", label: t("helpOptions.consultancy") },
    { key: "manufacturing", label: t("helpOptions.manufacturing") },
    { key: "export", label: t("helpOptions.export") },
    { key: "it", label: t("helpOptions.it") },
    { key: "transport", label: t("helpOptions.transport") },
    { key: "travel", label: t("helpOptions.travel") },
    { key: "construction", label: t("helpOptions.construction") },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleHelpToggle = (option) => {
    if (selectedHelp.includes(option)) {
      setSelectedHelp(selectedHelp.filter((item) => item !== option));
    } else {
      setSelectedHelp([...selectedHelp, option]);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!selectedHelp.includes(inputValue.trim())) {
        setSelectedHelp([...selectedHelp, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const handleRemoveSelected = (item) => {
    setSelectedHelp(selectedHelp.filter((i) => i !== item));
  };

  const contactInfo = [
    {
      id: 1,
      title: t("contactInfo.address.title"),
      details: t("contactInfo.address.details"),
      icon: <HiOutlineMapPin className="text-3xl" />,
    },
    {
      id: 2,
      title: t("contactInfo.phone.title"),
      details: t("contactInfo.phone.details"),
      icon: <HiOutlinePhone className="text-3xl" />,
    },
    {
      id: 3,
      title: t("contactInfo.email.title"),
      details: t("contactInfo.email.details"),
      icon: <HiOutlineMail className="text-3xl" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/about banner.png')` }}
        />
        <div className="relative z-10 text-center text-white pt-10 px-4">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 drop-shadow-lg">
            {t("hero.title")}
          </h1>
          
        </div>
      </section>

      {/* Info & Form Section */}
      <section className="bg-white pt-10 px-4 font-sans">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm">
            {t("getInTouch")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-5 mb-8 md:w-[600px] mx-auto leading-[1.1]">
            {t("mainHeading")}
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
            {t("generalEnquiry")}
            <Link
              href={`mailto:${t("email")}`}
              className="text-blue-600 font-semibold hover:underline px-2"
            >
              {t("email")}
            </Link>
            {t("orCallOn")} <span className="text-blue-600 font-semibold">{t("phone")}</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
            {contactInfo.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-10 bg-white shadow-md rounded-xl border border-gray-50 transition-all duration-500 group"
              >
                <div className="w-16 h-16 text-blue-600 rounded-full flex items-center justify-center bg-blue-50">
                  {item.icon}
                </div>
                <div className="ml-7">
                  <h4 className="font-bold text-xl text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-slate-500 font-medium w-46">{item.details}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Branches Link & Map */}
          <p className="text-slate-600 font-medium text-lg my-10">{t("branchesText")}</p>
          <div className="w-full h-[550px] rounded-2xl overflow-hidden shadow-inner bg-gray-100 border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4297.131886628774!2d90.39888879389679!3d23.875514034491435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1768989416841!5m2!1sen!2sbd"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Form with Multi-Select Dropdown */}
          <div className="bg-white p-8 md:p-12 mt-10">
            <form className="space-y-6 text-left">
              <h3 className="font-bold text-4xl dark:text-black">{t("form.sendYourMessage")}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("form.namePlaceholder")}
                    className="w-full px-5 py-4 border dark:text-gray-600 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    {t("form.emailLabel")}
                  </label>
                  <input
                    type="email"
                    placeholder={t("form.emailPlaceholder")}
                    className="w-full px-5 py-4 border dark:text-gray-600 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Multi-Select Tool Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  {t("form.helpWith")}
                </label>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full px-5 py-4 border dark:text-gray-600 border-gray-300 rounded cursor-pointer flex justify-between items-center transition-all focus-within:border-blue-500"
                >
                  <div className="flex flex-wrap gap-2 items-center">
                    {selectedHelp.length > 0 ? (
                      selectedHelp.map((item) => (
                        <span
                          key={item}
                          className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1"
                        >
                          {item}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveSelected(item);
                            }}
                            className="ml-1 text-white hover:text-gray-200 font-bold"
                          >
                            ×
                          </button>
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400">{t("form.selectServices")}</span>
                    )}
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleInputKeyDown}
                      placeholder=""
                      className="outline-none px-1 py-0.5 text-sm text-slate-700"
                    />
                  </div>
                  <HiChevronDown
                    className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {isOpen && (
                  <div className="absolute z-50 w-full mt-2 dark:text-gray-600 bg-white border border-gray-100 shadow-2xl rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2 max-h-60 overflow-y-auto">
                    {helpOptions.map((option) => (
                      <div
                        key={option.key}
                        onClick={() => handleHelpToggle(option.label)}
                        className={`px-5 py-3 cursor-pointer transition-colors flex justify-between items-center ${
                          selectedHelp.includes(option.label)
                            ? "bg-blue-50 text-blue-600 font-semibold"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {option.label}
                        {selectedHelp.includes(option.label) && (
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  {t("form.subject")}
                </label>
                <input
                  type="text"
                  placeholder={t("form.subjectPlaceholder")}
                  className="w-full px-5 py-4 border dark:text-gray-600 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  {t("form.message")}
                </label>
                <textarea
                  rows="5"
                  placeholder={t("form.messagePlaceholder")}
                  className="w-full px-5 py-4 border dark:text-gray-600 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-max px-10 py-4 bg-[#27A0DB] duration-300 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 uppercase tracking-widest text-sm"
              >
                {t("form.sendMessage")}
              </button>
            </form>
          </div>

          <div>
            <FAQSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

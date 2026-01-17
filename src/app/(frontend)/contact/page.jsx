"use client";

import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { HiOutlineMail, HiOutlinePhone, HiChevronDown } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";

const ContactPage = () => {
  const [selectedHelp, setSelectedHelp] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const helpOptions = [
    "Web Development",
    "UI/UX Design",
    "App Development",
    "Digital Marketing",
    "Consultancy",
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

  const contactInfo = [
    {
      id: 1,
      title: "Address",
      details: "123 Education Street, Suite 400, Uttara, Dhaka.",
      icon: <HiOutlineMapPin className="text-3xl" />,
    },
    {
      id: 2,
      title: "Phone",
      details: "+1 (234) 567-890",
      icon: <HiOutlinePhone className="text-3xl" />,
    },
    {
      id: 3,
      title: "E-Mail",
      details: "support@globex.com",
      icon: <HiOutlineMail className="text-3xl" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - No Changes */}
      <section className="relative h-[40vh] md:h-[40vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/about banner.png')`,
          }}
        ></div>
        <div className="relative z-10 text-center text-white pt-10 px-4">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <div className="flex justify-center items-center gap-3 text-lg font-medium drop-shadow-md">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            <span className="text-gray-200">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Info & Form Section */}
      <section className="bg-white py-12 px-4 font-sans">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-5 mb-8 md:w-[600px] mx-auto leading-[1.1]">
            Let’s connect and build your digital future.
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
            For general enquires you can touch with our front desk supporting
            team at
            <a
              href="mailto:info@mysoftake.com"
              className="text-blue-600 font-semibold hover:underline px-2"
            >
              info@mysoftake.com
            </a>
            or call on{" "}
            <span className="text-blue-600 font-semibold">
              +1 (234) 567-890
            </span>
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
                <div className="ml-7  ">
                  <h4 className="font-bold text-xl text-slate-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 font-medium w-46">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Branches Link & Map - No Changes */}
          <p className="text-slate-600 font-medium text-lg my-10">
            We are at 36 places over the country,{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline font-bold decoration-2"
            >
              see our branches.
            </a>
          </p>
          <div className="w-full h-[550px] rounded-2xl overflow-hidden shadow-inner bg-gray-100 border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4410129204064!2d90.39524031086036!3d23.87394857849649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c42629b35767%3A0xc610c43606b25121!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1715421234567!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>  
          {/* Contact Form with Multi-Select Dropdown */}
          <div className=" bg-white p-8 md:p-12     mb-20 mt-10">
            <form className="space-y-6 text-left">
                      <h3 className="font-bold text-4xl ">Send Your Message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-5 py-4 border  border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-5 py-4 border  border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Multi-Select Tool Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  What can we help you with?
                </label>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full px-5 py-4   border border-gray-300 rounded cursor-pointer flex justify-between items-center transition-all focus-within:border-blue-500"
                >
                  <div className="flex flex-wrap gap-2">
                    {selectedHelp.length > 0 ? (
                      selectedHelp.map((item) => (
                        <span
                          key={item}
                          className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md"
                        >
                          {item}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400">Select services</span>
                    )}
                  </div>
                  <HiChevronDown
                    className={`text-gray-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {isOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-white border border-gray-100 shadow-2xl rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                    {helpOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => handleHelpToggle(option)}
                        className={`px-5 py-3 cursor-pointer transition-colors flex justify-between items-center ${
                          selectedHelp.includes(option)
                            ? "bg-blue-50 text-blue-600 font-semibold"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {option}
                        {selectedHelp.includes(option) && (
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-5 py-4 border  border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-5 py-4 border  border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-max px-12 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 uppercase tracking-widest text-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="">
            <FAQSection/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

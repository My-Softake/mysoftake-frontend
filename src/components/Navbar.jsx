"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = pathname === "/";

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active Link
  const isActive = (path) => pathname === path;

  const navStyle = isHomePage
    ? `transition-colors duration-500 ${
        scrolled ? "bg-gray-900 text-white shadow-md" : "bg-transparent text-white"
      }`
    : "bg-[#1F2A3A] text-white shadow-md transition-colors duration-500";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Project", path: "/project" },
    { name: "Case Study", path: "/case-study" },
    { name: "Career", path: "/career" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 ${navStyle}`}>
      <div className="container mx-auto flex items-center justify-between py-5 px-6 md:px-20">
        <Link href="/">
          <Image
            src="/images/logo my softake.png"
            alt="logo"
            width={60}
            height={30}
          />
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setOpen(true)}>
          <IoMdMenu className="text-3xl cursor-pointer" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors duration-300 font-medium ${
                isActive(link.path) ? "text-[#27A0DB]" : "hover:text-[#27A0DB]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay (সবার আগে এটি আসবে) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Slide Menu (ডান দিক থেকে স্লাইড হবে) */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-white text-black shadow-2xl z-[60]
        transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button Header */}
        <div className="flex justify-end p-6" onClick={() => setOpen(false)}>
          <IoMdClose className="text-3xl cursor-pointer hover:text-[#27A0DB] transition-colors" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-6 px-8 mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`text-lg transition-colors duration-300 font-semibold border-b border-gray-100 pb-2 ${
                isActive(link.path) ? "text-[#27A0DB]" : "hover:text-[#27A0DB]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
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
          <IoMdMenu className="text-2xl cursor-pointer" />
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

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white text-black px-6 py-6
        transform transition-transform duration-300 ease-in-out md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="mb-8" onClick={() => setOpen(false)}>
          <IoMdClose className="text-2xl cursor-pointer" />
        </div>

        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`transition-colors duration-300 font-semibold ${
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
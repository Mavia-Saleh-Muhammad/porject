"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { IoCart } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${poppins.className} w-full`}>
      <div className="w-full h-[36px] bg-[#F5F5F5] flex items-center justify-between px-4 sm:px-12">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image
            src="/Images/NavbarImg/Frame.svg"
            alt="menu logo"
            width={24}
            height={24}
            className="mt-[8px]"
          />
        </div>

        {/* Links Section */}
        <ul className="flex items-center justify-center space-x-4 md:text-[11px] font-bold text-[14px] mt-2 md:mt-0">
          <li>Find a Store</li>
          <div className="w-[2px] h-[14px] bg-black"></div>
          <Link href="/Contact">
            <li>Help</li>
          </Link>
          <div className="w-[2px] h-[14px] bg-black"></div>
          <Link href="/Joinus">
            <li>Join Us</li>{" "}
          </Link>
          <div className="w-[2px] h-[14px] bg-black"></div>
          <Link href="/Login">
            {" "}
            <li>LogIn</li>{" "}
          </Link>
        </ul>
      </div>

      {/* Main Navbar */}
      <div className="w-full h-[60px] flex items-center  sm:px-12">
        {/* Logo */}
        <Image
          src="/Images/NavbarImg/logo.svg"
          alt="nike"
          width={78.47}
          height={78.47}
        />

        {/* Desktop Menu */}
        <ul className="hidden sm:flex flex-1 justify-center items-center space-x-6 text-[15px] font-medium">
          <Link href="#">
            <li>New & Featured</li>{" "}
          </Link>
          <li>
            <Link href="/Cart">Men</Link>
          </li>
          <Link href="/ProductDetail">
            <li>Women</li>{" "}
          </Link>
          <Link href="#">
            <li>Kids</li>
          </Link>
          <Link href="#">
            <li>Sale</li>
          </Link>
          <Link href="#">
            <li>SNKRS</li>
          </Link>
        </ul>

        {/* Icons */}
        <div className=" max-md:hidden  flex items-center space-x-4 ml-auto">
          <div className="hidden sm:flex items-center bg-[#F5F5F5] rounded-full px-4 py-2">
            <LuSearch className="text-[20px]" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 text-[15px] bg-transparent placeholder-[#CCCCCC] outline-none"
            />
          </div>
          <LuHeart className="text-[30px]" />
          <IoCart className="text-[30px]" />
        </div>

        {/* Hamburger Menu */}
        <div className="ml-auto items-center mt-2 justify-end">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none ml-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // Close icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white shadow-lg z-50 transition-all duration-300 max-h-screen">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="text-gray-700 hover:text-black"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/ProductDetail"
                onClick={closeMenu}
                className="text-gray-700 hover:text-black"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Product"
                onClick={closeMenu}
                className="text-gray-700 hover:text-black"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                onClick={closeMenu}
                className="text-gray-700 hover:text-black"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

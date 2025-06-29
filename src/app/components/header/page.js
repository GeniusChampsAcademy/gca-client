"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const lastScrollTop = useRef(0);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    setIsMenuOpen(false);
  };

  const getLinkStyle = (navItem) =>
    activeNav === navItem
      ? "bg-[#E2EBF4] text-[#4F4D74] rounded-3xl px-4 py-2"
      : "px-4 py-2";

  const demoButtonStyle =
    activeNav === "Book Free Demo"
      ? "bg-[#E2EBF4] text-[#4F4D74] rounded-3xl px-7 py-2 ms-8 ring ring-[#E2EBF4]"
      : "bg-[#6173FD] text-white px-7 py-2 rounded-3xl ms-8 ring ring-[#E2EBF4]";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop.current) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

      if (scrollTop > window.innerHeight * 0.3) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }

      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex gap-12 sm:gap-40 fixed top-0 z-50 text-[#4F4D74] items-center w-full p-4 lg:px-20 justify-between lg:justify-center transition-transform duration-500 ${
        showStickyNav
          ? isNavbarVisible
            ? "bg-white shadow-lg translate-y-0"
            : "-translate-y-full"
          : "bg-white"
      }`}
    >
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="/assets/images/gca-logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-16 md:w-24"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex flex-row items-center gap-4">
        <ul className="flex gap-3 list-none items-center text-lg">
          <li>
            <Link
              href="/"
              className={getLinkStyle("Home")}
              onClick={() => handleNavClick("Home")}
            >
              Home
            </Link>
          </li>
          <Image
            src="/assets/images/list-style.png"
            alt="separator"
            width={6}
            height={6}
          />
          <li>
            <Link
              href="#our-courses"
              className={getLinkStyle("Our Courses")}
              onClick={(e) => {
                e.preventDefault();
                const ourCoursesSection = document.getElementById("our-courses");
                if (ourCoursesSection) {
                  ourCoursesSection.scrollIntoView({ behavior: "smooth" });
                }
                handleNavClick("Our Courses");
              }}
            >
              Our Courses
            </Link>
          </li>
          <Image
            src="/assets/images/list-style.png"
            alt="separator"
            width={6}
            height={6}
          />
          <li>
            <Link
              href="https://www.appadmin.geniuschampsacademy.com/gcaexam/examlogin.html"
              className={getLinkStyle("Exam Portal")}
              onClick={() => handleNavClick("Exam Portal")}
            >
              Exam Portal
            </Link>
          </li>
          <Image
            src="/assets/images/list-style.png"
            alt="separator"
            width={6}
            height={6}
          />
          <li>
            <Link
              href="/components/contact-us"
              className={getLinkStyle("Join Our Team")}
              onClick={() => handleNavClick("Join Our Team")}
            >
              Join Our Team
            </Link>
          </li>
        </ul>

        <button className={demoButtonStyle}>
          <Link href="/components/contact-us">BOOK FREE DEMO</Link>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className="flex lg:hidden items-center gap-4">
        <button className="bg-[#6173FD] text-white text-sm px-7 py-2 rounded-3xl">
          <Link href="/components/contact-us">BOOK FREE DEMO</Link>
        </button>
        <button onClick={toggleMenu} className="text-4xl text-[#6173FD]">
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-full left-0 w-full bg-white lg:hidden z-50"
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600"
                onClick={() => handleNavClick("Home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#our-courses"
                className="hover:text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  const ourCoursesSection = document.getElementById(
                    "our-courses"
                  );
                  if (ourCoursesSection) {
                    ourCoursesSection.scrollIntoView({ behavior: "smooth" });
                  }
                  handleNavClick("Our Courses");
                }}
              >
                Our Courses
              </Link>
            </li>
            <li>
              <Link
                href="https://www.appadmin.geniuschampsacademy.com/gcaexam/examlogin.html"
                className="hover:text-blue-600"
                onClick={() => handleNavClick("Exam Portal")}
              >
                Exam Portal
              </Link>
            </li>
            <li>
              <Link
                href="/components/contact-us"
                className="hover:text-blue-600"
                onClick={() => handleNavClick("Join Our Team")}
              >
                Join Our Team
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

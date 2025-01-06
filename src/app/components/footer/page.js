"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import "./footer.css";

export default function Footer() {
  const scrollToOurCourses = (e) => {
    e.preventDefault(); // Prevents default link behavior
    const ourCoursesSection = document.getElementById("our-courses");
    if (ourCoursesSection) {
      ourCoursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="mt-10">
      <div className="top-footer bg-[#6173FD] max-w-[100vw] mt-10 text-white">
        <div className="max-w-[60vw] ms-3 md:ps-36 pt-24">
          <div className="flex flex-row justify-between items-center py-6">
            <div className="bg-white p-2 rounded-md">
              <Image
                src="/assets/images/gca-logo.svg"
                alt="footer-logo"
                className="w-16"
                width={500}
                height={500}
              />
            </div>

            {/* social media links for desktop */}
            <div className="social-media md:flex flex-row hidden ">
              <Link href="https://www.facebook.com/geniuschampsacademy">
                <Image
                  src="/assets/images/facebook.svg"
                  alt="facebook"
                  width={80}
                  height={80}
                />
              </Link>
              <Link
                href="https://www.instagram.com/genius_champs_academy/"
                className="-mx-6"
              >
                <Image
                  src="/assets/images/instagram.svg"
                  alt="instagram"
                  width={80}
                  height={80}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/genius-champs-academy"
                className="-me-6"
              >
                <Image
                  src="/assets/images/linkedin.svg"
                  alt="linkedin"
                  width={80}
                  height={80}
                />
              </Link>
              <Link href="https://youtube.com/@geniuschampsacademy">
                <Image
                  src="/assets/images/youtube.svg"
                  alt="youtube"
                  width={80}
                  height={80}
                />
              </Link>
            </div>
          </div>

          <div className="footer-links">
            <ul className="flex flex-col md:flex-row gap-3 lg:gap-16 xl:gap-[4.7rem]">
              <li className="first-list-item">
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link
                  href="#our-courses"
                  onClick={(e) => {
                    scrollToOurCourses(e);
                  }}
                >
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="https://www.appadmin.geniuschampsacademy.com/gcaexam/examlogin.html">
                  Exam Portal
                </Link>
              </li>
              <li>
                <Link href="/components/contact-us">Join Our Team</Link>
              </li>
            </ul>
          </div>

          {/* social media links for mobile devices  */}
          <div className="social-media -ms-5 flex flex-row md:hidden ">
            <Link href="https://www.facebook.com/geniuschampsacademy">
              <Image
                src="/assets/images/facebook.svg"
                alt="facebook"
                width={80}
                height={80}
              />
            </Link>
            <Link
              href="https://www.instagram.com/genius_champs_academy/"
              className="-mx-5"
            >
              <Image
                src="/assets/images/instagram.svg"
                alt="instagram"
                width={80}
                height={80}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/genius-champs-academy"
              className="-me-5"
            >
              <Image
                src="/assets/images/linkedin.svg"
                alt="linkedin"
                width={80}
                height={80}
              />
            </Link>
            <Link href="https://youtube.com/@geniuschampsacademy">
              <Image
                src="/assets/images/youtube.svg"
                alt="youtube"
                width={80}
                height={80}
              />
            </Link>
          </div>

          <div className="contact-data flex md:flex-row flex-col justify-end gap-2 md:gap-14 py-8 text-xs sm:text-base mr-6">
            <Link href="tel:9423631238">
              <p>+91 9423631238</p>
            </Link>
            <Link href="mailto:geniuschampsacademy@gmail.com">
              <p className="text-wrap">geniuschampsacademy@gmail.com</p>
            </Link>
          </div>
        </div>
        <div className="boy relative">
          <Image
            src="/assets/images/footer-boy.svg"
            alt="footer-boy"
            className="w-44 sm:w-48 absolute right-5 lg:right-44 -bottom-24 md:-bottom-20 lg:-bottom-16"
            width={192}
            height={250}
          />
        </div>
      </div>
      <div className="bottom-footer bg-[#5161E8] text-white max-w-[100vw]  py-7">
        <div className="max-w-[50vw] ms-3 md:ms-36 flex gap-3 md:gap-0 flex-col-reverse md:flex-row md:justify-between">
          <p>2023 All Rights Reserved</p>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

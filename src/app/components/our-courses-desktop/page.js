"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurCoursesDesktop() {
  const [activeSlide, setActiveSlide] = useState(0);

  const courses = [
    {
      title: "Teacher Training",
      icon: "assets/images/teacher-training.svg",
      description: `Get certified with our Teacher Training Program, unlock endless opportunities, and inspire young minds—all from the comfort of your home. Take the first step toward a rewarding career in education!`,
    },
    {
      title: "Abacus",
      icon: "assets/images/abacus.svg",
      description: `Transforms your brain into a lightning-fast calculator, making math a magical,mind-boosting superpower!`,
    },
    {
      title: "Mid Brain Activation",
      icon: "assets/images/mid-brain-activation.svg",
      description: `Boosts focus, memory, and creativity in a fun, engaging way. Enhance your learning abilities, sharpen your intuition, and unlock skills you never knew you had.`,
    },
    {
      title: "Hand Writing",
      icon: "assets/images/hand-writing.svg",
      description: `Makes writing fun, easy, and impressive. From learning the basics to perfecting your style, this course will help you transform your handwriting and make every word you write stand out.`,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Adjust to show fewer slides on smaller screens
        },
      },
    ],
  };

  return (
    <div
      id="our-courses"
      className="container min-h-[45vw] mx-auto pb-10 hidden lg:block justify-center text-[#4F4D74]"
    >
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div
            key={index}
            className={`flex flex-col mt-9 lg:-mt-3 p-4  text-center transition-all duration-300 ease-in-out ${
              activeSlide === index ? "scale-150" : "scale-110"
            }`}
          >
            <Image
              src={course.icon}
              alt={course.title}
              className=" -mb-10 w-44 mx-auto h-64 flex justify-center mt-5"
              width={500}
              height={500}
            />

            <p className="text-base -mt-14 font-extrabold text-center" style={{
                    fontFamily: "Gilroy",
                    fontWeight: 800, // bold
                  }}>
              {course.title}
            </p>

            {activeSlide === index && (
              <div className="mb-8">
                <p className="text-xs text-center">{course.description}</p>
                <button className="mt-4 px-4 py-1 text-xs bg-[#16C6EC] text-white rounded-full">
                  <Link href="/components/contact-us">KNOW MORE</Link>
                </button>
              </div>
            )}
          </div>
        ))}
      </Slider>

      <div className="flex flex-row justify-center gap-7 -mt-[5px] lg:-mt-[90px] xl:-mt-[1px]">
        {/* Left Arrow */}
        <button
          className="previous drop-shadow-2xl p-3 bg-white rounded-full"
          onClick={() => document.querySelector(".slick-prev").click()}
        >
          <IoIosArrowBack size={24} />
        </button>

        {/* Right Arrow */}
        <button
          className="next drop-shadow-2xl p-3 bg-white rounded-full"
          onClick={() => document.querySelector(".slick-next").click()}
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next bg-slate-900`}
      style={{ ...style, display: "block", right: "0px" }} // Adjust right position
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev bg-slate-900`}
      style={{ ...style, display: "block", left: "0px" }} // Adjust left position
      onClick={onClick}
    />
  );
}

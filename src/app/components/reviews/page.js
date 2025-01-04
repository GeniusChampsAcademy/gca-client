"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "./reviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

export default function Reviews() {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  const reviews = [
    {
      name: "Ravi Bhand",
      avatar: "/assets/images/boy-avatar.svg",
      stars: "/assets/images/stars.svg",
      review:
        "This tuition has transformed my understanding of math! The tutor explained complex concepts in a simple way, making it easier to grasp.",
    },
    {
      name: "Kishor Navsupe",
      avatar: "/assets/images/boy-avatar.svg",
      stars: "/assets/images/stars.svg",
      review:
        "I improved my grades significantly thanks to this tuition center. The interactive sessions and practice tests really helped me stay ahead.",
    },
    {
      name: "Tushar Alhat",
      avatar: "/assets/images/boy-avatar.svg",
      stars: "/assets/images/stars.svg",
      review:
        "Fantastic experience! The teachers are very very supportive and make learning enjoyable. I feel more confident about my studies now.",
    },
    {
      name: "Yash Bhale",
      avatar: "/assets/images/boy-avatar.svg",
      stars: "/assets/images/stars.svg",
      review:
        "This tuition has been great for my preparation for exams. The study materials provided are top-notch, and the guidance is invaluable.",
    },
    // Add more reviews if needed
  ];

  return (
    <div className="relative top-32 border-4 sm:max-h-[16.5rem] border-white flex items-center justify-center py-8 px-5 mx-auto max-w-[90vw] md:max-w-[78vw] bg-[#FF7A73] text-white rounded-2xl">
      <Slider
        ref={sliderRef}
        {...settings}
        className="overflow-hidden relative w-full"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-6 w-full p-4 lg:py-0"
          >
            <div className="md:float-left w-36 h-36 bg-[#FFCD1A] rounded-full border-4 border-white flex-shrink-0 overflow-hidden mx-auto md:mx-0">
              <Image
                src={review.avatar}
                alt="avatar"
                className="w-full h-full p-1 object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col flex-1 items-center justify-start md:ps-8">
              <div className="flex flex-col text-sm leading-relaxed text-center mt-2 md:text-justify">
                {" "}
                {/* Flex-1 for content */}
                <div className="flex flex-col float-start items-center md:items-start justify-center md:justify-start ">
                  {" "}
                  {/* Reduced gap for better layout */}
                  <p className="text-xl font-semibold whitespace-nowrap lg:text-2xl">
                    {review.name}
                  </p>
                  <Image
                    src={review.stars}
                    alt="stars"
                    className="w-28"
                    width={500}
                    height={500}
                  />{" "}
                </div>
                <div className="text-sm sm:text-base">
                {review.review}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex  gap-2 absolute bottom-3 md:right-3 lg:bottom-6 lg:right-9">
        <button
          className="w-8 h-8 text-white bg-[#ffffff59] border-white border-2 rounded-full flex items-center justify-center shadow-lg"
          onClick={previous}
        >
          {/* &#8249; */}
          <AiOutlineLeft />
        </button>
        <button
          className="w-8 h-8 text-white bg-[#ffffff59] border-white border-2 rounded-full flex items-center justify-center shadow-lg"
          onClick={next}
        >
          <AiOutlineRight />
          {/* &#8250; */}
        </button>
      </div>
    </div>
  );
}

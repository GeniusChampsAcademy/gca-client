'use client'
import React from "react";
import Image from "next/image";

export default function DemoClass() {
    const scrollToContactUs = () => {
        const contactUsForm = document.getElementById('contact-us-form');
        if (contactUsForm) {
          contactUsForm.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <div className="flex justify-center flex-col items-center mt-6">
      <div className="text-center">
        <p className="text-xl text-[#A7B0B8]">Contact Us</p>
        <h1 className="text-4xl lg:text-5xl text-[#4F4D74] px-6">
          What are you looking for!
        </h1>
      </div>
      <div className="flex flex-row items-center justify-between bg-[#EDD93C] max-w-[85vw] sm:max-w-[90vw] sm:min-w-[90vw] lg:min-w-[80vw] lg:max-w-[80vw] px-4 py-4 sm:px-12 sm:py-8 mt-6 rounded-3xl ">
        <div className="w-[27rem]">
          <Image
            src="/assets/images/say-hello.svg"
            width={500}
            height={500}
            alt="Picture of the author"
          ></Image>
        </div>
        <button className="w-[23rem]" onClick={scrollToContactUs}>
            <Image
              src="/assets/images/book-free-demo-class.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            ></Image>
        </button>
      </div>
    </div>
  );
}

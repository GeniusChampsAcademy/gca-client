import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-center">
      {/* Hero Text Image */}
      <Image 
        src="/assets/images/hero-text.svg" 
        alt="Hero text that says 'We Spark Your Thinking'" 
        width={500} 
        height={600}
        className="absolute z-30 mt-12 top-24 sm:mb-0 lg:text-8xl max-w-[86vw] sm:max-w-max lg:min-w-[40rem]"
        priority
      />

      {/* Hero Section Background */}
      <div
        className="hero-section relative bg-center bg-contain bg-no-repeat mt-44 sm:mt-32 md:mt-24 lg:mt-24
                   h-[20rem] w-full 
                   sm:h-[40rem] sm:w-[40rem]
                   lg:min-h-[50rem] lg:min-w-[50rem]"
        style={{
          backgroundImage: "url('/assets/images/hero-section-background.svg')",
        }}
      ></div>
    </div>
  );
}

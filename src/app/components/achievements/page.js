import React from "react";
import Image from "next/image";

export default function Achievements() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-[#4F4D74] text-2xl whitespace-nowrap justify-start lg:gap-2 my-10 mx-8 lg:ms-24" style={{
      fontFamily: "Gilroy",
      fontWeight: 700, // bold
    }}>
      {/* Just Dial Achievement */}
      <div className="flex justify-center items-center gap-5">
        <Image
          className="w-[4rem] sm:w-[6rem] lg:w-[9rem] h-auto"
          src="/assets/images/just-dial.svg"
          alt="5 Stars on Just Dial"
          width={500}   
          height={600}
        />
        <div className="text-xs sm:text-lg lg:text-lg flex flex-col">
        <p> 5 Stars on Just dial with</p>
          <br /> <p className="-mt-4 sm:-mt-8 lg:-mt-8">200+ User reviews</p>
        </div>
      </div>

      {/* ABP Maza Interview */}
      <div className="flex justify-center items-center gap-3 lg:ms-16">
        <Image
          className="w-[2.5rem] lg:w-[3rem] h-auto"
          src="/assets/images/abp.svg"
          alt="Abhinav Thakur on ABP Maza Interview"
          width={500}
          height={600}
        />
        <p className="text-xs sm:text-lg whitespace-normal lg:whitespace-nowrap">
        <p> Abhinav Thakur on ABP </p>
          <br /> <p className="-mt-4 sm:-mt-8 lg:-mt-8"> Maza Interview </p>
        </p>
      </div>

      {/* MCED Certification */}
      <div className="flex justify-center items-center gap-3 -mr-20">
        <Image
          className="w-[2.5rem] lg:w-[3rem] h-auto"
          src="/assets/images/mced.svg"
          alt="MCED Certified Company"
          width={500}
          height={600}
        />
        <p className="text-xs sm:text-lg whitespace-normal lg:whitespace-nowrap">
          
        <p> MCED Certified </p>
          <br /> <p className="-mt-4 sm:-mt-8 lg:-mt-8"> Company </p>
        </p>
      </div>

      {/* YouTube Views Achievement */}
      <div className="flex justify-center items-center gap-3">
        <Image
          className="w-[3rem] lg:w-[4rem] h-auto"
          src="/assets/images/you-tube.svg"
          alt="10k+ YouTube Views"
          width={500}
          height={600}
        />
        <p className="text-xs sm:text-lg whitespace-normal lg:whitespace-nowrap">
        <p>10k+ YouTube</p>
          <br /> <p className="-mt-4 sm:-mt-8 lg:-mt-8"> Views </p>
        </p>
      </div>
    </div>
  );
}

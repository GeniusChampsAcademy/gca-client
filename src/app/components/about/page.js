import React from "react";
import Image from "next/image";
import Link from "next/link";
// import aboutBackground from "/assets/images/about-background.svg";

export default function About() {
  return (
    <div>
      <div
        className="min-h-[96vh] bg-no-repeat flex md:pb-[5rem] bg-center mt-16"
        style={{
          backgroundImage: "url('/assets/images/about-background.svg')",
        }}
      >
        <div className="container flex flex-col lg:flex-row gap-4 sm:gap-16 lg:gap-11 mt-10 md:mt-16 p-4">
          <div className="w-full lg:w-[50%] flex justify-center mx-auto">
            <Image
              src="/assets/images/about.png"
              alt="about image"
              className="max-h-[40em] md:max-h-[40em] object-cover"
              width={450}
              height={900}
            />
          </div>
          <div className="mt-10 md:mt-0 w-full lg:w-[50%] mx-auto">
            <div className="text-[#4F4D74] flex flex-col gap-8 lg:gap-12">
              <div className="flex flex-row md:flex-row gap-5 items-center">
                <Image
                  src="assets/images/about-start-img.svg"
                  alt="about image"
                  className="w-16 h-16 md:w-20 md:h-20"
                  width={500}
                  height={500}
                />
                <p className="text-left md:text-left">
                  India Book <br /> of Record Company
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="flex justify-start text-4xl lg:text-5xl text-center md:text-left">
                  Who we are?
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-justify whitespace-wrap lg:max-w-[40vw]">
                  We Genius Champs Academy, a privately owned company
                  specializing in providing multiple brain development courses.
                  Our offerings cater to students, educators, and anyone seeking
                  professional development opportunities. Our mission is to
                  empower women by offering employment opportunities right at
                  their doorstep.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-7 text-sm lg:text-base">
                <div className="flex gap-4 md:gap-6">
                  <Image
                    src="assets/images/about-marker.svg"
                    className="w-6 h-6 md:w-7 md:h-7"
                    alt="about marker"
                    width={500}
                    height={500}
                  />
                  <p>Qualified Instructor</p>
                </div>
                <div className="flex gap-4 md:gap-6">
                  <Image
                    src="assets/images/about-marker.svg"
                    className="w-6 h-6 md:w-7 md:h-7"
                    alt="about marker"
                    width={500}
                    height={500}
                  />
                  <p>Franchise Option</p>
                </div>
                <div className="flex gap-4 md:gap-6">
                  <Image
                    src="assets/images/about-marker.svg"
                    className="w-6 h-6 md:w-7 md:h-7"
                    alt="about marker"
                    width={500}
                    height={500}
                  />
                  <p>Quality Education</p>
                </div>
                <div className="flex gap-4 md:gap-6">
                  <Image
                    src="assets/images/about-marker.svg"
                    className="w-6 h-6 md:w-7 md:h-7"
                    alt="about marker"
                    width={500}
                    height={500}
                  />
                  <p>Women Empowerment</p>
                </div>
              </div>

              <div className="flex justify-start md:justify-start">
                <button className="py-2 px-12 rounded-full bg-[#16C6EC] hover:bg-[#45d5f5] text-white">
                  <Link href="/components/contact-us">KNOW MORE</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function JoinUsNow() {
  return (
    <div className="container mb-80">
      <div className="text-center text-4xl -mb-8 lg:text-5xl text-[#4F4D74]" style={{
                    fontFamily: "Gilroy",
                    fontWeight: 700, // bold
                  }}>
        <h1>Join Us Now!</h1>
      </div>

      <div className="cards text-white flex flex-col justify-center gap-8 max-w-[77vw] mx-auto">
        <div className="card-one flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mt-24 max-w-[100vw] bg-[#6072FA] border-8 border-[#f9f9fa] rounded-3xl drop-shadow-2xl">
          <div className="relative bottom-20 -mb-20">
            <Image
              src="assets/images/tiger-with-boy.svg"
              alt="tiger with boy"
              className="w-[80%] h-[auto]"
              width={500}
              height={500}
            />
          </div>

          <div className="flex flex-col gap-4 pb-10 px-4">
            <h1 className="text-3xl text-center lg:text-justify font-extrabold">
              Book a Franchise
            </h1>
            <p className="text-center lg:text-justify">
              Begin your teaching venture now, own your <br /> franchise and
              earn right from your doorstep.
            </p>
            <button className="px-10 py-3 mx-auto lg:mx-0 bg-white text-[#6072FA] rounded-3xl border-8 border-[#e3e3e6] w-[180px]">
              <Link href="https://www.geniuschampsacademy.com/franchise.php">
                Book Now
              </Link>
            </button>
          </div>
        </div>

        <div className="card-two-three-root flex flex-col lg:flex-row gap-10">
          <div className="card-two flex flex-col h-[22rem] lg:w-1/3 gap-7 bg-[#74D997] py-16 px-24 border-8 border-[#f9f9fa] justify-center items-center rounded-3xl drop-shadow-2xl">
            <div className="text-white text-4xl font-extrabold whitespace-nowrap">
              <h1 className="text-3xl">
                Book Demo <br /> Class Now
              </h1>
            </div>
            <button className="px-10 py-3 text-white bg-[#6072FA] rounded-3xl border-4 border-white w-[180px]">
              <Link href="/components/contact-us">Book Now</Link>
            </button>
          </div>

          <div className="card-three bg-[#17C7EE] h-[22rem] lg:w-2/3 border-8 border-[#f9f9fa] rounded-3xl drop-shadow-2xl">
            <div className="mx-6 min-h-[98%] bg-no-repeat flex justify-center">
              <div className="flex flex-col justify-center items-center md:relative md:top-14 md:left-2">
                <h1 className="mb-6 text-3xl whitespace-nowrap z-10 md:relative md:-left-40" style={{
                    fontFamily: "Gilroy",
                    fontWeight: 700, // bold
                  }}>
                  Exam Portal
                </h1>

                <button className="px-10 py-3 bg-white text-[#6072FA] rounded-3xl border-4 z-20 md:relative md:-left-40 border-[#e3e3e6] w-[180px]">
                  <Link href="https://www.appadmin.geniuschampsacademy.com/gcaexam/examlogin.html">
                    Give Exam
                  </Link>
                </button>
                <div className="w-[30rem] h-auto relative hidden md:block -z-0 md:-top-32 xl:-top-36">
                  <Image
                    src="assets/images/tiger-on-bench.svg"
                    alt="exam portal tiger"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function DemoClassForLandingPage() {
  return (
    <div className="flex justify-center flex-col items-center mt-20">
      {/* <div className='text-center'>
            <h1 className='text-4xl lg:text-5xl text-[#4F4D74] px-6'>What are you looking for!</h1>
        </div> */}
      <div className="flex flex-row items-center justify-between bg-[#EDD93C] max-w-[85vw] sm:max-w-[90vw] sm:min-w-[90vw] lg:min-w-[80vw] lg:max-w-[80vw] px-4 py-4 sm:px-12 sm:py-8 mt-6 rounded-3xl ">
        <div className="w-[28rem]">
          <Image
            src="/assets/images/say-hello.svg"
            width={500}
            height={500}
            alt="Picture of the author"
          ></Image>
        </div>
        <button className="w-[22rem]">
          <Link href="/components/contact-us">
            <Image
              src="/assets/images/book-free-demo-class.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            ></Image>
          </Link>
        </button>
      </div>
    </div>
  );
}

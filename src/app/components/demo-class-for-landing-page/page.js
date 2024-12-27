import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function DemoClassForLandingPage() {
  return (
    <div className="flex justify-center flex-col items-center mt-20">
      {/* <div className='text-center'>
            <h1 className='text-4xl lg:text-5xl text-[#4F4D74] px-6'>What are you looking for!</h1>
        </div> */}
      <div className="flex flex-row items-center justify-between bg-[#EDD93C] max-w-[85vw] sm:max-w-[90vw] sm:min-w-[90vw] lg:min-w-[85vw] lg:max-w-[85vw] px-4 py-4 sm:px-12 sm:py-4 mt-6 rounded-3xl ">
        <div className="w-[32rem]">
          <Image
            src="/assets/images/say-hello.svg"
            width={600}
            height={600}
            alt="Picture of the author"
          ></Image> 
        </div>
        <button className="w-[30rem]">
          <Link href="/components/contact-us">
            <Image
              src="/assets/images/book-free-demo-class.svg"
              width={600}
              height={600}
              alt="Picture of the author"
            ></Image>
          </Link>
        </button>
      </div>
    </div>
  );
}

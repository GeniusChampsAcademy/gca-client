import React from "react";
import Image from "next/image";

export default function SuccessRate() {
  return (
    <div className="container flex flex-col items-center gap-5 mt-16 mb-[144px]">
      <div>
        <p className="text-center text-4xl lg:text-5xl text-[#4F4D74] mb-5" style={{
                    fontFamily: "Gilroy",
                    fontWeight: 700, // bold
                  }}>
          100% Success Rate
        </p>
      </div>
      <div className="w-full max-w-[95vw] md:max-w-[70vw] lg:max-w-[74vw]">
        <Image
          src="assets/images/success-rate.svg"
          alt="success rate img"
          className="w-full object-contain"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

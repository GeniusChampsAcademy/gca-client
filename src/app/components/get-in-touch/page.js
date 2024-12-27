import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <section className="max-w-[52rem] mx-auto py-10 px-5 my-7 text-[#4F4D74]">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl" style={{
                    fontFamily: "Gilroy",
                    fontWeight: 700, // bold
                  }}>Get in Touch</h2>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:text-lg">
        {/* Contact Number Card */}
        <div className="bg-white rounded-2xl p-4 text-start border-[3px] border-[#E2EBF4]">
          <div className="flex justify-start mb-4 relative">
            <div className="relative">
              <Image
                src="../assets/images/phone.svg"
                alt="phone icon"
                className="rounded-md w-14 h-14 p-3 bg-[#74D997]"
                width={500}
                height={500}
              />
            </div>
          </div>
          <h3 className="font-medium text-gray-700 mb-8">Contact Number</h3>
          <Link href="tel:9423631238">
            <p className="text-gray-500 mt-2 sm:text-md">
              +91 9423631238 / <br /> +91 7972434489
            </p>
          </Link>
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-2xl p-4 text-start border-[3px] border-[#E2EBF4] overflow-hidden">
          <div className="flex justify-start mb-4 relative">
            <div className="relative">
              <Image
                src="../assets/images/mail.svg"
                alt="mail icon"
                className="rounded-md w-14 h-14 p-3 bg-[#17C7EE]"
                width={500}
                height={500}
              />
            </div>
          </div>
          <h3 className="font-medium text-gray-700 mb-8">Mail</h3>
          <Link href="mailto:geniuschampsacademy@gmail.com">
            <p className="text-gray-500 mt-2 md:text-lg">
              geniuschampsacademy
              <br className="hidden md:block" />
              @gmail.com
            </p>
          </Link>
        </div>

        {/* Address Card */}
        <div className="bg-white rounded-2xl p-4 text-start border-[3px] border-[#E2EBF4]">
          <div className="flex justify-start mb-4 relative">
            <div className="relative">
              <Image
                src="../assets/images/mape.svg"
                alt="mape icon"
                className="rounded-md w-14 h-14 p-3 bg-[#EDD93C]"
                width={500}
                height={500}
              />
            </div>
          </div>
          <h3 className="font-medium text-gray-700 mb-8">Address</h3>
          <a
            href="https://www.google.com/maps?q=PL+NO.+28,+KHNO.+67/6,+Genius+Champs+Academy,+PANCHTARA+CO-OP+HSG+SOC,+Flat+No.102,FLOOR-1+GOKUL+GOVERDHAN+-+4,+MOUZA,+near+orivision+nursing+home,+Manish+Nagar,+Somalwada,+Nagpur,+Maharashtra+440015&ftid=0x3bd4c70afeb3855d:0xc119ae3ae076b8a&entry=gps&lucs=,94242607,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTM4LjIuOTAyNDAYACCs3wEqYyw5NDI0MjYwNyw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICSU4%3D&g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-gray-500 mt-2">
              Manish Nagar, Somalwada, Nagpur, Maharashtra
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same FAQ is clicked
    } else {
      setActiveIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <section className="max-w-[92vw] lg:max-w-[55vw] mx-auto mt-10 mb-0">
      <div className="text-center text-[#4F4D74] mb-10">
        <h2 className="text-4xl lg:text-5xl">FAQ</h2>
        <p className="md:text-lg lg:text-lg">
          Feeling a little lost? No worries – we've got your back! Here's the
          lowdown on all your burning questions, so buckle up for some seriously
          cool info!
        </p>
      </div>
      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-[#6072FA] text-white border-[5px] border-[#E3ECF4]"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="font-medium ml-10">{item.question}</h3>

              {/* Container for the Rectangle and Vector images */}
              <span className="relative w-[45px] h-auto rounded-full mr-3">
                <Image
                  src="../assets/images/star.svg"
                  alt="Rectangle"
                  className="w-[36px] h-auto bg-white rounded-full p-2"
                  width={500}
                  height={500}
                />
              </span>
            </div>

            <div
              className={`faq-answer transition-max-height duration-500 ease-in-out ${
                activeIndex === index
                  ? "max-h-screen"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              <p className="p-4 mr-10 ml-10">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "What cool stuff can I learn here?",
    answer:
      "You can dive into Abacus, Midbrain Activation, Vedic Maths, memory techniques, and lots more exciting skills to master.",
  },
  {
    question: "Who can enroll in your courses?",
    answer:
      "Our courses are suitable for students, educators, parents, and anyone interested in personal or professional development.",
  },
  {
    question: "How do I book a demo class?",
    answer:
      "Simply fill out the form on our website, and we'll schedule your free session. Or contact us directly via phone or email.",
  },
  {
    question: "Do you offer franchise opportunities?",
    answer:
      "Yes, we provide comprehensive support for franchisees interested in starting their own classes.",
  },
  {
    question: "How can I join as a teacher?",
    answer: "Book a Demo Session and send us your qualifications details.",
  },
  // {
  //   question: "What sets Genius Champs Academy apart?",
  //   answer:
  //     "We prioritize personalized learning, innovative teaching methods, and a supportive environment.",
  // },
  // {
  //   question: "How can I contact customer support?",
  //   answer: "Reach us via phone, email, or our website's contact form.",
  // },
  // {
  //   question: "Are both online and offline courses available?",
  //   answer:
  //     "Yes! Choose between virtual or in-person classes based on your preference and schedule.",
  // },
  // {
  //   question: "Do you have any secret tips for becoming a super smart kid?",
  //   answer:
  //     "Oh, we've got plenty! Our courses are full of secrets and surprises that will make you feel like a genius in no time.",
  // },
  {
    question: "How do I snag a spot in the fun zone?",
    answer:
      "Piece of cake! Just hit up our online form, and we'll slide you into a demo session. Or hit us with a DM or email – we're always ready to chat!",
  },
];

export default Faq;

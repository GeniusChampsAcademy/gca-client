"use client"; // Mark the component as a Client Component

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./our-activities.css";

const videos = ["DX3sbFEWF0k", "Dny79edv0Uk", "suVseOqBIZs", "JEaWu3XJx9A"];

const galleryImages = [
  "/assets/gcs-images/student-group-pic.JPG",
  "/assets/gcs-images/student-group-pic2.JPG",
  "/assets/gcs-images/student-group-pic3.JPG",
  "/assets/gcs-images/student-group-pic4.JPG",
  "/assets/gcs-images/student-group-pic5.JPG",
  "/assets/gcs-images/student-group-pic6.JPG",
  "/assets/gcs-images/student-group-pic7.JPG",
  "/assets/gcs-images/student-group-pic8.JPG",
  "/assets/gcs-images/student-group-pic9.JPG",
  "/assets/gcs-images/student-group-pic10.JPG",
  "/assets/gcs-images/student-group-pic11.JPG",
  "/assets/gcs-images/student-group-pic12.JPG",
  "/assets/gcs-images/student-group-pic13.JPG",
  "/assets/gcs-images/student-group-pic14.JPG",
  "/assets/gcs-images/student-group-pic15.JPG",
  "/assets/gcs-images/student-group-pic16.JPG",
  "/assets/gcs-images/student-group-pic17.JPG",
  "/assets/gcs-images/student-group-pic18.JPG",
  "/assets/gcs-images/student-group-pic19.JPG",
  "/assets/gcs-images/student-group-pic20.JPG",
  "/assets/gcs-images/student-group-pic21.JPG",
  "/assets/gcs-images/student-group-pic22.JPG",
  "/assets/gcs-images/student-group-pic23.JPG",
  "/assets/gcs-images/student-group-pic24.JPG",
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function OurActivities() {
  const [selectedTab, setSelectedTab] = useState("youtube");
  const [shuffledVideos, setShuffledVideos] = useState([]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const shuffled = shuffleArray([...videos]);
    setShuffledVideos(shuffled);
  }, []);

  const openGallery = (image) => {
    setActiveImage(image);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setTimeout(() => setActiveImage(null), 300);
  };

  const renderContent = () => {
    const currentVideoId = videos[0];
    const embedUrl = `https://www.youtube.com/embed/${currentVideoId}`;
    switch (selectedTab) {
      case "youtube":
        return (
          <div className="flex justify-center items-center w-full h-full">
            <iframe
              className="w-full h-[13rem] min-w-[80vw] max-w-[35rem] sm:h-72 sm:min-w-[35rem] sm:max-w-md md:min-w-[35rem] lg:max-w-xl rounded-xl border-4 border-white drop-shadow-2xl"
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        );
      case "ourChamps":
        return (
          <div className="flex justify-center items-center w-full h-full">
            <iframe
              className="w-full h-[13rem] min-w-[80vw] max-w-[35rem] sm:h-72 sm:min-w-[35rem] sm:max-w-md md:min-w-[35rem] lg:max-w-xl rounded-xl border-4 border-white drop-shadow-2xl"
              src="https://www.youtube.com/embed/suVseOqBIZs?si=iz4J6tBgtgyNY1DQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        );
      case "achievements":
        return (
          <div className="flex justify-center items-center w-full h-full">
            <iframe
              className="w-full h-[13rem] min-w-[80vw] max-w-[35rem] sm:h-72 sm:min-w-[35rem] sm:max-w-md md:min-w-[35rem] lg:max-w-xl rounded-xl border-4 border-white drop-shadow-2xl"
              src="https://www.youtube.com/embed/R03RroVowqY?si=9grzy0FtVOFySG1_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        );
      case "photoGallery":
        return (
          <div className="flex justify-center items-center max-w-[45rem] flex-wrap overflow-y-scroll max-h-72 ">
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 max-w-6xl mx-auto">
              {galleryImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover w-full h-auto rounded cursor-pointer"
                  width={500}
                  height={500}
                  onClick={() => openGallery(img)}
                />
              ))}
            </div>

            {/* Modal for Enlarged Image */}
            {galleryOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                <button
                  className="absolute top-5 right-5 text-white text-2xl font-bold"
                  onClick={closeGallery}
                >
                  &times;
                </button>
                <Image
                  src={activeImage}
                  alt="Enlarged gallery image"
                  className="max-w-full max-h-full rounded-lg"
                  width={500}
                  height={500}
                />
              </div>
            )}
          </div>
        );
      default:
        return (
          <div className="flex justify-center items-center w-full h-full">
            <iframe
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-xl border-4 border-white drop-shadow-2xl"
              src="https://www.youtube.com/embed/qYNweeDHiyU?si=FcbbLqqnudYuP7wl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        );
    }
  };

  return (
    <div className="root max-w-[75vw] mx-auto -mt-52">
      <div className="flex gap-5 justify-start items-center">
        <Image
          src="assets/images/our-activities-logo.svg"
          alt="our activities logo"
          className="w-16 sm:w-20 md:w-24"
          width={500}
          height={500}
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#4F4D74] font-extrabold">
          Our Activities
        </h2>
      </div>

      <div className="flex flex-col items-center lg:items-start lg:flex-row text-sm sm:text-lg lg:text-xl text-[#4F4D74] font-extrabold mt-5">
        <div className="p-4">
          <ul className="flex flex-col gap-3 lg:gap-8">
            {["youtube", "ourChamps", "achievements", "photoGallery"].map(
              (tab) => (
                <li
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`cursor-pointer px-4 py-2 text-center ${
                    selectedTab === tab
                      ? "font-bold border-4 border-y-0 border-r-0 border-l-[#EDA63C] bg-[#E2EBF4]"
                      : ""
                  }`}
                >
                  {tab
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^\w/, (c) => c.toUpperCase())}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex-1 h-full mt-5 lg:mt-0">{renderContent()}</div>
      </div>
    </div>
  );
}

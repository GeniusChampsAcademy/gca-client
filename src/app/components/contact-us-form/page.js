"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./contact-us-form.css";

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectedService = useRef("Select a service");

  // Handle dropdown toggle
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    data.service = selectedService.current; // Add the selected service to form data
    try {
      console.log(data);
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        data
      );
      if (response.data.success) {
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        reset();
        selectedService.current = "Select a service"; // Reset dropdown
      }
    } catch (error) {
      toast.error("Failed to submit the form", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-us-form" className="max-w-3xl mx-auto mt-10 p-5 text-[#4F4D74]">
      <ToastContainer />
      <form className="p-4 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block font-medium"
          >
            Name<span className="star">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="remove-outline mt-1 p-4 block w-full rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out sm:text-sm"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Contact Number Field */}
        <div>
          <label htmlFor="contact" className="block font-medium">
            Contact Number<span className="star">*</span>
          </label>
          <input
            type="tel"
            id="contact"
            placeholder="Enter your contact number"
            className="remove-outline mt-1 p-4 block w-full rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out sm:text-sm"
            {...register("contact", {
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit contact number",
              },
            })}
          />
          {errors.contact && (
            <p className="text-red-500 text-sm mt-1">
              {errors.contact.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block font-medium">
            Email<span className="star">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="remove-outline mt-1 p-4 block w-full rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out sm:text-sm"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Services Dropdown */}
        <div ref={dropdownRef} className="relative">
          <label
            htmlFor="service"
            className="block font-medium service"
          >
            Service<span className="star">*</span>
          </label>
          <button
            type="button"
            id="dropdownToggle"
            onClick={toggleDropdown}
            className="px-5 py-4 text-[#A9BFCC] text-sm bg-white hover:bg-gray-50 flex justify-between items-center mt-1 remove-outline p-4 w-full rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out sm:text-sm"
          >
            <span>{selectedService.current}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-gray-500"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <ul
              className="absolute shadow-lg bg-white py-2 z-[1000] w-full divide-y max-h-40 overflow-auto mt-1"
              role="listbox"
            >
              {[
                "Abacus Classes",
                "Vedic Maths Classes",
                "Memory Techniques Workshop",
                "Midbrain Activation Workshop",
                "Handwriting Improvement Workshop",
                "Abacus: Teacher Training Program",
                "Vedic Maths: Teacher Training Program",
              ].map((service) => (
                <li
                  key={service}
                  className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer"
                  onClick={() => {
                    selectedService.current = service;
                    setDropdownOpen(false);
                  }}
                >
                  {service}
                </li>
              ))}
            </ul>
          )}
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Message Field (optional) */}
        <div>
          <label htmlFor="message" className="block font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Enter your message"
            className="remove-outline mt-1 p-4 block w-full rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out sm:text-sm"
            style={{ resize: "none" }}
            {...register("message")}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className={`bg-[#6173FD] hover:bg-[#5164f1] text-white font-bold py-3 px-4 w-full rounded-full ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Contact Us"}
          </button>
        </div>
      </form>
    </div>
  );
}

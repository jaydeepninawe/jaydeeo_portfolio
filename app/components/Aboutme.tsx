"use client";
import React from "react";
import { FaCode, FaMobileAlt, FaChalkboardTeacher } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    icon: <FaCode size={24} />,
    description:
      "As developers, we're passionate about building fast, scalable, and user-friendly web apps using modern frameworks like Next.js and React.",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt size={24} />,
    description:
      "We thrive on intuitive design and efficient code. Our apps aim to make a positive impact by solving real-world problems.",
  },
  {
    title: "UI/UX Designing",
    icon: <MdDesignServices size={24} />,
    description:
      "Our design team crafts clean, responsive, and visually appealing user interfaces for both web and mobile platforms.",
  },
  {
    title: "Mentorship",
    icon: <FaChalkboardTeacher size={24} />,
    description:
      "We love sharing knowledge and guiding others in their tech journey through workshops, bootcamps, and one-on-one sessions.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-[#0f111a] text-white px-6 md:px-20 py-20 relative overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/stars-bg.png')] bg-cover opacity-20" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Block */}
        <div className="md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-mono mb-6 ">
            <span className="text-purple-400">#</span>about-me
            <span className="w-2/3 h-px bg-purple-400 inline-block ml-4 align-middle"></span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mb-3">
            👋 Hey there! I'm a 3rd-year B.Tech student specializing in
            Information Technology, passionate about building real-world tech
            solutions and exploring the depths of core computer science.
            <br />
            I’m currently diving deep into the MERN stack (MongoDB, Express,
            React, Node.js) and enhancing my deployment skills using Docker,
            Jenkins, and AWS. With hands-on experience in CI/CD pipelines, I’m
            learning how to ship reliable and scalable applications.
          </p>
          <p className="text-gray-300 text-base sm:text-lg mb-3">
            💡Hey there! I'm a 3rd-year B.Tech student specializing in
            Information Technology, passionate about building real-world tech
            solutions and exploring the depths of core computer science. I’m
            currently diving deep into the MERN stack (MongoDB, Express, React,
            Node.js) and enhancing my deployment skills using Docker, Jenkins,
            and AWS. With hands-on experience in CI/CD pipelines, I’m learning
            how to ship reliable and scalable applications.
          </p>
        </div>

        {/* Right Image with animated glow */}
        <div className="md:w-1/2 flex justify-center relative">
          {/* Animated glow behind image */}
          <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />

          <img
            src="/profile.png"
            alt="About us team"
            className="w-80 h-80 object-cover rounded-full z-10"
          />
        </div>
      </div>

      {/* Services */}
      <div className="relative z-10 mt-16">
        
       
        {/* View All Button */}
        <div className=" ml-2 sm:text-left mt-6 text-3xl">
      <Link
        href="/aboutus"
        className=" bg-transparent border border-purple-400 text-purple-400 text-sm px-3 py-1 rounded hover:bg-purple-400 hover:text-black transition"
          
      >
        View all ↗
      </Link>
    </div>
      </div>
    </section>
  );
};

export default AboutUs;

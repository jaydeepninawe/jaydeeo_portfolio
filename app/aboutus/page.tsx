
import React from "react";
import { FaCode, FaMobileAlt, FaChalkboardTeacher } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import Funfact from "../components/Funfacts";

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

const Page = () => {
  return (
    <section className="bg-[#0f111a] text-white px-6 md:px-20 py-20 relative overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/stars-bg.png')] bg-cover opacity-20" />

      {/* ABOUT US Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* Left Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-mono mb-8 mt-6 flex items-center">
            <span className="text-purple-400">/</span>about-us
            <span className="flex-1 h-px bg-purple-400 ml-4"></span>
          </h2>

          <p className="text-gray-300 text-base mb-4 leading-relaxed">
            👋 Hey there! I'm a 3rd-year B.Tech student specializing in
            Information Technology, passionate about building real-world tech
            solutions and exploring the depths of core computer science.
            <br />
            I’m currently diving deep into the MERN stack (MongoDB, Express,
            React, Node.js) and enhancing my deployment skills using Docker,
            Jenkins, and AWS. With hands-on experience in CI/CD pipelines, I’m
            learning how to ship reliable and scalable applications.
          </p>
          <p className="text-gray-300 text-base mb-4 leading-relaxed">
            💡Besides backend and frontend development, I have a keen eye for
            design. I’m a web designer and front-end developer, working with
            tools like Figma to create clean, responsive UI/UX experiences for
            both desktop and mobile. Whether it's designing sleek interfaces or
            setting up a secure backend with JWT authentication, CSRF
            protection, or form handling with file uploads, I love learning and
            implementing new things every day.
          </p>
        </div>

        {/* Image - Center aligned vertically */}
        <div className="md:w-1/2 flex justify-center items-center relative">
          <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
          <img
            src="/profile.png"
            alt="About us team"
            className="w-80 h-80 object-cover rounded-full z-10"
          />
        </div>
      </div>

      {/* SERVICES Section */}
      <div className="relative z-10 mt-16">
        <h3 className="text-3xl font-mono mt-16 mb-8 flex items-center">
          🚀 What we do!
          <span className="flex-1 h-px bg-purple-400 ml-4"></span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-purple-600/20 backdrop-blur-sm transition hover:scale-105 duration-300"
            >
              <div className="flex items-center gap-3 mb-3 text-purple-300">
                {service.icon}
                <h4 className="text-xl font-mono">{service.title}</h4>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FUN FACTS Section */}
      <div className="relative z-10 mt-20">
        <h3 className="text-3xl font-mono mb-6 flex items-center">
          <span className="text-purple-400">/</span>my-fun-facts
          <span className="flex-1 h-px bg-purple-400 ml-4"></span>
        </h3>

        <Funfact />
      </div>
    </section>
  );
};

export default Page;

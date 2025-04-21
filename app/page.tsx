import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#23272e] flex flex-col md:flex-row items-center justify-center px-8 py-16">
      {/* Left Side: Text Content */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl text-center md:text-left ml-14">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-white">
          Jaydeep is a{" "}
          <span className="text-purple-400">web designer</span> and{" "}
          <span className="text-purple-400">full-stack developer</span>
        </h1>
        <p className="text-gray-300 font-mono">
          He crafts responsive websites where technologies meet creativity
        </p>
        <button className="border border-purple-400 text-purple-400 px-6 py-2 rounded hover:bg-purple-400 hover:text-white transition w-fit font-mono">
          Contact me!!
        </button>
      </div>

      {/* Right Side: Image and Status */}
      <div className="flex-1 flex flex-col items-center mt-12 md:mt-0">
        <div className="relative">
          <img
            src="profile_picture.jpg"
            alt="profile"
            className="w-96 h-96 object-cover rounded-lg grayscale"
          />
          {/* Decorative squares */}
          <div className="absolute top-6 left-6 border-2 border-purple-400 w-16 h-16"></div>
          <div className="absolute bottom-6 right-6 border-2 border-purple-400 w-12 h-12"></div>
        </div>
        <div className="mt-4 bg-[#31343b] px-4 py-2 rounded text-purple-400 font-mono text-sm">
          Currently working on <span className="text-white font-bold">Portfolio</span>
        </div>
      </div>

      
    </section>
  );
}

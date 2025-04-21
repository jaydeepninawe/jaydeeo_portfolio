import React from "react";

const Contactus = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-[#0f111a] text-white font-mono mt-10">
      {/* Section Header */}
      <h2 className="text-2xl sm:text-3xl flex items-center mb-4">
        <span className="text-purple-400">#</span>contacts
        <span className="flex-1 h-px bg-purple-400 ml-4"></span>
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-10 max-w-xl">
        I’m interested in freelance opportunities. However, if you have other request or question, don’t
        hesitate to contact me
      </p>

      {/* Contact Form */}
      <form className="max-w-xl space-y-6">
        {/* Email Field */}
         <div className="flex-row">
        <div>
          <label htmlFor="email" className="block text-sm mb-1 text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Query Textarea */}
        <div>
          <label htmlFor="message" className="block text-sm mb-1 text-gray-300">
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            required
            placeholder="Type your message here..."
            className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          ></textarea>
        </div>
       </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-md transition-colors"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contactus;

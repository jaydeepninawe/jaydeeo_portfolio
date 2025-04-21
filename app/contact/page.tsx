import React from "react";
import { Mail, Twitter, MessageSquare } from "lucide-react";

const page = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-[#0f111a] text-white font-mono mt-10">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl flex items-center mb-4">
        <span className="text-purple-400">/</span>contacts
        <span className="flex-1 h-px bg-purple-400 ml-4"></span>
      </h2>
      <p className="text-gray-400 text-sm mb-8">Who am i?</p>

      {/* Description + Contact Methods */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="max-w-md">
          <p className="text-gray-400 text-sm leading-relaxed">
            I’m interested in freelance opportunities. However, if you have other request or question, don’t
            hesitate to contact me
          </p>
        </div>

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
        <div className="mt-3">
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
      </div>

      {/* Social Links */}
      <div className="mt-12 mb-6">
        <h3 className="text-xl text-purple-400 mb-2">#let's connect </h3>
        <div className="flex-col gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            Mobile NO. (+91 7666974437)
          </div>
          <div className="flex items-center gap-2">
            Email Address (ninawejay3002@gmail.com)
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

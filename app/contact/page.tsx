'use client';
import React, { useState } from "react";
import { Mail, Twitter, MessageSquare } from "lucide-react";
const URL = process.env.NEXT_PUBLIC_API_URL;
const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    // const URL = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await fetch("https://portfolio-backend-d4mn.onrender.com/send-email", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully!'
        });
        setFormData({ email: '', message: '' });
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || 'Failed to send message'
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Network error - please try again later'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-6 md:px-20 py-16 bg-[#0f111a] text-white font-mono mt-10 text-center">
      {/* Header */}
      <h2 className="text-2xl sm:text-4xl flex items-center justify-center mb-4">
        <span className="text-purple-400">/</span>contacts
        <span className="flex-1 h-px bg-purple-400 ml-4"></span>
      </h2>
      <p className="text-gray-400 text-base mb-8">Who am I?</p>

      {/* Description + Contact Methods */}
      <div className="flex flex-col items-center gap-10 max-w-2xl mx-auto">
        <p className="text-gray-400 text-base leading-relaxed">
          I'm interested in freelance opportunities. However, if you have another request or question, don't
          hesitate to contact me.
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-xl space-y-6 mx-auto mt-10 text-left">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-base mb-1 text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-md text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Query Textarea */}
        <div>
          <label htmlFor="message" className="block text-base mb-1 text-gray-300">
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-md text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          ></textarea>
        </div>

        {/* Status Message */}
        {submitStatus && (
          <div className={`p-3 rounded-md text-base ${
            submitStatus.success 
              ? 'bg-green-900/50 text-green-300' 
              : 'bg-red-900/50 text-red-300'
          }`}>
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-2 text-white text-base rounded-md transition-colors ${
            isSubmitting
              ? 'bg-purple-800 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <MessageSquare size={16} className="animate-pulse" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Mail size={16} />
              Submit
            </span>
          )}
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-16">
        <h3 className="text-xl text-purple-400 mb-4">#all-media</h3>
        <div className="flex justify-center gap-10 text-gray-400 text-base">
          <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <Twitter size={16} />
            @elias
          </div>
          <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <Twitter size={16} />
            @elias
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

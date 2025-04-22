'use client'; // Required for client-side interactivity
import React, { useState } from "react";

const Contactus = () => {
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
  // const URL = process.env.NEXT_PUBLIC_API_URL;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

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
        setFormData({ email: '', message: '' }); // Reset form
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
    <section className="px-6 md:px-20 py-16 bg-[#0f111a] text-white font-mono mt-10">
      {/* Section Header */}
      <h2 className="text-2xl sm:text-3xl flex items-center mb-4">
        <span className="text-purple-400">#</span>contacts
        <span className="flex-1 h-px bg-purple-400 ml-4"></span>
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-10 max-w-xl">
        I'm interested in freelance opportunities. However, if you have other request or question, don't
        hesitate to contact me
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            ></textarea>
          </div>
        </div>

        {/* Status Message */}
        {submitStatus && (
          <div className={`p-3 rounded-md text-sm ${
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
          className={`px-6 py-2 text-white text-sm rounded-md transition-colors ${
            isSubmitting
              ? 'bg-purple-800 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default Contactus;
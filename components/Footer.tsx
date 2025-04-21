'use client';

import { FaGithub, FaFigma, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Left section */}
        <div>
          <h2 className="text-white text-lg font-semibold flex items-center gap-2">
            <span>✌️ Jaydeep</span>
            <a href="mailto:elias@elias-dev.ml" className="text-sm text-gray-400 hover:underline">
              {/* Email link is optional */}
            </a>
          </h2>
          <p className="text-sm mt-1">Full-stack developer, specializing in creating responsive<br /> user interfaces and deploying applications seamlessly</p>
        </div>

        {/* Right section */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <p className="text-white font-mono">Media</p>
          <div className="flex space-x-4 text-lg">
            <a href="https://github.com/jaydeepninawe/" className="hover:text-white transition">
              <FaGithub />
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/jaydeep-n-a51a28252/" className="hover:text-white transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © Copyright 2025. Made by Jaydeep
      </div>
    </footer>
  );
}

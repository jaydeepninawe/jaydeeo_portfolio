

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        
        {/* Left section */}
        <div className="md:flex-1">
          <h2 className="text-white text-2xl font-semibold flex justify-center md:justify-start items-center gap-2">
            ✌️ Jaydeep
          </h2>
          <p className="text-base mt-2 leading-relaxed">
            Full-stack developer, specializing in creating responsive
            user interfaces and deploying applications seamlessly
          </p>
        </div>

        {/* Centered Media section */}
        <div className="flex flex-col items-center gap-4 md:items-center md:justify-center md:flex-none">
          <p className="text-white font-mono text-lg">Media</p>
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://github.com/jaydeepninawe/"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jaydeep-n-a51a28252/"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © Copyright 2025. Made by Jaydeep
      </div>
    </footer>
  );
}

'use client';

import { FaGithub, FaFigma, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Left section */}
        <div>
          <h2 className="text-white text-lg font-semibold flex items-center gap-2">
            <span>🖼 Elias</span>
            <a href="mailto:elias@elias-dev.ml" className="text-sm text-gray-400 hover:underline">
              elias@elias-dev.ml
            </a>
          </h2>
          <p className="text-sm mt-1">Web designer and front-end developer</p>
        </div>

        {/* Right section */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <p className="text-white font-mono">Media</p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white transition"><FaGithub /></a>
            <a href="#" className="hover:text-white transition"><FaFigma /></a>
            <a href="#" className="hover:text-white transition"><FaDiscord /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © Copyright 2022. Made by Elias
      </div>
    </footer>
  );
}

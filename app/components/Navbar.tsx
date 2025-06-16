"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaDribbble, FaFigma } from "react-icons/fa";
import Dropdown from './Dropdown';
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Works" },
    { href: "/aboutus", label: "About-me" },
    { href: "/contact", label: "Contacts" },
    {href:"/blogs" , label:"blogs"},
  ];

  return (
    <header className="w-full px-4 md:px-8 py-4 bg-[#1a1a1a] text-white fixed top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
        <div className="text-xl font-bold flex items-center gap-2 ml-1.5">
          
          Jaydeep Ninawe
        </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm hover:text-purple-400 transition"
            >
              {link.label}
            </a>
          ))}
          <div className="text-sm cursor-pointer"><Dropdown/></div>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-[#1a1a1a] text-white flex flex-col items-start px-8 py-6 gap-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl font-medium hover:text-purple-400"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {/* <div className="text-base mt-2">EN ▾</div> */}
          {/* Social Icons */}
          <div className="flex gap-6 mt-4">
            <a href="https://github.com/" target="_blank"><FaGithub size={20} /></a>
            <a href="https://dribbble.com/" target="_blank"><FaDribbble size={20} /></a>
            <a href="https://figma.com/" target="_blank"><FaFigma size={20} /></a>
          </div>
        </div>
      )}
    </header>
  );
}

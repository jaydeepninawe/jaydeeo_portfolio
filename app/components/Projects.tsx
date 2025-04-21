import React from "react";
import Link from "next/link";

const image = "project.png"; // Replace with actual image path or import

const projects = [
  {
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    tags: ["HTML", "SCSS", "Python", "Flask"],
    image,
    buttons: [
      { label: "Live", link: "#" },
      { label: "Cached", link: "#" },
    ],
  },
  {
    title: "ProtectX",
    description: "Discord anti-crash bot",
    tags: [
      "React",
      "Express",
      "Discord.js",
      "Node.js",
      "HTML",
      "SCSS",
      "Python",
      "Flask",
    ],
    image,
    buttons: [{ label: "Live", link: "#" }],
  },
  {
    title: "Kahoot Answers Viewer",
    description: "Get answers to your kahoot quiz",
    tags: ["CSS", "Express", "Node.js"],
    image,
    buttons: [{ label: "Live", link: "#" }],
  },
];

const ProjectCard = ({ project }: { project: typeof projects[number] }) => (
  <div className="bg-[#1b1f27] border border-white rounded-md overflow-hidden transition-transform hover:scale-105 duration-300 min-h-[360px]">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-[180px] object-cover p-1.5"
    />
    <div className="p-4 border-t border-gray-700">
      <div className="text-xs text-gray-400 mb-1">
        {project.tags.join(" ")}
      </div>
      <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-3">{project.description}</p>
      <div className="flex gap-2 flex-wrap">
        {project.buttons.map((btn, index) => (
          <a
            key={index}
            href={btn.link}
            className="bg-transparent border border-purple-400 text-purple-400 text-sm px-3 py-1 rounded hover:bg-purple-400 hover:text-black transition"
          >
            {btn.label} ↗
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div className="bg-[#13161c] min-h-screen px-4 sm:px-10 py-10 flex flex-col justify-between">
    {/* Section title */}
    <h1 className="text-white text-2xl sm:text-3xl font-mono mb-6">
      <span className="text-purple-400">#</span>projects
      <span className="w-1/2 h-px bg-purple-400 inline-block ml-4 align-middle"></span>
    </h1>

    {/* Project grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>

    {/* View All Button */}
    <div className=" ml-2 sm:text-left mt-6">
      <Link
        href="/projects"
        className="bg-transparent border border-purple-400 text-purple-400 text-sm px-3 py-1 rounded hover:bg-purple-400 hover:text-black transition"
          
      >
        View all ↗
      </Link>
    </div>
  </div>
);

export default Projects;

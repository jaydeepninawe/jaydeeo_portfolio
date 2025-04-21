import React from "react";


const image = "project.png"
const projects = {
  complete: [
    {
      image,
      title: "ChertNodes",
      tech: "HTML SCSS Python Flask",
      description: "Minecraft servers hosting",
      live: true,
      github: false,
    },
    {
      image: `${image}`,
      title: "Kahoot Answers Viewer",
      tech: "CSS Express Node.js",
      description: "Get answers to your kahoot quiz",
      live: true,
      github: false,
    },
    {
      image,
      title: "ProtectX",
      tech: "Next Express Discord.js Node.js",
      description: "Discord anti-crash bot",
      live: false,
      github: true,
    },
    {
      image,
      title: "Kotik Bot",
      tech: "HTML CSS JS",
      description: "Multi-functional discord bot",
      live: true,
      github: false,
    },
    {
      image:`${image}`,
      title: "Portfolio",
      tech: "Elias Portfolio Vue TS CSS",
      description: "You're viewing it rn 😎",
      live: false,
      github: true,
    },
  ],
  small: [
    {
      title: "Bot boilerplate",
      tech: "Discord.js TS JS",
      description: "Start creating scalable discord bots with typescript",
      github: true,
    },
    {
      title: "My blog",
      tech: "Vue CSS JS",
      description: "Front-end of my future blog website written in vue",
      github: true,
    },
    {
      title: "Chess pro",
      tech: "Figma",
      description: "Figma landing page about environment & training chess",
      figma: true,
    },
    {
      title: "Crash protect website",
      tech: "Figma",
      description: "Figma template for website about discord anti-nukes and crash bots",
      figma: true,
    },
    {
      title: "CSS expirement",
      tech: "HTML CSS",
      description: "Collection of my different subtle wrappers in css",
      live: true,
    },
    {
      title: "Web Dev nvim config",
      tech: "Lua Neovim",
      description: "Config for neovim perfect for frontend web devs",
      github: true,
    },
    {
      title: "Ooku",
      tech: "Python Django HTML",
      description: "Simple link shortener with auth",
      live: true,
    },
    {
      title: "School website",
      tech: "Figma",
      description: "Sleek template website for my school",
      figma: true,
    },
  ],
};

const ProjectCard = ({ title, tech, description, live, github, figma, image }: any) => (
  <div className="rounded-md border border-[#57575b] bg-[#181a20] text-white font-mono overflow-hidden hover:shadow-lg transition-transform hover:scale-[1.01] mb-3 ">
    {/* Image */}
    {image && (
      <div className="w-full h-40 bg-black">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover border-b border-[#2f2f38]"
        />
      </div>
    )}

    {/* Tech Stack */}
    <div className="text-xs text-gray-400 border-b border-[#2f2f38] px-4 py-2">
      {tech}
    </div>

    {/* Title & Description */}
    <div className="px-4 py-3">
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>

    {/* Links */}
    <div className="flex gap-2 px-4 pb-4">
      {live && (
        <a
          href="#"
          className="text-sm px-3 py-1 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-500/20"
        >
          Live ↪
        </a>
      )}
      {github && (
        <a
          href="#"
          className="text-sm px-3 py-1 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-500/20"
        >
          Github ↪
        </a>
      )}
      {figma && (
        <a
          href="#"
          className="text-sm px-3 py-1 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-500/20"
        >
          Figma ↪
        </a>
      )}
    </div>
  </div>
);

const page = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-[#0f111a] text-white font-mono mt-10">
      <h2 className="text-2xl sm:text-3xl flex items-center mb-4">
        <span className="text-purple-400">/</span>projects
        <span className="flex-1 h-px bg-purple-400 ml-4"></span>
      </h2>
      <p className="text-gray-400 mb-8">List of my projects</p>

      <h3 className="text-xl sm:text-2xl text-purple-400 mb-4">#complete-apps</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.complete.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>

      <h3 className="text-xl sm:text-2xl text-purple-400 mb-4">#small-projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.small.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default page;

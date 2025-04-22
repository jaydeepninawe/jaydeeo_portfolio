const image = "/project.png"; // Assuming this is a placeholder image URL or path

export interface Project {
  title: string;
  slug: string;
  tech: string;
  description: string;
  image?: string;
  live?: boolean;
  github?: boolean;
  figma?: boolean;
}

export interface Projects {
  complete: Project[];
  small: Project[];
}

const projects: Projects = {
  complete: [
    {
      image,
      title: "ChertNodes",
      slug: "chertnodes",
      tech: "HTML SCSS Python Flask",
      description: "Minecraft servers hosting",
      live: true,
      github: false,
    },
    {
      image,
      title: "Kahoot Answers Viewer",
      slug: "kahoot-answers-viewer",
      tech: "CSS Express Node.js",
      description: "Get answers to your kahoot quiz",
      live: true,
      github: false,
    },
    {
      image,
      title: "ProtectX",
      slug: "protectx",
      tech: "Next Express Discord.js Node.js",
      description: "Discord anti-crash bot",
      live: false,
      github: true,
    },
    {
      image,
      title: "Kotik Bot",
      slug: "kotik-bot",
      tech: "HTML CSS JS",
      description: "Multi-functional discord bot",
      live: true,
      github: false,
    },
    {
      image,
      title: "Portfolio",
      slug: "portfolio",
      tech: "Elias Portfolio Vue TS CSS",
      description: "You're viewing it rn 😎",
      live: false,
      github: true,
    },
  ],
  small: [
    {
      title: "Bot boilerplate",
      slug: "bot-boilerplate",
      tech: "Discord.js TS JS",
      description: "Start creating scalable discord bots with typescript",
      github: true,
    },
    {
      title: "My blog",
      slug: "my-blog",
      tech: "Vue CSS JS",
      description: "Front-end of my future blog website written in vue",
      github: true,
    },
    {
      title: "Chess pro",
      slug: "chess-pro",
      tech: "Figma",
      description: "Figma landing page about environment & training chess",
      figma: true,
    },
    {
      title: "Crash protect website",
      slug: "crash-protect-website",
      tech: "Figma",
      description: "Figma template for website about discord anti-nukes and crash bots",
      figma: true,
    },
    {
      title: "CSS expirement",
      slug: "css-expirement",
      tech: "HTML CSS",
      description: "Collection of my different subtle wrappers in css",
      live: true,
    },
    {
      title: "Web Dev nvim config",
      slug: "web-dev-nvim-config",
      tech: "Lua Neovim",
      description: "Config for neovim perfect for frontend web devs",
      github: true,
    },
    {
      title: "Ooku",
      slug: "ooku",
      tech: "Python Django HTML",
      description: "Simple link shortener with auth",
      live: true,
    },
    {
      title: "School website",
      slug: "school-website",
      tech: "Figma",
      description: "Sleek template website for my school",
      figma: true,
    },
  ],
};

export default projects;

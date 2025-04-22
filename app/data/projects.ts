const image = "/project.png"; // Make sure this image exists in your public folder

export interface Project {
  title: string;
  slug: string;
  tech: string;
  description: string;
  image?: string;
  live?: string;
  github?: string;
  figma?: string;
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
      live: "https://chertnodes.example.com",
    },
    {
      image,
      title: "Kahoot Answers Viewer",
      slug: "kahoot-answers-viewer",
      tech: "CSS Express Node.js",
      description: "Get answers to your kahoot quiz",
      live: "https://kahoot-viewer.example.com",
    },
    {
      image,
      title: "ProtectX",
      slug: "protectx",
      tech: "Next Express Discord.js Node.js",
      description: "Discord anti-crash bot",
      github: "https://github.com/youruser/protectx",
    },
    {
      image,
      title: "Kotik Bot",
      slug: "kotik-bot",
      tech: "HTML CSS JS",
      description: "Multi-functional discord bot",
      live: "https://kotikbot.example.com",
    },
    {
      image,
      title: "Portfolio",
      slug: "portfolio",
      tech: "Elias Portfolio Vue TS CSS",
      description: "You're viewing it rn 😎",
      github: "https://github.com/youruser/portfolio",
    },
  ],
  small: [
    {
      title: "Bot boilerplate",
      slug: "bot-boilerplate",
      tech: "Discord.js TS JS",
      description: "Start creating scalable discord bots with typescript",
      github: "https://github.com/youruser/bot-boilerplate",
    },
    {
      title: "My blog",
      slug: "my-blog",
      tech: "Vue CSS JS",
      description: "Front-end of my future blog website written in vue",
      github: "https://github.com/youruser/my-blog",
    },
    {
      title: "Chess pro",
      slug: "chess-pro",
      tech: "Figma",
      description: "Figma landing page about environment & training chess",
      figma: "https://www.figma.com/file/chess-pro",
    },
    {
      title: "Crash protect website",
      slug: "crash-protect-website",
      tech: "Figma",
      description: "Figma template for website about discord anti-nukes and crash bots",
      figma: "https://www.figma.com/file/crash-protect",
    },
    {
      title: "CSS expirement",
      slug: "css-expirement",
      tech: "HTML CSS",
      description: "Collection of my different subtle wrappers in css",
      live: "https://css-experiments.example.com",
    },
    {
      title: "Web Dev nvim config",
      slug: "web-dev-nvim-config",
      tech: "Lua Neovim",
      description: "Config for neovim perfect for frontend web devs",
      github: "https://github.com/youruser/web-dev-nvim-config",
    },
    {
      title: "Ooku",
      slug: "ooku",
      tech: "Python Django HTML",
      description: "Simple link shortener with auth",
      live: "https://ooku.example.com",
    },
    {
      title: "School website",
      slug: "school-website",
      tech: "Figma",
      description: "Sleek template website for my school",
      figma: "https://www.figma.com/file/school-site",
    },
  ],
};

export default projects;

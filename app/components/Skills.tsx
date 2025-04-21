import React from "react";

const skills = {
  Languages: ["TypeScript", "Lua", "Python", "JavaScript"],
  Databases: ["SQLite", "PostgreSQL", "Mongo"],
  Tools: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font Awesome"],
  Other: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
  Frameworks: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"]
};

const Skills = () => {
  return (
    <div className="bg-[#1e1e2f] min-h-screen p-10 text-white font-mono">
      <h1 className="text-2xl sm:text-3xl text-white mb-6 font-mono">
        <span className="text-purple-400">#</span>skills
        <span className="w-1/2 h-px bg-purple-400 inline-block ml-4 align-middle"></span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="border border-white bg-transparent p-4 rounded-md"
          >
            <h2 className="font-bold text-white mb-2">{category}</h2>
            <ul className="text-gray-300 text-sm space-y-1">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Skills;

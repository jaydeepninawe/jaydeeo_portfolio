import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const ProjectsPage = () => {
  return (
    <div className="px-6 sm:px-16 py-24 text-white bg-[#0b0c10] font-mono min-h-screen">
      {/* Page Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl sm:text-5xl ">
            <span className="text-purple-400">/</span>projects
          </h1>
          <div className="flex-grow h-px bg-gradient-to-r from-purple-400 to-transparent" />
        </div>
        <p className="text-gray-400 text-sm sm:text-base mt-2">
          List of my projects
        </p>
      </div>

      {/* Complete Apps */}
      <div className="mb-16">
        <h2 className="text-xl sm:text-2xl text-purple-400 mb-6">#complete-apps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.complete.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>

      {/* Small Projects */}
      <div>
        <h2 className="text-xl sm:text-2xl text-purple-400 mb-6">#small-projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.small.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

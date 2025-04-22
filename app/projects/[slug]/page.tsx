// app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import projects from "../../data/projects"; // Import project data

// This is the correct type for your page props
type Params = {
  params: {
    slug: string;
  };
};

// Generate static paths for your project detail pages
export async function generateStaticParams() {
  const allSlugs = [...projects.complete, ...projects.small].map((proj) => ({
    slug: proj.slug,
  }));
  return allSlugs;
}

// This is the page component for displaying project details
export default function ProjectDetailPage({ params }: Params) {
  const { slug } = params;

  // Find project based on slug
  const project =
    projects.complete.find((p) => p.slug === slug) ||
    projects.small.find((p) => p.slug === slug);

  if (!project) return notFound(); // If project not found, show 404 page

  return (
    <section className="px-6 md:px-20 py-16 bg-[#0f111a] text-white font-mono mt-10 min-h-screen">
      <h2 className="text-2xl sm:text-3xl flex items-center mb-4">
        <span className="text-purple-400">/</span>
        {project.title}
        <span className="flex-1 h-px bg-purple-400 ml-4"></span>
      </h2>
      <p className="text-gray-400 mb-8">{project.description}</p>

      {project.image && (
        <div className="w-full h-64 relative mb-6 rounded-lg overflow-hidden border border-[#2f2f38]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="mb-4 text-sm text-gray-300">
        <span className="text-purple-400">Tech Stack:</span> {project.tech}
      </div>

      <div className="flex gap-3 mt-6">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-500/20"
          >
            Live ↪
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-500/20"
          >
            GitHub ↪
          </a>
        )}
        {project.figma && (
          <a
            href={project.figma}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-500/20"
          >
            Figma ↪
          </a>
        )}
      </div>
    </section>
  );
}

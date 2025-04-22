import { notFound } from "next/navigation";
import projects from "../../data/projects"; // adjust this if path differs
import Image from "next/image";

export async function generateStaticParams() {
  const allSlugs = [...projects.complete, ...projects.small].map((proj) => ({
    slug: proj.slug,
  }));
  return allSlugs;
}

// ✅ Fix: use inferred types for `params` in the function argument
export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const project =
    projects.complete.find((p) => p.slug === slug) ||
    projects.small.find((p) => p.slug === slug);

  if (!project) return notFound();

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
            src={project.image.startsWith("/") ? project.image : `/${project.image}`}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="mb-4 text-sm text-gray-300">
        <span className="text-purple-400">Tech Stack:</span> {project.tech}
      </div>

      <div className="flex gap-3 mt-6 flex-wrap">
        {typeof project.live === "string" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-500/20"
          >
            Live ↪
          </a>
        )}
        {typeof project.github === "string" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-500/20"
          >
            GitHub ↪
          </a>
        )}
        {typeof project.figma === "string" && (
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

import { notFound } from "next/navigation";
import projects from "../../data/projects";
import Image from "next/image";

// Page Component — Using props directly to access the slug
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{slug :string}>
}) {
  const slug = (await params).slug;

  // Find the project by slug
  const project =
    projects.complete.find((p) => p.slug === slug) ||
    projects.small.find((p) => p.slug === slug);

  // If no project is found, return the notFound page
  if (!project) return notFound();

  return (
    <section className="p-6 text-white bg-[#0f111a] min-h-screen mt-10 font-mono">
      <h1 className="text-3xl mb-4">{project.title}</h1>
      <p className="text-gray-400 mb-6">{project.description}</p>

      {/* Display image if it exists */}
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

      <p className="text-sm text-gray-300 mb-2">
        <strong className="text-purple-400">Tech:</strong> {project.tech}
      </p>

      {/* Display external links if they exist */}
      <div className="flex gap-3 mt-4">
        {project.live && (
          <a
            href={typeof project.live === "string" ? project.live : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-400 px-4 py-2 rounded text-sm"
          >
            Live ↗
          </a>
        )}
        {project.github && (
          <a
            href={typeof project.github === "string" ? project.github : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-400 px-4 py-2 rounded text-sm"
          >
            GitHub ↗
          </a>
        )}
        {project.figma && (
          <a
            href={typeof project.figma === "string" ? project.figma : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-400 px-4 py-2 rounded text-sm"
          >
            Figma ↗
          </a>
        )}
      </div>
    </section>
  );
}

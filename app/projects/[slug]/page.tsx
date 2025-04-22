import { notFound } from "next/navigation";
import projects from "../../data/projects";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const allSlugs = [...projects.complete, ...projects.small].map((proj) => ({
    slug: proj.slug,
  }));

  return allSlugs;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = params;

  const project =
    projects.complete.find((p: { slug: string; }) => p.slug === slug) ||
    projects.small.find((p: { slug: string; }) => p.slug === slug);

  if (!project) return notFound();

  return (
    <article className="bg-[#0f111a] text-white font-mono min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-2 mb-2">
            <span className="text-purple-400">/</span>
            {project.title}
            <span className="flex-1 h-px bg-purple-400 ml-4"></span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            {project.description}
          </p>
        </header>

        {project.image && (
          <section className="relative w-full h-64 sm:h-80 mb-8 rounded-lg overflow-hidden border border-[#2f2f38]">
            <Image
              src={
                project.image.startsWith("/")
                  ? project.image
                  : `/${project.image}`
              }
              alt={project.title}
              fill
              className="object-cover"
            />
          </section>
        )}

        <section className="mb-6">
          <h3 className="text-base sm:text-lg text-purple-400 mb-1">
            Tech Stack:
          </h3>
          <p className="text-sm text-gray-300">{project.tech}</p>
        </section>

        <section className="flex flex-wrap gap-3 mt-6">
          {project.live && (
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-500/20"
            >
              Live ↪
            </a>
          )}
          {project.github && (
            <a
               href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-500/20"
            >
              GitHub ↪
            </a>
          )}
          {project.figma && (
            <a
               href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-500/20"
            >
              Figma ↪
            </a>
          )}
        </section>
      </div>
    </article>
  );
}

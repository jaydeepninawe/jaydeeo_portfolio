'use client';

import Link from 'next/link';
import React from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps extends Project {}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  slug,
  tech,
  description,
  image,
}) => {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <div className="rounded-md border border-[#57575b] bg-[#181a20] text-white font-mono overflow-hidden hover:shadow-lg transition-transform hover:scale-[1.01] mb-3 cursor-pointer">
        {image && (
          <div className="w-full h-40 bg-black">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover border-b border-[#2f2f38]"
            />
          </div>
        )}
        <div className="text-xs text-gray-400 border-b border-[#2f2f38] px-4 py-2">
          {tech}
        </div>
        <div className="px-4 py-3">
          <h4 className="text-lg font-semibold mb-1">{title}</h4>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

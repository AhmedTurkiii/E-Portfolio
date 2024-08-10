import React from 'react';

const ProjectCard = ({ title, description, techStack, repoLink, date, remote, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3 p-4 mb-6">
      <img src={image} alt={title} className="w-full h-62 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {remote && <span className="text-sm text-gray-500">Remote</span>}
        {date && <span className="text-sm text-gray-500 ml-2">{date}</span>}
        <p className="text-gray-700 mt-2 mb-4">{description}</p>
        <p className="text-gray-600 mb-4"><strong>Tech Stack:</strong> {techStack}</p>
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Repository
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

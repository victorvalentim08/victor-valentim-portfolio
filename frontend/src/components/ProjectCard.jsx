import React from 'react';

const ProjectCard = ({ title, description, tags, isLarge }) => {
  return (
    <div className={`${
      isLarge ? 'md:col-span-8' : 'md:col-span-4'
    } group bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 hover:bg-zinc-900/60 transition-all flex flex-col justify-between`}>
      
      <div>
        <h3 className={`${isLarge ? 'text-4xl' : 'text-2xl'} font-bold mb-4 text-white`}>
          {title}
        </h3>
        <p className="text-zinc-400 mb-8 max-w-md leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold border border-blue-500/20 uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
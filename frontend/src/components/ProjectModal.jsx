import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-md" 
        onClick={onClose}
      ></div>

      <div className="relative z-[100000] bg-zinc-900 w-full max-w-lg rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-5 right-5 z-[110] bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all"
        >
          ✕
        </button>
        <div className="w-full h-56 sm:h-72 flex-shrink-0 overflow-hidden bg-zinc-800">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover block" 
          />
        </div>
        <div className="p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-black uppercase tracking-tighter">{project.title}</h2>
            <span className="text-blue-500 font-mono text-xs font-bold">{project.year}</span>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            {project.longDescription || project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest text-zinc-500 border border-white/5">
                {tag}
              </span>
            ))}
          </div>

          <a 
            href={project.deployUrl || "#"} 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 bg-white text-black font-bold py-4 rounded-2xl text-center hover:bg-zinc-200 transition-all text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2"
            >
                <span>Ver projeto</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <br></br>
            <a 
                href={project.link || "#"} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 bg-zinc-800 text-white font-bold py-4 rounded-2xl text-center hover:bg-zinc-700 transition-all text-[10px] uppercase tracking-[0.2em] border border-white/5 flex items-center justify-center gap-2"
            >
                <span>GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
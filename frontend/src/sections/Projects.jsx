import React, { useState, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);

  const baseProjects = [
    { id: 1, title: "ProLimp", year: "2026", description: "Sistema de gestão inteligente para logística e serviços.", longDescription: "Uma solução completa para automação de equipes externas, com rastreamento em tempo real e otimização de rotas usando algoritmos de busca.", tags: ["React", "Prisma", "PostgreSQL"], image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800", link: "#", deployUrl: "#" },
    { id: 2, title: "NUTEC", year: "2025", description: "Desenvolvimento de infraestrutura web e dashboards.", longDescription: "Dashboard administrativo de alta performance para monitoramento de servidores e gestão de ativos de rede desenvolvido durante estágio.", tags: ["Node.js", "MySQL", "Chart.js"], image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=800", link: "#", deployUrl: "#" },
    { id: 3, title: "Cactus TECH", year: "2025", description: "Software House focada em soluções Web modernas.", longDescription: "Landing pages e sistemas sob medida com foco em conversão e SEO para empresas de tecnologia.", tags: ["React", "JavaScript", "Node.js", "Tailwind"], image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", link: "#", deployUrl: "#" },
    { id: 4, title: "Unitasks", year: "2025", description: "Sistema de organização para estudantes universitários.", longDescription: "Plataforma focada em produtividade acadêmica, permitindo gerenciar tarefas, prazos e notas de forma centralizada.", tags: ["React", "JavaScript", "Node.js"], image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800", link: "#", deployUrl: "#" }
  ];

  // Efeito Infinito: Duplicamos a lista para que sempre haja algo à frente
  const projects = [...baseProjects, ...baseProjects, ...baseProjects];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      // Ajustamos o valor do scroll para bater com o novo tamanho dos cards
      const scrollAmount = window.innerWidth > 768 ? 500 : 320;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-4">
            <span className="text-blue-500 font-mono text-sm uppercase tracking-widest">01.</span> 
            Projetos Selecionados
          </h2>
        </div>

        <div className="hidden md:flex gap-4">
          <button onClick={() => scroll('left')} className="w-20 h-15 rounded-full border border-zinc-800 flex items-center justify-center hover:border-blue-500 transition-all text-zinc-400 hover:text-white">
            ←
          </button>
          <button onClick={() => scroll('right')} className="w-20 h-15 rounded-full border border-zinc-800 flex items-center justify-center hover:border-blue-500 transition-all text-zinc-400 hover:text-white">
            →
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto px-[10vw] pb-12 scrollbar-hide snap-x snap-mandatory"
      >
        {projects.map((project, index) => (
          <div 
            key={`${project.id}-${index}`} // Key única para itens duplicados
            className="min-w-[75vw] md:min-w-[35vw] lg:min-w-[25vw] snap-center" 
            onClick={() => setSelectedProject(project)}
          >
            <div className="group relative h-[450px] bg-zinc-900 rounded-[2.5rem] border border-zinc-800/50 overflow-hidden hover:border-blue-500/30 transition-all duration-500 cursor-pointer shadow-2xl">
              <img 
                src={project.image} 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <span className="text-blue-500 font-mono text-[10px] mb-2">{project.year}</span>
                <h3 className="text-3xl font-black tracking-tighter uppercase mb-3 text-white">{project.title}</h3>
                <p className="text-zinc-400 text-xs max-w-xs mb-6 line-clamp-2">{project.description}</p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white underline underline-offset-8 decoration-blue-500">Detalhes →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
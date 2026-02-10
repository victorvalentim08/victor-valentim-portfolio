import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ProLimp (2026)",
      description: "Sistema de gestão inteligente para logística e serviços, focado em automação e experiência do utilizador.",
      tags: ["React", "Prisma", "PostgreSQL"],
      isLarge: true 
    },
    {
      id: 2,
      title: "NUTEC (2025)",
      description: "Desenvolvimento de infraestrutura web e dashboards administrativos.",
      tags: ["Node.js", "MySQL"],
      isLarge: false
    },
    {
      id: 3,
      title: "Cactus TECH (2025)",
      description: "SoftWare House com focos em soluções Web",
      tags: ["React", "JavaScript", "Node.js", "Tailwind"],
      isLarge: false
    },
    {
      id: 4,
      title: "Unitasks (2025)",
      description: "Sistema de organização e estudos para estudantes universitários",
      tags: ["React", "JavaScript", "Node.js"],
      isLarge: false
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
        <span className="text-blue-500">01.</span> Projetos Selecionados
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            isLarge={project.isLarge}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
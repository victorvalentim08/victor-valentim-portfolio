import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
          CIÊNCIA DA <br />
          COMPUTAÇÃO.
        </h2>
        <div>
          <p className="text-xl leading-relaxed mb-6 font-medium text-zinc-800">
            A minha trajetória começou com suporte técnico e hoje concentra-se na engenharia de software completa. 
            Trabalho na intersecção entre o design funcional e o código performático.
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-sm uppercase font-bold text-zinc-500">
            <span>PostgreSQL</span> / <span>React</span> / <span>Node.js</span> / <span>Tailwind</span> / <span>Prisma</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
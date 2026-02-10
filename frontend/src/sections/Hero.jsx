import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto">
      <span className="text-brand font-mono mb-4 block animate-bounce">↓ scroll para explorar</span>
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-8">
        FULLSTACK <br />
        <span className="text-zinc-700">DEVELOPER</span>
      </h1>
      <p className="max-w-xl text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
        Victor Hugo Valentim. Estudante de Ciência da Computação. 
        Especializado em construir ecossistemas digitais com <span className="text-white">React, Node e PostgreSQL.</span>
      </p>
    </section>
  );
};

export default Hero;
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-black text-xl tracking-tighter text-white">
          V<span className="text-blue-500">H</span>.
        </span>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
          <a href="#home" className="hover:text-white transition-colors">Início</a>
          <a href="#projects" className="hover:text-white transition-colors">Projetos</a>
          <a href="#about" className="hover:text-white transition-colors">Sobre</a>
          <a href="#contact" className="hover:text-white transition-colors">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
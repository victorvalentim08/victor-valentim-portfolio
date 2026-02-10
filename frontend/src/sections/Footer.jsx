import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="py-40 px-6 text-center border-t border-zinc-900 bg-[#050505]">
      <p className="text-zinc-500 mb-6 uppercase tracking-widest text-xs font-bold">Vamos construir algo juntos?</p>
      <a 
        href="mailto:victorvalentim0803@gmail.com" 
        className="text-4xl md:text-6xl font-bold hover:text-blue-500 transition-colors tracking-tighter text-white"
      >
        victorvalentim0803@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
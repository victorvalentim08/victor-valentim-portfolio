import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="w-full lg:w-[50%] lg:sticky lg:top-32 z-10">
            <h2 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-none uppercase">
              Ciência da <br />
              <span className="text-zinc-400">Computação.</span>
            </h2>
            <div className="mt-8 lg:mt-12 flex flex-wrap gap-4 font-mono text-xs uppercase font-bold text-zinc-400">
              <span>PostgreSQL</span> / <span>MySQL</span> / <span>Node.js</span> / <span>Python</span> / <span>AWS</span>
            </div>
          </div>
          <div className="w-full lg:w-[60%] lg:pl-12 relative z-20">
            <div className="max-w-2xl"> 
              <header className="mb-16">
                <h3 className="text-blue-600 font-mono text-sm uppercase tracking-widest mb-4 font-bold italic">
                  Minha Trajetória
                </h3>
                <p className="text-3xl font-bold tracking-tight text-zinc-900 leading-tight">
                  Construindo soluções com código limpo e foco em resultados.
                </p>
              </header>

              <div className="space-y-12 text-zinc-700 leading-relaxed text-lg font-light">
                
                <article>
                  <h4 className="font-bold text-black text-sm uppercase mb-3 italic">2022 • O Início: Fundamentos</h4>
                  <p>
                    Minha trajetória começou com o propósito de entender os sistemas por dentro. 
                    Em dezembro de 2022, concluí o <strong>Curso Técnico em Informática</strong>. 
                    Como estagiário na <strong>Vicunha Têxtil</strong>, realizei consultas em bancos MySQL e otimizei processos internos.
                  </p>
                </article>

                <article>
                  <h4 className="font-bold text-black text-sm uppercase mb-3 italic">2023 - 2024 • Expansão e Cloud</h4>
                  <p>
                    Iniciei <strong>Ciências da Computação</strong> como bolsista integral. 
                    Nesta fase, especializei-me em <strong>Cloud Computing pela AWS</strong> e foquei na resolução de problemas complexos com estruturas de dados.
                  </p>
                </article>

                <article>
                  <h4 className="font-bold text-black text-sm uppercase mb-3 italic">2025 • Sistemas em Produção</h4>
                  <p>
                    Na <strong>Conet Telecom</strong>, apliquei lógica de programação no debugging de problemas reais. 
                    Refinei minhas habilidades em arquiteturas modernas através da <strong>Residência em TIC 2.0 (UECE)</strong>.
                  </p>
                </article>

                <article className="border-l-4 border-blue-600 pl-8 py-6 bg-zinc-50 rounded-r-2xl shadow-sm">
                  <h4 className="font-bold text-blue-600 text-sm uppercase mb-3">Hoje • Foco Atual</h4>
                  <p className="text-zinc-800">
                    Desenvolvo o <strong>Unitasks</strong>, um sistema web para gerenciamento acadêmico focado em usabilidade e boas práticas de desenvolvimento Fullstack.
                  </p>
                </article>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Lado Esquerdo: Título Fixo/Sticky */}
        <div className="lg:sticky lg:top-32 h-fit">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
            Ciência da <br />
            Computação.
          </h2>
          <div className="mt-12 flex flex-wrap gap-4 font-mono text-xs uppercase font-bold text-zinc-400">
            <span>PostgreSQL</span> / <span>React</span> / <span>Node.js</span> / <span>Tailwind</span> / <span>Prisma</span>
          </div>
        </div>

        {/* Lado Direito: A Jornada (Scroll) */}
        <div className="space-y-12">
          <header>
            <h3 className="text-blue-600 font-mono text-sm uppercase tracking-widest mb-2 font-bold">Minha Jornada</h3>
            <p className="text-2xl font-bold tracking-tight text-zinc-900">Da base técnica ao desenvolvimento Fullstack.</p>
          </header>

          <div className="space-y-8 text-zinc-700 leading-relaxed text-lg font-light">
            
            {/* Etapa 1 */}
            <article>
              <h4 className="font-bold text-black text-sm uppercase mb-2">2022 • O Início: Fundamentos</h4>
              <p>
                Minha trajetória começou com um propósito claro: entender como os sistemas funcionam por dentro[cite: 8]. 
                Em dezembro de 2022, concluí meu <strong>Curso Técnico em Informática</strong>[cite: 14]. 
                Foi nesse período que atuei como estagiário na <strong>Vicunha Têxtil</strong>, onde aprendi a importância da integridade de dados manipulando bancos MySQL e otimizando processos[cite: 23, 25, 26].
              </p>
            </article>
            <article>
              <h4 className="font-bold text-black text-sm uppercase mb-2">2023 - 2024 • Exploração e Especialização</h4>
              <p>
                Iniciei minha graduação em <strong>Ciências da Computação</strong> como bolsista integral pelo ProUni[cite: 14]. 
                Nesta fase, busquei certificações estratégicas como <strong>Cloud Computing pela AWS</strong> e foquei na resolução de problemas complexos com estruturas de dados e código limpo[cite: 8, 11, 17].
              </p>
            </article>
            <article>
              <h4 className="font-bold text-black text-sm uppercase mb-2">2025 • Consolidação em Produção</h4>
              <p>
                Atuei no suporte técnico da <strong>Conet Telecom</strong>, aplicando lógica de programação para identificar causas-raiz e auxiliar na manutenção de sistemas em produção[cite: 19, 21]. 
                Simultaneamente, refinei minhas habilidades em arquiteturas modernas através do programa <strong>Residência em TIC 2.0 (UECE)</strong>[cite: 16].
              </p>
            </article>
            <article className="border-l-2 border-blue-500 pl-6 py-2 bg-blue-50/30">
              <h4 className="font-bold text-blue-600 text-sm uppercase mb-2 italic">Hoje: Criando Experiências</h4>
              <p>
                Atualmente, desenvolvo sistemas robustos como o <strong>Unitasks</strong>[cite: 28]. 
                Meu objetivo é unir o rigor técnico do Back-end (Node.js, PostgreSQL) com a fluidez de interfaces responsivas, sempre focado em entregar código limpo e testado[cite: 8, 10, 31].
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
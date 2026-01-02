import React from 'react';

const Sobre: React.FC = () => {
  return (
    <section id="sobre" className="py-20 px-5 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-gradient">Sobre Mim</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass p-8 space-y-6">
            <h3 className="text-2xl font-bold text-purple-400">Minha Jornada</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Pós-graduado em Desenvolvimento Full Stack, com experiência na criação de sistemas web e no uso de tecnologias como PHP, MySQL, JavaScript, PostgreSQL, Next.js, React e Angular.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Tenho foco em boas práticas, acessibilidade e aprendizado contínuo, sempre buscando transformar ideias em soluções reais e funcionais.
            </p>
          </div>

          <div className="glass p-8 space-y-6 border-l-4 border-l-purple-500">
            <h3 className="text-2xl font-bold text-purple-400">Objetivo Profissional</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Atuar como Desenvolvedor Full Stack, desenvolvendo sistemas web eficientes, acessíveis e bem estruturados, com foco em qualidade de código e evolução contínua.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="block text-purple-400 font-bold text-xl">5+</span>
                <span className="text-sm text-gray-400">Tecnologias Core</span>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="block text-purple-400 font-bold text-xl">Foco</span>
                <span className="text-sm text-gray-400">Qualidade & Acesso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;


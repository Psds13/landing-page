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
            <h3 className="text-2xl font-bold text-purple-400">Trajetória Profissional</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Pós-graduado em Desenvolvimento Full Stack, atuo na construção de ecossistemas web robustos. Minha base técnica sólida em PHP e PostgreSQL, aliada à agilidade do ecossistema React/Next.js, permite a entrega de sistemas completos, do banco de dados à interface.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Minha abordagem é pautada pelo rigor técnico e pela busca por soluções que não apenas funcionam, mas são escaláveis e de fácil manutenção, respeitando sempre os padrões de acessibilidade e SEO.
            </p>
          </div>

          <div className="glass p-8 space-y-6 border-l-4 border-l-purple-500">
            <h3 className="text-2xl font-bold text-purple-400">O que Eu Entrego</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-white">Sistemas Web de Alta Performance</h4>
                <p className="text-sm text-gray-400">Desenvolvimento de aplicações SPA e SSR utilizando Next.js para máxima velocidade e indexação.</p>
              </div>
              <div>
                <h4 className="font-bold text-white">Arquitetura de Dados e APIs</h4>
                <p className="text-sm text-gray-400">Modelagem de bancos relacionais e criação de APIs RESTful seguras e eficientes.</p>
              </div>
              <div>
                <h4 className="font-bold text-white">Interfaces Centradas no Usuário</h4>
                <p className="text-sm text-gray-400">Criação de componentes reutilizáveis focados em usabilidade e design responsivo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;


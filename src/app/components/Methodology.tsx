import React from 'react';

const Methodology = () => {
  const steps = [
    {
      title: "Análise de Requisitos",
      description: "Identificação granular das necessidades do negócio e tradução em especificações técnicas precisas."
    },
    {
      title: "Arquitetura e Design",
      description: "Desenho da estrutura de dados e definição das tecnologias para garantir escalabilidade e segurança."
    },
    {
      title: "Desenvolvimento Rigoroso",
      description: "Codificação baseada em princípios Clean Code e boas práticas de arquitetura de software."
    },
    {
      title: "Garantia de Qualidade",
      description: "Ciclos de testes e validação para assegurar que a entrega atenda a todos os critérios de aceitação."
    }
  ];

  return (
    <section id="metodologia" className="py-20 px-5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-gradient">Metodologia de Trabalho</span>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="glass p-6 relative group border-t-4 border-t-purple-500">
              <span className="absolute -top-4 -right-4 text-6xl font-black text-white/5 group-hover:text-purple-500/10 transition-colors">
                0{index + 1}
              </span>
              <h3 className="text-xl font-bold mb-4 text-purple-400">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;

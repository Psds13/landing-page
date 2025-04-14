import React from 'react';

const Sobre: React.FC = () => {
  return (
    <section id="sobre-mim" className="flex items-center justify-center py-10 bg-gray-100">
      <div className="container flex items-center justify-between px-4">
        {/* Imagem à esquerda */}
        <div className="w-1/4">
          <img
            src="/eusinho.jpg" 
            alt="Foto sobre mim"
            className="rounded-full w-full object-cover"
          />
        </div>

        {/* Texto à direita */}
        <div className="w-2/3 pl-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Sobre Mim</h2>
          <p className="text-lg text-gray-700 mb-4 text-justify">
          Meu nome é Edmilson Oliveira, e sou um profissional apaixonado por
            tecnologia e desenvolvimento web. Buscando experiência na área de TI,
            incluindo programação.          </p>
          <p className="text-lg text-gray-700 mb-4 text-justify">
          Sou uma pessoa que busca constantemente me aperfeiçoar na área de TI, com o objetivo de expandir meus conhecimentos e habilidades. Estou sempre motivado a aprender novas tecnologias e a me manter atualizado com as inovações do setor.
        </p>
          <p className="text-lg text-gray-700 text-justify">
          Vejo cada desafio como uma oportunidade de crescimento. Com comprometimento e energia, estou pronto para somar, aprender e contribuir para o sucesso de qualquer projeto ou equipe que eu fizer parte.          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
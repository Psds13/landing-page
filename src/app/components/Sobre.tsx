import React from 'react';

const Sobre: React.FC = () => {
  return (
    <section id="sobre-mim" className="flex flex-col items-center justify-center py-10 bg-gray-50">
      <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center w-full">Sobre Mim</h2>
      <div className="container flex items-center justify-between px-4">
     
        <div className="w-1/4">
          <img
            src="/eusinho.jpg" 
            alt="Foto sobre mim"
            className="rounded-full w-full object-cover"
          />
        </div>

        <div className="w-2/3 pl-16">
          <p className="text-lg text-gray-700 mb-4 text-justify">
            Olá! Meu nome é Edmilson Oliveira e sou um entusiasta da tecnologia com um forte interesse em desenvolvimento web e soluções digitais. Desde muito cedo, sempre fui curioso sobre como as coisas funcionam no mundo da tecnologia, o que me levou a estudar programação e buscar uma carreira na área de TI. Tenho me dedicado constantemente a aprender novas ferramentas, linguagens e metodologias que possam me tornar um profissional cada vez mais completo e preparado para os desafios do mercado.
          </p>
          <p className="text-lg text-gray-700 mb-4 text-justify">
            Acredito que o conhecimento nunca é demais e, por isso, estou sempre em busca de novos aprendizados, seja por meio de cursos, projetos práticos ou leitura de conteúdos atualizados. Tenho um grande interesse em áreas como desenvolvimento front-end, back-end e também em inovação tecnológica. Além disso, gosto de entender como a tecnologia pode melhorar a vida das pessoas e transformar ideias em soluções reais e funcionais.
          </p>
          <p className="text-lg text-gray-700 text-justify">
            Sou movido por desafios e vejo cada um deles como uma excelente oportunidade de evolução pessoal e profissional. Com uma postura proativa e muita disposição para colaborar, estou sempre pronto para agregar valor a qualquer equipe ou projeto que eu participe. Meu objetivo é crescer junto com o time, contribuindo com ideias, esforço e dedicação. Estou animado com as possibilidades que a área de TI oferece e determinado a trilhar um caminho de sucesso dentro desse universo incrível da tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;

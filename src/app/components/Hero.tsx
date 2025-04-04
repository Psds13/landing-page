const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="text-center px-5">
      <img src="/img/eusinho.jpg" alt="Minha foto" width={400} height={400}
      className="w-[300px] h-[300px] rounded-full mx-auto mb-4 object-cover" />

        <h1 className="text-5xl font-bold mb-4">Olá, eu sou Edmilson Oliveira</h1>
        <p className="text-xl mb-6">
          Desenvolvedor Web apaixonado por criar interfaces incríveis e experiências digitais impactantes.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-800 transition"
        >
          Veja meus projetos
        </a>
        <a
          href="/Edmilson_Oliveira.pdf"
          download
          className="bg-red-500 text-white px-6 py-3 rounded-full text-lg hover:bg-red-800 transition ml-4"
        >
          Baixar Currículo
        </a>
      </div>
    </section>
  );
};
export default Hero;


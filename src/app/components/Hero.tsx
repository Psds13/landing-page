const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] -z-10"></div>

      <div className="text-center px-5 max-w-4xl mx-auto">
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <img
            src="/eusinho.jpg"
            alt="Edmilson Oliveira"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto relative z-10 object-cover border-4 border-purple-500/30 shadow-2xl animate-float"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Olá, eu sou <span className="text-gradient">Edmilson Oliveira</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          Desenvolvedor Web Full Stack focado em boas práticas, acessibilidade e na criação de experiências digitais de alto impacto.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-600 to-violet-700 text-white px-8 py-4 rounded-xl text-lg font-semibold btn-glow shadow-lg"
          >
            Explorar Projetos
          </a>
          <a
            href="/Edmilson_Oliveira.pdf"
            download
            className="glass px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-colors border border-white/20"
          >
            Baixar Currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


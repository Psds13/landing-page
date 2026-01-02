interface Project {
  title: string;
  description: string;
  link: string;
  tech: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Gerenciador de Tarefas",
      description: "Sistema desenvolvido em PHP com MySQL (ou PostgreSQL), contendo cadastro e autenticação de usuários, além de CRUD de tarefas com controle de prioridade e status.",
      link: "https://github.com/Psds13/Gerenciador-de-Tarefas",
      tech: ["PHP", "MySQL", "Auth", "CRUD"]
    },
    {
      title: "MeuCarrinho",
      description: "Projeto Full Stack para supermercados focado em interface responsiva e integração com banco de dados. Desenvolvido durante o curso de Programador de Sistemas.",
      link: "https://github.com/prof-freedson/pi-meu-carrinho",
      tech: ["HTML", "CSS", "JS", "EJS", "DB"]
    },
    {
      title: "Projeto VisualG",
      description: "Coleção de exercícios abordando lógica de programação e estruturas fundamentais como condicionais, laços e vetores.",
      link: "https://github.com/Psds13/ProjetosVisualG",
      tech: ["Lógica", "Algoritmos", "VisualG"]
    },
  ];

  return (
    <section id="projects" className="py-20 px-5 bg-purple-950/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-gradient">Projetos em Destaque</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass p-6 group hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold mb-3 text-purple-400 group-hover:text-purple-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded border border-white/10 text-gray-400">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 font-semibold hover:gap-2 transition-all"
              >
                Ver Projeto <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/Psds13"
            target="_blank"
            className="glass px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors border border-white/20 inline-block"
          >
            Ver mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;


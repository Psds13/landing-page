interface Project {
    title: string;
    description: string;
    link: string;
  }
  
  const Projects = () => {
    const projects: Project[] = [
      {
        title: "Projeto VisualG",
        description: "Coleção de exercícios desenvolvidos em VisualG, abordando lógica de programação e estruturas fundamentais como variáveis, condicionais, laços e vetores.",
        link: "https://github.com/Psds13/ProjetosVisualG",
      },
      {
        title: "Projeto Gerenciador de Tarefas",
        description: "Um projeto em PHP e PostgreSQL, permitindo aos usuários cadastrar-se, autenticar-se e gerenciar suas tarefas (criar, editar e excluir) de forma eficiente.",
        link: "https://github.com/Psds13/Gerenciador-de-Tarefas",
      },
      {
        title: "Projeto Meu Carrinho(Programador de Sistemas) - Colaborativo",
        description: "Atuei como desenvolvedor front-end em um projeto colaborativo para aprimorar o sistema de compras de um supermercado, focando na criação de interfaces intuitivas e responsivas para melhorar a experiência do usuário.",
        link: "https://github.com/prof-freedson/pi-meu-carrinho",
      },
    ];
  
    return (
      <section id="projects" className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Meus Projetos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Ver projeto
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://github.com/Psds13"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
            >
              Ver todos os projetos
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;

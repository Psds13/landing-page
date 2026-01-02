const Skills = () => {
  const softSkills = ["Trabalho em equipe", "Vontade de aprender", "Programação web", "Comunicação"];
  const hardSkills = ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "PostgreSQL", "Next.js", "React", "Angular", "Git"];
  const languages = [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Nível Básico" }
  ];

  return (
    <section id="skills" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-gradient">Competências & Habilidades</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Hard Skills */}
          <div className="glass p-8">
            <h3 className="text-2xl font-bold mb-6 text-purple-400 border-b border-white/10 pb-2">Habilidades Técnicas</h3>
            <div className="flex flex-wrap gap-3">
              {hardSkills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium hover:bg-purple-500/20 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass p-8">
            <h3 className="text-2xl font-bold mb-6 text-purple-400 border-b border-white/10 pb-2">Habilidades Interpessoais</h3>
            <ul className="space-y-4">
              {softSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="glass p-8">
            <h3 className="text-2xl font-bold mb-6 text-purple-400 border-b border-white/10 pb-2">Idiomas</h3>
            <div className="space-y-6">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-200 font-medium">{lang.name}</span>
                    <span className="text-purple-400 text-sm">{lang.level}</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-violet-600 h-2 rounded-full"
                      style={{ width: lang.level === 'Nativo' ? '100%' : '30%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


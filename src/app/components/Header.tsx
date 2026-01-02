const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass rounded-none border-x-0 border-t-0 bg-space-black/50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src="landing-page.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full border border-purple-500/50"
          />
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
            Edmilson<span className="text-purple-500">.dev</span>
          </span>
        </div>

        <nav>
          <ul className="flex space-x-6 md:space-x-8">
            <li>
              <a href="#hero" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Sobre
              </a>
            </li>
            <li>
              <a href="#skills" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


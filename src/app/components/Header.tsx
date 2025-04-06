const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-3"> {/* Reduzido o padding */}
        {/* Logo ou Imagem */}
        <img
          src="img/ynnothivix.jpg" // Caminho para a sua imagem
          alt="Logo da empresa"
          className="h-16 rounded-full" // Reduzimos a altura da imagem
        />

        {/* Botão de alternância para menu responsivo */}
        <button
          className="block md:hidden text-white focus:outline-none"
          aria-label="Abrir menu"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Navegação */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="hover:text-gray-300">
                Início
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-300">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-300">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
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

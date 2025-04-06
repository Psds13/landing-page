import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-3">
        <Image
  src="/img/ynnothivix.jpg"
  alt="Logo da empresa"
  width={64}
  height={64}
  className="rounded-full"
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

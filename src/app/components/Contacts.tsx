import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-gradient">Canais de Contato</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="glass p-8 space-y-8">
            <h3 className="text-2xl font-bold text-purple-400">Entre em Contato</h3>

            <div className="space-y-6">
              <a href="mailto:edmilsonsegundo15@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email</p>
                  <p className="text-lg">edmilsonsegundo15@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Telefone</p>
                  <p className="text-lg">(98) 98421-0555 / (98) 98485-4088</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/Psds13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/edmilson-oliveira-1aa5b6215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Optional: Simple Contact Form or Image */}
          <div className="glass p-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Mande uma Mensagem</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Seu Nome"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Seu Email"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none transition-colors"
              />
              <textarea
                placeholder="Sua Mensagem"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none transition-colors"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-violet-700 text-white font-bold py-3 rounded-lg btn-glow shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

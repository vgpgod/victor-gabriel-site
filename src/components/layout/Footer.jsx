import { Link } from 'react-router-dom';
import { SITE_NAME, WHATSAPP_NUMBER, INSTAGRAM_URL } from '../../utils/constants';
import { MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-gold">V</span>ictor Gabriel
            </h3>
            <p className="text-gray-300 text-sm">
              Consultor de Negócios especializado em soluções de consórcio para planejar a aquisição de imóveis e veículos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/consorcio-imobiliario" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Consórcio Imobiliário
                </Link>
              </li>
              <li>
                <Link to="/consorcio-veiculos" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Consórcio de Veículos
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/perguntas-frequentes" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Contato</h4>
            <div className="space-y-3">
              {WHATSAPP_NUMBER && (
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-gold transition-colors text-sm"
                >
                  <MessageCircle size={18} className="mr-2" />
                  WhatsApp
                </a>
              )}
              {INSTAGRAM_URL && (
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-gold transition-colors text-sm"
                >
                  <Instagram size={18} className="mr-2" />
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <p className="mb-2">
                © {year} {SITE_NAME}. Todos os direitos reservados.
              </p>
              <Link
                to="/politica-de-privacidade"
                className="hover:text-gold transition-colors"
              >
                Política de Privacidade
              </Link>
            </div>
            <div className="text-xs">
              <p className="mb-2">
                Importante: As informações sobre consórcios são apresentadas de forma educativa. A contemplação depende das regras do grupo e das condições contratuais. Não garantimos prazos ou resultados específicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

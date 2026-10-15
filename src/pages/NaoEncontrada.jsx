import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import { Home, ArrowLeft } from 'lucide-react';
import { getSEOMetadata } from '../utils/seo';
import SEO from '../components/common/SEO';

const NaoEncontrada = () => {
  const seoMetadata = getSEOMetadata(
    'Página Não Encontrada',
    'A página que você procurou não foi encontrada.'
  );

  return (
    <>
      <SEO {...seoMetadata} />
      <section className="py-20 bg-white min-h-screen flex items-center">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-navy mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-4">
              Página não encontrada
            </h2>
            <p className="text-lg text-gray-text mb-8">
              A página que você procurou não existe ou foi movida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-gold text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                <Home size={20} className="mr-2" />
                Voltar para o início
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center border-2 border-navy text-navy px-8 py-4 rounded-lg font-medium hover:bg-navy hover:text-white transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Voltar
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NaoEncontrada;

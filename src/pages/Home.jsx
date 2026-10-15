import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/cards/ServiceCard';
import LeadForm from '../components/common/LeadForm';
import { Building2, Car, Target, ArrowRight, MessageCircle } from 'lucide-react';
import { getSEOMetadata } from '../utils/seo';
import SEO from '../components/common/SEO';

const Home = () => {
  const seoMetadata = getSEOMetadata(
    'Início',
    'Planeje hoje as conquistas que deseja realizar amanhã. Conheça soluções de consórcio para imóveis e veículos.'
  );

  return (
    <>
      <SEO {...seoMetadata} />

      <section className="bg-navy text-white py-20 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Planeje hoje as conquistas que deseja realizar amanhã.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                Conheça soluções de consórcio para planejar a aquisição de imóveis e veículos, com atendimento personalizado para entender seus objetivos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/consorcio-imobiliario"
                  className="inline-flex items-center justify-center bg-gold text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                >
                  Conhecer as soluções
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <a
                  href="https://wa.me/5541920048287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-gold text-gold px-8 py-4 rounded-lg font-medium hover:bg-gold hover:text-white transition-colors"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/images/inicio.jpg"
                alt="Consultoria de consórcio"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Prazer, sou Victor Gabriel
            </h2>
            <p className="text-lg text-gray-text">
              Atuo na área comercial, ajudando pessoas a conhecerem soluções para planejar a aquisição de bens e compreenderem as opções disponíveis para seus objetivos.
            </p>
          </div>
          <div className="text-center">
            <Link
              to="/sobre"
              className="inline-flex items-center bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-secondary transition-colors"
            >
              Conheça meu trabalho
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-light">
        <Container>
          <SectionTitle
            title="Soluções"
            subtitle="Opções para planejar suas conquistas"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Building2}
              title="Consórcio Imobiliário"
              description="Planeje a aquisição de imóveis com uma alternativa de financiamento."
              to="/consorcio-imobiliario"
            />
            <ServiceCard
              icon={Car}
              title="Consórcio de Veículos"
              description="Conheça opções para adquirir o veículo que você deseja."
              to="/consorcio-veiculos"
            />
            <ServiceCard
              icon={Target}
              title="Planejamento de Aquisições"
              description="Entenda as opções disponíveis para seus objetivos."
              to="/como-funciona"
            />
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            title="Como Funciona"
            subtitle="Entenda o processo de atendimento"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Entenda seu objetivo</h3>
              <p className="text-gray-text">
                Identifique o bem que deseja adquirir e suas necessidades.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Conheça as opções</h3>
              <p className="text-gray-text">
                Avalie as alternativas disponíveis para seu planejamento.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Avalie as condições</h3>
              <p className="text-gray-text">
                Analise prazos, valores e regras antes de contratar.
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-text mt-8 max-w-2xl mx-auto">
            Prazos, contemplação e condições dependem das regras aplicáveis e do contrato.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-navy text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Qual é a sua próxima conquista?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Vamos conversar sobre seus objetivos e conhecer as possibilidades disponíveis para o seu planejamento.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center bg-gold text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Quero conversar
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-light">
        <Container>
          <div className="max-w-2xl mx-auto">
            <LeadForm />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;

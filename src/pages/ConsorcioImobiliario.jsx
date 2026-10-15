import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { Building2, AlertCircle, CheckCircle, Calculator, FileText, MessageCircle } from 'lucide-react';
import { getSEOMetadata } from '../utils/seo';
import SEO from '../components/common/SEO';

const ConsorcioImobiliario = () => {
  const seoMetadata = getSEOMetadata(
    'Consórcio Imobiliário',
    'Entenda como funciona o consórcio imobiliário e planeje a aquisição de seu imóvel.',
    '/consorcio-imobiliario'
  );

  const breadcrumbs = [
    { label: 'Início', to: '/' },
    { label: 'Consórcio Imobiliário' },
  ];

  return (
    <>
      <SEO {...seoMetadata} />
      <Container>
        <Breadcrumbs items={breadcrumbs} />
      </Container>

      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            title="Consórcio Imobiliário"
            subtitle="Planeje a aquisição de imóveis com uma alternativa de financiamento"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-gray-text">
              <p className="text-lg">
                O consórcio imobiliário é uma modalidade de compra coletiva que permite planejar a aquisição de imóveis sem a necessidade de financiamento bancário tradicional.
              </p>
              <p>
                <strong>Como funciona:</strong> Um grupo de pessoas se reúne com o objetivo de adquirir imóveis. Cada participante contribui mensalmente com parcelas que formam um fundo comum. Através de sorteios ou lances, os participantes são contemplados com uma carta de crédito que pode ser utilizada para comprar um imóvel.
              </p>
              <p>
                <strong>Carta de crédito:</strong> É o valor que o contemplado recebe para utilizar na compra do imóvel. O valor da carta é definido no momento da adesão ao grupo e permanece atualizado conforme as regras do contrato.
              </p>
              <p>
                <strong>Contemplação:</strong> Pode ocorrer por sorteio, realizado periodicamente conforme as regras do grupo, ou por meio de lances, onde o participante oferece um valor para antecipar sua contemplação. As regras variam entre os grupos.
              </p>
            </div>
            <div>
              <img
                src="/images/imobiliario.jpg"
                alt="Consultoria de consórcio imobiliário"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-light">
        <Container>
          <SectionTitle
            title="O que considerar antes de participar"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start mb-4">
                <Calculator className="text-gold mr-3 flex-shrink-0" size={24} />
                <h3 className="text-xl font-semibold text-navy">Custos a analisar</h3>
              </div>
              <ul className="space-y-2 text-gray-text">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Valor das parcelas mensais</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Taxa de administração</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Fundo de reserva</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Seguro obrigatório</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start mb-4">
                <FileText className="text-gold mr-3 flex-shrink-0" size={24} />
                <h3 className="text-xl font-semibold text-navy">Perguntas a fazer</h3>
              </div>
              <ul className="space-y-2 text-gray-text">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Qual é o prazo do grupo?</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Como funcionam os lances?</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Quais são as taxas envolvidas?</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>O que acontece em caso de atraso?</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="text-yellow-600 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Importante</h3>
                  <p className="text-yellow-700 text-sm">
                    Não prometemos contemplação imediata. Prazos e condições dependem das regras do grupo e do contrato. Avalie cuidadosamente sua capacidade de pagamento antes de participar.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-navy mb-4">
                Deseja saber mais?
              </h3>
              <p className="text-gray-text mb-8">
                Entre em contato para tirar suas dúvidas sobre consórcio imobiliário.
              </p>
              <a
                href="https://wa.me/5541920048287"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gold text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                <MessageCircle size={20} className="mr-2" />
                Falar com Victor
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ConsorcioImobiliario;

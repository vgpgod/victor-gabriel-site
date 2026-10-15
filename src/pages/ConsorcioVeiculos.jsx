import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { Car, AlertCircle, CheckCircle, Calculator, MessageCircle } from 'lucide-react';
import { getSEOMetadata } from '../utils/seo';
import SEO from '../components/common/SEO';

const ConsorcioVeiculos = () => {
  const seoMetadata = getSEOMetadata(
    'Consórcio de Veículos',
    'Entenda como funciona o consórcio de veículos e planeje a aquisição de seu carro.',
    '/consorcio-veiculos'
  );

  const breadcrumbs = [
    { label: 'Início', to: '/' },
    { label: 'Consórcio de Veículos' },
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
            title="Consórcio de Veículos"
            subtitle="Conheça opções para adquirir o veículo que você deseja"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-gray-text">
              <p className="text-lg">
                O consórcio de veículos é uma modalidade de compra coletiva que permite planejar a aquisição de automóveis, motos ou outros veículos sem a necessidade de financiamento bancário tradicional.
              </p>
              <p>
                <strong>Como funciona:</strong> Um grupo de pessoas se reúne com o objetivo de adquirir veículos. Cada participante contribui mensalmente com parcelas que formam um fundo comum. Através de sorteios ou lances, os participantes são contemplados com uma carta de crédito.
              </p>
              <p>
                <strong>Carta de crédito:</strong> É o valor que o contemplado recebe para utilizar na compra do veículo. O valor da carta é definido no momento da adesão ao grupo e pode ser utilizado em revendas ou concessionárias que aceitam a administradora.
              </p>
              <p>
                <strong>Contemplação:</strong> Pode ocorrer por sorteio, realizado periodicamente conforme as regras do grupo, ou por meio de lances, onde o participante oferece um valor para antecipar sua contemplação.
              </p>
            </div>
            <div>
              <img
                src="/images/veiculos.jpg"
                alt="Consultoria de consórcio de veículos"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-light">
        <Container>
          <SectionTitle
            title="Diferenças entre consórcio e financiamento"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-navy mb-4">Consórcio</h3>
              <ul className="space-y-2 text-gray-text">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Sem juros</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Prazo definido pelo grupo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Contemplação por sorteio ou lance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Taxa de administração</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-navy mb-4">Financiamento</h3>
              <ul className="space-y-2 text-gray-text">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Com juros</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Prazo definido pelo contrato</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Liberação imediata do crédito</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Análise de crédito</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            title="Planejamento das parcelas"
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-gray-text">
              <p className="text-lg">
                Antes de participar de um consórcio de veículos, é importante planejar cuidadosamente:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Calculator className="text-gold mr-3 flex-shrink-0" size={20} />
                  <span>Avalie se o valor da parcela cabe no seu orçamento mensal</span>
                </li>
                <li className="flex items-start">
                  <Calculator className="text-gold mr-3 flex-shrink-0" size={20} />
                  <span>Considere a taxa de administração e outros custos</span>
                </li>
                <li className="flex items-start">
                  <Calculator className="text-gold mr-3 flex-shrink-0" size={20} />
                  <span>Planeje para manter o pagamento durante todo o prazo do grupo</span>
                </li>
                <li className="flex items-start">
                  <Calculator className="text-gold mr-3 flex-shrink-0" size={20} />
                  <span>Entenda que a contemplação não é garantida em prazo específico</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
              <div className="flex items-start">
                <AlertCircle className="text-yellow-600 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Importante</h3>
                  <p className="text-yellow-700 text-sm">
                    Avalie todas as condições contratuais antes de participar. O consórcio pode ser uma alternativa interessante, mas não é necessariamente a melhor opção para todos os casos.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <h3 className="text-2xl font-bold text-navy mb-4">
                Deseja saber mais?
              </h3>
              <p className="text-gray-text mb-8">
                Entre em contato para tirar suas dúvidas sobre consórcio de veículos.
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

export default ConsorcioVeiculos;

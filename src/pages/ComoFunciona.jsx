import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { MessageCircle, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { getSEOMetadata } from '../utils/seo';
import SEO from '../components/common/SEO';

const ComoFunciona = () => {
  const seoMetadata = getSEOMetadata(
    'Como Funciona',
    'Entenda o processo de atendimento e como podemos ajudá-lo a planejar suas conquistas.',
    '/como-funciona'
  );

  const breadcrumbs = [
    { label: 'Início', to: '/' },
    { label: 'Como Funciona' },
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
            title="Como Funciona o Atendimento"
            subtitle="Entenda o processo para conhecer as soluções disponíveis"
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-xl font-bold text-gold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Você informa seu objetivo</h3>
                  <p className="text-gray-text">
                    Entre em contato pelo formulário ou WhatsApp e informe o bem que deseja adquirir (imóvel, veículo ou outro objetivo).
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-xl font-bold text-gold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Entendemos suas necessidades</h3>
                  <p className="text-gray-text">
                    Em uma conversa, busco compreender suas expectativas, prazos, capacidade de pagamento e o que é importante para você.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-xl font-bold text-gold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Apresentamos as opções</h3>
                  <p className="text-gray-text">
                    Com base em suas necessidades, apresento as opções disponíveis de consórcio e explico como cada uma funciona.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-xl font-bold text-gold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Você avalia as condições</h3>
                  <p className="text-gray-text">
                    Analise as opções apresentadas, os prazos, valores e regras. Tire todas as suas dúvidas antes de tomar uma decisão.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-xl font-bold text-gold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Contratação (se desejada)</h3>
                  <p className="text-gray-text">
                    Se você decidir prosseguir, a contratação ocorre mediante os procedimentos e aprovações aplicáveis da administradora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="text-yellow-600 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Importante</h3>
                  <p className="text-yellow-700 text-sm">
                    Iniciar uma conversa não garante aprovação, contemplação ou contratação. Cada caso é analisado individualmente conforme as regras da administradora.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-navy mb-4">O que você precisa saber</h3>
              <ul className="space-y-3 text-gray-text">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>O atendimento é personalizado e sem compromisso</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Todas as suas dúvidas serão esclarecidas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Você decide se deseja contratar ou não</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                  <span>Não há pressão para decisão rápida</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Pronto para começar?
            </h2>
            <p className="text-lg text-gray-text mb-8">
              Entre em contato e vamos conversar sobre seus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center bg-gold text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Preencher formulário
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
        </Container>
      </section>
    </>
  );
};

export default ComoFunciona;

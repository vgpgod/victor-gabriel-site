import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { getSEOMetadata } from '../utils/seo';
import SEO from '../components/common/SEO';

const Sobre = () => {
  const seoMetadata = getSEOMetadata(
    'Sobre',
    'Conheça Victor Gabriel, consultor de negócios especializado em soluções de consórcio.',
    '/sobre'
  );

  const breadcrumbs = [
    { label: 'Início', to: '/' },
    { label: 'Sobre' },
  ];

  return (
    <>
      <SEO {...seoMetadata} />
      <Container>
        <Breadcrumbs items={breadcrumbs} />
      </Container>

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/victor.jpg"
                alt="Victor Gabriel - Consultor de Negócios"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div>
              <SectionTitle
                title="Sobre Victor Gabriel"
                align="left"
                className="mb-8"
              />
              <div className="space-y-6 text-gray-text">
                <p className="text-lg">
                  Atuo na área comercial, ajudando pessoas a conhecerem soluções para planejar a aquisição de bens e compreenderem as opções disponíveis para seus objetivos.
                </p>
                <p>
                  Meu compromisso é oferecer transparência e atenção às necessidades de cada cliente. Entendo que cada pessoa tem objetivos diferentes, e por isso busco entender suas expectativas antes de apresentar qualquer solução.
                </p>
                <p>
                  Acredito que a tomada de decisão deve ser informada e consciente. Por isso, priorizo a explicação clara sobre como funcionam as opções disponíveis, seus benefícios e o que deve ser considerado antes de contratar.
                </p>
                <p>
                  Se você está planejando a aquisição de um imóvel ou veículo, estou à disposição para conversar sobre suas opções e ajudá-lo a entender as possibilidades disponíveis.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-light">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Vamos conversar?
            </h2>
            <p className="text-lg text-gray-text mb-8">
              Entre em contato para tirar suas dúvidas e conhecer as soluções disponíveis.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Sobre;

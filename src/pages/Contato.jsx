import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Breadcrumbs from '../components/common/Breadcrumbs';
import LeadForm from '../components/common/LeadForm';
import { WHATSAPP_NUMBER, INSTAGRAM_URL } from '../utils/constants';
import { MessageCircle, Instagram, Mail } from 'lucide-react';
import { getSEOMetadata } from '../utils/seo';
import SEO from '../components/common/SEO';

const Contato = () => {
  const seoMetadata = getSEOMetadata(
    'Contato',
    'Entre em contato com Victor Gabriel para saber mais sobre soluções de consórcio.',
    '/contato'
  );

  const breadcrumbs = [
    { label: 'Início', to: '/' },
    { label: 'Contato' },
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
            title="Contato"
            subtitle="Entre em contato para tirar suas dúvidas"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-text mb-8">
                Estou à disposição para conversar sobre seus objetivos e apresentar as soluções disponíveis. Preencha o formulário ou entre em contato diretamente pelos canais abaixo.
              </p>

              <div className="space-y-6">
                {WHATSAPP_NUMBER && (
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-light rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <MessageCircle className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">WhatsApp</h3>
                      <p className="text-gray-text text-sm">Clique para iniciar uma conversa</p>
                    </div>
                  </a>
                )}

                {INSTAGRAM_URL && (
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-light rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                      <Instagram className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">Instagram</h3>
                      <p className="text-gray-text text-sm">Siga para novidades</p>
                    </div>
                  </a>
                )}

                <div className="flex items-center p-4 bg-gray-light rounded-lg">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Atendimento</h3>
                    <p className="text-gray-text text-sm">Respondemos em até 24 horas úteis</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  Ao preencher o formulário, seus dados serão utilizados para iniciar uma conversa no WhatsApp. Você precisará confirmar o envio da mensagem no aplicativo.
                </p>
              </div>
            </div>

            <div>
              <LeadForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contato;

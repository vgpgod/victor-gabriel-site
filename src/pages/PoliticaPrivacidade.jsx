import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { getSEOMetadata } from '../utils/seo';
import SEO from '../components/common/SEO';

const PoliticaPrivacidade = () => {
  const seoMetadata = getSEOMetadata(
    'Política de Privacidade',
    'Conheça nossa política de privacidade e tratamento de dados.',
    '/politica-de-privacidade'
  );

  const breadcrumbs = [
    { label: 'Início', to: '/' },
    { label: 'Política de Privacidade' },
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
            title="Política de Privacidade"
            align="left"
          />
          <div className="max-w-3xl mx-auto prose prose-navy">
            <p className="text-lg text-gray-text mb-6">
              Esta Política de Privacidade descreve como tratamos os dados pessoais coletados através deste site.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Dados Coletados</h2>
            <p className="text-gray-text mb-4">
              Coletamos os seguintes dados através do formulário de contato:
            </p>
            <ul className="list-disc pl-6 text-gray-text mb-6">
              <li>Nome completo</li>
              <li>Telefone</li>
              <li>E-mail</li>
              <li>Interesse (imóvel, veículo, carta contemplada ou outros)</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. Finalidade do Tratamento</h2>
            <p className="text-gray-text mb-4">
              Os dados coletados são utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-6 text-gray-text mb-6">
              <li>Iniciar uma conversa pelo WhatsApp sobre sua solicitação</li>
              <li>Apresentar soluções de consórcio relacionadas ao seu interesse</li>
              <li>Responder suas dúvidas sobre os serviços oferecidos</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. Armazenamento de Dados</h2>
            <p className="text-gray-text mb-4">
              Este site não armazena dados pessoais em:
            </p>
            <ul className="list-disc pl-6 text-gray-text mb-6">
              <li>localStorage</li>
              <li>sessionStorage</li>
              <li>Cookies</li>
              <li>Banco de dados</li>
              <li>Analytics</li>
              <li>Serviços externos</li>
              <li>Logs de depuração</li>
            </ul>
            <p className="text-gray-text mb-6">
              Os dados são utilizados apenas no navegador para montar a mensagem que será enviada ao WhatsApp. Ao prosseguir para o WhatsApp, os dados presentes na mensagem serão compartilhados com o serviço externo.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. WhatsApp</h2>
            <p className="text-gray-text mb-6">
              Ao utilizar o formulário, você será direcionado para o WhatsApp com uma mensagem pré-preenchida contendo seus dados. Você precisará confirmar o envio da mensagem manualmente no aplicativo. O WhatsApp é um serviço de terceiros e está sujeito à sua própria política de privacidade.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. Consentimento</h2>
            <p className="text-gray-text mb-6">
              Ao preencher o formulário e marcar a caixa de consentimento, você autoriza o uso dos dados informados para receber contato sobre sua solicitação. O consentimento é obrigatório para o envio do formulário.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. Seus Direitos</h2>
            <p className="text-gray-text mb-4">
              Você tem os seguintes direitos relacionados aos seus dados pessoais:
            </p>
            <ul className="list-disc pl-6 text-gray-text mb-6">
              <li>Saber quais dados são coletados</li>
              <li>Saber a finalidade do tratamento</li>
              <li>Solicitar correção de dados incorretos</li>
              <li>Solicitar exclusão dos dados (quando aplicável)</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">7. Solicitações</h2>
            <p className="text-gray-text mb-6">
              Para solicitar esclarecimentos sobre o tratamento de seus dados, exercer seus direitos ou revogar o consentimento, entre em contato através do WhatsApp disponível no site.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">8. Conformidade Legal</h2>
            <p className="text-gray-text mb-6">
              Esta política foi elaborada em conformidade com a Lei Geral de Proteção de Dados (LGPD) e demais legislações aplicáveis. Os direitos de proteção de dados podem ser exercidos conforme a legislação vigente.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">9. Atualizações</h2>
            <p className="text-gray-text mb-6">
              Esta política pode ser atualizada periodicamente. Recomendamos que você a revise regularmente para estar informado sobre como tratamos seus dados.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
              <p className="text-sm text-yellow-800">
                <strong>Nota:</strong> Esta política não garante conformidade legal completa. Para garantir a conformidade, é importante consultar um profissional especializado em proteção de dados.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PoliticaPrivacidade;

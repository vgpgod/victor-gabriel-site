import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Breadcrumbs from '../components/common/Breadcrumbs';
import FAQItem from '../components/cards/FAQItem';
import { getSEOMetadata } from '../utils/seo';
import SEO from '../components/common/SEO';

const PerguntasFrequentes = () => {
  const seoMetadata = getSEOMetadata(
    'Perguntas Frequentes',
    'Tire suas dúvidas sobre consórcios, funcionamento e condições.',
    '/perguntas-frequentes'
  );

  const breadcrumbs = [
    { label: 'Início', to: '/' },
    { label: 'FAQ' },
  ];

  const faqs = [
    {
      question: 'O que é um consórcio?',
      answer: 'Consórcio é uma modalidade de compra coletiva onde um grupo de pessoas se reúne com o objetivo de adquirir bens. Cada participante contribui com parcelas mensais que formam um fundo comum. Através de sorteios ou lances, os participantes são contemplados com uma carta de crédito para comprar o bem desejado.'
    },
    {
      question: 'Qual é a diferença entre consórcio e financiamento?',
      answer: 'A principal diferença é que o consórcio não cobra juros, apenas taxa de administração e outros custos previstos no contrato. No financiamento, há juros sobre o valor financiado. Além disso, no consórcio a contemplação depende de sorteio ou lance, enquanto no financiamento o crédito é liberado imediatamente após aprovação.'
    },
    {
      question: 'Como funciona a contemplação?',
      answer: 'A contemplação pode ocorrer de duas formas: por sorteio, realizado periodicamente conforme as regras do grupo, ou por lance, onde o participante oferece um valor para antecipar sua contemplação. As regras variam entre os grupos e estão estabelecidas no contrato.'
    },
    {
      question: 'Posso ofertar um lance?',
      answer: 'Sim, geralmente é possível ofertar lances para antecipar a contemplação. Existem diferentes tipos de lance (em porcentagem do valor da carta, valor fixo, etc.) e cada grupo tem suas regras. Consulte as condições específicas do grupo antes de participar.'
    },
    {
      question: 'O que é uma carta contemplada?',
      answer: 'Carta contemplada é aquela que já foi liberada para uso pelo participante, seja por sorteio ou lance. É possível adquirir cartas contempladas de outros participantes que desejam transferir seus direitos. Nesse caso, o comprador assume as parcelas restantes e pode utilizar a carta imediatamente.'
    },
    {
      question: 'Quais custos devo considerar?',
      answer: 'Os principais custos são: valor das parcelas mensais, taxa de administração (percentual sobre o valor da carta), fundo de reserva, seguro obrigatório e, em alguns casos, taxas adicionais. É importante ler o contrato com atenção para entender todos os custos envolvidos.'
    },
    {
      question: 'Como avaliar se uma opção cabe no meu orçamento?',
      answer: 'Analise se o valor da parcela cabe no seu orçamento mensal sem comprometer suas outras despesas. Considere também a taxa de administração e outros custos. Planeje manter o pagamento durante todo o prazo do grupo, pois atrasos podem gerar multas e juros.'
    },
    {
      question: 'Como entrar em contato?',
      answer: 'Você pode entrar em contato pelo formulário disponível no site ou diretamente pelo WhatsApp. Após preencher seus dados, você será direcionado para o WhatsApp com uma mensagem pré-preenchida para iniciar a conversa.'
    }
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
            title="Perguntas Frequentes"
            subtitle="Tire suas dúvidas sobre consórcios"
          />
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-light">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Não encontrou sua resposta?
            </h2>
            <p className="text-gray-text mb-8">
              Entre em contato e tire suas dúvidas diretamente.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PerguntasFrequentes;

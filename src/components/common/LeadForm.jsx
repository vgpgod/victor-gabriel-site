import { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateForm } from '../../utils/validation';
import { openWhatsApp, getWhatsAppLink } from '../../services/whatsapp';
import { INTEREST_OPTIONS } from '../../utils/constants';

const LeadForm = ({ title = 'Vamos conversar sobre sua próxima conquista?', subtitle = 'Preencha seus dados e escolha o assunto sobre o qual deseja conversar.' }) => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    interesse: '',
    consentimento: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFallbackLink, setShowFallbackLink] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const interesseLabel = INTEREST_OPTIONS.find(opt => opt.value === formData.interesse)?.label || formData.interesse;
    const formDataWithLabel = { ...formData, interesseLabel };

    const success = openWhatsApp(formDataWithLabel);

    if (!success) {
      setShowFallbackLink(true);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-navy mb-2">{title}</h3>
      <p className="text-gray-text mb-6">{subtitle}</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-navy mb-1">
              Nome completo *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent ${
                errors.nome ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={errors.nome ? 'true' : 'false'}
              aria-describedby={errors.nome ? 'nome-error' : undefined}
            />
            {errors.nome && (
              <p id="nome-error" className="mt-1 text-sm text-red-600">
                {errors.nome}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-navy mb-1">
              Telefone *
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent ${
                errors.telefone ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={errors.telefone ? 'true' : 'false'}
              aria-describedby={errors.telefone ? 'telefone-error' : undefined}
            />
            {errors.telefone && (
              <p id="telefone-error" className="mt-1 text-sm text-red-600">
                {errors.telefone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="interesse" className="block text-sm font-medium text-navy mb-1">
              Interesse *
            </label>
            <select
              id="interesse"
              name="interesse"
              value={formData.interesse}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white ${
                errors.interesse ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={errors.interesse ? 'true' : 'false'}
              aria-describedby={errors.interesse ? 'interesse-error' : undefined}
            >
              <option value="">Selecione uma opção</option>
              {INTEREST_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.interesse && (
              <p id="interesse-error" className="mt-1 text-sm text-red-600">
                {errors.interesse}
              </p>
            )}
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="consentimento"
              name="consentimento"
              checked={formData.consentimento}
              onChange={handleChange}
              className={`mt-1 w-4 h-4 border rounded focus:outline-none focus:ring-2 focus:ring-gold ${
                errors.consentimento ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={errors.consentimento ? 'true' : 'false'}
            />
            <label htmlFor="consentimento" className="ml-2 text-sm text-gray-text">
              Autorizo o uso dos dados informados para receber contato sobre minha solicitação e declaro que li a{' '}
              <Link to="/politica-de-privacidade" className="text-gold hover:underline">
                Política de Privacidade
              </Link>
              . *
            </label>
          </div>
          {errors.consentimento && (
            <p className="text-sm text-red-600">{errors.consentimento}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Processando...' : 'Continuar para o WhatsApp'}
          </button>

          {showFallbackLink && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 mb-2">
                Não foi possível abrir o WhatsApp automaticamente. Clique no link abaixo:
              </p>
              <a
                href={getWhatsAppLink({ ...formData, interesseLabel: INTEREST_OPTIONS.find(opt => opt.value === formData.interesse)?.label || formData.interesse })}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline font-medium"
              >
                Abrir WhatsApp
              </a>
            </div>
          )}

          <p className="text-xs text-gray-text mt-4">
            Ao prosseguir, seus dados serão utilizados para iniciar uma conversa no WhatsApp. Você precisará confirmar o envio da mensagem no aplicativo.
          </p>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;

import { WHATSAPP_NUMBER } from '../utils/constants';

export const buildWhatsAppMessage = (formData) => {
  const message = `Olá, Victor! Vim pelo seu site e gostaria de saber mais sobre suas soluções.
Nome: ${formData.nome}
Telefone: ${formData.telefone}
E-mail: ${formData.email}
Interesse: ${formData.interesseLabel}
Aguardo seu contato!`;

  return encodeURIComponent(message);
};

export const openWhatsApp = (formData) => {
  const encodedMessage = buildWhatsAppMessage(formData);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  try {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    return true;
  } catch (error) {
    console.error('Erro ao abrir WhatsApp:', error);
    return false;
  }
};

export const getWhatsAppLink = (formData) => {
  const encodedMessage = buildWhatsAppMessage(formData);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

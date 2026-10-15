import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../utils/constants';

const WhatsAppButton = ({ message = '' }) => {
  if (!WHATSAPP_NUMBER) {
    return null;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodedMessage}` : ''}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;

export const SITE_NAME = 'Victor Gabriel';
export const SITE_TITLE = 'Consultor de Negócios';
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '5541920048287';
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://isekaiblox.com.br';
export const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || '';

export const INTEREST_OPTIONS = [
  { value: 'imovel', label: 'Imóvel ou casa própria' },
  { value: 'veiculo', label: 'Carro ou veículo' },
  { value: 'carta_contemplada', label: 'Carta de crédito contemplada' },
  { value: 'outros', label: 'Outros objetivos' },
];

export const NAVIGATION_LINKS = [
  { path: '/', label: 'Início' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/consorcio-imobiliario', label: 'Consórcio Imobiliário' },
  { path: '/consorcio-veiculos', label: 'Consórcio de Veículos' },
  { path: '/como-funciona', label: 'Como Funciona' },
  { path: '/perguntas-frequentes', label: 'FAQ' },
  { path: '/contato', label: 'Contato' },
];

import { SITE_NAME, SITE_TITLE, SITE_URL } from './constants';

export const getSEOMetadata = (title, description, path = '') => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | ${SITE_TITLE}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description: description || 'Victor Gabriel - Consultor de Negócios especializado em soluções de consórcio para imóveis e veículos.',
    canonical: url,
    openGraph: {
      title: fullTitle,
      description: description || 'Victor Gabriel - Consultor de Negócios especializado em soluções de consórcio para imóveis e veículos.',
      url: url,
      siteName: SITE_NAME,
      type: 'website',
    },
  };
};

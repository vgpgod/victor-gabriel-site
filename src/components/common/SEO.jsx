import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, openGraph }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {openGraph && (
        <>
          <meta property="og:title" content={openGraph.title} />
          <meta property="og:description" content={openGraph.description} />
          <meta property="og:url" content={openGraph.url} />
          <meta property="og:site_name" content={openGraph.siteName} />
          <meta property="og:type" content={openGraph.type} />
        </>
      )}
    </Helmet>
  );
};

export default SEO;

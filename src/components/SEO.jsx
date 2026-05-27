import { Helmet } from 'react-helmet-async';

const defaultMeta = {
  title: 'Crown Home Spaces | Luxury Interiors & Construction',
  description: 'Crown Home Spaces is a premium construction and interior design company in Hyderabad delivering luxury residential and commercial projects.',
  url: 'https://crownhomespaces.com',
  image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  keywords: 'construction company Hyderabad, interior designers Hyderabad, luxury interiors, architectural elevations, civil engineering'
};

const SEO = ({ title, description, url, image, keywords, children }) => {
  const meta = {
    title: title || defaultMeta.title,
    description: description || defaultMeta.description,
    url: url || defaultMeta.url,
    image: image || defaultMeta.image,
    keywords: keywords || defaultMeta.keywords
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ConstructionBusiness',
    name: 'Crown Home Spaces',
    url: meta.url,
    logo: 'https://crownhomespaces.com/logo.png',
    telephone: '+919553041347',
    email: 'crownhomespaces@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hyderabad, Telangana',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'India'
    },
    priceRange: '₹₹₹',
    description: meta.description,
    sameAs: [
      'https://instagram.com/crownhomespaces',
      'https://maps.google.com/?q=Hyderabad,Telangana,India'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91 9553041347',
        contactType: 'customer service',
        areaServed: 'IN'
      }
    ]
  };

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      {children}
    </Helmet>
  );
};

export default SEO;

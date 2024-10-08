import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const SEO = ({ description, title, url }: any) => {
  const seoTitle = title?.substring(0, 60) || '';   
  const seoDescription = description?.substring(0, 145) || ''; 

  return (
    <>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content="Sheetal Dadhich, software developer, web development, frontend developer, modern web technologies, high-performance applications, reactjs developer" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="og:image" content="https://shetal.me/link-preview.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image:src" content="https://shetal.me/link-preview.png" />
    </>
  )
};

SEO.defaultProps = {
  lang: 'en',
  description: '',
  url: 'https://shetal.me/',
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default SEO;
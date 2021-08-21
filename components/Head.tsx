import NextHead from 'next/head';
import React from 'react';
import { MetaProps } from '../types/layout';

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const meta: MetaProps = {
    title: 'Surprise',
    type: 'website',
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Surprise" />
      <meta property="og:title" content={meta.title} />
      <meta name="twitter:title" content={meta.title} />
    </NextHead>
  );
};

export default Head;

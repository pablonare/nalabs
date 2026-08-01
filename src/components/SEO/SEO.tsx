import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export default function SEO({
  title,
  description,
  url,
  image = "https://nalabsolutions.com/og-image.jpg",
}: SEOProps) {
  
  return (
    <Head>
      <title>{title}</title>

      <link rel="canonical" href={url} />

      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Nalab Solutions" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
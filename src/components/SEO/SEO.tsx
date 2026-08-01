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
  image = "/og-image.jpg",
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

      <meta name="twitter:card" content="summary_large_image" />

    </Head>
  );
}
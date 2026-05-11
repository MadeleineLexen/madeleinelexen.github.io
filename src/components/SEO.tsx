import { Helmet } from "react-helmet-async";

const BASE_URL = "https://madeleinelexen.github.io";
const DEFAULT_IMAGE = `${BASE_URL}/open_graph_image.png`;
const SITE_NAME = "Madeleine Lexén";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
}

/**
 * SEO component for managing page meta tags
 */
const SEO = ({ 
  title, 
  description, 
  path = "", 
  type = "website",
  image = DEFAULT_IMAGE 
}: SEOProps) => {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;

const title = "MyThorch";
const description =
  "MyThorch is a revolutionary document interaction app that leverages user behavior to embed vectors and store them in a Redis vector database. This process creates a long-term memory AI that truly understands the user's needs and preferences, leading to a highly efficient reading experience.";

const SEO = {
  title,
  description,
  canonical: "https://mythorch-frontend.vercel.app/",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://mythorch-frontend.vercel.app/",
    title,
    description,
    images: [
      {
        url: "thumbnail.png",
        alt: title,
      },
    ],
  },
};

export default SEO;
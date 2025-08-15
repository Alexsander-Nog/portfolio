export default function sitemap() {
  const base = "https://portfolio-mocha-five-s11funmkri.vercel.app";
  const lastModified = new Date();

  return [
    {
      url: `${base}/en`,
      lastModified,
      alternates: {
        languages: {
          en: `${base}/en`,
          pt: `${base}/pt`,
        },
      },
    },
    {
      url: `${base}/pt`,
      lastModified,
      alternates: {
        languages: {
          en: `${base}/en`,
          pt: `${base}/pt`,
        },
      },
    },
  ];
}

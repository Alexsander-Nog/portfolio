export default function robots() {
  const base = "https://portfolio-mocha-five-s11funmkri.vercel.app";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}

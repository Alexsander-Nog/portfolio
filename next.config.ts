// next.config.ts
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(); // ✅ sem argumentos no v4

const nextConfig: import("next").NextConfig = {};
export default withNextIntl(nextConfig);

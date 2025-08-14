import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // matcher recomendado na doc (evita arquivos com ponto e rotas internas)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};

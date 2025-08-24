// src/data/projects.ts
export type ProjectType = "All" | "Python" | "Web";

export type Project = {
  id: string;
  title: string;
  type: ProjectType;
  summary: string;
  stack: string[];
  tags?: (typeof allTags)[number][]; // garante consistência com allTags
  featured?: string;
  details?: string[];
  links: {
    github?: string;
    websites?: string[];
  };
};

// use apenas tags que você realmente quer filtrar no UI
export const allTags = ["DataScience", "ML", "CRUD", "Business", "Portfolio", "Education"] as const;

export const projects: Project[] = [
  {
    id: "acidentes-2020",
    title: "Acidentes 2020 — Análise & Predição",
    type: "Python",
    summary:
      "Exploração de dados de acidentes (2020) nas BR-020/070 (DF) com protótipos de modelagem para prever fatalidades. Foco em entendimento do dado e baseline de ML.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn", "Jupyter"],
    tags: ["DataScience", "ML", "Education"],
    links: { github: "https://github.com/AlexsanderTG/Acidentes-2020-predic-Python-" },
    details: [
      "Higienização e padronização de colunas; tratamento de valores ausentes e inconsistências.",
      "Engenharia de atributos de tempo/local (ex.: hora do dia, dia da semana, trechos BR-020/070).",
      "Análise exploratória com distribuição de variáveis, correlações e identificação de outliers.",
      "Protótipos de modelos supervisionados (regressão/classificação) para risco de óbito.",
      "Validação simples e discussão de limitações/dados necessários para produção.",
    ],
  },
  {
    id: "crisp-acidentes",
    title: "Projeto CRISP-DM — Acidentes",
    type: "Python",
    summary:
      "Estudo guiado pelo processo CRISP-DM — da compreensão do negócio à avaliação — aplicado a dados de acidentes. Pipeline reprodutível em notebook.",
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    tags: ["DataScience", "Education"],
    links: { github: "https://github.com/AlexsanderTG/Projeto-CRISP-acidentes-com-Python" },
    details: [
      "Documentação das fases CRISP-DM: Business/Data Understanding, Preparation, Modeling e Evaluation.",
      "Limpeza, tipagem e enriquecimento de atributos para melhorar a qualidade do dataset.",
      "EDA com gráficos comparativos e análise de padrões temporais/espaciais.",
      "Seleção de variáveis e teste de modelos de baseline para viabilidade.",
      "Reflexões sobre métricas, viés de amostragem e próximos passos.",
    ],
  },
  {
    id: "jogoteca",
    title: "Jogoteca (Flask + MySQL)",
    type: "Web",
    summary:
      "Aplicação web CRUD de jogos com Flask, persistência em MySQL e templates Jinja. Exercício completo de back-to-front com autenticação simples.",
    stack: ["Flask", "Python", "MySQL", "Jinja2", "HTML", "CSS", "JavaScript"],
    tags: ["CRUD", "Business", "Education"],
    links: { github: "https://github.com/AlexsanderTG/Jogoteca-python-flask" },
    details: [
      "Arquitetura organizada por camadas (models, views, helpers) e scripts de preparo do banco.",
      "CRUD de jogos com formulários, validação básica e feedback de erros.",
      "Sessão e login simples para proteger rotas de criação/edição.",
      "Templates Jinja com herança (layout base) e partials reutilizáveis.",
      "Boas práticas iniciais de organização de projeto Flask.",
    ],
  },
  {
    id: "site-thifi",
    title: "Thifi — Site Institucional (Next.js)",
    type: "Web",
    summary:
      "Website institucional da Thifi com Next.js e Tailwind. Foco em páginas de marketing, desempenho e estrutura pronta para deploy.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel/GitHub Pages"],
    tags: ["Business", "Portfolio"],
    links: {
      github: "https://github.com/AgenciaThifi/agenciathifi.github.io",
      websites: ["https://agenciathifi.github.io"],
    },
    details: [
      "Estrutura com App Router, componentes reutilizáveis e design responsivo.",
      "Head/meta tags e semântica HTML para SEO on-page básico.",
      "Pipeline simples de build e publicação (Vercel ou GitHub Pages).",
      "Organização de conteúdo para apresentação de serviços/portfólio.",
    ],
  },
  {
    id: "wl-salao-barbearia",
    title: "Plataforma White-Label para Salão/Barbearia",
    type: "Web",
    summary:
      "Base Next.js em TypeScript para sites de salões/barbearias. Estrutura modular para catálogo, páginas institucionais e integrações server-side.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    tags: ["Business"],
    links: { github: "https://github.com/AgenciaThifi/wl_salao_barbearia" },
    details: [
      "Projeto bootstrapado com create-next-app e configuração de lint/TS pronta.",
      "Diretório `app/` com rotas e componentes desacoplados para reuso em múltiplos clientes.",
      "Assets públicos e convenções de organização para branding white-label.",
      "Integrações server-side via service account (ex.: automações/admin APIs).",
      "Pronto para CI/CD e deploy em plataformas como Vercel.",
    ],
  },
  {
    id: "portfolio-html",
    title: "PortfolioHTML (Estático)",
    type: "Web",
    summary:
      "Portfólio estático em HTML com ícones SVG. Alternativa leve, sem build, para páginas de apresentação.",
    stack: ["HTML", "SVG", "CSS"],
    tags: ["Portfolio"],
    links: { github: "https://github.com/AlexsanderTG/PortfolioHTML" },
    details: [
      "Estrutura semântica e navegação simples para seções do portfólio.",
      "Uso de SVGs otimizados para ícones/ilustrações.",
      "Base ideal para evoluir com CSS/JS ou migrar para framework.",
    ],
  },
];

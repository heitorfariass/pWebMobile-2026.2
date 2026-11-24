// Dados do portfólio — tudo editável aqui, sem mexer nas telas.

export const profile = {
  name: "Heitor Farias Santos",
  handle: "heitor.farias",
  foto: require("../assets/images/heitor.jpg"),
  taglines: [
    "Estudante de Ciência da Computação",
    "Análise de Dados · Automação com IA",
  ],
  about: [
    "Meu nome é Heitor, tenho 19 anos e estou atualmente no 5º período de Ciência da Computação. Tenho grande interesse em áreas como Análise de Dados e Automações com IA.",
    "Também já atuei em projetos freelance de design gráfico e edição de vídeo, o que me deu uma visão criativa na resolução de desafios e experiência com clientes reais e trabalho em equipe. Busco oportunidades em desenvolvimento e tecnologia para aplicar e expandir meus conhecimentos, contribuindo com soluções inovadoras.",
  ],
  contact: {
    email: "heitorfariassantos@gmail.com",
    github: "https://github.com/heitorfariass",
    linkedin: "https://linkedin.com/in/heitorfariassantos/",
  },
};

export const education = [
  {
    title: "Ciência da Computação",
    institution: "Universidade Católica de Pernambuco",
    period: "5º período de 8 · em andamento",
    courses: [
      "Análise de Algoritmos",
      "Análise e Desenvolvimento de Software",
      "Estrutura de Dados",
      "Inteligência Artificial",
      "Programação Orientada a Objetos",
      "Programação Web e Mobile",
      "Projeto de Banco de Dados",
      "Robótica Inclusiva",
    ],
    image: require("../assets/images/unicap.jpg"),
    caption: "campus da UNICAP, Recife",
  },
];

export const extracurricular = [
  {
    title: "Google Cloud Data Analytics Certificate",
    institution: "Programa de aprendizado Google",
    period: "em andamento",
    description:
      "Trilha com 5 cursos e mais de 100 horas de aprendizado em análise de dados com Google Cloud. Primeiro curso concluído em setembro de 2026: Introduction to Data Analytics in Google Cloud.",
    progress: { done: 1, total: 5 },
    image: require("../assets/images/google-cloud-badge.png"),
  },
];

export const experience = [
  {
    title: "Freelancer — Design Gráfico & Edição de Vídeo",
    company: "Agência Veeda (marketing)",
    period: "nov 2024 – abr 2025 · 6 meses",
    description:
      "Atuação freelance pela agência de marketing Veeda, desenvolvendo conteúdos digitais de design gráfico e edição de vídeo para a cliente principal, @marcelagaia.mkt — unindo criatividade e técnica para fortalecer a presença digital da marca.",
    skills: [
      "Criatividade",
      "Trabalho sob demanda",
      "Organização",
      "Comunicação com cliente",
    ],
    image: require("../assets/images/veeda.jpg"),
    link: {
      label: "ver portfólio de design",
      url: "https://www.instagram.com/veeda.mkt/",
    },
  },
];

export const skillGroups = [
  {
    label: "técnicas",
    items: [
      "Programação Orientada a Objetos",
      "Estrutura de Dados & Árvores",
      "Banco de Dados (SQL · BigQuery · Firebase)",
      "Frontend (HTML · CSS · React)",
      "IA & Automação de Processos",
    ],
  },
  {
    label: "interpessoais",
    items: [
      "Gestão de Tempo",
      "Trabalho em Equipe",
      "Comunicação com Clientes",
      "Entrega sob Demanda",
    ],
  },
];

export const projects = [
  {
    title: "DINEUP",
    tagline: "projeto principal — descoberta e curadoria de restaurantes",
    description: [
      "O DINEUP começou com a ideia do meu sócio Júlio: um aplicativo de descoberta e curadoria de restaurantes. Ele trouxe a visão do negócio e eu me voluntariei para dar vida à ideia como desenvolvedor. Eu estava ainda no 3º período e, como autodidata, pesquisei, testei e construí o produto do zero, enquanto Júlio cuidava do marketing, financeiro e planejamento — aprendi muito no caminho.",
      "Com o amadurecimento do projeto, entendemos o tamanho do desafio de lançar um app mobile: burocracia, alto investimento e a missão de conquistar usuários e restaurantes parceiros ao mesmo tempo. O DINEUP entrou em pausa estratégica — mas foi minha maior escola prática de desenvolvimento de software, produto e trabalho em equipe.",
    ],
    tech: ["React", "Firebase", "IA", "Vercel"],
    screenshots: [
      { src: require("../assets/images/dineup-map.png"), caption: "busca por mapa" },
      { src: require("../assets/images/dineup-culinarias.png"), caption: "curadoria de gostos" },
      { src: require("../assets/images/dineup-cardapio.png"), caption: "cardápio e pratos" },
      { src: require("../assets/images/dineup-reserva.png"), caption: "reserva de mesa" },
    ],
    url: "https://dineup1.vercel.app/",
    linkLabel: "abrir dineup1.vercel.app",
    featured: true,
  },
  {
    title: "ACESSO INCLUSIVO · UNICAP",
    tagline: "robótica inclusiva — projeto com impacto social",
    description: [
      "Uma porta que abre sem pedir ajuda: sistema de destravamento com RFID na UNICAP que devolve autonomia a estudantes com mobilidade reduzida — basta aproximar o cartão e a trava abre sozinha.",
      "Desenvolvido em equipe na disciplina de Robótica Inclusiva, com Arduino, leitor RC522 e mecanismo de trava impresso em 3D. Cadastro de usuários via Cartão Mestre e memória persistente na EEPROM — 100% offline.",
    ],
    tech: ["Arduino", "RFID", "C++", "Impressão 3D"],
    image: require("../assets/images/acesso-prototipo.jpg"),
    imageRatio: 1200 / 2134,
    url: "https://github.com/heitorfariass/Controle-de-Acesso-Inclusivo---UNICAP",
    linkLabel: "repositório no GitHub",
  },
  {
    title: "JOGO DA FORCA",
    tagline: "projeto pessoal — agora em React Native",
    description: [
      "Jogo clássico da forca com teclado virtual, boneco desenhado em SVG, sistema de 6 tentativas e 44 palavras sorteadas aleatoriamente. Nesta versão ele roda direto no app, em React Native.",
    ],
    tech: ["React Native", "Expo", "SVG"],
    route: "/jogo",
    linkLabel: "jogar agora",
  },
];

// Tecnologias e módulos usados para construir ESTE app (tela "Sobre")
export const stack = [
  { name: "React Native", desc: "Construção da interface nativa (View, Text, Pressable, ScrollView...)", icon: "logo-react" },
  { name: "Expo (SDK 58)", desc: "Plataforma que facilita rodar, testar e publicar o app", icon: "rocket-outline" },
  { name: "Expo Router", desc: "Navegação baseada em arquivos: cada arquivo da pasta app/ vira uma tela", icon: "git-branch-outline" },
  { name: "React 19", desc: "Componentes, useState, useEffect, useCallback", icon: "cube-outline" },
  { name: "react-native-svg", desc: "Desenho do boneco da forca em SVG", icon: "shapes-outline" },
  { name: "expo-image", desc: "Exibição otimizada das fotos e screenshots", icon: "image-outline" },
  { name: "expo-font + Google Fonts", desc: "Fonte Share Tech Mono para o visual 'terminal'", icon: "text-outline" },
  { name: "@expo/vector-icons", desc: "Ícones da barra de navegação e dos cards (Ionicons)", icon: "star-outline" },
  { name: "react-native-safe-area-context", desc: "Respeita notch e barras do sistema", icon: "phone-portrait-outline" },
  { name: "react-native-screens", desc: "Telas nativas e transições mais rápidas", icon: "layers-outline" },
  { name: "Animated (API do RN)", desc: "Animações: cursor piscando, status online e entrada dos elementos", icon: "pulse-outline" },
  { name: "Linking", desc: "Abrir e-mail, GitHub, LinkedIn e links dos projetos", icon: "link-outline" },
];

# ¡Hola! Idiomas

> Toda conexão começa com um olá.

Projeto fictício de portfólio: site educacional responsivo com experiências interativas de descoberta e aprendizagem. Não representa uma instituição real.

**Demo:** https://saraingridsousa.github.io/Hola-idiomas/

## Funcionalidades

- Página institucional, catálogo de quatro idiomas, experiências de aprendizagem e apresentação das modalidades.
- Cards fotográficos por faixa etária que personalizam o recomendador.
- Carrossel de depoimentos explicitamente fictícios.
- Hola! Challenge: vocabulário em quatro idiomas, pronúncia via Speech Synthesis (quando disponível) e recorde local por idioma.
- Recomendação de curso por idioma, idade, objetivo e modalidade.
- Quiz educativo em inglês, espanhol, francês e italiano, com feedback e pontuação.
- Simulação de aula experimental, sem coleta de dados pessoais.
- Navegação responsiva, animações com preferência por movimento reduzido e elementos semânticos.

## Stack

React · TypeScript · Vite · Tailwind CSS · CSS · Motion · Lucide · Vitest.

## Executar

Requer Node.js 22 ou compatível.

```bash
npm install
npm run dev
npm test
npm run build
npm run preview
```

## Organização

- `src/components`: interface e fluxos interativos.
- `src/data`: catálogo e questões.
- `src/lib`: regras de recomendação e testes.
- `src/styles.css`: identidade visual, responsividade e animações.

## Créditos de fotografia

Fotografias de uso gratuito da [Pexels](https://www.pexels.com/license/), com links para cada página em `src/data/photos.ts`. As pessoas retratadas não são associadas aos relatos fictícios.

## Publicação

O Vite gera os arquivos estáticos em `dist/`. Para GitHub Pages, use um workflow de publicação estática com o artefato `dist/`. O caminho base é relativo para permitir hospedagem em subdiretórios.

## Limites da demonstração

O nivelamento é apenas educativo, sem equivalência oficial ao CEFR. As aulas e os horários são simulados; não há backend, cobrança, envio de formulários nem matrícula real. As fotografias são ilustrativas e não representam alunos da escola. São carregadas do CDN da Pexels, com alternativa visual em caso de falha; fontes em `src/data/photos.ts`. A ilustração SVG original permanece no fundo da composição. A disponibilidade de voz depende do navegador e do dispositivo. A identidade e o conteúdo são demonstrativos.

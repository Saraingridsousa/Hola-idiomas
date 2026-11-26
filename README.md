# ¡Hola! Idiomas

> Toda conexão começa com um olá.

Projeto fictício de portfólio: site educacional responsivo com experiências interativas de descoberta e aprendizagem. Não representa uma instituição real.

## Funcionalidades

- Página institucional, catálogo de quatro idiomas e apresentação das modalidades.
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

## Publicação

O Vite gera os arquivos estáticos em `dist/`. Para GitHub Pages, use um workflow de publicação estática com o artefato `dist/`. O caminho base é relativo para permitir hospedagem em subdiretórios.

## Limites da demonstração

O nivelamento é apenas educativo, sem equivalência oficial ao CEFR. As aulas e os horários são simulados; não há backend, cobrança, envio de formulários nem matrícula real. A ilustração da abertura é um SVG criado para este projeto. A identidade e o conteúdo são demonstrativos.

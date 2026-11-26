# ¡Hola! Idiomas

> Toda conexão começa com um olá.

Projeto fictício de portfólio: site educacional responsivo com experiências interativas de descoberta e aprendizagem. Não representa uma instituição real.

**[Acessar demonstração](https://saraingridsousa.github.io/Hola-idiomas/)** · [Publicações e verificações](https://github.com/Saraingridsousa/Hola-idiomas/actions)

![Prévia desktop](https://saraingridsousa.github.io/Hola-idiomas/screenshots/desktop.png)

<details><summary>Prévia mobile</summary>

![Prévia mobile](https://saraingridsousa.github.io/Hola-idiomas/screenshots/mobile.png)

</details>

## Funcionalidades

- Página institucional, catálogo de quatro idiomas, experiências de aprendizagem e apresentação das modalidades.
- Cards fotográficos por faixa etária que personalizam o recomendador.
- Carrossel contínuo de depoimentos explicitamente fictícios, com arraste manual.
- Perfis de professores fictícios, com fotografias ilustrativas identificadas.
- Jornada integrada: preferências de idioma e modalidade compartilhadas; resultado de nivelamento associado ao idioma correspondente.
- FAQ animado e navegação acessível.
- Hola! Challenge: vocabulário em quatro idiomas, pronúncia via Speech Synthesis (quando disponível) e recorde local por idioma.
- Recomendação de curso por idioma, idade, objetivo e modalidade.
- Quiz educativo em inglês, espanhol, francês e italiano, com feedback e pontuação.
- Simulação de aula experimental, sem coleta de dados pessoais.
- Navegação responsiva, animações com preferência por movimento reduzido e elementos semânticos.

## Stack

React · TypeScript · Vite · Tailwind CSS · CSS · Motion · Lucide · Radix UI · Vitest · Playwright · Sharp.

## Executar

Requer Node.js 22 ou compatível.

```bash
npm install
npm run assets:prepare # opcional para desenvolvimento; executado automaticamente no build
npm run dev
npm test
npm run build
npm run preview
```

## Qualidade

```bash
npx playwright install chromium
npm run build
npm run test:e2e
```

O pipeline verifica TypeScript, testes unitários e testes de navegador (jornada integrada, FAQ, movimento do carrossel, layouts desktop/tablet/mobile). Também gera screenshots e uma auditoria Lighthouse informativa; os relatórios podem ser consultados nos artefatos do GitHub Actions.

## Organização

- `src/components`: interface e fluxos interativos.
- `src/data`: catálogo e questões.
- `src/lib`: regras de recomendação e testes.
- `src/styles.css`: identidade visual, responsividade e animações.

## Créditos de fotografia

Fotografias de uso gratuito da [Pexels](https://www.pexels.com/license/), com links para cada página em `src/data/photos.ts`. As pessoas retratadas não são associadas aos relatos fictícios.

## Publicação

O Vite gera os arquivos estáticos em `dist/`. O GitHub Actions compila, testa e publica o artefato automaticamente. Em Settings → Pages → Build and deployment, mantenha Source como **GitHub Actions**, não Deploy from a branch: o código-fonte TSX não pode ser publicado diretamente pelo Jekyll. Metadados Open Graph, Twitter Card, URL canônica e sitemap acompanham a versão publicada. O caminho base é relativo para permitir hospedagem em subdiretórios.

## Limites da demonstração

O nivelamento é apenas educativo, sem equivalência oficial ao CEFR. As aulas e os horários são simulados; não há backend, cobrança, envio de formulários nem matrícula real. As fotografias são ilustrativas e não representam alunos da escola. São preparadas durante o build em duas resoluções WebP, publicadas junto com o site e cacheadas no CI; se a preparação falhar, o navegador tenta a imagem de origem e depois uma alternativa visual. Os arquivos gerados não são versionados; fontes em `src/data/photos.ts`. A ilustração SVG original permanece no fundo da composição. A disponibilidade de voz depende do navegador e do dispositivo. A identidade e o conteúdo são demonstrativos.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Educational documentation website for electronic systems (Eletrônica Analógica, Digital, Arquitetura de Computadores, Sistemas Embarcados, Processamento de Sinais), built with **Astro + Starlight**. Content is in Portuguese (PT-BR). Deployed to GitHub Pages at `https://firelink-library.github.io/siselet`.

## Commands

```bash
npm run dev       # Start local dev server (localhost:4321)
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
npx astro check   # Type/syntax check for Astro/MDX files
```

The primary "test" is ensuring `npm run build` passes without MDX errors or broken links.

## Architecture

- `src/content/docs/` — All MDX content, organized by subject: `digi/`, `arqui/`, `sinais/`, `anal/`, `embarc/`
- `src/assets/` — Images, mirroring the same subject subdirectories
- `astro.config.mjs` — Main config: Starlight setup, KaTeX math, Catppuccin theme, sidebar topics plugin
- `src/styles/custom.css` — Site-wide CSS overrides

## Content Guidelines

### Writing Style

**Voz e tom:**
- **Tom base expositivo e tecnicamente rigoroso.** A prosa padrão é clara, direta e precisa — sem gírias, sem adjetivos editoriais. O rigor técnico vem primeiro
- Use "vamos" inclusivo ("vamos ver", "vamos projetar") e "você" direto ("você deve estar se perguntando", "você como bom aluno pode se lembrar"). Use "eu" para estabelecer autoridade ou admitir limitação ("eu não mencionei", "quando mencionei X, destaquei Y"). Nunca impessoal/passivo ("observa-se que", "pode-se notar")
- Coloquialismo é **pontual, não constante**. Aparece em transições, aberturas de seção e momentos de reconhecimento de dificuldade — não em parágrafos técnicos. Expressões como "né?", "relaxa", "Ok? Ok!" são reservadas para esses momentos. Escreva com clareza técnica, quebrando a formalidade em momentos estratégicos
- Reconheça dificuldade abertamente quando o conteúdo é denso: "Como sei que essa explicação pode ser um tanto difícil de acompanhar em formato textual", "Eu sei, eu sei. É muita coisa de uma vez só"
- Humor é **raro e cirúrgico**: trocadilhos pontuais ("Pentium D~isastre~"), anedotas curtas, sarcasmo amigável sobre a indústria. Nunca em parágrafos técnicos — humor aparece em transições e comentários parentéticos

**Estrutura narrativa:**
- **Problema/pergunta primeiro, ferramenta depois.** Não comece com "a álgebra booleana é...". Comece com "como transformar requisitos do mundo real em circuitos?" ou use uma pergunta Socrática: "A pergunta que deve estar na sua cabeça agora é..."
- **Contexto histórico como gancho de abertura.** Situe conceitos em narrativas humanas: quem inventou, por que inventou, o que deu errado. Cite figuras históricas (Babbage, Ada Byron, von Neumann, Shannon, Moore) e conte suas histórias
- **Analogias concretas antes de formalismo.** Explique fisicamente/intuitivamente primeiro, formalize depois. Use analogias do cotidiano (torneira → BJT, torrent → P2P)
- **Transições naturais:** use "agora que já vimos X, precisamos entender Y" para progressão. Use "bom, aí que entra..." para introduzir soluções. Use "por quê entrei nessa tangente? Pois..." para justificar digressões

**Frases e padrões recorrentes do autor:**
- "Ok? Ok!" para confirmar e avançar
- "O que isso significa?" como transição para implicações
- "A próxima pergunta interessante a ser feita é..." para introduzir novos tópicos
- "Pois bem," para conectar contexto prévio a conceito novo
- "Perceba que..." / "Os mais perspicazes devem ter notado que..." para apontar detalhes sutis
- Usar ~riscado~ para autocorreção humorística (pontual, não em todo parágrafo)

**Calibre por contexto:**
- **Trechos técnicos** (equações, tabelas, descrição de circuitos): exposição limpa e direta, sem coloquialismo. Frases completas, vocabulário preciso
- **Transições, aberturas e fechamentos de seção**: é onde entra o tom pessoal, as perguntas retóricas, o "vamos lá"
- **Evitar sempre**: adjetivos editoriais ("lindamente", "absurdamente"), gírias forçadas ("fichinha", "bichos", "Sacou?"), humor em parágrafos técnicos, coloquialismo constante

**Termos técnicos:**
- **Negrito** na primeira aparição de conceitos-chave ("**zona de depleção**", "**registrador**")
- *Itálico* para termos em inglês na primeira menção (*flip-flop*, *ripple delay*, *pipeline*)
- Após primeira menção, uso normal sem formatação especial

**Exercícios:**
- Formato: `:::tip[Exercício X.YY]` ou `:::tip[Para pensar um pouco...]`
- Tom: prefira perguntas abertas que pedem pesquisa ou raciocínio, não respostas mecânicas
- Padrões: "Pesquise o que é X", "Como você faria Y?", "E aí, consegue provar isso?"
- Inclua dicas quando apropriado, mas não dê respostas ("Não espere respostas para os exercícios desse material =)")
- Ocasionalmente, seções intencionalmente vazias como exercício de pesquisa autônoma

### MDX Structure
Every file needs frontmatter with `title`, `sidebar.order`, and `slug` (hyphen-separated, e.g. `logica-combinatoria`).

**Admonitions:**
```mdx
:::note
:::tip
:::warning
:::danger
```

**Exercises:** `:::tip[Exercício X.YY]`

**Images** must be imported via ESM and use the Astro `Image` component:
```mdx
import { Image } from 'astro:assets';
import minhaImagem from '../../../assets/caminho/imagem.png';

<center>
  <Image src={minhaImagem} alt="Descrição" style={{ height: 'auto' }} />
</center>
<p><center>Fig X.Y - Descrição da figura.</center></p>
```

**Math:** LaTeX via KaTeX — `$inline$` and `$$block$$`. Always verify KaTeX syntax after adding formulas.

**Code examples** (C, Assembly, Verilog, Python) should be clean and commented. Use Markdown tables for truth tables and technical specs.

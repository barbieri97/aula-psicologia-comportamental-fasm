# quadro

Tema Slidev desta disciplina. Papel e tinta, tipografia de sala de aula, entrada em cascata.

- **Contrato de autoria** (layouts, campos, componentes): [`../docs/tema.md`](../docs/tema.md)
- **Catálogo visual**: `npm run ref`, na raiz do repositório
- **Contrato que o lint valida**: [`layouts.json`](layouts.json)

```
tema/
  layouts/      um arquivo .vue por layout — o que o `layout:` do frontmatter escolhe
  components/   Moldura (o cromo de todo slide), Ajuste, Trilha e os componentes de autoria
  lib/          partes.js — deduz as partes da aula a partir dos slides `section`
  setup/        mermaid.ts — recolore diagramas com os tokens do tema
  styles/       tokens.css (as decisões) · base.css (o esqueleto) · movimento.css (o ritmo)
```

Para mudar a cara do tema inteiro, mexa em `styles/tokens.css` — e só lá. Layouts e componentes
não conhecem cor nem tamanho: leem tokens.

Um deck usa o tema por caminho relativo, não por pacote npm:

```yaml
theme: ../tema     # de dentro de aulas/
theme: ./tema      # de um .md na raiz
```

As duas dependências externas são `@iconify/vue` e `@iconify-json/lucide`, declaradas no
`package.json` da raiz. A coleção lucide inteira vai no bundle (~95 kB gzip) para os ícones
aparecerem no PDF exportado e numa sala sem internet.

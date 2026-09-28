# LinkTree Lumina

Página "link na bio" da Lumina. Um arquivo HTML, sem build, sem npm, sem servidor.

Clone estrutural de `link.astrevo.com.br` (layout, animações e interações),
com a identidade visual da Lumina no lugar da marca original.

---

## Como usar

1. Abra **`config.js`** num editor de texto (VS Code, Bloco de Notas, qualquer um).
2. Edite o que quiser.
3. Salve e abra o `index.html` no navegador (ou dê F5 se já estiver aberto).

**Você só edita `config.js`.** Não precisa mexer em mais nada.

---

## Estrutura

```
LinkTree Lumina/
├── index.html      esqueleto (não precisa mexer)
├── style.css       visual: cores, elevação, animações (não precisa mexer)
├── app.js          motor que monta a página (não precisa mexer)
├── config.js       ← VOCÊ EDITA SÓ AQUI
└── assets/
    ├── logo-lumina.png   logo da marca
    └── cards/      imagens de capa dos cards
```

---

## O que dá para configurar em `config.js`

| Seção | O que controla |
|---|---|
| `pagina` | Título da aba, descrição (aparece no WhatsApp/Google), favicon |
| `marca` | Foto da marca, tamanho da foto, título, rodapé da foto |
| `redes` | Linha de ícones sociais do topo — adicionar, remover, reordenar |
| `cards` | Botões grandes de link — adicionar, remover, reordenar, altura, imagem, título, rodapé, link, destaque |
| `rodapePagina` | Texto pequeno no fim do card |

### Adicionar um card novo

Copie um bloco `{ ... }` dentro de `cards: [ ]`, cole no fim da lista e edite:

```js
{
  titulo:       "Título do novo card",
  rodape:       "linha de baixo",
  iconeRodape:  "link",
  imagem:       "assets/cards/minha-imagem.png",
  alturaImagem: 150,
  alturaMinima: 0,
  link:         "https://exemplo.com",
  novaAba:      true,
  destaque:     false,
},
```

A ordem dos blocos na lista é a ordem na tela.

### Controlar a altura vertical de um card

- **`alturaImagem`** — altura da imagem de capa, em pixels.
  `110` capa baixa · `150` padrão · `260` capa alta.
- **`alturaMinima`** — altura mínima do card inteiro, em pixels.
  `0` deixa o card se ajustar ao texto. Use `120`, `160` etc. para deixar
  um card de texto mais "gordo".

Os dois funcionam juntos ou separados.

### Card só de texto

Deixe `imagem: ""`. O card vira só título (+ rodapé, se tiver).

### Adicionar uma rede social

Copie um bloco `{ ... }` dentro de `redes: [ ]`:

```js
{
  icone:  "linkedin",
  rotulo: "Me siga no LinkedIn",
  link:   "https://linkedin.com/company/lumina",
  cor:    "#0A66C2",
},
```

Ícones prontos: `instagram` `youtube` `tiktok` `whatsapp` `linkedin`
`facebook` `x` `telegram` `spotify` `github` `email` `site` `link`

`cor` é a cor do ícone ao passar o mouse. Deixe `""` para usar o ciano da Lumina.
Para esconder a linha de redes inteira, deixe `redes: []`.

### Trocar a foto da marca

Coloque o arquivo em `assets/` e aponte em `config.js`:

```js
marca: {
  foto:        "assets/logo-lumina.png",
  tamanhoFoto: 110,        // diâmetro do círculo, em px
  fundoFoto:   "#FFFFFF",  // cor do "prato" atrás da logo
  respiroFoto: 12,         // espaço entre a borda do círculo e a logo
  ...
}
```

- **Logo com fundo transparente** (PNG/SVG): deixe `fundoFoto: "#FFFFFF"`.
  O prato branco é o que dá o visual clean.
- **Foto de rosto**: use `fundoFoto: "transparent"` e `respiroFoto: 0`,
  assim a foto preenche o círculo inteiro.
- Logo apertada no círculo? aumente `respiroFoto`. Perdida no meio? diminua.

Imagem quadrada funciona melhor — ela é recortada em círculo.

---

## Trocar imagens de capa dos cards

Coloque os arquivos em `assets/cards/` e aponte em `config.js`.

Proporção recomendada: **16:9** (ex.: 800×450). `assets/cards/site.svg` é um
placeholder — substitua pela imagem real.

---

## Publicar

É um site estático. Suba os arquivos em qualquer lugar:

- **Netlify / Vercel / Cloudflare Pages** — arraste a pasta inteira
- **GitHub Pages** — commit + ativa Pages
- **Hospedagem comum (cPanel/FTP)** — suba tudo para a pasta pública

Não há passo de build.

---

## Testar localmente

Duplo clique em `index.html` funciona. Se preferir servidor local:

```bash
npx --yes serve .
```

---

## Design tokens — Lumina UI Kit v2 · Light

Definidos em `:root` no topo de `style.css`, amostrados do `Lumina Design System.pdf`.
Detalhes e método em [docs/referencia/DESIGN-SYSTEM.md](docs/referencia/DESIGN-SYSTEM.md).

| Token | Valor | Uso |
|---|---|---|
| `--primary-100` | `#A6E2FB` | tints e brilhos |
| `--primary-300` | `#33BEF4` | início do gradiente, borda de hover |
| `--primary` | `#0EA5E9` | **ciano primário** |
| `--blue` | `#0A84FF` | fim do gradiente |
| `--blue-deep` | `#00489B` | degrau mais profundo |
| `--bg` | `#F8FCFF` | fundo da página |
| `--bg-tint` | `#EFF8FE` | bloom claro |
| `--surface` | `#FFFFFF` | cards e painel |
| `--border` / `--border-2` | `#E3EEF6` / `#CFE3EF` | bordas |
| `--text` | `#0B1F2E` | títulos |
| `--text-2` | `#39566B` | corpo e subtítulos |
| `--text-3` | `#9DB4C4` | micro-labels em caixa alta |

Fontes: **Space Grotesk** (título da marca) e **Inter** (todo o resto). Só duas.

Para mudar o formato, mexa em `--panel-max`, `--panel-radius`, `--card-radius`.
Para mexer na elevação, em `--sh-card`, `--sh-card-hover`, `--sh-panel`.

### Card em destaque

`destaque: true` num card pinta ele com o gradiente ciano→azul da marca e texto branco —
o mesmo tratamento do botão principal da plataforma. Use em **no máximo um card**: ele
existe justamente para se sobressair aos outros.

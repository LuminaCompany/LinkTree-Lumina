# Lumina UI Kit v2 · Light — tokens

Fonte: `Lumina Design System.pdf` (Plataforma Lumina, branding claro de julho/2026),
fornecido pelo usuário em 2026-09-09.

Os valores abaixo foram **amostrados pixel a pixel** do PDF rasterizado, não estimados.
Método: PDF aberto no Chrome via `agent-browser`, screenshot da capa, leitura dos pixels
com `sharp`. Para texto, foi tomado o pixel de menor luminância de cada região — o
anti-aliasing só clareia, então o mínimo é a cor real do glifo.

---

## Rampa primária

A barra de cores no rodapé da capa é a paleta oficial, em ordem:

| # | Hex | Uso nesta página |
|---|---|---|
| 1 | `#A6E2FB` | tints, brilho do shimmer, wash de hover das redes |
| 2 | `#33BEF4` | início do gradiente, borda de hover dos cards |
| 3 | **`#0EA5E9`** | **primária** — declarada no PDF ("PRIMÁRIA · Ciano #0EA5E9") |
| 4 | `#0A84FF` | fim do gradiente |
| 5 | `#00489B` | degrau mais profundo (não usado nesta página) |

O valor declarado no PDF e o amostrado no swatch 3 batem exatamente.

## Superfícies

| Hex | Onde foi amostrado |
|---|---|
| `#FFFFFF` | base da capa |
| `#F8FCFF` | canto superior direito da capa |
| `#EFF8FE` | topo da capa (bloom claro) |

## Texto

| Hex | Amostrado em |
|---|---|
| `#0B1F2E` | H1 "Plataforma Lumina", wordmark, valores da ficha |
| `#39566B` | parágrafo de corpo |
| `#9DB4C4` | micro-label "VERSÃO" (caixa alta, espaçada) |

## Tipografia

Declarada no PDF: **Space Grotesk · Inter**. Duas famílias, sem terceira.

- Space Grotesk — títulos ("Plataforma Lumina", "Bem-vindo de volta", "Dashboard"),
  numerais de KPI. Nesta página: só o título da marca.
- Inter — todo o resto: corpo, títulos de card, subtítulos, labels.

## Padrões lidos das telas

- **Card**: branco, borda hairline, raio ~16px, sombra difusa e suave.
- **Painel/hero**: card branco elevado sobre fundo radial claro (tela 01, Login).
- **Botão primário**: gradiente ciano→azul, texto branco, raio ~10px.
  Reproduzido aqui como o card `destaque`.
- **Foco**: anel ciano em volta do campo (tela 01).
- **Micro-labels**: caixa alta, espaçamento largo, `#9DB4C4` ("E-MAIL", "MENU PRINCIPAL").
- **Eyebrow de seção**: caixa alta em ciano `#0EA5E9` ("TELA 01").

## O que NÃO é este design system

Dois arquivos em disco descrevem um sistema **dark** da Lumina e foram usados por engano
numa versão anterior desta página:

- `../../../LuminaHub/DESIGN.md` — Void-and-Signal: fundo `#080B0C`, ciano `#00EAFF`,
  Orbitron + Inter + JetBrains Mono. É o design system do **LuminaHub**, o dashboard
  operacional interno.
- `../../../Landing Page Lumina Company` — mesma paleta escura.

São sistemas diferentes. Para esta página vale o UI Kit v2 · Light.

## Não amostrado

Estados de status (verde "Ativo", vermelho de variação negativa, âmbar dos badges de
tempo) aparecem nas telas 02–05 mas não foram amostrados: o visualizador de PDF do
Chrome não rola por CDP, e esta página não usa nenhum deles. Se forem necessários um dia,
rasterize as páginas 3 a 6 e amostre antes de adotar qualquer hex.

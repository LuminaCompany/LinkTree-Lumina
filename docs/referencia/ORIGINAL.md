# Referência do clone

Fonte: `https://link.astrevo.com.br/` (página do Erick Castilio), capturada em 2026-09-09.
Página estática, sem build e sem JavaScript — o CSS inteiro estava inline no `<head>`,
então todos os valores abaixo são o código-fonte original, não medições aproximadas.

**O que foi clonado:** estrutura, geometria e interações.
**O que NÃO foi copiado:** marca, textos, cores, tipografia, elevação, avatar e imagens.
Tudo isso vem do Lumina UI Kit v2 · Light — ver `DESIGN-SYSTEM.md`.

---

## Estrutura e interação — mantidos do original

| Propriedade | Original | Clone Lumina | Bate? |
|---|---|---|---|
| Painel `max-width` | `450px` | `450px` | ✓ |
| Painel `padding` | `2.5rem 2rem` (40×32px) | `40px 32px` | ✓ |
| Painel `gap` | `1.5rem` (24px) | `24px` | ✓ |
| Avatar | `110px`, círculo | `110px`, círculo | ✓ |
| Capa do card | `height: 150px`, `background-size: cover` | idem (configurável) | ✓ |
| Card hover | `translateY(-3px)` | `translateY(-3px)` | ✓ |
| Capa hover | `scale(1.05)`, `transition .5s` | idem | ✓ |
| Social hover | `translateY(-3px)` | `translateY(-3px)` | ✓ |
| Shimmer | `::after` 50%w, `skewX(-20deg)`, `left -100% → 150%`, `.5s` | idem | ✓ |
| Entrada do painel | `fadeIn 1s ease-out` (opacity + translateY 20px) | idem | ✓ |
| Easing | `cubic-bezier(.25,.8,.25,1)` 0.3s | idem | ✓ |
| Breakpoint mobile | `480px` | `480px` | ✓ |

## Marca — trocada por completo

| Item | Original | Clone Lumina | Por quê |
|---|---|---|---|
| Fundo | gradiente azul escuro (`#4B7CE8` → preto) | hero radial claro `#EFF8FE` → `#FFFFFF` | Tela 01 do UI Kit ("Hero radial claro") |
| Painel | vidro escuro sobre fundo azul | card branco elevado, `rgba(255,255,255,.86)` + blur 18px | "card branco elevado" do UI Kit |
| Fonte | Outfit | Space Grotesk (título) + Inter (resto) | Declarado no PDF |
| Texto | `#FFFFFF` / `rgba(255,255,255,.7)` | `#0B1F2E` / `#39566B` / `#9DB4C4` | Amostrado do PDF |
| Acento | — | `#0EA5E9` | Primária declarada no PDF |
| Painel `radius` | `32px` | `24px` | Escala de raio do UI Kit |
| Card `radius` | `20px` | `16px` | Escala de raio do UI Kit |
| Elevação | `0 20px 40px rgba(0,0,0,.4)` | sombras difusas tingidas de azul | Elevação suave do UI Kit |
| Card primário | não existe | `destaque: true` → gradiente `#33BEF4→#0A84FF`, texto branco | Botão "Entrar na plataforma" do UI Kit |
| Ícones sociais | FontAwesome via CDN | SVG inline | Sem dependência externa, nítido em qualquer DPI |
| Conteúdo | fixo no HTML | dirigido por `config.js` | Pedido do usuário |

---

## Comportamento

Nenhum. A página original não tem JavaScript, scroll listener, IntersectionObserver,
troca de abas nem carrossel. Tudo é CSS: uma animação de entrada e transições de hover.
O clone segue igual — o único JS é o que monta o DOM a partir do `config.js`.

## Histórico de correção de branding

A primeira versão desta página usou o design system **errado**: o dark
(`../../../LuminaHub/DESIGN.md` — Void-and-Signal, `#080B0C`, `#00EAFF`, Orbitron),
encontrado em disco na ausência de acesso ao Claude Design. O usuário forneceu o
`Lumina Design System.pdf` correto (UI Kit v2 · Light) e a página foi refeita:
paleta, tipografia, elevação, raios e fundo, todos trocados. Ver `DESIGN-SYSTEM.md`.

## Screenshots do clone

- `clone-desktop-1440.png` — 1440px
- `clone-mobile-390.png` — 390px

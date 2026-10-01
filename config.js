/* ============================================================================
   LINKTREE LUMINA — ARQUIVO DE CONFIGURAÇÃO
   ----------------------------------------------------------------------------
   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR.
   Salve e recarregue a página (F5). Não precisa compilar nada.

   Regras rápidas:
   - Texto sempre entre aspas:  "assim"
   - Números sem aspas:         150
   - Cada item termina com vírgula
   - Para desativar um campo, deixe "" (texto vazio) ou apague a linha
   ============================================================================ */

const CONFIG = {

  /* ==========================================================================
     1) PÁGINA — aba do navegador
     ========================================================================== */
  pagina: {
    titulo:    "Lumina — Links",                                  // nome na aba do navegador
    descricao: "Lumina — IA que atende, qualifica e converte 24/7.", // descrição p/ WhatsApp e Google
    favicon:   "assets/logo-lumina.png",                                 // ícone da aba
  },


  /* ==========================================================================
     2) MARCA — foto, título e rodapé da foto (topo do card)
     ========================================================================== */
  marca: {
    // Foto/logo da marca. Coloque o arquivo em assets/ e aponte aqui.
    // Também aceita link externo: "https://site.com/foto.png"
    // PNG com fundo transparente funciona melhor junto com fundoFoto abaixo.
    foto: "assets/logo-lumina.png",

    // Tamanho da foto em pixels (o círculo). Original: 110
    tamanhoFoto: 110,

    // COR DE FUNDO atrás da foto (o "prato" do círculo).
    // "#FFFFFF" = branco, visual clean para logo transparente
    // "#EFF8FE" = azul bem clarinho da marca
    // "transparent" = sem prato, a foto flutua sobre o card
    fundoFoto: "#FFFFFF",

    // RESPIRO — espaço em px entre a borda do círculo e a logo.
    // Logo grande demais no círculo? aumente. Pequena demais? diminua.
    // 0 = a foto encosta na borda (use para foto de rosto)
    respiroFoto: 12,

    // TÍTULO da marca (nome grande, fonte Space Grotesk)
    titulo: "Lumina",

    // RODAPÉ DA FOTO (a linha menor logo abaixo do título)
    rodapeFoto: "Inteligência artificial que atende, qualifica e converte 24/7",
  },


  /* ==========================================================================
     3) REDES SOCIAIS — a linha de ícones no topo
     --------------------------------------------------------------------------
     Para ADICIONAR: copie um bloco { ... }, cole abaixo e edite.
     Para REMOVER:   apague o bloco { ... } inteiro.
     Para ESCONDER a linha toda: deixe  redes: []

     icone — nomes disponíveis:
       "instagram"  "youtube"   "tiktok"    "whatsapp"  "linkedin"
       "facebook"   "x"         "telegram"  "spotify"   "github"
       "email"      "site"      "link"

     cor — cor do ícone no hover. Deixe "" para usar o ciano da Lumina.
     ========================================================================== */
  redes: [
    {
      icone:  "instagram",
      rotulo: "Me siga no Instagram",          // legenda pequena embaixo do ícone
      link:   "https://www.instagram.com/luminacompanyia/",
      cor:    "#E1306C",
    },
  ],


  /* ==========================================================================
     4) CARDS — os botões grandes de link
     --------------------------------------------------------------------------
     Para ADICIONAR um card: copie um bloco { ... }, cole no fim da lista, edite.
     Para REORDENAR: mova o bloco { ... } de lugar. A ordem aqui = ordem na tela.
     Para REMOVER:   apague o bloco { ... } inteiro.

     CAMPOS DE CADA CARD:
       titulo        Texto principal (obrigatório)
       rodape        Linha menor embaixo do título. "" = sem rodapé
       iconeRodape   Ícone antes do rodapé: "link", "whatsapp", "email",
                     "instagram", "site"...  ou "" para nenhum
       imagem        Caminho da imagem de capa. "" = card só de texto
       alturaImagem  ALTURA VERTICAL da imagem de capa, em pixels (padrão 150)
                     Ex.: 110 = capa baixinha | 150 = padrão | 260 = capa alta
       alturaMinima  ALTURA VERTICAL MÍNIMA DO CARD INTEIRO, em pixels
                     0 = o card se ajusta ao conteúdo (comportamento padrão)
                     Ex.: 120 deixa um card de texto mais "gordo"
       link          Para onde o card leva (obrigatório)
       novaAba       true = abre em nova aba (padrão) | false = abre na mesma
       destaque      true = card pintado com o gradiente ciano→azul da Lumina,
                     texto branco (o mesmo do botão "Entrar na plataforma").
                     Use em NO MÁXIMO UM card — é a ação principal da página.
                     false ou ausente = card branco normal
     ========================================================================== */
  cards: [

    // ── Card EM DESTAQUE (gradiente da marca) ────────────────────────────────
    {
      titulo:       "Fale com um especialista agora",
      rodape:       "(atendimento imediato)",
      iconeRodape:  "whatsapp",
      imagem:       "",
      alturaImagem: 150,
      alturaMinima: 0,
      link:         "https://api.whatsapp.com/send/?phone=5531910007335&text=Ol%C3%A1%21+Quero+falar+com+a+Lumina.",
      novaAba:      true,
      destaque:     true,
    },

    // ── Card SÓ TEXTO, sem rodapé ────────────────────────────────────────────
    {
      titulo:       "Comunidade gratuita no WhatsApp",
      rodape:       "",
      iconeRodape:  "",
      imagem:       "",
      alturaImagem: 150,
      alturaMinima: 0,
      link:         "https://chat.whatsapp.com/EPPt9PzRmloDbTzfNPvJY7",
      novaAba:      true,
      destaque:     false,
    },

    /* ── MODELO PARA COPIAR — apague as barras // do começo das linhas ──────
    {
      titulo:       "Título do novo card",
      rodape:       "linha de baixo",
      iconeRodape:  "link",
      imagem:       "assets/cards/nova-imagem.png",
      alturaImagem: 150,
      alturaMinima: 0,
      link:         "https://exemplo.com",
      novaAba:      true,
      destaque:     false,
    },
    ──────────────────────────────────────────────────────────────────────── */

  ],


  /* ==========================================================================
     5) RODAPÉ DA PÁGINA — texto pequeno no fim do card. "" = escondido
     ========================================================================== */
  rodapePagina: {
    texto: "© Lumina",
    link:  "https://lumina.com.br",   // "" = texto sem link
  },

};

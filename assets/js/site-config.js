// ============================================================================
// GARCIA COSTA — CONFIGURAÇÃO CENTRAL DE AMBIENTE (produção)
// Fonte única de verdade para todo dado dependente de ambiente/institucional.
// ============================================================================

window.SITE_CONFIG = {
  domain: 'https://garciacostaadv.com.br',

  // Imagem de compartilhamento (og:image / twitter:image), 1200 × 630 px,
  // com o croqui assinatura do escritório.
  ogImagePath: '/assets/images/og-image.png',

  site: {
    name: 'Garcia Costa',
    legalName: 'Garcia Costa Advocacia e Assessoria Estratégica',
    copyright:
      '© 2026 Garcia Costa Advocacia e Assessoria Estratégica. Todos os direitos reservados.',
  },

  contact: {
    // E-mail institucional principal
    email: 'contato@garciacostaadv.com.br',

    // E-mail profissional do Thiago
    thiagoEmail: 'thiago@garciacostaadv.com.br',

    // Telefone exibido no site
    phoneDisplay: '+55 (61) 99343-9877',

    // O clique abrirá uma conversa no WhatsApp
    phoneHref: 'https://wa.me/5561993439877',

    whatsappHref: 'https://wa.me/5561993439877',

    // Como não há sede física aberta ao público, esta formulação é mais segura
    addressLine:
      'Atendimento presencial em Brasília e virtual em todo o Brasil, mediante agendamento.',

    city: 'Brasília/DF',
  },

  social: {
    // Enquanto não houver uma página institucional, permanece oculto
    linkedin: null,
  },

  legal: {
    cnpj: '67.986.544/0001-45',
    dpoContact: 'contato@garciacostaadv.com.br',
    oab: 'OAB/DF 53.039',
  },
};
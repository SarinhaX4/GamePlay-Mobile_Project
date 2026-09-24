/**
 * user.js
 *
 * Dados do usuário logado. Como o app não tem login de verdade,
 * os dados ficam fixos aqui.
 *
 * Por que um arquivo separado?
 * O meu nome e a minha foto aparecem em mais de uma tela
 * (crédito no Login, "Olá, Sara" na Home, lista de jogadores nos Detalhes).
 * Com os dados em um lugar só, se eu quiser mudar, mudo aqui e todas as telas mudam.
 * É a mesma ideia do theme.js, só que para dados em vez de estilo.
 */

export const user = {
  name: 'Sara',
  status: 'Hoje é dia de vitória', // frase que aparece embaixo do "Olá" na Home

  // Minha foto: IMAGEM LOCAL, com require (slide 40).
  // Nome simples, sem espaço e sem parênteses, para evitar erro no require.
  avatar: require('../../assets/avatar.png'),
};

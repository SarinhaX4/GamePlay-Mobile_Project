// dados do user logado, fixo pq nao tem login de verdade
// separei num arquivo só pq meu nome/foto aparece em varias tela (login, home, detalhes)
// muda aqui e muda em todo lugar, mesma ideia do theme.js mas pra dado

export const user = {
  name: 'Sara',
  status: 'Hoje é dia de vitória', // frase debaixo do ola na home

  avatar: require('../../assets/avatar.png'), // local, nome sem espaço pra nao dar erro no require
};
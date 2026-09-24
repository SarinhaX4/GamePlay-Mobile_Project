/**
 * members.js
 *
 * Os jogadores que aparecem na tela de Detalhes. Dados fictícios.
 *
 * Repare que as fotos misturam os dois tipos de imagem (slide 40):
 *   - a minha é LOCAL (vem do user.js, com require)
 *   - as dos outros são REMOTAS (objeto com uri, fotos de perfil do GitHub)
 * O componente Avatar funciona com as duas, porque só repassa o source.
 *
 * status: 'online' = Disponível (verde) / 'offline' = Ocupado (rosa)
 */

import { user } from './user';

export const members = [
  {
    id: '1',
    username: user.name, // eu mesma, como anfitriã
    avatar: user.avatar,
    status: 'online',
  },
  {
    id: '2',
    username: 'Diego',
    avatar: { uri: 'https://github.com/diego3g.png' },
    status: 'online',
  },
  {
    id: '3',
    username: 'Mayk',
    avatar: { uri: 'https://github.com/maykbrito.png' },
    status: 'offline',
  },
];

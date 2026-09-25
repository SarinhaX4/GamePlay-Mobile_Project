import { user } from './user';

// fotos misturam local (a minha, do user.js) com remota (uri do github)
// avatar aceita os dois pq so repassa o source
// status online = disponivel verde, offline = ocupado rosa

export const members = [
  {
    id: '1',
    username: user.name, // eu mesma
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
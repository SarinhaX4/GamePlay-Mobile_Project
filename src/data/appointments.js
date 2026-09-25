// partidas fixas que aparecem na home, dados fake pq nao tem back
// copiei os valor do figma

// category liga com o id la de categories.js
// owner: true = sou anfitriao, false = visitante

export const appointments = [
  {
    id: '1',
    guildName: 'Lendários',
    game: 'League of Legends',
    image: require('../../assets/games/lol.png'),
    category: '1',
    date: '18/06 às 21:00h',
    owner: true,
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '2',
    guildName: 'Yeah, boy',
    game: 'Red Dead Redemption 2',
    image: require('../../assets/games/rdr.png'),
    category: '3',
    date: '23/06 às 19:00h',
    owner: false,
    description: 'Noite de faroeste com a galera, sem pressa e sem regras',
  },
  {
    id: '3',
    guildName: 'Rumo ao topo',
    game: 'Counter Strike: Global Offensive',
    image: require('../../assets/games/csgo.png'),
    category: '2',
    date: '20/06 às 09:00h',
    owner: true,
    description: 'Duelo 1x1 valendo a honra do servidor',
  },
  {
    id: '4',
    guildName: 'Bora queimar tudo',
    game: 'Apex Legends',
    image: require('../../assets/games/apex.png'),
    category: '1',
    date: '20/06 às 14:20h',
    owner: true,
    description: 'Ranqueada em trio, foco total no top 1',
  },
  {
    id: '5',
    guildName: 'Valorosos',
    game: 'Valorant',
    image: require('../../assets/games/valorant.png'),
    category: '3',
    date: '18/06 às 21:00h',
    owner: true,
    description: 'Partida de diversão para testar agentes novos',
  },
];
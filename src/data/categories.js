/**
 * categories.js
 *
 * As categorias de partida. Ficam em um array para que a lista
 * seja desenhada com .map() (em vez de escrever 4 componentes na mão).
 *
 * Cada categoria tem:
 *   id    -> identificador único (usado como key e para saber qual está selecionada)
 *   title -> texto do card
 *   icon  -> nome de um ícone do MaterialCommunityIcons (@expo/vector-icons)
 *
 * NOTA: no Figma os ícones são imagens coloridas. Troquei por ícones do
 * @expo/vector-icons porque eles aceitam cor por prop, e assim seguem
 * a paleta roxa do app (e não precisei exportar imagens).
 */

export const categories = [
  { id: '1', title: 'Ranqueada', icon: 'trophy' },
  { id: '2', title: 'Duelo 1x1', icon: 'sword-cross' },
  { id: '3', title: 'Diversão', icon: 'emoticon-happy-outline' },
  { id: '4', title: 'Treino', icon: 'target' },
];

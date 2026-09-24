/**
 * Background.js
 *
 * Todas as telas do Figma têm o mesmo fundo escuro (no nosso app, roxo).
 * Em vez de repetir { flex: 1, backgroundColor: '#0E1647' } em cada tela,
 * criei um componente que "embrulha" o conteúdo da tela.
 *
 * CONCEITO DA AULA: children (slide 17)
 * Tudo que eu escrever entre <Background> e </Background>
 * chega aqui automaticamente pela prop "children".
 *
 * Exemplo de uso:
 *   <Background>
 *     <Text>Qualquer coisa</Text>   <- isso é o children
 *   </Background>
 *
 * NOTA: no Figma o fundo é um degradê (azul-escuro até um tom mais escuro).
 * Usei cor sólida porque a diferença é quase invisível e degradê
 * exigiria instalar uma biblioteca a mais (expo-linear-gradient).
 */

import { StyleSheet, View } from 'react-native';
import { theme } from '../theme';

export default function Background({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa a tela inteira (slide 35)
    backgroundColor: theme.colors.background,
  },
});

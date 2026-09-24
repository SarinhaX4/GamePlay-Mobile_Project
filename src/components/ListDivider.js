/**
 * ListDivider.js
 *
 * A linha fininha que separa os itens de uma lista.
 * No Figma ela não vai de ponta a ponta: começa depois da imagem.
 * Por isso uso alignSelf: 'flex-end' com largura de 78%.
 */

import { StyleSheet, View } from 'react-native';
import { theme } from '../theme';

export default function ListDivider() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: '78%',
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: 16,
    alignSelf: 'flex-end', // só esta linha vai para a direita (slide 36)
  },
});

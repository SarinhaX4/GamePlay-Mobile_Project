import { StyleSheet, View } from 'react-native';
import { theme } from '../theme';

// linha fina que separa item de lista, no figma nao vai de ponta a ponta
// entao usei flex-end com 78% pra comecar depois da imagem

export default function ListDivider() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: '78%',
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: 16,
    alignSelf: 'flex-end',
  },
});
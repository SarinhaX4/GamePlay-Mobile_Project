import { StyleSheet, View } from 'react-native';
import { theme } from '../theme';

// fundo escuro repete em toda tela, entao fiz um componente que embrulha
// usa children, tudo que eu botar dentro de <Background> cai aqui

// no figma o fundo era degrade, usei cor solida pq a diferenca é quase nula
// e ia precisar instalar expo-linear-gradient só pra isso

export default function Background({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa a tela toda
    backgroundColor: theme.colors.background,
  },
});
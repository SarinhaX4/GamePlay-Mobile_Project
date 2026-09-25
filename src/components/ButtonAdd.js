import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';

// botao quadrado com + da home, leva pro agendar
// nao reaproveitei o Button pq ele é largo com texto, esse é só icone
// ia encher o Button de condicao, mais facil separar

export default function ButtonAdd({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <MaterialCommunityIcons name="plus" size={24} color={theme.colors.heading} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    justifyContent: 'center', // centraliza o +
    alignItems: 'center',
  },
});
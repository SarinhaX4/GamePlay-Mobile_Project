/**
 * ButtonAdd.js
 *
 * O botão quadrado com "+" no canto da Home, que leva para "Agendar".
 *
 * Por que não reaproveitei o Button?
 * O Button é largo, com texto e ícone opcional. Este é um quadrado de 48x48
 * só com ícone. Forçar os dois no mesmo componente encheria o Button
 * de condições. Componentes diferentes para coisas diferentes.
 *
 * @param {function} onPress - função disparada no toque
 */

import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';

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
    justifyContent: 'center', // centraliza o "+" na vertical
    alignItems: 'center', // e na horizontal (slide 34)
  },
});

/**
 * ListHeader.js
 *
 * O título de uma lista com um contador à direita:
 *
 *   Partidas agendadas              Total 5
 *
 * Aparece na Home ("Partidas agendadas") e nos Detalhes ("Jogadores").
 *
 * @param {string} title    - texto da esquerda
 * @param {string} subtitle - texto da direita
 */

import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';

export default function ListHeader({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', // um em cada ponta (slide 32)
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.body,
  },
});

/**
 * TextArea.js
 *
 * O campo grande de várias linhas da descrição (tela Agendar).
 * Também é CONTROLADO: o texto mora no estado da tela.
 *
 * @param {string}   value        - texto atual
 * @param {function} onChangeText - função chamada a cada caractere
 * @param {number}   maxLength    - limite de caracteres
 */

import { StyleSheet, TextInput } from 'react-native';
import { theme } from '../theme';

export default function TextArea({ value, onChangeText, maxLength = 100 }) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      multiline // permite várias linhas (slide 61)
      maxLength={maxLength}
      // No Android, sem isso o texto começa no MEIO da caixa. Com 'top', começa em cima.
      textAlignVertical="top"
      selectionColor={theme.colors.primary}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 95, // altura do Figma
    backgroundColor: theme.colors.shape,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 16,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.heading,
  },
});
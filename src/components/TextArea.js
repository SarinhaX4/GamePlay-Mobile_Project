import { StyleSheet, TextInput } from 'react-native';
import { theme } from '../theme';

// campo grande da descricao, tela agendar, tambem controlado

export default function TextArea({ value, onChangeText, maxLength = 100 }) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      multiline
      maxLength={maxLength}
      textAlignVertical="top" // sem isso no android o texto comeca no meio
      selectionColor={theme.colors.primary}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 95, // altura do figma
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
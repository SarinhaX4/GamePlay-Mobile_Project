import { StyleSheet, TextInput } from 'react-native';
import { theme } from '../theme';

// campinho quadrado de 2 digito, usa 4x na tela agendar (dia, mes, hora, minuto)
// controlado, quem guarda o valor é a tela

export default function SmallInput({ value, onChangeText, placeholder }) {
  // teclado numerico nao impede colar letra, entao limpo aqui
  function handleChange(text) {
    onChangeText(text.replace(/[^0-9]/g, ''));
  }

  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={handleChange}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.body}
      keyboardType="numeric"
      maxLength={2}
      selectionColor={theme.colors.primary}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 48, // medida do figma
    height: 48,
    backgroundColor: theme.colors.shape,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
    textAlign: 'center',
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.heading,
  },
});
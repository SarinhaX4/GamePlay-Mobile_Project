/**
 * SmallInput.js
 *
 * O campinho quadrado de 2 dígitos da tela Agendar (dia, mês, hora, minuto).
 * São 4 campos iguais, então virou componente: escrevo o estilo uma vez.
 *
 * Ele é um TextInput CONTROLADO (slide 60): quem guarda o valor é a tela.
 * O campo só mostra o value que recebe e avisa cada mudança pelo onChangeText.
 *
 * @param {string}   value        - o texto atual do campo (vem do estado da tela)
 * @param {function} onChangeText - função chamada a cada caractere digitado
 * @param {string}   placeholder  - dica quando está vazio (ex: "DD")
 *
 * @example
 * <SmallInput value={day} onChangeText={setDay} placeholder="DD" />
 */

import { StyleSheet, TextInput } from 'react-native';
import { theme } from '../theme';

export default function SmallInput({ value, onChangeText, placeholder }) {
  // O teclado numérico não impede COLAR letras.
  // Então limpo o texto: .replace troca tudo que NÃO é número (0 a 9) por nada.
  // onChangeText entrega o TEXTO direto, não um evento (slide 59).
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
      keyboardType="numeric" // abre o teclado de números (slide 62)
      maxLength={2} // no máximo 2 dígitos
      selectionColor={theme.colors.primary} // cor do cursor (slide 63)
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 48, // medidas do Figma
    height: 48,
    backgroundColor: theme.colors.shape,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
    textAlign: 'center', // número no meio do quadrado
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.heading,
  },
});
/**
 * Category.js
 *
 * UM card de categoria (Ranqueada, Duelo 1x1...).
 * Ele NÃO tem estado: quem sabe qual categoria está selecionada é a TELA.
 * O card só recebe "checked" pronto e avisa pelo onPress quando é tocado.
 * Isso é a ELEVAÇÃO DE ESTADO do slide 54: dados descem por props,
 * eventos sobem por funções.
 *
 * @param {string}   title       - nome da categoria
 * @param {string}   icon        - nome do ícone (MaterialCommunityIcons)
 * @param {boolean}  checked     - se o card está "aceso" (selecionado)
 * @param {boolean}  hasCheckBox - mostra o quadradinho no canto (só na tela Agendar)
 * @param {function} onPress     - função disparada no toque
 *
 * @example
 * <Category title="Ranqueada" icon="trophy" checked={true} hasCheckBox onPress={fn} />
 */

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';

// hasCheckBox = false é VALOR PADRÃO (slide 13): na Home eu nem passo essa prop
export default function Category({ title, icon, checked, hasCheckBox = false, onPress }) {
  return (
    <TouchableOpacity
      // ESTILO CONDICIONAL (slide 28): selecionado = opaco; não selecionado = apagado.
      // É o comportamento que o Figma mostra na tela "Agendar - Servidor selecionado".
      style={[styles.container, { opacity: checked ? 1 : 0.5 }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* O quadradinho só existe se hasCheckBox for true */}
      {hasCheckBox && (
        // Operador ternário escolhe QUAL estilo usar: rosa preenchido ou só a borda
        <View style={checked ? styles.checked : styles.check} />
      )}

      <MaterialCommunityIcons name={icon} size={48} color={theme.colors.primary} />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 104, // medidas do Figma
    height: 120,
    backgroundColor: theme.colors.shape,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 16,
    fontFamily: theme.fonts.title700,
    fontSize: 15,
    color: theme.colors.heading,
  },
  // Os dois estilos do quadradinho. position: 'absolute' tira ele do
  // fluxo do Flexbox e deixa eu colocar no canto com top/right.
  check: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 2,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  checked: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 2,
    backgroundColor: theme.colors.primary,
  },
});

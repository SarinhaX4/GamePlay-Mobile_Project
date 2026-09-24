/**
 * GuildIcon.js
 *
 * A capa do jogo com cantos arredondados (64x68 no Figma).
 * Usada na lista da Home e, na Parte 4, no card do servidor da tela Agendar.
 *
 * @param {number} image - imagem LOCAL já carregada com require
 *                         (require devolve um número que identifica o arquivo)
 */

import { Image, StyleSheet, View } from 'react-native';
import { theme } from '../theme';

export default function GuildIcon({ image }) {
  return (
    <View style={styles.container}>
      {/* Imagem local: source recebe direto o resultado do require (slide 40) */}
      <Image source={image} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 68,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden', // corta a imagem nos cantos arredondados
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

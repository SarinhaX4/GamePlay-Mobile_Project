/**
 * Avatar.js
 *
 * A foto quadrada com cantos arredondados e borda.
 * Aparece na Home (meu perfil) e nos Detalhes (lista de jogadores).
 * Por aparecer em mais de um lugar, virou componente.
 *
 * Ele aceita os DOIS tipos de imagem do slide 40, porque recebe o
 * "source" pronto e só repassa para o <Image>:
 *   - local:  <Avatar source={require('../../assets/avatar.png')} />
 *   - remota: <Avatar source={{ uri: link_da_imagem }} />
 *
 * @param {number|object} source - imagem local (require) ou remota ({ uri })
 */

import { Image, StyleSheet, View } from 'react-native';
import { theme } from '../theme';

export default function Avatar({ source }) {
  return (
    <View style={styles.container}>
      {/*
        width e height SEMPRE definidos no estilo:
        obrigatório para imagem remota (senão fica com altura zero, slide 41)
        e deixa a imagem local do mesmo tamanho que a remota.
      */}
      <Image source={source} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden', // corta a foto para respeitar os cantos arredondados (slide 30)
    marginRight: 20,
  },
  avatar: {
    width: 48,
    height: 48,
  },
});
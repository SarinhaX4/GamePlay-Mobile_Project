/**
 * Member.js
 *
 * UM jogador da lista da tela de Detalhes:
 *
 *   [foto]  Diego
 *           (o) Disponível
 *
 * @param {object} data - um objeto do members.js
 */

import { StyleSheet, Text, View } from 'react-native';

import Avatar from './Avatar';
import { theme } from '../theme';

export default function Member({ data }) {
  // Uma variável booleana deixa o JSX mais fácil de ler
  const isOnline = data.status === 'online';

  return (
    <View style={styles.container}>
      {/* Reuso do Avatar da Home: ele aceita imagem local e remota */}
      <Avatar source={data.avatar} />

      <View>
        <Text style={styles.name}>{data.username}</Text>

        <View style={styles.status}>
          {/*
            A bolinha: uma View de 8x8 com borderRadius 4 (metade do tamanho)
            vira um círculo. A cor muda conforme o status: ESTILO CONDICIONAL
            dentro de um ARRAY DE ESTILOS (slides 26 e 28).
          */}
          <View
            style={[
              styles.bullet,
              { backgroundColor: isOnline ? theme.colors.on : theme.colors.primary },
            ]}
          />
          <Text style={styles.statusText}>{isOnline ? 'Disponível' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4, // metade da largura = círculo
  },
  statusText: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.body,
  },
});

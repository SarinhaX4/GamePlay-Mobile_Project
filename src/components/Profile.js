/**
 * Profile.js
 *
 * O cabeçalho da Home: foto + "Olá, Sara" + frase de status.
 *
 *   [foto]  Olá, Sara
 *           Hoje é dia de vitória
 *
 * A FOTO É TOCÁVEL: tocar nela chama onAvatarPress.
 * A Home usa isso para perguntar se a pessoa quer sair (logout).
 * (No app original do NLW, o logout também fica no toque do avatar.)
 *
 * @param {function} onAvatarPress - função disparada ao tocar na foto
 */

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Avatar from './Avatar';
import { theme } from '../theme';
import { user } from '../data/user';

export default function Profile({ onAvatarPress }) {
  return (
    // flexDirection row: foto e textos lado a lado (slide 31)
    <View style={styles.container}>
      {/*
        O Avatar não sabe tocar: ele só desenha a foto.
        Então EMBRULHO ele num TouchableOpacity, que dá o toque e o
        efeito de transparência. Assim o Avatar continua simples e
        pode ser reutilizado nos Detalhes, onde a foto não é tocável.
      */}
      <TouchableOpacity onPress={onAvatarPress} activeOpacity={0.7}>
        <Avatar source={user.avatar} />
      </TouchableOpacity>

      <View>
        {/*
          TEXT DENTRO DE TEXT (slide 29):
          "Olá," usa a fonte Medium (styles.greeting)
          e o nome usa a Bold. O <Text> de dentro herda o tamanho (24)
          e a cor do de fora, e só troca a fonte.
          É exatamente o que o Figma faz: "Olá," fino e "Sara" em negrito.
        */}
        <Text style={styles.greeting}>
          Olá, <Text style={styles.username}>{user.name}</Text>
        </Text>

        <Text style={styles.message}>{user.status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center', // foto e textos alinhados no meio (vertical)
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
  },
  username: {
    fontFamily: theme.fonts.title700,
  },
  message: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.body,
  },
});
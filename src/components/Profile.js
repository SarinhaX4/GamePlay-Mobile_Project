/**
 * Profile.js
 *
 * O cabeçalho da Home: foto + "Olá, Sara" + frase de status.
 *
 *   [foto]  Olá, Sara
 *           Hoje é dia de vitória
 *
 * Ele não recebe props: pega os dados direto do user.js.
 */

import { StyleSheet, Text, View } from 'react-native';

import Avatar from './Avatar';
import { theme } from '../theme';
import { user } from '../data/user';

export default function Profile() {
  return (
    // flexDirection row: foto e textos lado a lado (slide 31)
    <View style={styles.container}>
      <Avatar source={user.avatar} />

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

import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Background from '../components/Background';
import Button from '../components/Button';

import { theme } from '../theme';
import { user } from '../data/user';

// require so aceita caminho fixo, fica fora do componente pq nao muda
const illustration = require('../../assets/illustration.png');

export default function Login({ navigation }) {
  // replace troca o login pela home na pilha, assim nao volta pro login com o gesto
  function handleSignIn() {
    navigation.replace('Home');
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <Image
          source={illustration}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'}e organize suas{'\n'}jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
          </Text>

          <Button
            title="Entrar com Discord"
            icon="discord"
            onPress={handleSignIn}
          />

          <Text style={styles.credit}>
            Desenvolvido por <Text style={styles.creditName}>{user.name}</Text>
          </Text>
        </View>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 380,
    marginTop: 40,
  },
  content: {
    marginTop: -70, // puxa o texto pra cima, por cima da parte apagada da ilustracao
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    lineHeight: 40,
    fontFamily: theme.fonts.title700,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 25,
    fontFamily: theme.fonts.text400,
    marginBottom: 64,
  },
  credit: {
    marginTop: 24,
    color: theme.colors.body,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
  },
  creditName: {
    color: theme.colors.primary, // nome na cor principal pra destacar
    fontFamily: theme.fonts.text500,
  },
});
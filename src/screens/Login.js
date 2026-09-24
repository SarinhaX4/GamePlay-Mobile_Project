/**
 * Login.js  (tela "Login" do Figma)
 *
 * Estrutura da tela, de cima para baixo:
 *
 *   +------------------------------+
 *   |      [ ilustração ]          |  <Image> local, com require
 *   |                              |
 *   |   Conecte-se                 |  <Text> título (Rajdhani 40)
 *   |   e organize suas            |
 *   |   jogatinas                  |
 *   |   Crie grupos para jogar...  |  <Text> subtítulo (Inter 15)
 *   |                              |
 *   |  [ D | Entrar com Discord ]  |  nosso <Button> com ícone
 *   |                              |
 *   |    Desenvolvido por Sara     |  crédito (não existe no Figma: é meu)
 *   +------------------------------+
 */

import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// IMPORT DEFAULT, sem chaves, caminho relativo (slide 8)
import Background from '../components/Background';
import Button from '../components/Button';

// IMPORT NOMEADO, com chaves, nome exato (slide 8)
import { theme } from '../theme';
import { user } from '../data/user';

// IMAGEM LOCAL (slide 40): require só aceita caminho fixo, escrito direto.
// Fica fora do componente porque não muda nunca.
const illustration = require('../../assets/illustration.png');

// { navigation } chega como PROP, entregue pelas rotas (AppRoutes.js).
// Desestruturação na assinatura, igual ao Button (slide 12).
export default function Login({ navigation }) {
  // replace (e não navigate): TROCA o Login pela Home na pilha.
  // Assim, depois de entrar, a pessoa não volta para o Login
  // pelo gesto de voltar do celular. É o comportamento de um login de verdade.
  function handleSignIn() {
    navigation.replace('Home');
  }

  return (
    <Background>
      {/* SafeAreaView: não deixa o conteúdo ficar atrás do relógio/entalhe (slide 42) */}
      <SafeAreaView style={styles.container}>
        {/* "light" porque o fundo é escuro: relógio e bateria ficam brancos */}
        <StatusBar style="light" />

        <Image
          source={illustration}
          style={styles.image}
          resizeMode="stretch" // estica a imagem para caber exatamente na caixa
        />

        <View style={styles.content}>
          {/*
            {'\n'} é uma quebra de linha dentro do texto.
            Usei para quebrar o título exatamente nos mesmos lugares do Figma.
          */}
          <Text style={styles.title}>
            Conecte-se{'\n'}e organize suas{'\n'}jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
          </Text>

          {/*
            Reuso do nosso Button:
            - title: string, por isso entre aspas
            - icon: string, entre aspas
            - onPress: função, por isso entre chaves e SEM parênteses (slide 15)
          */}
          <Button
            title="Entrar com Discord"
            icon="discord"
            onPress={handleSignIn}
          />

          {/*
            TEXT DENTRO DE TEXT (slide 29): o <Text> de dentro HERDA
            a fonte e o tamanho do de fora, e só troca o que eu mandar
            (aqui, a fonte em negrito e a cor do nome).
          */}
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
    flex: 1, // a SafeAreaView ocupa a tela inteira
    alignItems: 'center', // centraliza os filhos na horizontal
  },
  image: {
    width: '100%', // porcentagem é string (regra 4 do slide 23)
    height: 380,
    marginTop: 40,
  },
  content: {
    // Margem NEGATIVA: puxa o texto 70 DP para cima,
    // para ele ficar por cima da parte "apagada" da ilustração,
    // igual ao Figma.
    marginTop: -70,
    paddingHorizontal: 50, // faz o botão ficar com ~275 de largura, como no Figma
    alignItems: 'center',
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    lineHeight: 40, // valor absoluto em DP (slide 38)
    fontFamily: theme.fonts.title700,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 25,
    fontFamily: theme.fonts.text400,
    marginBottom: 64, // espaço até o botão
  },
  credit: {
    marginTop: 24,
    color: theme.colors.body,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
  },
  creditName: {
    color: theme.colors.primary, // o nome na cor principal, para destacar
    fontFamily: theme.fonts.text500,
  },
});

/**
 * Detalhes.js  (tela "Detalhes do servidor" do Figma)
 *
 * Estrutura da tela:
 *
 *   +--------------------------------------+
 *   | <-          Detalhes          [share] |  Header
 *   +--------------------------------------+
 *   |  [ imagem do jogo ]                  |  ImageBackground (banner)
 *   |  Lendários                           |  título por cima da imagem
 *   |  É hoje que vamos chegar ao...       |
 *   +--------------------------------------+
 *   | Jogadores                  Total 3   |  ListHeader (reuso da Home)
 *   | [foto] Sara  (o) Disponível          |  Member
 *   | [foto] Diego (o) Disponível          |
 *   |                                      |
 *   | [ D | Entrar na partida ]            |  Button (reuso do Login)
 *   +--------------------------------------+
 */

import { Alert, ImageBackground, ScrollView, Share, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Background from '../components/Background';
import Header from '../components/Header';
import ListHeader from '../components/ListHeader';
import ListDivider from '../components/ListDivider';
import Member from '../components/Member';
import Button from '../components/Button';

import { theme } from '../theme';
import { appointments } from '../data/appointments';
import { members } from '../data/members';

const banner = require('../../assets/banner.png');

// { route, navigation } são props entregues pelas rotas (AppRoutes.js).
// route.params traz a partida que o usuário tocou lá na Home.
export default function Detalhes({ route, navigation }) {
  // O "?." (optional chaining) evita erro se route não existir.
  // O "??" diz: se não veio partida nenhuma, usa a primeira da lista.
  // Com a navegação pronta, a tela mostra a partida que foi tocada na Home.
  const appointment = route?.params?.appointment ?? appointments[0];

  // goBack tira esta tela da pilha e a Home aparece de novo
  function handleBack() {
    navigation.goBack();
  }

  // Share é uma API do react-native que abre a janela de
  // compartilhar do próprio celular (WhatsApp, Discord, etc.).
  // Não foi visto em aula: é um extra.
  function handleShare() {
    Share.share({
      message: `Bora jogar ${appointment.game}? Partida "${appointment.guildName}" em ${appointment.date}.`,
    });
  }

  function handleJoin() {
    Alert.alert('Entrar na partida', `Entrando em ${appointment.guildName}...`);
  }

  return (
    <Background>
      <StatusBar style="light" />

      {/* Reuso do Header: aqui COM o botão de compartilhar */}
      <Header title="Detalhes" onBack={handleBack} onShare={handleShare} />

      {/*
        ImageBackground: uma imagem que aceita FILHOS por cima dela
        (o <Image> comum não aceita). É ela que deixa o título
        "Lendários" em cima da arte do jogo, como no Figma.
      */}
      <ImageBackground source={banner} style={styles.banner} resizeMode="cover">
        {/*
          Camada escura semitransparente por cima da imagem, para o texto
          branco ficar legível. rgba = cor + transparência (0.55 = 55%).
          É o roxo do fundo (#170A2C) escrito em rgba.
        */}
        <View style={styles.overlay}>
          <Text style={styles.title}>{appointment.guildName}</Text>
          <Text style={styles.subtitle}>{appointment.description}</Text>
        </View>
      </ImageBackground>

      <View style={styles.listHeader}>
        {/* Mesmo ListHeader da Home, com outro texto: reuso */}
        <ListHeader title="Jogadores" subtitle={`Total ${members.length}`} />
      </View>

      <ScrollView style={styles.members} contentContainerStyle={styles.membersContent}>
        {members.map((member, index) => (
          <View key={member.id}>
            {index > 0 && <ListDivider />}
            <Member data={member} />
          </View>
        ))}
      </ScrollView>

      {/* Protege só a parte de baixo (a barrinha do iPhone) */}
      <SafeAreaView edges={['bottom']} style={styles.footer}>
        {/* Reuso do Button do Login, com o mesmo ícone do Discord */}
        <Button title="Entrar na partida" icon="discord" onPress={handleJoin} />
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 234, // altura exata do Figma
  },
  overlay: {
    flex: 1, // ocupa o banner inteiro
    justifyContent: 'flex-end', // empurra os textos para baixo (slide 32)
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: 'rgba(23, 10, 44, 0.55)',
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 28,
    color: theme.colors.heading,
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    lineHeight: 21,
    color: theme.colors.heading,
  },
  listHeader: {
    marginTop: 24,
    marginBottom: 24,
  },
  members: {
    flex: 1, // a lista ocupa o espaço entre o cabeçalho e o botão
  },
  membersContent: {
    paddingHorizontal: 24,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
  },
});

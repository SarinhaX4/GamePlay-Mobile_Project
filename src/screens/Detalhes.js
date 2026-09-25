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

export default function Detalhes({ route, navigation }) {
  // se nao vier partida nenhuma usa a primeira da lista
  const appointment = route?.params?.appointment ?? appointments[0];

  function handleBack() {
    navigation.goBack();
  }

  // Share é api nativa que abre o menu de compartilhar do celular, extra que nao foi visto em aula
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

      <Header title="Detalhes" onBack={handleBack} onShare={handleShare} />

      {/* imagebackground aceita filho em cima, por isso da pra por o titulo em cima do banner */}
      <ImageBackground source={banner} style={styles.banner} resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.title}>{appointment.guildName}</Text>
          <Text style={styles.subtitle}>{appointment.description}</Text>
        </View>
      </ImageBackground>

      <View style={styles.listHeader}>
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

      <SafeAreaView edges={['bottom']} style={styles.footer}>
        <Button title="Entrar na partida" icon="discord" onPress={handleJoin} />
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 234, // altura do figma
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: 'rgba(23, 10, 44, 0.55)', // camada escura pra texto ficar legivel
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
    flex: 1,
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
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import GuildIcon from './GuildIcon';
import { theme } from '../theme';

// card do servidor selecionado na tela agendar
// a atividade pede so a versao "ja selecionado", sem o modal de lista

export default function GuildCard({ data, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <GuildIcon image={data.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{data.guildName}</Text>
        <Text style={styles.game}>{data.game}</Text>
      </View>

      <MaterialCommunityIcons name="chevron-right" size={24} color={theme.colors.heading} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 68, // altura do figma
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
    paddingRight: 24,
    overflow: 'hidden', // capa respeita o canto arredondado
  },
  content: {
    flex: 1, // empurra a seta pra direita
    marginLeft: 20,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  game: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.body,
  },
});
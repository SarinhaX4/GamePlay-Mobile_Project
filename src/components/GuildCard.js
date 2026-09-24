/**
 * GuildCard.js
 *
 * O card do servidor selecionado, na tela Agendar:
 *
 *   +--------------------------------------+
 *   | [capa]  Lendários                  > |
 *   |         League of Legends            |
 *   +--------------------------------------+
 *
 * A atividade pede a versão "servidor selecionado", então o card
 * sempre mostra um servidor. O modal com a lista não faz parte.
 *
 * @param {object}   data    - um objeto do appointments.js
 * @param {function} onPress - função do toque
 */

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import GuildIcon from './GuildIcon';
import { theme } from '../theme';

export default function GuildCard({ data, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      {/* Reuso do GuildIcon, o mesmo da lista da Home */}
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
    height: 68, // altura do Figma (a largura vem do pai)
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
    paddingRight: 24,
    overflow: 'hidden', // a capa respeita o canto arredondado do card
  },
  content: {
    flex: 1, // empurra a seta para a direita
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
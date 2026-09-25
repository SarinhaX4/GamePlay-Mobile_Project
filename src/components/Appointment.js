import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import GuildIcon from './GuildIcon';
import { theme } from '../theme';
import { categories } from '../data/categories';

// item da lista de partida na home, capa + info

export default function Appointment({ data, onPress }) {
  // partida so guarda o id da categoria, acho o nome aqui
  const category = categories.find((item) => item.id === data.category);

  // anfitriao = rosa, visitante = verde, uso a mesma cor no icone e no texto
  const roleColor = data.owner ? theme.colors.primary : theme.colors.on;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <GuildIcon image={data.image} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{data.guildName}</Text>
          <Text style={styles.category}>{category.title}</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.info}>
            <MaterialCommunityIcons name="calendar-blank" size={16} color={theme.colors.primary} />
            <Text style={styles.date}>{data.date}</Text>
          </View>

          <View style={styles.info}>
            <MaterialCommunityIcons name="account" size={16} color={roleColor} />
            <Text style={[styles.role, { color: roleColor }]}>
              {data.owner ? 'Anfitrião' : 'Visitante'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1, // ocupa o resto depois da capa
    marginLeft: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  category: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.body,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  date: {
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    color: theme.colors.heading,
  },
  role: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
});
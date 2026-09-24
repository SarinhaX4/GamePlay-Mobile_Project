/**
 * Appointment.js
 *
 * UM item da lista de partidas da Home:
 *
 *   +------+  Lendários               Ranqueada
 *   | capa |  [cal] 18/06 às 21:00h   [pessoa] Anfitrião
 *   +------+
 *
 * @param {object}   data    - um objeto do appointments.js
 * @param {function} onPress - função disparada no toque
 */

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import GuildIcon from './GuildIcon';
import { theme } from '../theme';
import { categories } from '../data/categories';

export default function Appointment({ data, onPress }) {
  // A partida guarda só o ID da categoria ('1', '2'...).
  // O .find() procura no array de categorias a que tem esse id,
  // para eu conseguir mostrar o NOME ("Ranqueada").
  const category = categories.find((item) => item.id === data.category);

  // Anfitrião = cor principal (rosa); Visitante = verde. Igual ao Figma.
  // Guardei numa variável porque uso a mesma cor no ícone E no texto.
  const roleColor = data.owner ? theme.colors.primary : theme.colors.on;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <GuildIcon image={data.image} />

      <View style={styles.content}>
        {/* Linha de cima: nome do servidor e categoria, um em cada ponta */}
        <View style={styles.header}>
          <Text style={styles.title}>{data.guildName}</Text>
          <Text style={styles.category}>{category.title}</Text>
        </View>

        {/* Linha de baixo: data e papel (Anfitrião/Visitante) */}
        <View style={styles.footer}>
          <View style={styles.info}>
            <MaterialCommunityIcons name="calendar-blank" size={16} color={theme.colors.primary} />
            <Text style={styles.date}>{data.date}</Text>
          </View>

          <View style={styles.info}>
            <MaterialCommunityIcons name="account" size={16} color={roleColor} />
            {/*
              ARRAY DE ESTILOS (slide 26): o estilo base + a cor calculada.
              O último vence, então a cor de roleColor substitui qualquer outra.
            */}
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
    flexDirection: 'row', // capa à esquerda, textos à direita
    alignItems: 'center',
  },
  content: {
    flex: 1, // os textos ocupam todo o espaço que sobra depois da capa (slide 35)
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
    gap: 6, // espaço entre o ícone e o texto
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

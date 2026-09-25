import { StyleSheet, Text, View } from 'react-native';

import Avatar from './Avatar';
import { theme } from '../theme';

// um jogador da lista de detalhes, foto + nome + status

export default function Member({ data }) {
  const isOnline = data.status === 'online'; // fica mais facil de ler no jsx

  return (
    <View style={styles.container}>
      <Avatar source={data.avatar} />

      <View>
        <Text style={styles.name}>{data.username}</Text>

        <View style={styles.status}>
          {/* bolinha muda de cor conforme status */}
          <View
            style={[
              styles.bullet,
              { backgroundColor: isOnline ? theme.colors.on : theme.colors.primary },
            ]}
          />
          <Text style={styles.statusText}>{isOnline ? 'Disponível' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4, // metade da largura vira circulo
  },
  statusText: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.body,
  },
});
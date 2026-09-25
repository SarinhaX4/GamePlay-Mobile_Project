import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// fontawesome5 ja vem no expo, tem o logo do discord

import { FontAwesome5 } from '@expo/vector-icons';

import { theme } from '../theme';

// botao aparece em 3 tela (login, detalhes, agendar) só muda o icone
// entao virou componente unico com icon opcional
// é evolucao do button do app profile, so acrescentei o icon

export default function Button({ title, onPress, disabled = false, icon }) {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: disabled ? 0.5 : 1 }]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {/* se nao tiver icon, esse && nem desenha nada */}
      {icon && (
        <View style={styles.iconWrapper}>
          <FontAwesome5 name={icon} size={20} color={theme.colors.heading} />
        </View>
      )}

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56, // altura do figma
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row', // icone e texto lado a lado
    alignItems: 'center',
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1, // linha separando icone do texto
    borderColor: theme.colors.line,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: theme.colors.heading,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
  },
});
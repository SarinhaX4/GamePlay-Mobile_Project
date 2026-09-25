import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';

// card de categoria, nao tem estado proprio, quem controla é a tela
// só recebe checked pronto e avisa no onPress 

export default function Category({ title, icon, checked, hasCheckBox = false, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: checked ? 1 : 0.5 }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* quadradinho so aparece na tela agendar */}
      {hasCheckBox && <View style={checked ? styles.checked : styles.check} />}

      <MaterialCommunityIcons name={icon} size={48} color={theme.colors.primary} />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 104, // medida do figma
    height: 120,
    backgroundColor: theme.colors.shape,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 16,
    fontFamily: theme.fonts.title700,
    fontSize: 15,
    color: theme.colors.heading,
  },
  // position absolute pra sair do fluxo e ficar no canto
  check: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 2,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  checked: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 2,
    backgroundColor: theme.colors.primary,
  },
});
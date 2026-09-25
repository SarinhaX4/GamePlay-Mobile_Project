import { Image, StyleSheet, View } from 'react-native';
import { theme } from '../theme';

// capa do jogo com canto arredondado, usa na home e no card do agendar

export default function GuildIcon({ image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 68,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden', // corta nos cantos arredondados
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
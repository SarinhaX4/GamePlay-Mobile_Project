import { Image, StyleSheet, View } from 'react-native';
import { theme } from '../theme';

// avatar quadrado com borda, usa na home e nos detalhes
// aceita source local (require) ou remota ({ uri }), só repassa pro Image

export default function Avatar({ source }) {
  return (
    <View style={styles.container}>
      {/* width/height obrigatorio pra remota nao ficar com altura zero */}
      <Image source={source} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden', // corta pra respeitar o borderRadius
    marginRight: 20,
  },
  avatar: {
    width: 48,
    height: 48,
  },
});
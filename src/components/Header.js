import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';

// header do topo das telas internas, seta voltar + titulo + compartilhar
// compartilhar é opcional, agendar nao passa essa prop, mesma ideia do icon do Button

export default function Header({ title, onBack, onShare }) {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onBack} hitSlop={12}>
          <MaterialCommunityIcons name="arrow-left" size={24} color={theme.colors.heading} />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        {/* sem onShare bota view vazia do mesmo tamanho, senao o space-between desalinha o titulo */}
        {onShare ? (
          <TouchableOpacity onPress={onShare} hitSlop={12}>
            <MaterialCommunityIcons name="share-variant" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.colors.shape, // faixa do topo mais clara
  },
  container: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    color: theme.colors.heading,
  },
  placeholder: {
    width: 24,
    height: 24,
  },
});
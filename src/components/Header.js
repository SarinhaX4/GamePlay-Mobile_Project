/**
 * Header.js
 *
 * A barra do topo das telas internas (Detalhes e Agendar):
 *
 *   [ <- ]          Detalhes          [ compartilhar ]
 *
 * O ícone de compartilhar é OPCIONAL: só aparece se a tela passar onShare.
 * Na tela Agendar ele não existe, então lá eu só não passo essa prop.
 * (Mesma técnica do ícone opcional do Button.)
 *
 * @param {string}   title   - texto do meio
 * @param {function} onBack  - função da seta de voltar
 * @param {function} onShare - função do botão compartilhar (opcional)
 */

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';

export default function Header({ title, onBack, onShare }) {
  return (
    // O próprio Header protege o topo (entalhe/relógio).
    // Assim a cor dele "sobe" até o topo da tela, como no Figma.
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        {/*
          hitSlop aumenta a área de toque sem mudar o visual (slide 50).
          O ícone é pequeno (24), então fica mais fácil acertar com o dedo.
        */}
        <TouchableOpacity onPress={onBack} hitSlop={12}>
          <MaterialCommunityIcons name="arrow-left" size={24} color={theme.colors.heading} />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        {/*
          Se onShare existir, mostra o botão.
          Se não existir, coloca uma View vazia do MESMO tamanho (24x24).
          Sem ela, o justifyContent: 'space-between' empurraria o título
          para a direita, e ele não ficaria centralizado.
        */}
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
    backgroundColor: theme.colors.shape, // faixa do topo mais clara que o fundo
  },
  container: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between', // seta, título e ícone espalhados (slide 32)
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

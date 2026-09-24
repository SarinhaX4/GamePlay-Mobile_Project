/**
 * App.js
 *
 * É o primeiro componente que o app desenha. Ele faz três coisas:
 *   1. carrega as fontes do Figma (Rajdhani e Inter)
 *   2. prepara a área segura (SafeAreaProvider)
 *   3. liga a navegação e entrega o controle para as rotas (AppRoutes)
 */

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

// useFonts é um Hook que carrega fontes. Ele devolve true quando terminou.
// Cada pacote exporta as variações (pesos) da fonte.
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  // HOOK no topo do componente, nunca dentro de if (mesma regra do useState, slide 51)
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  // Enquanto as fontes não carregaram, não desenho nada.
  // Se eu desenhasse, o texto apareceria com a fonte padrão
  // e depois "pularia" para a fonte certa.
  // Quando as fontes terminam de carregar, o React redesenha o App (ciclo do slide 52).
  if (!fontsLoaded) {
    return null;
  }

  return (
    // SafeAreaProvider: precisa ficar na raiz do app para que
    // as SafeAreaView das telas saibam o tamanho do entalhe e da barra.
    <SafeAreaProvider>
      {/* NavigationContainer: o "motor" da navegação. Envolve todas as rotas. */}
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

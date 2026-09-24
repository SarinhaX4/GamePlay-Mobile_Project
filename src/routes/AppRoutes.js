/**
 * AppRoutes.js
 *
 * Aqui ficam as ROTAS do app: a lista de telas e para onde cada uma leva.
 *
 * Usei o React Navigation com a "pilha" (stack), que funciona como uma
 * pilha de cartas:
 *   - navigate('Detalhes') coloca a tela Detalhes POR CIMA da Home
 *   - goBack() tira a tela de cima e a Home aparece de novo
 *
 *   Login -> Home -> Detalhes
 *                 -> Agendar
 *
 * Cada <Stack.Screen> recebe:
 *   name      -> o nome que uso para navegar (ex: navigation.navigate('Home'))
 *   component -> o componente da tela
 *
 * Toda tela registrada aqui ganha automaticamente a prop "navigation"
 * (e a prop "route", com os dados enviados por quem navegou até ela).
 *
 * (A navegação não foi vista em aula: foi feita com ajuda de IA,
 * como a atividade permite.)
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Detalhes from '../screens/Detalhes';
import Agendar from '../screens/Agendar';

import { theme } from '../theme';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login" // a primeira tela que aparece
      screenOptions={{
        headerShown: false, // escondo o cabeçalho padrão: cada tela usa o nosso Header
        contentStyle: { backgroundColor: theme.colors.background }, // evita "piscar" branco na troca
        animation: 'slide_from_right', // a tela nova entra deslizando da direita
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Agendar" component={Agendar} />
    </Stack.Navigator>
  );
}
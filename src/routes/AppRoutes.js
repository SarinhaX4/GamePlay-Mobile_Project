import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Detalhes from '../screens/Detalhes';
import Agendar from '../screens/Agendar';

import { theme } from '../theme';

const Stack = createNativeStackNavigator();

// rotas do app, login -> home -> detalhes/agendar
// navigate('Detalhes') empilha por cima da home, goBack tira e volta
// isso aqui nao foi visto em aula, usei IA de ajuda 

export default function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false, // cada tela usa o header nosso
        contentStyle: { backgroundColor: theme.colors.background }, // pra nao piscar branco trocando de tela
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Agendar" component={Agendar} />
    </Stack.Navigator>
  );
}
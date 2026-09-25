import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Background from '../components/Background';
import Profile from '../components/Profile';
import ButtonAdd from '../components/ButtonAdd';
import CategorySelect from '../components/CategorySelect';
import ListHeader from '../components/ListHeader';
import Appointment from '../components/Appointment';
import ListDivider from '../components/ListDivider';

import { theme } from '../theme';
import { appointments } from '../data/appointments';

export default function Home({ navigation }) {
  const [category, setCategory] = useState('');

  // toca na mesma categoria desmarca, toca em outra troca
  function handleCategorySelect(categoryId) {
    setCategory(categoryId === category ? '' : categoryId);
  }

  const filteredAppointments = category
    ? appointments.filter((item) => item.category === category)
    : appointments;

  function handleSignOut() {
    Alert.alert('Sair', 'Deseja sair do GamePlay?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', style: 'destructive', onPress: () => navigation.replace('Login') },
    ]);
  }

  function handleAppointmentCreate() {
    navigation.navigate('Agendar');
  }

  // segundo argumento do navigate manda os dado pra proxima tela
  function handleAppointmentDetails(item) {
    navigation.navigate('Detalhes', { appointment: item });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar style="light" />

        <View style={styles.header}>
          <Profile onAvatarPress={handleSignOut} />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>

        <View style={styles.categories}>
          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
        </View>

        <View style={styles.listHeader}>
          <ListHeader
            title="Partidas agendadas"
            subtitle={`Total ${filteredAppointments.length}`}
          />
        </View>

        <ScrollView
          style={styles.list}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        >
          {filteredAppointments.length === 0 && (
            <Text style={styles.empty}>Nenhuma partida nesta categoria.</Text>
          )}

          {filteredAppointments.map((item, index) => (
            <View key={item.id}>
              {index > 0 && <ListDivider />}
              <Appointment
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 12,
  },
  categories: {
    marginTop: 40,
  },
  listHeader: {
    marginTop: 40,
    marginBottom: 24,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  empty: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.body,
    textAlign: 'center',
    marginTop: 24,
  },
});
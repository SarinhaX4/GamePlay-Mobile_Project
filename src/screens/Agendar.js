import { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Background from '../components/Background';
import Header from '../components/Header';
import CategorySelect from '../components/CategorySelect';
import GuildCard from '../components/GuildCard';
import SmallInput from '../components/SmallInput';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

import { theme } from '../theme';
import { appointments } from '../data/appointments';
import { categories } from '../data/categories';

// servidor ja vem selecionado, figma mostra lendarios
const selectedGuild = appointments[0];

export default function Agendar({ navigation }) {
  const [category, setCategory] = useState('1');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  // diferente da home, aqui nao desmarca, partida sempre precisa de categoria
  function handleCategorySelect(categoryId) {
    setCategory(categoryId);
  }

  function fecharTeclado() {
    Keyboard.dismiss();
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleGuildPress() {
    Alert.alert('Servidores', 'A lista de servidores não faz parte desta atividade.');
  }

  // botao so acende quando os 4 campo de data/hora tem 2 digito
  const isFormIncomplete =
    day.length < 2 || month.length < 2 || hour.length < 2 || minute.length < 2;

  function handleSave() {
    if (Number(day) < 1 || Number(day) > 31 || Number(month) < 1 || Number(month) > 12) {
      return Alert.alert('Atenção', 'Confira o dia e o mês.');
    }
    if (Number(hour) > 23 || Number(minute) > 59) {
      return Alert.alert('Atenção', 'Confira a hora e o minuto.');
    }

    const categoryName = categories.find((item) => item.id === category).title;

    Alert.alert(
      'Partida agendada!',
      `${selectedGuild.guildName} • ${categoryName}\n${day}/${month} às ${hour}:${minute}h`,
      [
        { text: 'Agendar outra' },
        { text: 'Ir para a Home', onPress: () => navigation.goBack() },
      ]
    );

    // so limpa pq os campo sao controlados, com defaultValue nao limparia na tela
    setDay('');
    setMonth('');
    setHour('');
    setMinute('');
    setDescription('');
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <StatusBar style="light" />

        <Header title="Agendar partida" onBack={handleBack} />

        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableWithoutFeedback onPress={fecharTeclado}>
            <View>
              <Text style={[styles.label, styles.labelCategory]}>Categoria</Text>

              {/* estado mora aqui, elevacao de estado */}
              <CategorySelect
                hasCheckBox
                categorySelected={category}
                setCategory={handleCategorySelect}
              />

              <View style={styles.form}>
                <GuildCard data={selectedGuild} onPress={handleGuildPress} />

                <View style={styles.row}>
                  <View>
                    <Text style={styles.label}>Dia e mês</Text>
                    <View style={styles.column}>
                      <SmallInput value={day} onChangeText={setDay} placeholder="DD" />
                      <Text style={styles.divider}>/</Text>
                      <SmallInput value={month} onChangeText={setMonth} placeholder="MM" />
                    </View>
                  </View>

                  <View>
                    <Text style={styles.label}>Hora e minuto</Text>
                    <View style={styles.column}>
                      <SmallInput value={hour} onChangeText={setHour} placeholder="HH" />
                      <Text style={styles.divider}>:</Text>
                      <SmallInput value={minute} onChangeText={setMinute} placeholder="MM" />
                    </View>
                  </View>
                </View>

                <View style={[styles.row, styles.descriptionHeader]}>
                  <Text style={styles.label}>Descrição</Text>
                  <Text style={styles.counter}>{description.length}/100 caracteres</Text>
                </View>

                <TextArea value={description} onChangeText={setDescription} maxLength={100} />

                <SafeAreaView edges={['bottom']} style={styles.footer}>
                  <Button title="Agendar" onPress={handleSave} disabled={isFormIncomplete} />
                </SafeAreaView>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </Background>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1, // flexGrow e nao flex, senao trava a rolagem
    paddingTop: 32,
  },
  label: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
    marginBottom: 12,
  },
  labelCategory: {
    paddingHorizontal: 24,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
    gap: 28,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    marginHorizontal: 8,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    color: theme.colors.body,
  },
  descriptionHeader: {
    alignItems: 'baseline',
    marginBottom: -16, // aproxima o titulo da caixa de texto
  },
  counter: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.body,
  },
  footer: {
    paddingBottom: 16,
  },
});
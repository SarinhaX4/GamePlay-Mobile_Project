/**
 * Agendar.js  (tela "Agendar - Servidor selecionado" do Figma)
 *
 * Estrutura da tela:
 *
 *   +--------------------------------------+
 *   | <-       Agendar partida             |  Header (reuso, SEM compartilhar)
 *   | Categoria                            |
 *   | [Ranqueada■][Duelo□][Diversão□]...   |  CategorySelect com checkbox
 *   | [capa] Lendários                  >  |  GuildCard
 *   | Dia e mês           Hora e minuto    |
 *   | [DD] / [MM]         [HH] : [MM]      |  4x SmallInput
 *   | Descrição           32/100 caracteres|
 *   | [                                  ] |  TextArea
 *   | [          Agendar               ]   |  Button (reuso, SEM ícone)
 *   +--------------------------------------+
 *
 * ESTADO desta tela: a categoria + os 5 campos do formulário.
 */

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

// O servidor já vem selecionado (o Figma mostra "Lendários").
const selectedGuild = appointments[0];

export default function Agendar() {
  // USESTATE (slide 51): um estado para cada informação da tela.
  // A categoria começa em '1' (Ranqueada), igual ao Figma.
  const [category, setCategory] = useState('1');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  // Diferente da Home, aqui NÃO desmarca ao tocar de novo:
  // uma partida sempre precisa de uma categoria.
  // Então é só trocar o estado para a categoria tocada.
  function handleCategorySelect(categoryId) {
    setCategory(categoryId);
  }

  // Fecha o teclado ao tocar fora dos campos (slide 66)
  function fecharTeclado() {
    Keyboard.dismiss();
  }

  function handleBack() {
    Alert.alert('Voltar', 'A navegação chega na Parte 5.');
  }

  function handleGuildPress() {
    Alert.alert('Servidores', 'A lista de servidores não faz parte desta atividade.');
  }

  // VALIDAÇÃO SIMPLES (slide 70):
  // o botão só "acende" quando os 4 campos de data e hora têm 2 dígitos.
  // Isso é calculado a cada redesenho, a partir do estado.
  const isFormIncomplete =
    day.length < 2 || month.length < 2 || hour.length < 2 || minute.length < 2;

  function handleSave() {
    // Number() transforma o texto "07" no número 7, para eu comparar
    if (Number(day) < 1 || Number(day) > 31 || Number(month) < 1 || Number(month) > 12) {
      return Alert.alert('Atenção', 'Confira o dia e o mês.');
    }
    if (Number(hour) > 23 || Number(minute) > 59) {
      return Alert.alert('Atenção', 'Confira a hora e o minuto.');
    }

    // Procuro o nome da categoria pelo id, para mostrar no Alert
    const categoryName = categories.find((item) => item.id === category).title;

    Alert.alert(
      'Partida agendada!',
      `${selectedGuild.guildName} • ${categoryName}\n${day}/${month} às ${hour}:${minute}h`
    );

    // LIMPAR O FORMULÁRIO: só funciona porque os campos são CONTROLADOS (value).
    // Com defaultValue, o estado limparia mas o texto continuaria na tela (slide 60).
    setDay('');
    setMonth('');
    setHour('');
    setMinute('');
    setDescription('');
  }

  return (
    // A MOLDURA DO FORMULÁRIO, na ordem do slide 69:
    // desviar do teclado -> poder rolar -> fechar o teclado ao tocar fora
    <KeyboardAvoidingView
      style={styles.flex}
      // Platform.OS devolve 'ios' ou 'android' (slide 67)
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <StatusBar style="light" />

        {/* Reuso do Header: aqui SEM onShare, então sem o ícone de compartilhar */}
        <Header title="Agendar partida" onBack={handleBack} />

        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          // Sem isso, o primeiro toque num botão com o teclado aberto
          // só fecharia o teclado, e o botão não responderia.
          keyboardShouldPersistTaps="handled"
        >
          <TouchableWithoutFeedback onPress={fecharTeclado}>
            <View>
              <Text style={[styles.label, styles.labelCategory]}>Categoria</Text>

              {/*
                Reuso do CategorySelect da Home, agora com hasCheckBox.
                O estado mora AQUI na tela (elevação de estado, slide 54).
                Ao tocar num card: setCategory muda o estado -> o React
                redesenha -> o card tocado fica opaco com o quadradinho rosa,
                e os outros ficam apagados.
              */}
              <CategorySelect
                hasCheckBox
                categorySelected={category}
                setCategory={handleCategorySelect}
              />

              <View style={styles.form}>
                <GuildCard data={selectedGuild} onPress={handleGuildPress} />

                {/* Duas colunas lado a lado: data à esquerda, hora à direita */}
                <View style={styles.row}>
                  <View>
                    <Text style={styles.label}>Dia e mês</Text>
                    <View style={styles.column}>
                      {/* Passo o setDay DIRETO: ele já recebe o texto (slide 60) */}
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
                  {/* CONTADOR DE CARACTERES (mini-desafio 4 do slide 79):
                      o .length do estado muda a cada letra digitada */}
                  <Text style={styles.counter}>{description.length}/100 caracteres</Text>
                </View>

                <TextArea value={description} onChangeText={setDescription} maxLength={100} />

                <SafeAreaView edges={['bottom']} style={styles.footer}>
                  {/*
                    Reuso do Button, agora SEM ícone e COM disabled:
                    enquanto o formulário estiver incompleto, o botão fica
                    apagado e não responde. Igual ao "Salvar" do profile.
                  */}
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
    flexGrow: 1, // flexGrow e não flex: 1, senão trava a rolagem (slide 68)
    paddingTop: 32,
  },
  label: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
    marginBottom: 12,
  },
  labelCategory: {
    // "Categoria" fica fora do .form, então precisa do próprio recuo lateral
    paddingHorizontal: 24,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
    gap: 28, // espaço entre os blocos do formulário (slide 36)
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
    alignItems: 'baseline', // alinha os dois textos pela linha de base (slide 33)
    marginBottom: -16, // aproxima o título da caixa de texto (o gap do form é 28)
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
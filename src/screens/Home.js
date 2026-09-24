/**
 * Home.js  (tela "Home" do Figma)
 *
 * Estrutura da tela:
 *
 *   +--------------------------------------+
 *   | [foto] Olá, Sara              [ + ]  |  Profile + ButtonAdd
 *   |                                      |
 *   | [Ranqueada][Duelo][Diversão][Tre...  |  CategorySelect (rola para o lado)
 *   |                                      |
 *   | Partidas agendadas         Total 5   |  ListHeader
 *   | [capa] Lendários        Ranqueada    |  Appointment
 *   |        ---------------------------   |  ListDivider
 *   | [capa] Yeah, boy         Diversão    |
 *   +--------------------------------------+
 *
 * ESTADO desta tela: qual categoria está selecionada.
 * Tocar numa categoria FILTRA a lista de partidas.
 */

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

export default function Home() {
  // USESTATE (slide 51): começa com '' = nenhuma categoria selecionada.
  // Hook sempre no topo do componente, nunca dentro de if.
  const [category, setCategory] = useState('');

  // Chamada quando o usuário toca numa categoria.
  // Tocou na MESMA que já estava selecionada? Desmarca (volta para '').
  // Tocou em outra? Seleciona a nova.
  // Isso é o ciclo do slide 52: eu mudo o estado, o React redesenha a tela.
  function handleCategorySelect(categoryId) {
    setCategory(categoryId === category ? '' : categoryId);
  }

  // Lista que vai aparecer na tela:
  // - sem categoria selecionada: todas as partidas
  // - com categoria: só as partidas daquela categoria
  // .filter() cria um array NOVO (não mexe no original), então respeita
  // a regra de imutabilidade do slide 53.
  const filteredAppointments = category
    ? appointments.filter((item) => item.category === category)
    : appointments;

  // Por enquanto, os toques só mostram um Alert.
  // Na PARTE 5 essas funções vão navegar para outras telas.
  function handleAppointmentCreate() {
    Alert.alert('Agendar', 'A tela de agendar chega na Parte 4.');
  }

  function handleAppointmentDetails(item) {
    Alert.alert(item.guildName, 'Os detalhes chegam na Parte 3.');
  }

  return (
    <Background>
      {/* edges={['top']}: só protejo o topo; embaixo a lista pode ir até a borda */}
      <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar style="light" />

        {/* CABEÇALHO: perfil de um lado, botão do outro */}
        <View style={styles.header}>
          <Profile />
          {/* Passo a FUNÇÃO, sem parênteses (slide 15) */}
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>

        {/*
          A Home passa para o CategorySelect:
          - o valor do estado (categorySelected), para ele saber qual acender
          - a função que troca o estado (setCategory), para ele avisar o toque
          É a ELEVAÇÃO DE ESTADO (slide 54): o estado mora aqui na tela.
        */}
        <View style={styles.categories}>
          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
        </View>

        <View style={styles.listHeader}>
          {/* Template string: o total muda sozinho quando a lista é filtrada */}
          <ListHeader
            title="Partidas agendadas"
            subtitle={`Total ${filteredAppointments.length}`}
          />
        </View>

        {/* A lista rola para baixo; o cabeçalho e as categorias ficam parados */}
        <ScrollView
          style={styles.list}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Se o filtro não achar nada, mostro uma mensagem em vez de tela vazia */}
          {filteredAppointments.length === 0 && (
            <Text style={styles.empty}>Nenhuma partida nesta categoria.</Text>
          )}

          {/*
            .map() desenha um Appointment para cada partida.
            O index diz a posição: coloco a linha divisória ANTES
            de todo item, menos do primeiro (index > 0).
            A key fica na View de fora, porque é ela que o map devolve.
          */}
          {filteredAppointments.map((item, index) => (
            <View key={item.id}>
              {index > 0 && <ListDivider />}
              <Appointment
                data={item}
                // arrow function porque preciso passar o item como argumento (slide 16)
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
    justifyContent: 'space-between', // perfil na esquerda, botão na direita
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
    flex: 1, // a lista ocupa todo o resto da tela e rola dentro desse espaço
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

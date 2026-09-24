/**
 * CategorySelect.js
 *
 * A fileira HORIZONTAL de categorias, que rola para o lado.
 * Usada na Home e na tela Agendar.
 *
 * @param {string}   categorySelected - id da categoria selecionada ('' = nenhuma)
 * @param {function} setCategory      - função chamada com o id da categoria tocada
 * @param {boolean}  hasCheckBox      - repassado para cada Category
 */

import { ScrollView, StyleSheet } from 'react-native';

import Category from './Category';
import { categories } from '../data/categories';

export default function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }) {
  return (
    <ScrollView
      horizontal // rola para o lado, e não para baixo
      showsHorizontalScrollIndicator={false} // esconde a barrinha de rolagem
      // contentContainerStyle estiliza o CONTEÚDO que rola (slide 68)
      contentContainerStyle={styles.content}
    >
      {/*
        .map() transforma cada item do array em um <Category>.
        A prop key é OBRIGATÓRIA dentro do map (gabarito do slide 78):
        é como o React identifica cada item entre um redesenho e outro.
      */}
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          // Se NENHUMA categoria estiver selecionada (''), todas ficam acesas.
          // Se alguma estiver, só ela fica acesa.
          checked={categorySelected === '' || categorySelected === category.id}
          hasCheckBox={hasCheckBox}
          // ARROW FUNCTION porque preciso passar o id como argumento (slide 16).
          // Sem ela (setCategory(category.id) direto), a função rodaria
          // sozinha ao desenhar a tela.
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
    gap: 8, // espaço entre os cards, sem sobrar margem no último (slide 36)
  },
});

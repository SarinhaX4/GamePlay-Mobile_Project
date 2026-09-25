import { ScrollView, StyleSheet } from 'react-native';

import Category from './Category';
import { categories } from '../data/categories';

// fileira horizontal de categoria, rola pro lado, usa na home e no agendar

export default function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          // se nao tiver categoria selecionada, todas ficam acesas
          checked={categorySelected === '' || categorySelected === category.id}
          hasCheckBox={hasCheckBox}
          // arrow function pq precisa passar o id, senao roda sozinho ao montar
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
    gap: 8, // espaço entre os card
  },
});
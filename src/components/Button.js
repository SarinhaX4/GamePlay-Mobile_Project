/**
 * Button.js
 *
 * O botão principal (rosa no nosso app, vermelho no Figma) aparece em TRÊS telas:
 *   - Login:     "Entrar com Discord"  -> COM ícone do Discord
 *   - Detalhes:  "Entrar na partida"   -> COM ícone do Discord
 *   - Agendar:   "Agendar"             -> SEM ícone
 *
 * Por isso ele virou um componente único, com o ícone OPCIONAL.
 * É a regra do slide 19: "repetiu o mesmo bloco, vire componente".
 *
 * Ele é uma evolução do Button que fizemos no app profile:
 * mantive title, onPress e disabled (igual à aula) e acrescentei icon.
 *
 * @param {string}   title    - texto que aparece dentro do botão
 * @param {function} onPress  - função disparada quando o usuário toca
 * @param {boolean}  disabled - quando true, bloqueia o toque e deixa o botão apagado
 * @param {string}   icon     - nome de um ícone do FontAwesome5 (ex: "discord"). Opcional.
 *
 * @example
 * <Button title="Entrar com Discord" icon="discord" onPress={handleSignIn} />
 * <Button title="Agendar" onPress={handleSave} />
 */

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// @expo/vector-icons já vem instalado em todo projeto Expo.
// FontAwesome5 é uma das famílias de ícones; ela tem o logo do Discord.
// (Isso não foi visto em aula: é um extra.)
import { FontAwesome5 } from '@expo/vector-icons';

import { theme } from '../theme';

// VALOR PADRÃO DE PROP (slide 13):
// se ninguém passar disabled, ele vale false.
// se ninguém passar icon, ele fica undefined e o ícone não aparece.
export default function Button({ title, onPress, disabled = false, icon }) {
  return (
    <TouchableOpacity
      // ARRAY DE ESTILOS + ESTILO CONDICIONAL (slides 26 e 28):
      // o estilo base vem primeiro; a opacidade muda conforme disabled.
      // É exatamente a mesma técnica do Button do profile.
      style={[styles.container, { opacity: disabled ? 0.5 : 1 }]}
      onPress={onPress} // SEM parênteses: passo a função, não chamo (slide 15)
      disabled={disabled}
      activeOpacity={0.7} // opacidade enquanto o dedo está pressionando (slide 47)
    >
      {/*
        RENDERIZAÇÃO CONDICIONAL com &&:
        se icon existir, desenha a caixinha do ícone.
        se icon for undefined, o && para ali e nada é desenhado.
        É a mesma lógica do "ativo && styles.ativo" do slide 28,
        só que aplicada a um pedaço de JSX em vez de um estilo.
      */}
      {icon && (
        <View style={styles.iconWrapper}>
          <FontAwesome5 name={icon} size={20} color={theme.colors.heading} />
        </View>
      )}

      {/* Todo texto visível dentro de um <Text> (regra 4 do slide 7) */}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%', // ocupa toda a largura que o pai liberar
    height: 56, // altura exata do Figma
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row', // ícone e texto LADO A LADO (o padrão seria coluna, slide 31)
    alignItems: 'center', // centraliza no eixo cruzado (vertical, porque é row)
  },
  iconWrapper: {
    width: 56, // quadrado de 56x56 à esquerda, como no Figma
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1, // a linha vertical que separa o ícone do texto
    borderColor: theme.colors.line,
  },
  title: {
    flex: 1, // o texto ocupa todo o espaço que sobrar (slide 35)
    textAlign: 'center',
    color: theme.colors.heading,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
  },
});

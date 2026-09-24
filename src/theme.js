/**
 * theme.js
 *
 * Aqui ficam TODAS as cores e fontes do app.
 *
 * As MEDIDAS e FONTES seguem o Figma. As CORES são uma paleta própria,
 * em tons de roxo, que eu escolhi para personalizar o projeto.
 *
 * POR QUE UM ARQUIVO SÓ PARA ISSO?
 * É o argumento de "Manutenção" do slide 19 da revisão.
 * A prova disso é este próprio projeto: o Figma é azul com vermelho,
 * e para deixar o app roxo eu troquei os valores SÓ AQUI.
 * Nenhuma tela precisou ser alterada.
 *
 * Isto NÃO é um componente: é só um objeto JavaScript comum.
 * Por isso o nome começa com letra minúscula (theme) e não tem JSX.
 *
 * Cada cor tem um comentário com a cor original do Figma,
 * para mostrar a correspondência.
 */

export const theme = {
  colors: {
    primary: '#F72585', // rosa neon: botões, "Anfitrião", checkbox marcado  (Figma: #E51C44 vermelho)
    secondary: '#7B5CD6', // lavanda: borda do botão "Não"                     (Figma: #495BCC)
    heading: '#EFE9FA', // títulos e textos claros                            (Figma: #DDE3F0)
    body: '#B9A9DC', // textos secundários, mais apagados                     (Figma: #ABB1CC)
    background: '#170A2C', // fundo de todas as telas                         (Figma: #0E1647)
    shape: '#2A1650', // fundo dos inputs e dos cards                          (Figma: #1D2766)
    border: '#40247A', // bordas e linhas divisórias                           (Figma: #243189)
    line: '#A3175A', // linha entre o ícone e o texto no botão principal       (Figma: vermelho escuro)
    on: '#2ED47A', // verde: "Disponível" e "Visitante"                        (Figma: #32BD50)
  },

  // Os nomes abaixo são exatamente os nomes que o pacote
  // @expo-google-fonts exporta. Eles são carregados no App.js.
  fonts: {
    title700: 'Rajdhani_700Bold', // títulos
    title500: 'Rajdhani_500Medium', // o "Olá," da Home
    text400: 'Inter_400Regular', // textos comuns
    text500: 'Inter_500Medium', // texto dos botões
  },
};

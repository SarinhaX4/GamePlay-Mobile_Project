# GamePlay

Aplicativo mobile desenvolvido em React Native + Expo, recriando 4 telas do protótipo Figma **"GamePlay - NLW Together"** (um app para agendar partidas de jogos com amigos do Discord). Atividade acadêmica da disciplina de Mobile, do curso de Engenharia de Software (UCB).

**Autora:** Sara Cristina Barros de Oliveira

## Telas desenvolvidas

- **Login** — tela inicial de entrada no app.
- **Home** — lista as partidas agendadas; tocar em uma categoria filtra a lista de partidas e atualiza o total. Tocar na foto de perfil permite sair do app (logout).
- **Detalhes do servidor** — mostra as informações da partida selecionada na Home e a lista de jogadores, e permite compartilhar o convite via API Share nativa.
- **Agendar** — permite selecionar a categoria e preencher data, hora e descrição da partida, com validação de campos e contador de caracteres.



## Fluxo de navegação

```
Login ──(Entrar com Discord)──> Home ──(toque em uma partida)──> Detalhes
                                  │
                                  └──(botão +)──> Agendar

Detalhes / Agendar ──(seta de voltar)──> Home
Home ──(toque na foto → Sair)──> Login
```

## Tecnologias e pacotes utilizados

- JavaScript (sem TypeScript)
- Expo SDK 57
- React Native
- StyleSheet
- @react-navigation/native e @react-navigation/native-stack (navegação entre telas)
- react-native-screens
- react-native-safe-area-context
- @expo-google-fonts/inter
- @expo-google-fonts/rajdhani
- expo-font
- @expo/vector-icons

## Conceitos aplicados

- **Componentes reutilizáveis com props:** o mesmo `Button` é usado em 3 telas (com ícone opcional e estado `disabled`), e `Avatar`, `ListHeader`, `CategorySelect` e `Header` aparecem em mais de uma tela.
- **`children`:** o componente `Background` envolve o conteúdo de todas as telas.
- **Estado com `useState` e elevação de estado:** a categoria selecionada fica na tela, e os cards apenas recebem `checked` por props.
- **Estilo condicional e array de estilos:** opacidade das categorias, cores de "Anfitrião"/"Visitante" e status dos jogadores.
- **Flexbox:** layout de todas as telas.
- **Imagens locais e remotas:** `require` para as imagens do projeto e `{ uri }` para fotos da internet.
- **`TextInput` controlado:** os campos do Agendar usam `value`, o que permite limpar o formulário após agendar.
- **Formulário:** `KeyboardAvoidingView`, `ScrollView` e `Keyboard.dismiss`.
- **`Alert` com botões:** confirmação de agendamento e de logout.

## Personalização

O layout, as medidas e as fontes seguem o protótipo original do Figma. A paleta de cores foi personalizada para tons de roxo com destaque em rosa neon, centralizada em `src/theme.js`. Os dados do usuário (nome e foto) ficam em `src/data/user.js`.

## Estrutura de pastas (resumida)

```
gameplay/
├── App.js              # carrega as fontes e inicia a navegação
├── assets/             # imagens locais
│   ├── avatar.png
│   ├── banner.png
│   ├── illustration.png
│   └── games/          # capas dos jogos
└── src/
    ├── theme.js        # cores e fontes do app
    ├── data/           # dados fictícios (usuário, categorias, partidas, jogadores)
    ├── components/     # componentes reutilizáveis
    ├── screens/        # telas: Login, Home, Detalhes, Agendar
    └── routes/         # rotas de navegação entre as telas
```

## Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- App **Expo Go** instalado no celular (disponível na App Store / Play Store)
- Conta no [Expo](https://expo.dev/) criada

### Passo a passo

```bash
git clone https://github.com/SarinhaX4/gameplay.git
cd gameplay
npm install
npx expo login
npx expo start
```

Depois de rodar `npx expo start`, escaneie o QR code exibido no terminal com a câmera do celular (ou pelo app Expo Go). O app abre na tela de Login.

> ⚠️ O celular e o computador precisam estar conectados na **mesma rede Wi-Fi**.
>
> Se estiverem em redes diferentes, use: `npx expo start --tunnel`
>
> Se o app não atualizar corretamente ou algo parecer "preso" em cache, use: `npx expo start -c`

## Status do projeto

- ✅ Parte 1 — Login
- ✅ Parte 2 — Home
- ✅ Parte 3 — Detalhes do servidor
- ✅ Parte 4 — Agendar
- ✅ Parte 5 — Navegação entre as telas
- ✅ Extra — Logout ao tocar na foto de perfil

## Problemas comuns

**"Unable to resolve module..."**
Geralmente ocorre por nome de arquivo/pasta digitado errado, por imagem faltando na pasta `assets/` ou por falta de instalar algum pacote. Rode `npm install` novamente e confira o caminho do import.

**"You need to be signed in to Expo Go and Expo CLI to open your project"**
Rode `npx expo login` no terminal e faça login também no app Expo Go do celular com a mesma conta.

**Windows Defender aponta falso positivo**
O Windows Defender pode, ocasionalmente, sinalizar falsos positivos em arquivos `.js` do projeto (por causa de links de imagem no código). Se isso acontecer, adicione a pasta do projeto nas exclusões do Windows Defender.

## Créditos

Protótipo original: **GamePlay**, criado pela Rocketseat para o evento NLW Together.

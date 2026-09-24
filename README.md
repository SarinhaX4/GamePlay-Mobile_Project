# GamePlay

Aplicativo mobile desenvolvido em React Native + Expo, recriando 4 telas do protótipo Figma **"GamePlay - NLW Together"** (um app para agendar partidas de jogos com amigos do Discord). Atividade acadêmica da disciplina de Mobile, do curso de Engenharia de Software(UCB).

**Autora:** Sara Cristina Barros de Oliveira

## Telas desenvolvidas

- **Login** — tela inicial de entrada no app.
- **Home** — lista as partidas agendadas; tocar em uma categoria filtra a lista de partidas.
- **Detalhes do servidor** — mostra informações do servidor selecionado e permite compartilhar via API Share nativa.
- **Agendar** — permite selecionar categoria e preencher data/hora da partida, com validação de campos.

> 📸 *Prints das telas em breve.*

## Tecnologias e pacotes utilizados

- JavaScript (sem TypeScript)
- Expo SDK 57
- React Native
- StyleSheet
- @expo-google-fonts/inter
- @expo-google-fonts/rajdhani
- expo-font
- react-native-safe-area-context
- @expo/vector-icons

## Personalização

O layout, as medidas e as fontes seguem o protótipo original do Figma. A paleta de cores foi personalizada para tons de roxo com destaque em rosa neon, centralizada em `src/theme.js`.

## Estrutura de pastas (resumida)
gameplay/
App.js
assets/
avatar.png
banner.png
illustration.png
games/
src/
theme.js
data/
components/
screens/

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

Depois de rodar `npx expo start`, escaneie o QR code exibido no terminal com a câmera do celular (ou pelo app Expo Go).

> ⚠️ O celular e o computador precisam estar conectados na **mesma rede Wi-Fi**.
>
> Se estiverem em redes diferentes, use: `npx expo start --tunnel`
>
> Se o app não atualizar corretamente ou algo parecer "preso" em cache, use: `npx expo start -c`

## Observação

No `App.js`, a tela exibida é trocada manualmente (por exemplo, `<Login />`, `<Home />`, `<Detalhes />` ou `<Agendar />`) enquanto a navegação entre telas não está pronta.

## Status do projeto

- ✅ Parte 1 — Login
- ✅ Parte 2 — Home
- ✅ Parte 3 — Detalhes do servidor
- ✅ Parte 4 — Agendar
- 🔄 Parte 5 — Navegação entre as telas (em andamento)

## Problemas comuns

**"Unable to resolve module..."**
Geralmente ocorre por nome de arquivo/pasta digitado errado, ou por falta de instalar algum pacote. Rode `npm install` novamente e confira o caminho do import.

**"You need to be signed in to view this page"**
Rode `npx expo login` no terminal e faça login também no app Expo Go do celular com a mesma conta.

**Windows Defender aponta falso positivo**
O Windows Defender pode, ocasionalmente, sinalizar falsos positivos em arquivos `.js` do projeto (por causa de links de imagem no código). Se isso acontecer, adicione a pasta do projeto nas exclusões do Windows Defender.


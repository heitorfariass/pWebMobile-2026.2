# >_ heitor.farias — Portfólio em React Native + Expo

Versão mobile do meu portfólio acadêmico/profissional (antes feito em Next.js), agora com **React Native**, **Expo** e **Expo Router**.

## Telas (Expo Router)

Cada arquivo em `app/(tabs)/` vira uma tela da barra de navegação inferior:

| Arquivo | Tela |
| --- | --- |
| `index.js` | Home |
| `sobre.js` | Sobre (tecnologias e módulos usados no app) |
| `academico.js` | Experiência Acadêmica |
| `profissional.js` | Experiência Profissional |
| `projetos.js` | Projetos |
| `jogo.js` | Jogo da Forca (rodando em React Native, sem WebView) |

## Rodar

```bash
npm install
npx expo start
```

Depois escaneie o QR code com o app **Expo Go** no celular, ou pressione `w` para abrir no navegador, `a` para Android ou `i` para iOS.

## Estrutura

```
app/            rotas (Expo Router): _layout.js e (tabs)/
components/     ui.js (Screen, Card, Tag, Button) e forca/ (Game, Hangman)
data/           profile.js (dados do portfólio) e words.js (44 palavras)
assets/images/  fotos e screenshots
theme.js        cores e fonte
```

## Jogo da Forca

Palavra com underlines · teclado virtual · 6 tentativas · letras corretas e erradas listadas · mensagem de vitória/derrota com a palavra · botão reiniciar com nova palavra · 44 palavras · boneco em SVG (`react-native-svg`).

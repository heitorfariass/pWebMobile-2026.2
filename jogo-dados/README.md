# Jogo de Dados

Jogo de dados para 2 jogadores, em 5 rodadas, feito com Next.js (App Router) e React.

## Como funciona
- Cada rodada, Jogador 1 joga primeiro (2 dados), depois Jogador 2 (2 dados).
- Apenas o botão do jogador da vez fica habilitado.
- Vence a rodada quem tirar a maior soma dos dois dados; em caso de igualdade, é empate.
- Ao final das 5 rodadas, é exibido quem venceu a partida (ou empate geral) e o botão "Jogar Novamente" aparece para reiniciar.

## Estrutura
- `app/components/Dado.tsx` — componente que recebe a prop `valor` (1 a 6) e exibe a imagem do dado correspondente.
- `app/components/JogoDados.tsx` — componente com a lógica do jogo e a interface.
- `public/dados/` — imagens SVG dos dados (1.svg a 6.svg), salvas dentro do próprio projeto.

## Rodar localmente
```
npm install
npm run dev
```

## Deploy no Vercel
1. Suba esta pasta para um repositório no GitHub.
2. Importe o repositório em https://vercel.com/new
3. O Vercel detecta o Next.js automaticamente e faz o deploy.

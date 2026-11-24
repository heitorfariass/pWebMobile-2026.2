import { Screen } from "../../components/ui";
import Game from "../../components/forca/Game";

export default function Jogo() {
  return (
    <Screen title="jogo da forca" subtitle="adivinhe a palavra de tecnologia — 6 tentativas">
      <Game />
    </Screen>
  );
}

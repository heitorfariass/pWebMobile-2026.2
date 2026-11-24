import Svg, { Circle, G, Line } from "react-native-svg";
import { colors } from "../../theme";

// Boneco em SVG: cada erro mostra uma parte nova (máx. 6)
// 1 cabeça · 2 corpo · 3 braço E · 4 braço D · 5 perna E · 6 perna D
export default function Hangman({ errors }) {
  const props = { stroke: colors.accent, strokeWidth: 4, strokeLinecap: "round" };
  return (
    <Svg width={200} height={230} viewBox="0 0 220 260">
      <G stroke={colors.faint} strokeWidth={4} strokeLinecap="round">
        <Line x1="30" y1="245" x2="150" y2="245" />
        <Line x1="60" y1="245" x2="60" y2="30" />
        <Line x1="60" y1="30" x2="140" y2="30" />
        <Line x1="140" y1="30" x2="140" y2="58" />
      </G>
      {errors >= 1 && <Circle cx="140" cy="76" r="18" fill="none" {...props} />}
      {errors >= 2 && <Line x1="140" y1="94" x2="140" y2="152" {...props} />}
      {errors >= 3 && <Line x1="140" y1="106" x2="116" y2="130" {...props} />}
      {errors >= 4 && <Line x1="140" y1="106" x2="164" y2="130" {...props} />}
      {errors >= 5 && <Line x1="140" y1="152" x2="120" y2="184" {...props} />}
      {errors >= 6 && <Line x1="140" y1="152" x2="160" y2="184" {...props} />}
    </Svg>
  );
}

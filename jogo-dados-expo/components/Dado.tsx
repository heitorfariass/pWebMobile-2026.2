import { Image, StyleSheet, Text, View } from "react-native";

const imagens: Record<number, number> = {
  1: require("../assets/dados/1.png"),
  2: require("../assets/dados/2.png"),
  3: require("../assets/dados/3.png"),
  4: require("../assets/dados/4.png"),
  5: require("../assets/dados/5.png"),
  6: require("../assets/dados/6.png"),
};

type DadoProps = {
  valor: number | null;
};

export default function Dado({ valor }: DadoProps) {
  if (valor === null) {
    return (
      <View style={[styles.dado, styles.dadoVazio]}>
        <Text style={styles.interrogacao}>?</Text>
      </View>
    );
  }

  return (
    <View style={styles.dado}>
      <Image
        source={imagens[valor]}
        accessibilityLabel={`Dado com valor ${valor}`}
        style={{ width: 80, height: 80 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dado: {
    width: 80,
    height: 80,
    margin: 4,
  },
  dadoVazio: {
    borderWidth: 4,
    borderColor: "#1a1a1a",
    borderRadius: 12,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
  },
  interrogacao: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

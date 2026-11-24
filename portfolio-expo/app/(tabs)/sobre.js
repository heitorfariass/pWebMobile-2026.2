import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Screen, Card, Label } from "../../components/ui";
import { profile, stack } from "../../data/profile";
import { colors, fonts } from "../../theme";

export default function Sobre() {
  return (
    <Screen title="sobre" subtitle="quem sou eu e como este app foi feito">
      <Card>
        {profile.about.map((p) => (
          <Text key={p} style={s.p}>{p}</Text>
        ))}
      </Card>

      <Label>tecnologias e módulos deste app</Label>
      <Text style={s.hint}>Tudo que usei para construir este portfólio:</Text>
      {stack.map((t) => (
        <Card key={t.name} style={s.tech}>
          <Ionicons name={t.icon} size={26} color={colors.accent} />
          <View style={{ flex: 1, marginLeft: 14 }}>
            <Text style={s.techName}>{t.name}</Text>
            <Text style={s.techDesc}>{t.desc}</Text>
          </View>
        </Card>
      ))}
    </Screen>
  );
}

const s = StyleSheet.create({
  p: { color: colors.text, lineHeight: 24, marginBottom: 10 },
  hint: { color: colors.dim, marginBottom: 12, marginTop: 4 },
  tech: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  techName: { color: colors.text, fontFamily: fonts.mono, fontSize: 15 },
  techDesc: { color: colors.dim, fontSize: 13, marginTop: 2, lineHeight: 19 },
});

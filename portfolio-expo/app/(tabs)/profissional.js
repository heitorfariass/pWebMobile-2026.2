import { Image, StyleSheet, Text, View } from "react-native";
import { Screen, Card, Tag, Button, Label, openLink } from "../../components/ui";
import { experience } from "../../data/profile";
import { colors, fonts } from "../../theme";

export default function Profissional() {
  return (
    <Screen title="experiência profissional" subtitle="onde já atuei">
      {experience.map((x) => (
        <Card key={x.title} featured>
          <View style={s.top}>
            <Image source={x.image} style={s.logo} />
            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={s.title}>{x.title}</Text>
              <Text style={s.company}>{x.company}</Text>
              <Text style={s.period}>{x.period}</Text>
            </View>
          </View>
          <Text style={s.desc}>{x.description}</Text>
          <Label>competências</Label>
          <View style={s.tags}>
            {x.skills.map((k) => <Tag key={k} label={k} />)}
          </View>
          <Button label={`${x.link.label} ↗`} secondary onPress={() => openLink(x.link.url)} />
        </Card>
      ))}
    </Screen>
  );
}

const s = StyleSheet.create({
  top: { flexDirection: "row", alignItems: "center" },
  logo: { width: 64, height: 64, borderRadius: 10 },
  title: { color: colors.text, fontSize: 16, fontWeight: "700" },
  company: { color: colors.dim, marginTop: 2 },
  period: { color: colors.accent, fontFamily: fonts.mono, fontSize: 12, marginTop: 4 },
  desc: { color: colors.text, lineHeight: 22, marginTop: 14 },
  tags: { flexDirection: "row", flexWrap: "wrap", marginBottom: 6 },
});

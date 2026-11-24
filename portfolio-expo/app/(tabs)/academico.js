import { Image, StyleSheet, Text, View } from "react-native";
import { Screen, Card, Tag, Label } from "../../components/ui";
import { education, extracurricular } from "../../data/profile";
import { colors, fonts } from "../../theme";

export default function Academico() {
  return (
    <Screen title="experiência acadêmica" subtitle="formação e cursos extracurriculares">
      <Label>formação</Label>
      {education.map((e) => (
        <Card key={e.title} featured>
          <Image source={e.image} style={s.banner} resizeMode="cover" />
          <Text style={s.caption}>{e.caption}</Text>
          <Text style={s.title}>{e.title}</Text>
          <Text style={s.inst}>{e.institution}</Text>
          <Text style={s.period}>{e.period}</Text>
          <Text style={s.sub}>disciplinas cursadas</Text>
          <View style={s.tags}>
            {e.courses.map((c) => <Tag key={c} label={c} />)}
          </View>
        </Card>
      ))}

      <Label>extracurricular</Label>
      {extracurricular.map((x) => (
        <Card key={x.title}>
          <Text style={s.title}>{x.title}</Text>
          <Text style={s.inst}>{x.institution}</Text>
          <Text style={s.period}>{x.period}</Text>
          <Image source={x.image} style={s.badge} resizeMode="contain" />
          <Text style={s.desc}>{x.description}</Text>
          <View style={s.bar}>
            <View style={[s.barFill, { width: `${(x.progress.done / x.progress.total) * 100}%` }]} />
          </View>
          <Text style={s.progress}>{x.progress.done} de {x.progress.total} cursos concluídos</Text>
        </Card>
      ))}
    </Screen>
  );
}

const s = StyleSheet.create({
  banner: { width: "100%", height: 150, borderRadius: 8 },
  caption: { color: colors.faint, fontFamily: fonts.mono, fontSize: 11, marginTop: 4, marginBottom: 10 },
  title: { color: colors.text, fontSize: 18, fontWeight: "700" },
  inst: { color: colors.dim, marginTop: 2 },
  period: { color: colors.accent, fontFamily: fonts.mono, fontSize: 12, marginTop: 4 },
  sub: { color: colors.faint, fontFamily: fonts.mono, marginTop: 14, fontSize: 12 },
  tags: { flexDirection: "row", flexWrap: "wrap" },
  badge: { width: "100%", height: 140, marginTop: 12 },
  desc: { color: colors.text, lineHeight: 22, marginTop: 10 },
  bar: { height: 8, borderRadius: 4, backgroundColor: colors.accentSoft, marginTop: 14, overflow: "hidden" },
  barFill: { height: 8, backgroundColor: colors.accent },
  progress: { color: colors.dim, fontFamily: fonts.mono, fontSize: 12, marginTop: 6 },
});

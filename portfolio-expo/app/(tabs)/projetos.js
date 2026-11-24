import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Screen, Card, Tag, Button, openLink } from "../../components/ui";
import { projects } from "../../data/profile";
import { colors, fonts } from "../../theme";

export default function Projetos() {
  const router = useRouter();

  return (
    <Screen title="projetos" subtitle="o que já construí">
      {projects.map((p) => (
        <Card key={p.title} featured={p.featured}>
          {p.featured && <Text style={s.badge}>★ projeto principal</Text>}
          <Text style={s.title}>{p.title}</Text>
          <Text style={s.tagline}>{p.tagline}</Text>

          {p.screenshots && (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 14 }}>
              {p.screenshots.map((sc) => (
                <View key={sc.caption} style={{ marginRight: 12 }}>
                  <Image source={sc.src} style={s.shot} resizeMode="cover" />
                  <Text style={s.cap}>{sc.caption}</Text>
                </View>
              ))}
            </ScrollView>
          )}
          {p.image && (
            <Image source={p.image} style={[s.photo, { aspectRatio: p.imageRatio }]} resizeMode="cover" />
          )}

          {p.description.map((d) => (
            <Text key={d} style={s.desc}>{d}</Text>
          ))}
          <View style={s.tags}>
            {p.tech.map((t) => <Tag key={t} label={t} />)}
          </View>
          <Button
            label={p.route ? `${p.linkLabel} →` : `${p.linkLabel} ↗`}
            onPress={() => (p.route ? router.push(p.route) : openLink(p.url))}
          />
        </Card>
      ))}
    </Screen>
  );
}

const s = StyleSheet.create({
  badge: { color: colors.accent, fontFamily: fonts.mono, fontSize: 12, marginBottom: 6 },
  title: { color: colors.text, fontSize: 20, fontWeight: "700" },
  tagline: { color: colors.dim, marginTop: 2 },
  shot: { width: 130, height: 260, borderRadius: 12, borderWidth: 1, borderColor: colors.line },
  cap: { color: colors.faint, fontFamily: fonts.mono, fontSize: 11, marginTop: 4, textAlign: "center" },
  photo: { width: "70%", alignSelf: "center", marginTop: 14, borderRadius: 12, maxHeight: 360 },
  desc: { color: colors.text, lineHeight: 22, marginTop: 12 },
  tags: { flexDirection: "row", flexWrap: "wrap", marginBottom: 6 },
});

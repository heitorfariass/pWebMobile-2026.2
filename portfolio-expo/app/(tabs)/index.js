import { useEffect, useRef, useState } from "react";
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Screen, Card, Button, Label, openLink } from "../../components/ui";
import { profile, skillGroups } from "../../data/profile";
import { colors, fonts } from "../../theme";

// Escreve o texto letra por letra (efeito de digitação)
function Typing({ text }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(0);
    const id = setInterval(() => setN((v) => (v < text.length ? v + 1 : v)), 55);
    return () => clearInterval(id);
  }, [text]);
  return <Text style={s.tagline}>{text.slice(0, n)}</Text>;
}

// Cursor e bolinha de status piscando
function Blink({ style, children }) {
  const op = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(op, { toValue: 0.15, duration: 700, useNativeDriver: true }),
        Animated.timing(op, { toValue: 1, duration: 700, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [op]);
  return <Animated.View style={[style, { opacity: op }]}>{children}</Animated.View>;
}

const atalhos = [
  { rota: "/sobre", label: "Sobre", icon: "person-outline" },
  { rota: "/academico", label: "Acadêmico", icon: "school-outline" },
  { rota: "/profissional", label: "Profissional", icon: "briefcase-outline" },
  { rota: "/projetos", label: "Projetos", icon: "code-slash-outline" },
];

export default function Home() {
  const router = useRouter();
  const [i, setI] = useState(0);

  // alterna os subtítulos a cada 5s
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % profile.taglines.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <Screen>
      <View style={s.hero}>
        <View>
          <Image source={profile.foto} style={s.foto} />
          <Blink style={s.dot} />
        </View>
        <Text style={s.hello}>olá, mundo — eu sou</Text>
        <Text style={s.name}>{profile.name}</Text>
        <View style={s.row}>
          <Typing text={profile.taglines[i]} />
          <Blink><Text style={s.tagline}>▌</Text></Blink>
        </View>
        <View style={s.row}>
          <Button label="ver projetos" onPress={() => router.push("/projetos")} />
          <Button label="./jogar forca" secondary onPress={() => router.push("/jogo")} />
        </View>
      </View>

      <Label>navegação rápida</Label>
      <View style={s.grid}>
        {atalhos.map((a) => (
          <Pressable key={a.rota} style={s.atalho} onPress={() => router.push(a.rota)}>
            <Ionicons name={a.icon} size={24} color={colors.accent} />
            <Text style={s.atalhoText}>{a.label}</Text>
          </Pressable>
        ))}
      </View>

      <Label>habilidades</Label>
      {skillGroups.map((g) => (
        <Card key={g.label}>
          <Text style={s.groupTitle}>{g.label}</Text>
          {g.items.map((item) => (
            <Text key={item} style={s.item}>
              <Text style={{ color: colors.accent }}>› </Text>{item}
            </Text>
          ))}
        </Card>
      ))}

      <Label>contato</Label>
      <Card>
        {[
          { icon: "mail-outline", text: profile.contact.email, url: `mailto:${profile.contact.email}` },
          { icon: "logo-github", text: "github.com/heitorfariass", url: profile.contact.github },
          { icon: "logo-linkedin", text: "linkedin.com/in/heitorfariassantos", url: profile.contact.linkedin },
        ].map((c) => (
          <Pressable key={c.text} style={s.contact} onPress={() => openLink(c.url)}>
            <Ionicons name={c.icon} size={20} color={colors.accent} />
            <Text style={s.contactText}>{c.text}</Text>
          </Pressable>
        ))}
      </Card>

      <Text style={s.footer}>© 2026 {profile.handle} · feito com React Native + Expo</Text>
    </Screen>
  );
}

const s = StyleSheet.create({
  hero: { alignItems: "center", paddingVertical: 24 },
  foto: { width: 128, height: 128, borderRadius: 64, borderWidth: 2, borderColor: colors.accent },
  dot: { position: "absolute", right: 6, bottom: 8, width: 16, height: 16, borderRadius: 8, backgroundColor: colors.accent, borderWidth: 3, borderColor: colors.bg },
  hello: { color: colors.dim, fontFamily: fonts.mono, marginTop: 18 },
  name: { color: colors.text, fontSize: 30, fontWeight: "700", textAlign: "center", marginTop: 4 },
  row: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", marginTop: 8 },
  tagline: { color: colors.accent, fontFamily: fonts.mono, fontSize: 16, minHeight: 24 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 8 },
  atalho: { width: "48%", backgroundColor: colors.card, borderWidth: 1, borderColor: colors.line, borderRadius: 12, padding: 16, alignItems: "center", marginBottom: 12 },
  atalhoText: { color: colors.text, fontFamily: fonts.mono, marginTop: 8 },
  groupTitle: { color: colors.accent, fontFamily: fonts.mono, marginBottom: 8 },
  item: { color: colors.text, lineHeight: 24 },
  contact: { flexDirection: "row", alignItems: "center", paddingVertical: 10 },
  contactText: { color: colors.text, marginLeft: 12, flexShrink: 1 },
  footer: { color: colors.faint, fontFamily: fonts.mono, fontSize: 12, textAlign: "center", marginTop: 16 },
});

import { useEffect, useRef } from "react";
import { Animated, Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, fonts } from "../theme";

// Abre links externos (site, e-mail, GitHub...)
export const openLink = (url) => Linking.openURL(url).catch(() => {});

// Estrutura base de toda tela: fundo escuro + rolagem + animação de entrada
export function Screen({ title, subtitle, children }) {
  const fade = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 500, useNativeDriver: true }).start();
  }, [fade]);

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Animated.View style={{ opacity: fade, transform: [{ translateY: fade.interpolate({ inputRange: [0, 1], outputRange: [14, 0] }) }] }}>
          {title ? (
            <View style={styles.header}>
              <Text style={styles.prompt}>{">_ "}<Text style={styles.title}>{title}</Text></Text>
              {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
            </View>
          ) : null}
          {children}
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

export function Card({ children, style, featured }) {
  return <View style={[styles.card, featured && styles.featured, style]}>{children}</View>;
}

export function Tag({ label }) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
}

export function Button({ label, onPress, secondary }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.btn, secondary ? styles.btnSec : styles.btnPri, pressed && { opacity: 0.7 }]}
    >
      <Text style={[styles.btnText, secondary && { color: colors.accent }]}>{label}</Text>
    </Pressable>
  );
}

export function Label({ children }) {
  return <Text style={styles.label}>{children}</Text>;
}

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  scroll: { padding: 20, paddingBottom: 40, maxWidth: 760, width: "100%", alignSelf: "center" },
  header: { marginBottom: 22, marginTop: 6 },
  prompt: { fontFamily: fonts.mono, color: colors.accent, fontSize: 14 },
  title: { color: colors.text, fontSize: 26 },
  subtitle: { color: colors.dim, marginTop: 6, fontSize: 14, lineHeight: 21 },
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  featured: { borderColor: colors.lineStrong },
  tag: {
    borderWidth: 1,
    borderColor: colors.lineStrong,
    backgroundColor: colors.accentSoft,
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 3,
    marginRight: 8,
    marginTop: 8,
  },
  tagText: { color: colors.accent, fontFamily: fonts.mono, fontSize: 12 },
  btn: { paddingVertical: 12, paddingHorizontal: 18, borderRadius: 8, borderWidth: 1, borderColor: colors.accent, marginRight: 10, marginTop: 8 },
  btnPri: { backgroundColor: colors.accent },
  btnSec: { backgroundColor: "transparent" },
  btnText: { color: colors.bg, fontFamily: fonts.mono, fontSize: 14 },
  label: { color: colors.accent, fontFamily: fonts.mono, fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginTop: 14, marginBottom: 2 },
});

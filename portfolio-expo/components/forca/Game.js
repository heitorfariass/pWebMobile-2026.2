import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { randomWord } from "../../data/words";
import Hangman from "./Hangman";
import { colors, fonts } from "../../theme";

const MAX_ERRORS = 6;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Game() {
  const [word, setWord] = useState(() => randomWord());
  const [guessed, setGuessed] = useState([]); // letras já tentadas

  const wrong = guessed.filter((l) => !word.includes(l));
  const correct = guessed.filter((l) => word.includes(l));
  const won = word.split("").every((l) => guessed.includes(l));
  const lost = wrong.length >= MAX_ERRORS;
  const over = won || lost;
  const remaining = MAX_ERRORS - wrong.length;

  const play = (letter) => {
    if (over || guessed.includes(letter)) return;
    setGuessed([...guessed, letter]);
  };

  const restart = () => {
    setWord(randomWord(word)); // nova palavra, diferente da anterior
    setGuessed([]);
  };

  return (
    <View style={s.game}>
      {/* palavra com underlines */}
      <View style={s.word}>
        {word.split("").map((l, i) => (
          <View key={i} style={s.cell}>
            <Text style={s.cellText}>{guessed.includes(l) ? l : ""}</Text>
          </View>
        ))}
      </View>

      <Text style={s.attempts}>
        <Text style={{ color: colors.accent }}>{remaining}</Text> tentativa{remaining !== 1 ? "s" : ""} restante{remaining !== 1 ? "s" : ""}
      </Text>

      <Hangman errors={wrong.length} />

      {/* teclado virtual */}
      <View style={s.keyboard}>
        {ALPHABET.map((l) => {
          const used = guessed.includes(l);
          const ok = used && word.includes(l);
          const bad = used && !word.includes(l);
          return (
            <Pressable
              key={l}
              onPress={() => play(l)}
              disabled={used || over}
              style={[s.key, ok && s.keyOk, bad && s.keyBad, !used && over && { opacity: 0.4 }]}
            >
              <Text style={[s.keyText, ok && { color: colors.accent }, bad && { color: colors.danger }]}>{l}</Text>
            </Pressable>
          );
        })}
      </View>

      {/* letras tentadas */}
      <View style={s.tried}>
        <Text style={s.triedLabel}>letras corretas</Text>
        <Text style={[s.triedLetters, { color: colors.accent }]}>{correct.length ? correct.join(" ") : "—"}</Text>
        <Text style={s.triedLabel}>letras erradas</Text>
        <Text style={[s.triedLetters, { color: colors.danger }]}>{wrong.length ? wrong.join(" ") : "—"}</Text>
      </View>

      {won && <Text style={[s.msg, { color: colors.accent }]}>🎉 Parabéns, você venceu! A palavra era {word}</Text>}
      {lost && <Text style={[s.msg, { color: colors.danger }]}>Fim de jogo. A palavra era {word}</Text>}

      <Pressable onPress={restart} style={({ pressed }) => [s.restart, pressed && { opacity: 0.7 }]}>
        <Text style={s.restartText}>↻ reiniciar</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  game: { alignItems: "center" },
  word: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginVertical: 10 },
  cell: { width: 26, height: 38, borderBottomWidth: 3, borderBottomColor: colors.accent, marginHorizontal: 3, marginVertical: 4, alignItems: "center", justifyContent: "flex-end" },
  cellText: { color: colors.text, fontFamily: fonts.mono, fontSize: 24 },
  attempts: { color: colors.dim, fontFamily: fonts.mono, marginBottom: 6 },
  keyboard: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: 10 },
  key: { width: 40, height: 44, margin: 3, borderRadius: 8, borderWidth: 1, borderColor: colors.line, backgroundColor: colors.card, alignItems: "center", justifyContent: "center" },
  keyOk: { borderColor: colors.accent, backgroundColor: colors.accentSoft },
  keyBad: { borderColor: colors.danger, opacity: 0.55 },
  keyText: { color: colors.text, fontFamily: fonts.mono, fontSize: 16 },
  tried: { marginTop: 16, alignSelf: "stretch" },
  triedLabel: { color: colors.faint, fontFamily: fonts.mono, fontSize: 12, marginTop: 8 },
  triedLetters: { fontFamily: fonts.mono, fontSize: 18, letterSpacing: 2 },
  msg: { fontFamily: fonts.mono, fontSize: 16, textAlign: "center", marginTop: 18 },
  restart: { marginTop: 18, paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, borderWidth: 1, borderColor: colors.accent },
  restartText: { color: colors.accent, fontFamily: fonts.mono, fontSize: 15 },
});

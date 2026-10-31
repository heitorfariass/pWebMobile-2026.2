import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Dado from "./Dado";

const TOTAL_RODADAS = 5;

type Turno = "jogador1" | "jogador2";

function rolarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);
  const [turno, setTurno] = useState<Turno>("jogador1");
  const [dadosJogador1, setDadosJogador1] = useState<[number | null, number | null]>([null, null]);
  const [dadosJogador2, setDadosJogador2] = useState<[number | null, number | null]>([null, null]);
  const [mensagem, setMensagem] = useState("");
  const [vitoriasJogador1, setVitoriasJogador1] = useState(0);
  const [vitoriasJogador2, setVitoriasJogador2] = useState(0);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  function jogarJogador1() {
    const novosDados: [number, number] = [rolarDado(), rolarDado()];
    setDadosJogador1(novosDados);
    setDadosJogador2([null, null]);
    setMensagem("");
    setTurno("jogador2");
  }

  function jogarJogador2() {
    const novosDados: [number, number] = [rolarDado(), rolarDado()];
    setDadosJogador2(novosDados);

    const somaJogador1 = (dadosJogador1[0] ?? 0) + (dadosJogador1[1] ?? 0);
    const somaJogador2 = novosDados[0] + novosDados[1];

    let novaVitoriasJogador1 = vitoriasJogador1;
    let novaVitoriasJogador2 = vitoriasJogador2;

    if (somaJogador1 > somaJogador2) {
      novaVitoriasJogador1 += 1;
      setMensagem("Jogador 1 venceu");
    } else if (somaJogador2 > somaJogador1) {
      novaVitoriasJogador2 += 1;
      setMensagem("Jogador 2 venceu");
    } else {
      setMensagem("Empate");
    }

    setVitoriasJogador1(novaVitoriasJogador1);
    setVitoriasJogador2(novaVitoriasJogador2);

    if (rodada === TOTAL_RODADAS) {
      setJogoFinalizado(true);
      if (novaVitoriasJogador1 > novaVitoriasJogador2) {
        setMensagem("Jogador 1 venceu o jogo");
      } else if (novaVitoriasJogador2 > novaVitoriasJogador1) {
        setMensagem("Jogador 2 venceu o jogo");
      } else {
        setMensagem("Empate Geral");
      }
    } else {
      setRodada(rodada + 1);
      setTurno("jogador1");
    }
  }

  function jogarNovamente() {
    setRodada(1);
    setTurno("jogador1");
    setDadosJogador1([null, null]);
    setDadosJogador2([null, null]);
    setMensagem("");
    setVitoriasJogador1(0);
    setVitoriasJogador2(0);
    setJogoFinalizado(false);
  }

  return (
    <View style={styles.jogoContainer}>
      <Text style={styles.titulo}>Jogo de Dados</Text>
      <Text style={styles.rodada}>Rodada {rodada}/{TOTAL_RODADAS}</Text>

      <View style={styles.coluna}>
        <Text style={styles.jogador}>Jogador 1</Text>
        <Text>Vitórias: {vitoriasJogador1}</Text>
        <View style={styles.dadosLinha}>
          <Dado valor={dadosJogador1[0]} />
          <Dado valor={dadosJogador1[1]} />
        </View>
        <Button
          title="Jogar"
          onPress={jogarJogador1}
          disabled={turno !== "jogador1" || jogoFinalizado}
        />
      </View>

      <View style={styles.divisor} />

      <View style={styles.coluna}>
        <Text style={styles.jogador}>Jogador 2</Text>
        <Text>Vitórias: {vitoriasJogador2}</Text>
        <View style={styles.dadosLinha}>
          <Dado valor={dadosJogador2[0]} />
          <Dado valor={dadosJogador2[1]} />
        </View>
        <Button
          title="Jogar"
          onPress={jogarJogador2}
          disabled={turno !== "jogador2" || jogoFinalizado}
        />
      </View>

      <Text style={styles.mensagem}>{mensagem}</Text>

      {jogoFinalizado && (
        <Button title="Jogar Novamente" onPress={jogarNovamente} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  jogoContainer: {
    alignItems: "center",
    padding: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
  },
  rodada: {
    fontSize: 18,
    marginVertical: 8,
  },
  coluna: {
    alignItems: "center",
    marginVertical: 8,
  },
  jogador: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dadosLinha: {
    flexDirection: "row",
    marginVertical: 8,
  },
  divisor: {
    width: "80%",
    height: 1,
    backgroundColor: "#ccc",
  },
  mensagem: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
    minHeight: 28,
  },
});

"use client";

import { useState } from "react";
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
      setDadosJogador1([null, null]);
      setDadosJogador2([null, null]);
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
    <div className="jogo-container">
      <h1>Jogo de Dados</h1>
      <p className="rodada">Rodada {rodada}/{TOTAL_RODADAS}</p>

      <div className="jogadores">
        <div className="coluna">
          <h2>Jogador 1</h2>
          <div className="dados-linha">
            <Dado valor={dadosJogador1[0]} />
            <Dado valor={dadosJogador1[1]} />
          </div>
          <button
            onClick={jogarJogador1}
            disabled={turno !== "jogador1" || jogoFinalizado}
          >
            Jogar
          </button>
        </div>

        <div className="divisor" />

        <div className="coluna">
          <h2>Jogador 2</h2>
          <div className="dados-linha">
            <Dado valor={dadosJogador2[0]} />
            <Dado valor={dadosJogador2[1]} />
          </div>
          <button
            onClick={jogarJogador2}
            disabled={turno !== "jogador2" || jogoFinalizado}
          >
            Jogar
          </button>
        </div>
      </div>

      <div className="mensagem">{mensagem}</div>

      {jogoFinalizado && (
        <button className="jogar-novamente" onClick={jogarNovamente}>
          Jogar Novamente
        </button>
      )}
    </div>
  );
}

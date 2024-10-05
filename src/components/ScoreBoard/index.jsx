import React from "react";
import { Board } from "./styles";

export function ScoreBoard({ wins, losses, draws }) {
  return (
    <Board>
      <h2>Placar</h2>
      <p>Vitórias: {wins}</p>
      <p>Derrotas: {losses}</p>
      <p>Empates: {draws}</p>
    </Board>
  );
}

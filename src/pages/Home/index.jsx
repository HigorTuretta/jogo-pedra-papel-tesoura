import React, { useState } from "react";
import { Container, Title } from "./styles";
import { MoveButton } from "../../components/MoveButton";
import { ScoreBoard } from "../../components/ScoreBoard";
import { Result } from "../../components/Result";

const moves = ["Pedra", "Papel", "Tesoura"];

const getResult = (player, computer) => {
  if (player === computer) {
    return "Empate!";
  } else if (
    (player === "Pedra" && computer === "Tesoura") ||
    (player === "Papel" && computer === "Pedra") ||
    (player === "Tesoura" && computer === "Papel")
  ) {
    return "Você venceu!";
  } else {
    return "Você perdeu!";
  }
};

export function Home() {
  const [playerMove, setPlayerMove] = useState("");
  const [computerMove, setComputerMove] = useState("");
  const [result, setResult] = useState("");
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);

  const onPlayerMove = (move) => {
    const randomIndex = Math.floor(Math.random() * moves.length);
    const computerChoice = moves[randomIndex];

    const gameResult = getResult(move, computerChoice);

    setPlayerMove(move);
    setComputerMove(computerChoice);
    setResult(gameResult);

    if (gameResult === "Você venceu!") {
      setWins((prevWins) => prevWins + 1);
    } else if (gameResult === "Você perdeu!") {
      setLosses((prevLosses) => prevLosses + 1);
    } else {
      setDraws((prevDraws) => prevDraws + 1);
    }
  };

  return (
    <Container>
      <Title>じゃんけんぽん - JOKENPÔ 🪨🧻✂️</Title>
      <div>
        {moves.map((move) => (
          <MoveButton key={move} move={move} onPlayerMove={onPlayerMove} />
        ))}
      </div>
      <Result
        result={result}
        playerMove={playerMove}
        computerMove={computerMove}
      />
      <ScoreBoard wins={wins} losses={losses} draws={draws} />
    </Container>
  );
}

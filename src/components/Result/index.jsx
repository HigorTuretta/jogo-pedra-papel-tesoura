import React from "react";
import { ResultContainer } from "./styles";

export function Result({ result, playerMove, computerMove }) {
  return (
    <ResultContainer>
      <h2>{result}</h2>
      {playerMove && computerMove && (
        <>
          <p>Você escolheu: {playerMove}</p>
          <p>Computador escolheu: {computerMove}</p>
        </>
      )}
    </ResultContainer>
  );
}

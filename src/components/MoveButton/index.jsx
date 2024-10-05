import React from "react";
import { Button } from "./styles";

export function MoveButton({ move, onPlayerMove }) {
  return <Button onClick={() => onPlayerMove(move)}>{move}</Button>;
}

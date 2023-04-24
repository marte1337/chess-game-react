import { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function PlayAdvancedMoveEngine() {
  const [game, setGame] = useState(new Chess());

  // Get all legal moves for the current position
  const legalMoves = game.moves();
  console.log(legalMoves);

  // Filter the legal moves to only allow pawn moves
  const legalPawnMoves = legalMoves.filter((move) => {
    const piece = game.get(move.from);
    return piece && piece.type === "p";
  });

  console.log(legalPawnMoves);

  return <Chessboard position={game.fen()} />;
}

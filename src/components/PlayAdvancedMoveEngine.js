import { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function PlayRandomMoveEngine() {
  const [game, setGame] = useState(new Chess());

  //   function makeAMove(move) {
  //     const gameCopy = { ...game };
  //     const result = gameCopy.move(move);
  //     setGame(gameCopy);
  //     return result; // null if the move was illegal, the move object if the move was legal
  //   }

  // Override the knight's moves function to allow for an extra jump
  const knightMoves = (square) => {
    const moves = [
      { file: 2, rank: 3 },
      { file: 3, rank: 2 },
      { file: -1, rank: 2 },
      { file: -2, rank: 1 },
      { file: 2, rank: -3 },
      { file: 3, rank: -2 },
      { file: -1, rank: -2 },
      { file: -2, rank: -1 },
    ];
    const pos = Chess.SQUARES[square];
    const legalMoves = [];
    moves.forEach((move) => {
      const dest = Chess.SQUARES[pos + move.file + 16 * move.rank];
      if (dest && !game.get(dest)) {
        legalMoves.push({ from: square, to: dest });
      }
    });
    return legalMoves;
  };

  // Override the knight's move function in the game object
  game.moveKnight = knightMoves;
  console.log(knightMoves);

  // Generate legal moves for a knight at e4 with the modified move function
  const legalMoves = game.moveKnight("e4");

  console.log(legalMoves);

  //   function makeRandomMove() {
  //     const possibleMoves = game.moves();
  //     if (game.game_over() || game.in_draw() || possibleMoves.length === 0)
  //       return; // exit if the game is over
  //     const randomIndex = Math.floor(Math.random() * possibleMoves.length);
  //     makeAMove(possibleMoves[randomIndex]);
  //   }

  //   function onDrop(sourceSquare, targetSquare) {
  //     const move = makeAMove({
  //       from: sourceSquare,
  //       to: targetSquare,
  //       promotion: "q", // always promote to a queen for example simplicity
  //     });

  //     // illegal move
  //     if (move === null) return false;
  //     setTimeout(makeRandomMove, 200);
  //     return true;
  //   }

  //   return <Chessboard position={game.fen()} onPieceDrop={onDrop} />;
  return <Chessboard position={game.fen()} />;
}

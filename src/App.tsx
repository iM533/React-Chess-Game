import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";

function App() {
const [board, setBoard] = useState(new Board());
const [whitePlayer] = useState(new Player(Colors.WHITE))
const [blackPlayer] = useState(new Player(Colors.BLACK))
const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

const restart = useCallback(() => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
}, [setBoard, setCurrentPlayer, whitePlayer]);

useEffect(() => {
    restart();
}, [restart]);

const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
}
  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer}/>
    </div>
  );
}

export default App;

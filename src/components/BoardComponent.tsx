import React, {FC} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";

interface IBoard {
    board: Board,
    setBoard: (board: Board) => void;
}


const BoardComponent: FC<IBoard> = ({board, setBoard}) => {
    return (
        <div className="board">
            {board.cells.map((row) => row.map(cell => <CellComponent key={cell.id} cell={cell}></CellComponent>)
            )}
        </div>
    );
};

export default BoardComponent;
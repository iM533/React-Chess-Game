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
            {board.cells.map((row) => row.map(e => <CellComponent key={e.id} color={e.color}></CellComponent>)
            )}
        </div>
    );
};

export default BoardComponent;
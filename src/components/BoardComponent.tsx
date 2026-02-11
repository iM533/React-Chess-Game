import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";

interface IBoard {
    board: Board,
    setBoard: (board: Board) => void;
}


const BoardComponent: FC<IBoard> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    function click(cell: Cell){
        if(cell.figure)
        setSelectedCell(cell);
    }

    useEffect(() => {
        highlightCells();
    }, [selectedCell]);

    function highlightCells () {
        board.highlightCells(selectedCell)
        updateBoard();
    }

    function updateBoard () {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div className="board">
            {board.cells.map((row) => row.map(cell =>
                <CellComponent
                click={click}
                key={cell.id}
                cell={cell}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                />)
            )}
        </div>
    );
};

export default BoardComponent;
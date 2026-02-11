import React, {FC} from 'react';
import {Colors} from "../models/Colors";
import {Cell} from "../models/Cell";

interface ICell {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<ICell> = ({cell, selected, click}) => {
    return (
        <div className={['cell', cell.color, selected ? 'selected' : '', cell.figure && cell.available ? 'enemy' : ''].join(' ')}
             onClick={() => click(cell)}
        >
            {cell.available && !cell.figure && <div className='available'></div>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt=''/>}

        </div>
    );
};

export default CellComponent;
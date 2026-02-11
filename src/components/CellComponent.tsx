import React, {FC} from 'react';
import {Colors} from "../models/Colors";
import {Cell} from "../models/Cell";

interface ICell {
    cell: Cell;
}

const CellComponent: FC<ICell> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}>
            {cell.figure?.logo && <img src={cell.figure.logo} alt=''/>}
        </div>
    );
};

export default CellComponent;
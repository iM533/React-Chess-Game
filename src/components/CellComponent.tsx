import React, {FC} from 'react';
import {Colors} from "../models/Colors";
import {Cell} from "../models/Cell";

interface ICell {
    color: Colors
}

const CellComponent: FC<ICell> = ({color}) => {
    return (
        <div className={['cell', color].join(' ')}/>
    );
};

export default CellComponent;
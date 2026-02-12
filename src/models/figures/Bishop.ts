import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from '../../images/black-bishop.png'
import whiteLogo from '../../images/white-bishop.png'

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.name = FigureNames.BISHOP;
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false
        if(this.cell.isEmptyDiagonal(target))
            return true
        return false;
    }
}
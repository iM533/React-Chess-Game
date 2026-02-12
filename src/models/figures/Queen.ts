import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteLogo from "../../images/white-queen.png";
import blackLogo from "../../images/black-queen.png";

export class Queen extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.name = FigureNames.QUEEN;
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        if(this.cell.isEmptyDiagonal(target))
            return true;
        if (this.cell.isEmptyHorizontal(target))
            return true
        if (this.cell.isEmptyVertical(target))
            return true
        return false;
    }

}
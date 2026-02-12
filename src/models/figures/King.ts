import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteLogo from "../../images/white-king.png";
import blackLogo from "../../images/black-king.png";

export class King extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.name = FigureNames.KING;
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false

        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);

        if ((dx === 1 && dy === 1)){
            return true
        }

        if(((target.y === this.cell.y + 1 || target.y === this.cell.y - 1) && target.x === this.cell.x) || ((target.x === this.cell.x + 1 || target.x === this.cell.x - 1) && target.y === this.cell.y)){
            return true
        }

        return false


    }
}
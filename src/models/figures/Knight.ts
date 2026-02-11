import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteLogo from "../../images/white-knight.png";
import blackLogo from "../../images/black-knight.png";

export class Knight extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.name = FigureNames.KNIGHT;
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }
}
import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteLogo from "../../images/white-rook.png";
import blackLogo from "../../images/black-rook.png";

export class Rook extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.name = FigureNames.ROOK;
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
    }
}
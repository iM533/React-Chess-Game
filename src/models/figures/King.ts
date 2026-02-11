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
}
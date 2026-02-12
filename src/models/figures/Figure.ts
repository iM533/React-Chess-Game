import logo from '../../images/black-bishop.png'
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export enum FigureNames {
    FIGURE = 'Figure',
    BISHOP = 'Bishop',
    KING = 'King',
    PAWN = 'Pawn',
    QUEEN = 'Queen',
    ROOK = 'Rook',
    KNIGHT = 'Knight',
}

export class Figure {
    logo: typeof logo | null;
    name: FigureNames;
    id: number;
    constructor(public color: Colors, public cell: Cell ) {
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        if(target.figure?.color === this.color){
            return false;
        }
        if(target.figure?.name === FigureNames.KING){
            return false;
        }
        return true
    }

    moveFigure(target: Cell){

    }
}
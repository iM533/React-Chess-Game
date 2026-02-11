import {Colors} from "./Colors";
import {Figure} from "./figures/Figure";
import {Board} from "./Board";

export class Cell {

constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly color: Colors,
    public figure: Figure | null,
    public board: Board,
    public available: boolean = false,
    public id: number = Math.random()
) {}

}
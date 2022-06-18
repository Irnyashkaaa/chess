// @ts-ignore
import { Board } from './Board.ts';
// @ts-ignore
import { Figure } from './figures/figure.ts';
export enum colorsEnum {
    WHITE = 'white',
    BLACK = 'black'
}

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: colorsEnum
    figure: Figure | null
    board: Board
    available: boolean; //can you use this figure
    id: number // for React-key

    constructor(board: Board, x: number, y: number, color: colorsEnum, figure: Figure | null) {
        this.x = x
        this.y = y
        this.available = false
        this.color = color
        this.figure = figure
        this.id = Math.random()
        this.board = board
    }
}
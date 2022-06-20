import { Cell, colorsEnum } from './../Cell';
// @ts-ignore
import logo from '../../assets/black-king.png'


export enum firugeNames {
    FIGURE = 'фігура',
    KING = 'король',
    KNIGHT = 'кінь',
    PAWN = 'пішка',
    QUEEN = 'ферзь',
    ROOK = 'ладья',
    BISHOP = 'слон'
}

export class Figure {
    color: colorsEnum
    logo: typeof logo | null
    cell: Cell
    name: firugeNames
    id: number

    constructor (color, cell) {
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.logo = null
        this.name = firugeNames.FIGURE
        this.id = Math.random()
    }

    isCanMove (target: Cell): boolean {
        if (target.figure?.color === this.color) return false
        if (target.figure?.name === firugeNames.KING) return false
        return true
    }

    moveFigure (target: Cell) {
        
    }
}


//@ts-ignore
import { Cell, colorsEnum } from '../Cell.ts';
//@ts-ignore
import { Figure, firugeNames } from './figure.ts';
//@ts-ignore
import blackLogo from '../../assets/black-rook.png'
//@ts-ignore
import whiteLogo from '../../assets/white-rook.png'

export class Rook extends Figure {
    
    constructor (color: colorsEnum, cell: Cell) {
        super (color, cell)
        this.logo = (color === colorsEnum.BLACK)? blackLogo: whiteLogo
        this.name = firugeNames.ROOK
    }

    isCanMove(target: Cell): boolean {
        if (!super.isCanMove(target)) return false
        if (this.cell.isEmptyVertical(target)) return true
        if (this.cell.isEmptyHorizontal(target)) return true
        return false
    }
}
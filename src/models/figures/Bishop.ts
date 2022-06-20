import { Cell, colorsEnum } from '../Cell.ts';
import { Figure, firugeNames } from './figure.ts';
import blackLogo from './../../assets/black-bishop.png'
import whiteLogo from '../../assets/white-bishop.png'
export class Bishop extends Figure {

    constructor (color: colorsEnum, cell: Cell) {
        super (color, cell)
        this.logo = color === colorsEnum.BLACK? blackLogo: whiteLogo
        this.name = firugeNames.BISHOP
    }

    isCanMove(target: Cell): boolean {
        if (!super.isCanMove(target)) return false;
        if (this.cell.isEmptyDiagonal(target)) return true
        return false
    }
}
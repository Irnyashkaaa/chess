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
}
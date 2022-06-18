//@ts-ignore
import { Cell, colorsEnum } from '../Cell.ts';
//@ts-ignore
import { Figure, firugeNames } from './figure.ts';
//@ts-ignore
import blackLogo from '../../assets/black-king.png'
//@ts-ignore
import whiteLogo from '../../assets/white-king.png'

export class King extends Figure {
    
    constructor (color: colorsEnum, cell: Cell) {
        super (color, cell)
        this.logo = (color === colorsEnum.BLACK)? blackLogo: whiteLogo
        this.name = firugeNames.KING
    }
}
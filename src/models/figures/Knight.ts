//@ts-ignore
import { Cell, colorsEnum } from '../Cell.ts';
//@ts-ignore
import { Figure, firugeNames } from './figure.ts';
//@ts-ignore
import blackLogo from '../../assets/black-knight.png'
//@ts-ignore
import whiteLogo from '../../assets/white-knight.png'

export class Knight extends Figure {
    
    constructor (color: colorsEnum, cell: Cell) {
        super (color, cell)
        this.logo = (color === colorsEnum.BLACK)? blackLogo: whiteLogo
        this.name = firugeNames.KNIGHT
    }
    isCanMove(target: Cell): boolean {
        if (!super.isCanMove(target)) return false
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        return (dx === 2 && dy === 1) || (dx === 1 && dy === 2)
    }
}
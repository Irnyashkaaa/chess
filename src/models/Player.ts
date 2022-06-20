import { colorsEnum } from './Cell.ts';
export class Player {
    color: colorsEnum

    constructor(color: colorsEnum) {
        this.color = color
    }
}
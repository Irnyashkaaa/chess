//@ts-ignore
import { Figure } from './figures/figure.ts';
//@ts-ignore
import { Rook } from './figures/Rook.ts';
//@ts-ignore
import { Queen } from './figures/Queen.ts';
//@ts-ignore
import { Knight } from './figures/Knight.ts';
//@ts-ignore
import { Bishop } from './figures/Bishop.ts';
//@ts-ignore
import { King } from './figures/King.ts';
//@ts-ignore
import { Pawn } from './figures/Pawn.ts';
//@ts-ignore
import { Cell, colorsEnum } from './Cell.ts';

export class Board {
    cells: Cell[][] = []
    lostBlackFigures: Figure[] = []
    lostWhiteFigures: Figure[] = []

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, colorsEnum.BLACK, null)) // black cell
                } else {
                    row.push(new Cell(this, j, i, colorsEnum.WHITE, null)) //white cell
                }
            }
            this.cells.push(row)
        }
    }

    public getCopyBoard(): Board {
        const newBoard = new Board()
        newBoard.cells = this.cells
        newBoard.lostWhiteFigures = this.lostWhiteFigures
        newBoard.lostBlackFigures = this.lostBlackFigures
        return newBoard
    }
    
    public highlightCells(currentCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i]
            for (let j = 0; j < row.length; j++) {
                const target = row[j]
                
                target.available = !!currentCell?.figure?.isCanMove(target)
            }
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x]
    }

    private addPaws() {
        for (let i = 0; i < 8; i++) {
            new Pawn(colorsEnum.BLACK, this.getCell(i, 1))
            new Pawn(colorsEnum.WHITE, this.getCell(i, 6))
        }
    }
    private addKings() {
        new King(colorsEnum.BLACK, this.getCell(4, 0))
        new King(colorsEnum.WHITE, this.getCell(4, 7))
    }
    private addBishops() {
        new Bishop(colorsEnum.BLACK, this.getCell(2, 0))
        new Bishop(colorsEnum.BLACK, this.getCell(5, 0))
        new Bishop(colorsEnum.WHITE, this.getCell(2, 7))
        new Bishop(colorsEnum.WHITE, this.getCell(5, 7))
    }
    private addKnights() {
        new Knight(colorsEnum.BLACK, this.getCell(1, 0))
        new Knight(colorsEnum.BLACK, this.getCell(6, 0))
        new Knight(colorsEnum.WHITE, this.getCell(1, 7))
        new Knight(colorsEnum.WHITE, this.getCell(6, 7))
    }
    private addQueens() {
        new Queen(colorsEnum.BLACK, this.getCell(3, 0))
        new Queen(colorsEnum.WHITE, this.getCell(3, 7))
    }
    private addRooks() {
        new Rook(colorsEnum.BLACK, this.getCell(0, 0))
        new Rook(colorsEnum.BLACK, this.getCell(7, 0))
        new Rook(colorsEnum.WHITE, this.getCell(0, 7))
        new Rook(colorsEnum.WHITE, this.getCell(7, 7))
    }

    public addFigures() {
        this.addPaws()
        this.addKings()
        this.addBishops()
        this.addKnights()
        this.addQueens()
        this.addRooks()
    }
}
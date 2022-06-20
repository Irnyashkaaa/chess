import React, { useState, useEffect } from 'react'
import { Board } from '../models/Board'
import { Cell } from '../models/Cell'
import { Player } from '../models/Player'
//@ts-ignore
import { CellComponent } from './CellComponent.tsx'

type propsType = {
    board: Board
    setBoard: (newBoard: any) => void
    currentPlayer: Player | null
    changePlayer: () => void
    restart: () => void
}

export const BoardComponent: React.FC<propsType> = ({ restart, board, setBoard, currentPlayer, changePlayer }) => {

    const [currentCell, setCurrentCell] = useState<Cell | null>(null)

    const cellOnClick = (cell: Cell) => {
        if (currentCell && currentCell !== cell && currentCell.figure?.isCanMove(cell)) {
            currentCell.moveFigure(cell)
            changePlayer()
            setCurrentCell(null)
            updateBoard()
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setCurrentCell(cell)
            }

        }

    }

    useEffect(() => {
        highlightCells()
    }, [currentCell])

    function highlightCells() {
        board.highlightCells(currentCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }


    return (
        <div>
            <button className='restart' onClick={restart}>RESTART</button>
            <div className='board'>
                {board.cells.map((row: Cell[], index: number) => {
                    return <React.Fragment key={index}>
                        {row.map(cell => {
                            return <CellComponent key={cell.id}
                                cellOnClick={cellOnClick}
                                cell={cell}
                                isCurrent={cell.x === currentCell?.x && cell.y === currentCell.y} />
                        })}
                    </React.Fragment>
                })}
            </div>

        </div>
    )
}
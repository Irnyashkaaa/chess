import React from 'react'
import { Board } from '../models/Board'
import { Cell } from '../models/Cell'
//@ts-ignore
import { CellComponent } from './CellComponent.tsx'

type propsType = {
    board: Board
}

export const BoardComponent: React.FC<propsType> = ({ board }) => {

    return (
        <div className='board'>
            {board.cells.map((row: Cell[], index: number) => {
                return <React.Fragment key = {index}>
                    {row.map(cell => {
                        return <CellComponent key={cell.id} cell={cell}/>
                    })}
                </React.Fragment>
            })}
        </div>
    )
}
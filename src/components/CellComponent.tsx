import React from "react";
// @ts-ignore
import { Cell } from "../models/Cell.ts";

type propsType = {
    cell: Cell
    isCurrent: boolean
    cellOnClick: (cell: Cell) => void
}

export const CellComponent: React.FC<propsType> = ({ cell, isCurrent, cellOnClick }) => {
    return (
        <div className={`cell ${cell.color} ${isCurrent ? 'currentCell' : ''}`}
            onClick={() => cellOnClick(cell)}
            style={{backgroundColor: cell.available && cell.figure ? 'rgb(100, 27, 27)' : ''}}>
            {cell.available && !cell.figure && <div className="available"></div>}
            {cell.figure?.logo && <img src={cell.figure.logo} />}
        </div>
    )
}
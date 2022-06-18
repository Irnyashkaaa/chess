import React from "react";

type propsType = {
    cell: any
}

export const CellComponent: React.FC<propsType> = ({cell}) => {
    return (
        <div className={`cell ${cell.color}`}>
            {cell.figure?.logo && <img src={cell.figure.logo}/>}
        </div>
    )
}
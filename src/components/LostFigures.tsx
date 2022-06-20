import React from 'react'
// @ts-ignore
import { Figure } from '../models/figures/figure.ts'



type propsType = {
    title: string
    figures: Figure[]
}

export const LostFigures: React.FC<propsType> = ({ title, figures }) => {
    return <div className='lost'>
        <h3 style={{ backgroundColor: 'transparent' }}>{title}</h3>
        {figures.map(figure => {
            return <img key={figure.id} width={40} height={40} src={figure.logo} style={{backgroundColor: 'transparent'}} />
        })}
    </div>
}
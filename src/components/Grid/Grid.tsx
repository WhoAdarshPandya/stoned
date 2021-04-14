import React from 'react'
import { GridProps } from '../propTypes/componentPropTypes'
import './style.css'

export const Grid = ({ children = null, onClick }: GridProps): JSX.Element => {
  return (
    <div
      className='grid-parent'
      onClick={(e: any) => {
        onClick && onClick(e)
      }}
    >
      {children}
    </div>
  )
}

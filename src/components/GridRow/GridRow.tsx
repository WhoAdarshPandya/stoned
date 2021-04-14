import React from 'react'
import { GridRowProps } from '../propTypes/componentPropTypes'
import './style.css'

export const GridRow = ({
  onClick,
  children = null,
  alignItems = 'center',
  justifyContent = 'center'
}: GridRowProps) => {
  return (
    <div
      onClick={(e: any) => {
        onClick && onClick(e)
      }}
      style={{ justifyContent, alignItems }}
      className='grid-row-par'
    >
      {children}
    </div>
  )
}

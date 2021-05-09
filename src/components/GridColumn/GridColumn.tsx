import React from 'react'
import { GridColumnProps } from '../propTypes/componentPropTypes'
import './style.css'

export const GridColumn = ({
  alignItems = 'center',
  justifyContent = 'center',
  gutter = false,
  children = null,
  flex = null,
  onClick
}: GridColumnProps): JSX.Element => {
  return (
    <div
      style={{
        flex: flex ? flex : 'auto',
        justifyContent: justifyContent,
        alignItems: alignItems
      }}
      onClick={(e: any) => {
        onClick && onClick(e)
      }}
      className={`grid-col ${gutter ? 'grid-col-padding' : ''}`}
    >
      {children}
    </div>
  )
}

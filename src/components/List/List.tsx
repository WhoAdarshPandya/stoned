import React from 'react'
import { ListProps } from '../propTypes/componentPropTypes'
import './style.css'

export const List = ({
  children = null,
  elevation = 5,
  onClick
}: ListProps): JSX.Element => {
  return (
    <div
      onClick={(e: any) => {
        onClick && onClick(e)
      }}
      className={`list-parent elevation-${elevation}`}
    >
      {children}
    </div>
  )
}

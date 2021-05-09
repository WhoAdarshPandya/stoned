import React from 'react'
import { ListItemProps } from '../propTypes/componentPropTypes'
import './style.css'

export const ListItem = ({
  children = null,
  onClick
}: ListItemProps): JSX.Element => {
  return (
    <div
      className='list-item-parent'
      onClick={(e: any) => {
        onClick && onClick(e)
      }}
    >
      {children}
    </div>
  )
}

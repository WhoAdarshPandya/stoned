import React from 'react'
import { CardActionsProps } from '../propTypes/componentPropTypes'
import './style.css'

export const CardActions = ({
  explicitPadding,
  children = null,
  onClick
}: CardActionsProps): JSX.Element => {
  return (
    <div
      onClick={(e: any) => {
        onClick && onClick(e)
      }}
      className={`card-action-parent ${
        explicitPadding ? 'card-action-parent-padding' : ''
      }`}
    >
      {children}
    </div>
  )
}

import React from 'react'
import { CardProps } from '../propTypes/componentPropTypes'
import './style.css'

export const Card = ({
  children = null,
  onClick,
  elevation = 5
}: CardProps): JSX.Element => {
  return (
    <div
      className={`card-parent elevation-${elevation}`}
      onClick={(e: any) => {
        onClick && onClick(e)
      }}
    >
      {children}
    </div>
  )
}

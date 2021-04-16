import React from 'react'
import { CardContentProps } from '../propTypes/componentPropTypes'
import './style.css'

export const CardContent = ({
  children = null,
  onClick
}: CardContentProps): JSX.Element => {
  return (
    <div
      onClick={(e: any) => {
        onClick && onClick(e)
      }}
      className='card-content-parent'
    >
      {children}
    </div>
  )
}

import React from 'react'
import { CardMediaProps } from '../propTypes/componentPropTypes'
import './style.css'

export const CardMedia = ({
  onClick,
  alt = 'no alt',
  src = '',
  variant = 'landscape'
}: CardMediaProps): JSX.Element => {
  console.log(variant)
  console.log(src)
  return (
    <div
      className={`card-media-parent`}
      onClick={(e: any) => {
        onClick && onClick(e)
      }}
    >
      <img className='card-media' src={src} alt={alt} />
    </div>
  )
}

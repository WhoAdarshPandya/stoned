import React from 'react'
import { ImageProps } from '../propTypes/ComponentPropTypes'
import './style.css'

export const Image = ({
  src,
  alt,
  rounded,
  onClick
}: ImageProps): JSX.Element => {
  return (
    <React.Fragment>
      <img
        src={src}
        alt={alt}
        onClick={(e: any) => {
          onClick && onClick(e)
        }}
        className={`responsive-img ${rounded ? 'rounded' : ''}`}
      />
    </React.Fragment>
  )
}

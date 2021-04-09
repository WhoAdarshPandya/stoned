import React from 'react'
import { AvatarProps } from '../propTypes/componentPropTypes'
import './style.css'

export const Avatar = ({
  src,
  alt,
  onClick,
  children,
  size = 'medium'
}: AvatarProps): JSX.Element => {
  return (
    <div
      className={`avatar-wrapper ${size}Avatar`}
      onClick={(e) => {
        onClick && onClick(e)
      }}
    >
      {children && (
        <div
          style={{
            background: '#' + Math.floor(Math.random() * 16777215).toString(16)
          }}
          className='avatar-text'
        >
          <span>{typeof children === 'string' ? children[0] : null}</span>
        </div>
      )}
      {src && !children && <img className='avatar-base' src={src} alt={alt} />}
      {!src && !children && (
        <div className='avatar-blank'>
          <i className={`material-icons blank_${size}`}>account_circle</i>
        </div>
      )}
    </div>
  )
}

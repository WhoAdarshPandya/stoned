/* eslint-disable prettier/prettier */
import React from 'react'
import { ButtonProps } from './propTypes/componentPropTypes'
import './style.css'

export const Button = ({ children, color, size }: ButtonProps) => {
  console.log(size)
  return (
    <button className={color === 'primary' ? 'primary' : 'secondary'}>
      {children}
    </button>
  )
}

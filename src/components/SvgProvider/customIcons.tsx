import React from 'react'
import { SvgProviderProps } from '../propTypes/componentPropTypes'

export const CloseIcon = ({
  color = '#000'
}: SvgProviderProps): JSX.Element => {
  return (
    <svg height='25' width='25' fill={color}>
      <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
    </svg>
  )
}

export const LeftArrowIcon = ({
  color = '#000'
}: SvgProviderProps): JSX.Element => {
  return (
    <svg height='25' width='25' fill={color}>
      <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' />
    </svg>
  )
}

export const RightArrowIcon = ({
  color = '#000'
}: SvgProviderProps): JSX.Element => {
  return (
    <svg height='25' width='25' fill={color}>
      <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
    </svg>
  )
}

export const SuccessIcon = ({
  color = '#5fb763'
}: SvgProviderProps): JSX.Element => {
  return (
    <svg height='25' width='25' fill={color}>
      <path d='M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z' />
    </svg>
  )
}

export const InfoErrIcon = ({
  color = '#f55549'
}: SvgProviderProps): JSX.Element => {
  return (
    <svg height='25' width='25' fill={color}>
      <path d='M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' />
    </svg>
  )
}

export const WarningIcon = ({
  color = '#ffa521'
}: SvgProviderProps): JSX.Element => {
  return (
    <svg height='25' width='25' fill={color}>
      <path d='M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z' />
    </svg>
  )
}

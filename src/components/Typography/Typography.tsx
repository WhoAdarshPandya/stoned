import React from 'react'
import { TypographyProps } from '../propTypes/ComponentPropTypes'
import './style.css'

export const Typography = ({
  children,
  variant = '',
  color = '',
  muted = false,
  align = '',
  gutterBottom = false,
  onClick
}: TypographyProps): JSX.Element => {
  return (
    <React.Fragment>
      {variant === 'h1' && (
        <h2
          className={`typography-header typography-h1 ${
            align ? `typography-align-${align}` : ''
          } ${muted ? 'muted' : ''} ${gutterBottom ? 'gutter-bottom' : ''} ${
            color ? `typography-${color}` : ''
          }`}
          onClick={(e: any) => {
            onClick && onClick(e)
          }}
        >
          {children}
        </h2>
      )}

      {variant === 'h2' && (
        <h2
          className={`typography-header typography-h2 ${
            align ? `typography-align-${align}` : ''
          } ${muted ? 'muted' : ''} ${gutterBottom ? 'gutter-bottom' : ''} ${
            color ? `typography-${color}` : ''
          }`}
          onClick={(e: any) => {
            onClick && onClick(e)
          }}
        >
          {children}
        </h2>
      )}

      {variant === 'h3' && (
        <h3
          className={`typography-header typography-h3 ${
            align ? `typography-align-${align}` : ''
          } ${muted ? 'muted' : ''} ${gutterBottom ? 'gutter-bottom' : ''} ${
            color ? `typography-${color}` : ''
          }`}
          onClick={(e: any) => {
            onClick && onClick(e)
          }}
        >
          {children}
        </h3>
      )}

      {variant === 'h4' && (
        <h4
          className={`typography-header typography-h4 ${
            align ? `typography-align-${align}` : ''
          } ${muted ? 'muted' : ''} ${gutterBottom ? 'gutter-bottom' : ''} ${
            color ? `typography-${color}` : ''
          }`}
          onClick={(e: any) => {
            onClick && onClick(e)
          }}
        >
          {children}
        </h4>
      )}

      {variant === 'h5' && (
        <h5
          className={`typography-header typography-h5 ${
            align ? `typography-align-${align}` : ''
          } ${muted ? 'muted' : ''} ${gutterBottom ? 'gutter-bottom' : ''} ${
            color ? `typography-${color}` : ''
          }`}
          onClick={(e: any) => {
            onClick && onClick(e)
          }}
        >
          {children}
        </h5>
      )}

      {(variant === 'h6' || variant === '') && (
        <h6
          className={`typography-header typography-h6 ${
            align ? `typography-align-${align}` : ''
          } ${muted ? 'muted' : ''} ${gutterBottom ? 'gutter-bottom' : ''} ${
            color ? `typography-${color}` : ''
          }`}
          onClick={(e: any) => {
            onClick && onClick(e)
          }}
        >
          {children}
        </h6>
      )}

      {variant === 'subtitle1' && (
        <h6
          className={`typography-subtitle subtitle1 ${
            align ? `typography-align-${align}` : ''
          } ${muted ? 'muted' : ''} ${gutterBottom ? 'gutter-bottom' : ''} ${
            color ? `typography-${color}` : ''
          }`}
          onClick={(e: any) => {
            onClick && onClick(e)
          }}
        >
          {children}
        </h6>
      )}

      {variant === 'subtitle2' && (
        <h6
          className={`typography-subtitle subtitle2 ${
            align ? `typography-align-${align}` : ''
          } ${muted ? 'muted' : ''} ${gutterBottom ? 'gutter-bottom' : ''} ${
            color ? `typography-${color}` : ''
          }`}
          onClick={(e: any) => {
            onClick && onClick(e)
          }}
        >
          {children}
        </h6>
      )}

      {variant === 'body1' && (
        <p
          className={`typography-body typography-body1 ${
            align ? `typography-align-${align}` : ''
          } ${muted ? 'muted' : ''} ${gutterBottom ? 'gutter-bottom' : ''} ${
            color ? `typography-${color}` : ''
          }`}
          onClick={(e: any) => {
            onClick && onClick(e)
          }}
        >
          {children}
        </p>
      )}

      {variant === 'body2' && (
        <p
          className={`typography-body typography-body2 ${
            align ? `typography-align-${align}` : ''
          } ${muted ? 'muted' : ''} ${gutterBottom ? 'gutter-bottom' : ''} ${
            color ? `typography-${color}` : ''
          }`}
          onClick={(e: any) => {
            onClick && onClick(e)
          }}
        >
          {children}
        </p>
      )}
    </React.Fragment>
  )
}

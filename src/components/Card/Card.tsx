import React from 'react'
import { CardProps } from '../propTypes/componentPropTypes'
import './style.css'

export const Card = ({
  children = null,
  onClick,
  variant = 'standard',
  src = '',
  cardBadge = 'out of stock',
  containsMedia = false,
  renderBadge = false,
  elevation = 5
}: CardProps): JSX.Element => {
  return (
    <div
      className={`card-parent ${
        renderBadge ? 'card-badge' : ''
      } elevation-${elevation} ${variant === 'overlay' ? 'card-overlay' : ''} ${
        containsMedia ? 'media-padding' : ''
      } ${variant === 'horizontal' ? 'card-horizontal' : ''}`}
      data-label={cardBadge}
      onClick={(e: any) => {
        onClick && onClick(e)
      }}
      style={
        variant === 'overlay'
          ? {
              backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.55), 
                rgba(0, 0, 0, 0.55)
              ), url(${src})`
            }
          : {}
      }
    >
      {children}
    </div>
  )
}

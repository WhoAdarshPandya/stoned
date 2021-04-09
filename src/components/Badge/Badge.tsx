import React from 'react'
import { BadgeProps } from '../propTypes/ComponentPropTypes'
import './style.css'

export const Badge = ({
  children,
  variant = 'standard',
  color = 'primary',
  count = 0,
  status_badge = false,
  anchor = 'top-right',
  onClick
}: BadgeProps): JSX.Element => {
  return (
    <React.Fragment>
      {variant === 'counter' && (
        <span
          className='badge-parent'
          onClick={(e: any) => {
            onClick && onClick(e)
          }}
        >
          <div
            className={`counter ${
              color ? `badge-${color}` : 'badge-primary'
            } anchor-${anchor}`}
          >
            {count}
          </div>
          <div className='children_inflater'>{children}</div>
        </span>
      )}
      {variant === 'standard' && (
        <span
          className='badge-parent'
          onClick={(e: any) => {
            onClick && onClick(e)
          }}
        >
          <div
            className={`standard ${
              color ? `badge-${color}` : 'badge-primary'
            } ${status_badge ? 'status-badge' : ''} anchor-${anchor}`}
          />
          <div className='children_inflater'>{children}</div>
        </span>
      )}
    </React.Fragment>
  )
}

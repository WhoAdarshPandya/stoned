import React from 'react'
import {
  InfoErrIcon,
  WarningIcon,
  SuccessIcon
} from '../SvgProvider/customIcons'
import { AlertProps } from '../propTypes/ComponentPropTypes'
import './style.css'

export const Alert = ({
  title = '',
  children = '',
  severity = '',
  onClick
}: AlertProps): JSX.Element => {
  return (
    <React.Fragment>
      {(severity === '' || severity === 'error') && (
        <div
          onClick={(e: any) => {
            onClick && onClick(e)
          }}
          className='alert-parent alert-error'
        >
          <div className='alert-inner'>
            <div className='alert-icon'>
              <InfoErrIcon />
            </div>
            <div className='alert-text'>
              {title ? <h3>{title}</h3> : <h3>Error</h3>}
              {children ? (
                <p>{children}</p>
              ) : (
                <p>
                  This is an error alert — <strong>check it out!</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {severity === 'warning' && (
        <div
          onClick={(e) => {
            onClick && onClick(e)
          }}
          className='alert-parent alert-warning'
        >
          <div className='alert-inner'>
            <div className='alert-icon'>
              <WarningIcon />
            </div>
            <div className='alert-text'>
              {title ? <h3>{title}</h3> : <h3>Warning</h3>}
              {children ? (
                <p>{children}</p>
              ) : (
                <p>
                  This is a warning alert — <strong>check it out!</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {severity === 'info' && (
        <div
          onClick={(e) => {
            onClick && onClick(e)
          }}
          className='alert-parent alert-info'
        >
          <div className='alert-inner'>
            <div className='alert-icon'>
              <InfoErrIcon color='#4baaf5' />
            </div>
            <div className='alert-text'>
              {title ? <h3>{title}</h3> : <h3>Info</h3>}
              {children ? (
                <p>{children}</p>
              ) : (
                <p>
                  This is an info alert — <strong>check it out!</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {severity === 'success' && (
        <div
          onClick={(e) => {
            onClick && onClick(e)
          }}
          className='alert-parent alert-success'
        >
          <div className='alert-inner'>
            <div className='alert-icon'>
              <SuccessIcon />
            </div>
            <div className='alert-text'>
              {title ? <h3>{title}</h3> : <h3>Success</h3>}
              {children ? (
                <p>{children}</p>
              ) : (
                <p>
                  This is a success alert — <strong>check it out!</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

import React, { useEffect } from 'react'
import { ToastProps } from '../propTypes/componentPropTypes'
import { IconButton } from '../IconButton/IconButton'
import {
  SuccessIcon,
  WarningIcon,
  InfoErrIcon
} from '../SvgProvider/customIcons'
import './style.css'

export const Toast = ({
  actionButtonName = 'dismiss',
  message = 'standard toast',
  onButtonClick,
  renderActionButton = false,
  variant = 'standard',
  onClick,
  onFinish,
  onCloseClick,
  renderCloseButton = true,
  anchorOrigin = { horizontal: 'left', vertical: 'bottom' },
  autoHideDuration = 5
}: ToastProps): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      onFinish && onFinish()
    }, autoHideDuration * 1000)
  })

  const handleActionButtonClick = () => {
    onButtonClick && onButtonClick()
  }

  const handleCloseButtonClick = () => {
    onCloseClick && onCloseClick()
  }
  const getAnchorClasses = () =>
    `${anchorOrigin.vertical}-${anchorOrigin.horizontal}`

  return (
    <div
      onClick={(e: any) => {
        onClick && onClick(e)
      }}
    >
      <div
        className={`snackbar show ${
          renderCloseButton ? 'padding-for-icon-btn' : ''
        } ${variant}-toast-color ${getAnchorClasses()}`}
      >
        {variant === 'success' && (
          <span className='message-icon'>
            <SuccessIcon color='#eee' />
          </span>
        )}

        {variant === 'warning' && (
          <span className='message-icon'>
            <WarningIcon color='#eee' />
          </span>
        )}

        {variant === 'info' && (
          <span className='message-icon'>
            <InfoErrIcon color='#eee' />
          </span>
        )}

        {variant === 'error' && (
          <span className='message-icon'>
            <InfoErrIcon color='#eee' />
          </span>
        )}
        <span className='action-text'>{message}</span>
        <div className='action-wrapper'>
          {renderActionButton && (
            <span
              className='action'
              onClick={() => {
                handleActionButtonClick()
              }}
            >
              {actionButtonName}
            </span>
          )}
          {renderCloseButton && (
            <span
              onClick={() => {
                handleCloseButtonClick()
              }}
              className='action action-icon'
            >
              <IconButton size='small'>close</IconButton>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

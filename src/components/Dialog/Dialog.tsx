import React, { useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { Typography } from '../Typography/Typography'
import { DialogProps } from '../propTypes/componentPropTypes'
import './style.css'

export const Dialog = ({
  buttonKind = 'textColorPrimary',
  message = `Let Google help apps determine location. This means sending
    anonymous location data to Google, even when no apps are running.`,
  title = `Use Google's location service?`,
  negativeButtonText = 'disagree',
  positiveButtonText = 'agree',
  cancellable = true,
  autoHideDuration = 5,
  setAutoHide = false,
  onClick,
  onBackdropClick,
  onNegativeButtonClick,
  onPositiveButtonClick
}: DialogProps): JSX.Element => {
  const [showDialog, setShowDialog] = useState(true)
  console.log(cancellable)
  useEffect(() => {
    if (setAutoHide) {
      setTimeout(() => {
        setShowDialog(false)
      }, autoHideDuration * 1000)
    }
  }, [])

  const handleOnClick = (e: any) => {
    onClick && onClick(e)
  }

  const handleOverlayClick = (e: any) => {
    onBackdropClick && onBackdropClick(e)
    if (cancellable) {
      setShowDialog(false)
    }
  }

  const handlePositiveButtonClick = (e: any) => {
    onPositiveButtonClick && onPositiveButtonClick(e)
  }

  const handleNegativeButtonClick = (e: any) => {
    onNegativeButtonClick && onNegativeButtonClick(e)
  }

  return (
    <React.Fragment>
      <div
        onClick={(e: any) => {
          handleOverlayClick(e)
        }}
        id='overlay'
        className={`${showDialog ? 'showOverlay' : 'hideOverlay'}`}
      ></div>

      {showDialog && (
        <div
          className='dialog-main'
          onClick={(e: any) => {
            handleOnClick(e)
          }}
        >
          <div className='dialog-title'>
            <Typography variant='h6'>{title}</Typography>
          </div>
          <div className='dialog-content'>
            <Typography variant='body1' muted>
              {message}
            </Typography>
          </div>
          <div className='dialog-actions'>
            <div className='dialog-action-negative'>
              <Button
                color='inherit'
                disableRipple
                textColor={buttonKind}
                onClick={(e: any) => {
                  handleNegativeButtonClick(e)
                }}
              >
                {negativeButtonText}
              </Button>
            </div>
            <div className='dialog-action-positive'>
              <Button
                color='inherit'
                disableRipple
                textColor={buttonKind}
                onClick={(e: any) => {
                  handlePositiveButtonClick(e)
                }}
              >
                {positiveButtonText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

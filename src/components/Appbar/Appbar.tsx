import React from 'react'
import { Badge } from '../Badge/Badge'
import { Button } from '../Button/Button'
import { IconButton } from '../IconButton/IconButton'
import { AppbarProps, IconButtonsAppbar } from '../propTypes/componentPropTypes'
import { Typography } from '../Typography/Typography'
import './style.css'

export const Appbar = ({
  title = 'Material App Bar',
  startIcon,
  renderStartIcon = true,
  renderIconButton = false,
  iconButtons = null,
  onIconButtonClick,
  onStartIconClick,
  onClick,
  actionButtonName = 'login',
  onActionButtonClick,
  renderActionButton = false,
  variant = 'primary'
}: AppbarProps) => {
  return (
    <React.Fragment>
      <div
        onClick={(e: any) => {
          onClick && onClick(e)
        }}
        className={`appbar-main appbar-${variant}`}
      >
        {renderStartIcon && (
          <div
            className='appbar-icon'
            onClick={(e: any) => {
              onStartIconClick && onStartIconClick(e)
            }}
          >
            <IconButton size='medium' color='white'>
              {startIcon}
            </IconButton>
          </div>
        )}

        <div className='appbar-text'>
          <Typography variant='h6' color='white'>
            {title}
          </Typography>
        </div>
        <div className='appbar-actions'>
          {renderActionButton && (
            <Button
              onClick={(e: any) => {
                onActionButtonClick && onActionButtonClick(e)
              }}
              color='inherit'
              textColor='textColorWhite'
            >
              {actionButtonName}
            </Button>
          )}
          {renderIconButton &&
            iconButtons &&
            iconButtons.map(({ count, hasBadge, name }: IconButtonsAppbar) => (
              <React.Fragment key={name}>
                {hasBadge ? (
                  <Badge
                    variant='counter'
                    color={variant === 'primary' ? 'secondary' : 'primary'}
                    count={count}
                  >
                    <IconButton
                      onClick={(e: any) => {
                        onIconButtonClick && onIconButtonClick(e, name)
                      }}
                      size='small'
                      color={variant !== 'dark' ? 'white' : ''}
                    >
                      {name}
                    </IconButton>
                  </Badge>
                ) : (
                  <IconButton
                    size='small'
                    color={variant !== 'dark' ? 'white' : ''}
                    onClick={(e: any) => {
                      onIconButtonClick && onIconButtonClick(e, name)
                    }}
                  >
                    {name}
                  </IconButton>
                )}
              </React.Fragment>
            ))}
        </div>
      </div>
    </React.Fragment>
  )
}

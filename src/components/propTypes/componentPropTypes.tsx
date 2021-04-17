export interface ButtonProps {
  children?: string
  size?: 'small' | 'large' | 'medium'
  color?: 'primary' | 'secondary' | 'inherit'
  variant?: 'contained' | 'outlined' | 'focused'
  raised?: boolean
  disableRipple?: boolean
  onClick?: (e?: any) => void
  textColor?: 'textColorPrimary' | 'textColorSecondary' | 'textColorWhite'
  href?: string
  startIcon?: string
  endIcon?: string
}

export interface IconButtonProps {
  children?: string
  onClick?: (e?: any) => void
  color?: 'primary' | 'secondary' | '' | 'white'
  disableRipple?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'simple' | 'fab'
}

export interface AvatarProps {
  children?: string
  src?: string
  alt?: string
  onClick?: (e?: any) => void
  size?: 'small' | 'medium' | 'large'
}

export interface AlertProps {
  children?: string
  onClick?: (e?: any) => void
  title?: string
  severity: 'info' | 'error' | 'success' | 'warning' | ''
}

export interface SvgProviderProps {
  color?: string
}

export interface TextFieldProps {
  value?: string
  variant?: 'standard' | 'outlined' | 'filled' | ''
  label?: string
  autoComplete?: boolean
  color?: 'primary' | 'secondary' | ''
  type?: 'email' | 'number' | 'password' | 'text' | 'url'
  onClick?: (e: any) => void
  onChange?: (e: any) => void
  readOnly?: boolean
  disabled?: boolean
  helperText?: string
  error?: boolean
  autoFocus?: boolean
}

export interface ImageProps {
  src?: string
  alt?: string
  rounded?: boolean
  onClick?: (e: any) => void
}

export interface TypographyProps {
  children?: string | JSX.Element
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | ''
  color?: 'primary' | 'secondary' | '' | 'white'
  muted?: boolean
  align?: 'left' | 'right' | 'center' | 'justify' | ''
  gutterBottom?: boolean
  onClick?: (e: any) => void
}

export interface BadgeProps {
  children?: any
  onClick?: (e: any) => void
  color?: 'primary' | 'secondary'
  status_badge?: boolean
  variant?: 'standard' | 'counter'
  count?: number
  anchor?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

export interface SliderProps {
  color?: 'primary' | 'secondary'
  initial: number
  max: number
  onChange: (e: any) => void
  onClick?: (e: any) => void
}

export interface RatingProps {
  onClick?: (e: any) => void
  color?: 'primary' | 'secondary'
  onChange: (e: any) => void
}

// export type kind = 'single' | 'multi' | 'singleaction' | 'multiaction'

export interface ToastProps {
  onClick?: (e: any) => void
  variant?: 'standard' | 'success' | 'warning' | 'info' | 'error'
  autoHideDuration?: number
  cancellable?: boolean
  anchorOrigin?: {
    vertical?: 'top' | 'bottom' | 'center'
    horizontal?: 'left' | 'center' | 'right'
  }
  onFinish?: () => void
  onCloseClick?: () => void
  renderCloseButton?: boolean
  message?: string
  renderActionButton?: boolean
  actionButtonName?: string
  onButtonClick?: () => void
}

export interface DialogProps {
  onBackdropClick?: (e: any) => void
  onPositiveButtonClick?: (e: any) => void
  onNegativeButtonClick?: (e: any) => void
  onClick?: (e: any) => void
  buttonKind?: 'textColorPrimary' | 'textColorSecondary'
  title?: string
  message?: string | any
  cancellable?: boolean
  autoHideDuration?: number
  setAutoHide?: boolean
  positiveButtonText?: string
  negativeButtonText?: string
}

export interface AppbarProps {
  onClick?: (e: any) => void
  renderStartIcon?: boolean
  startIcon?: string
  title?: string
  onStartIconClick?: (e: any) => void
  variant?: 'primary' | 'secondary' | 'dark'
  renderActionButton?: boolean
  onActionButtonClick?: (e: any) => void
  actionButtonName?: string
  renderIconButton?: boolean
  iconButtons?: IconButtonsAppbar[] | null
  onIconButtonClick?: (e: any, name: string) => void
}

export interface IconButtonsAppbar {
  name: string
  hasBadge: boolean
  count?: number
}

export interface GridProps {
  onClick?: (e: any) => void
  children?: JSX.Element | null | ''
}

export interface GridRowProps {
  onClick?: (e: any) => void
  children?: JSX.Element | null | ''
  justifyContent?:
    | 'center'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  alignItems?: 'center' | 'flex-end' | 'flex-start'
}

export interface GridColumnProps {
  onClick?: (e: any) => void
  children?: JSX.Element | null | ''
  justifyContent?:
    | 'center'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  alignItems?: 'center' | 'flex-end' | 'flex-start'
  gutter?: boolean
  flex?: number | null
}

export interface CardProps {
  onClick?: (e: any) => void
  elevation?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  children?: JSX.Element | null
  variant?: 'standard' | 'overlay' | 'horizontal'
  src?: string | null
  cardBadge?: string
  renderBadge?: boolean
  containsMedia?: boolean
}

export interface CardContentProps {
  onClick?: (e: any) => void
  children?: JSX.Element | null
  explicitPadding?: boolean
  paddingVertical?: string
}

export interface CardActionsProps {
  onClick?: (e: any) => void
  children?: JSX.Element | null
  explicitPadding?: boolean
  paddingVertical?: string
}

export interface CardMediaProps {
  onClick?: (e: any) => void
  variant?: 'landscape' | 'square'
  src?: string
  alt?: string
}

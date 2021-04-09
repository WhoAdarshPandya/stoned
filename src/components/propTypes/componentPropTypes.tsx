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
  color?: 'primary' | 'secondary' | ''
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

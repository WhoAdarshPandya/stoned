export interface ButtonProps {
  children?: string
  size?: 'small' | 'large' | 'medium'
  color?: 'primary' | 'secondary' | 'inherit'
  variant?: 'contained' | 'outlined' | 'focused'
  raised?: boolean
  disableRipple?: boolean
  onClick?: (e: any) => void
  textColor?: 'textColorPrimary' | 'textColorSecondary' | 'textColorWhite'
  href?: string
  startIcon?: string
  endIcon?: string
}

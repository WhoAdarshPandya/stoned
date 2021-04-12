import React, { useState } from 'react'
import { SliderProps } from '../propTypes/componentPropTypes'
import {
  formatFn,
  getLeft,
  getPercentage,
  getValue
} from '../../utils/operations'
import './style.css'

export const Slider = ({
  initial = 0,
  max = 100,
  onChange,
  onClick,
  color = 'primary'
}: SliderProps): JSX.Element => {
  const initialPercentage = getPercentage(initial, max)
  const [curVal, setCurval] = useState(initial)
  let diff: number = 0

  const handleMouseMove = (event: any) => {
    const sliderMain = document.getElementsByClassName(
      'slider_main'
    )[0] as HTMLDivElement

    const sliderThumb = document.getElementsByClassName(
      'slider_thumb'
    )[0] as HTMLDivElement

    let newX = event.clientX - diff - sliderMain.getBoundingClientRect().left

    const end = sliderMain.offsetWidth - sliderThumb.offsetWidth

    const start = 0

    if (newX < start) {
      newX = 0
    }

    if (newX > end) {
      newX = end
    }

    const newPercentage = getPercentage(newX, end)
    const newValue = getValue(newPercentage, max)
    sliderThumb.style.left = getLeft(newPercentage)

    setCurval(newValue)
    onChange(newValue)
  }

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('mousemove', handleMouseMove)
  }

  const handleMouseDown = (event: any) => {
    const sliderThumb = document.getElementsByClassName(
      'slider_thumb'
    )[0] as HTMLDivElement
    diff = event.clientX - sliderThumb.getBoundingClientRect().left

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }
  return (
    <React.Fragment>
      <div
        className={`slider_main ${
          color === 'primary' ? 'slider_primary_bg' : 'slider_secondary_bg'
        }`}
        onClick={(e: any) => {
          onClick && onClick(e)
        }}
      >
        <div
          className={`slider_inner ${
            color === 'primary' ? 'slider_primary' : 'slider_secondary'
          }`}
          style={{
            width: formatFn(curVal) + '%'
          }}
        />
        <div
          className={`slider_thumb ${
            color === 'primary' ? 'slider_primary' : 'slider_secondary'
          }`}
          style={{ left: getLeft(initialPercentage) }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </React.Fragment>
  )
}

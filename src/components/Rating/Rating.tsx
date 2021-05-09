import React from 'react'
import { RatingProps } from '../propTypes/componentPropTypes'
import './style.css'

// favorite
// favorite_border
// star_border
// star_half

export const Rating = ({
  onClick,
  color = 'primary',
  onChange
}: RatingProps): JSX.Element => {
  const random = Math.floor(Math.random() * 101)
  return (
    <div
      onClick={(e: any) => {
        onClick && onClick(e)
      }}
    >
      <span
        className={`star-rating ${
          color === 'primary'
            ? 'star-rating-primary-lite'
            : 'star-rating-secondary-lite'
        }`}
      >
        <input
          type='radio'
          name={random.toString()}
          value='1'
          onChange={(e) => onChange(e.target.value)}
        />
        <i
          className={`star-i ${
            color === 'primary'
              ? 'star-rating-primary'
              : 'star-rating-secondary'
          }`}
        ></i>
        <input
          type='radio'
          name={random.toString()}
          value='2'
          onChange={(e) => onChange(e.target.value)}
        />
        <i
          className={`star-i ${
            color === 'primary'
              ? 'star-rating-primary'
              : 'star-rating-secondary'
          }`}
        ></i>
        <input
          type='radio'
          name={random.toString()}
          value='3'
          onChange={(e) => onChange(e.target.value)}
        />
        <i
          className={`star-i ${
            color === 'primary'
              ? 'star-rating-primary'
              : 'star-rating-secondary'
          }`}
        ></i>
        <input
          type='radio'
          name={random.toString()}
          value='4'
          onChange={(e) => onChange(e.target.value)}
        />
        <i
          className={`star-i ${
            color === 'primary'
              ? 'star-rating-primary'
              : 'star-rating-secondary'
          }`}
        ></i>
        <input
          type='radio'
          name={random.toString()}
          value='5'
          onChange={(e) => onChange(e.target.value)}
        />
        <i
          className={`star-i ${
            color === 'primary'
              ? 'star-rating-primary'
              : 'star-rating-secondary'
          }`}
        ></i>
      </span>
    </div>
  )
}

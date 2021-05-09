export const formatFn = (num: number, toBeFixed: number = 0) =>
  num.toFixed(toBeFixed)

export const getPercentage = (current: number, max: number) =>
  (100 * current) / max

export const getValue = (percentage: number, max: number) =>
  (max / 100) * percentage

export const getLeft = (percentage: number) => `calc(${percentage}% - 5px)`

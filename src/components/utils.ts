export const getBackround = (angle: number, colorSelection: string[]): string => {
  return `linear-gradient(${angle}deg,${colorSelection.toString()})`
}

export const getBackgroundSize = (colorSelection: string[]): string =>
  `${colorSelection.length * 60}% ${colorSelection.length * 60}%`

export const getAnimation = (colorSelection: string[], speed: number): string =>
`gradient-animation ${colorSelection.length * (Math.abs(speed - 11) / 2)}s ease infinite`
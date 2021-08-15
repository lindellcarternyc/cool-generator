import {  useContext } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import { getAnimation, getBackgroundSize, getBackround } from '../utils'

interface AnimatedBackgroundProps {
  children: JSX.Element | JSX.Element[]
}

const AnimatedBackground = ({ children }: AnimatedBackgroundProps) => {
  const { colorSelection, speed, angle } = useContext(SettingsContext)

  const background = getBackround(angle, colorSelection)
  const backgroundSize = getBackgroundSize(colorSelection)
  const animation = getAnimation(colorSelection, speed)

  return (
    <div
      style={{
        background,
        backgroundSize,
        animation
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedBackground
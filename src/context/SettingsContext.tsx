import React from 'react'
import { createContext, useState } from 'react'

type UpdateFunc<T> 
  = React.Dispatch<React.SetStateAction<T>>

 type ContextValue<T extends Record<string, any>, U extends Record<string, keyof T> = {}>
 = T & {
   [K in keyof U]: UpdateFunc<T[U[K]]>
}

interface Settings {
  colorSelection: string[]
  angle: number
  speed: number
}

type SettingsContextValue
  = ContextValue<Settings, {
    setColorSelection: 'colorSelection'
    setAngle: 'angle',
    setSpeed: 'speed'
  }>

const InitialSettings: SettingsContextValue = {
  colorSelection: [''],
  setColorSelection: () => {},

  angle: 0,
  setAngle: () => {},

  speed: 5,
  setSpeed: () => {}
}

export const SettingsContext = createContext<SettingsContextValue>(InitialSettings)

interface SettingsProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [colorSelection, setColorSelection] = useState([
    'deepskyblue',
    'darkviolet',
    'blue'
  ])

  const [angle, setAngle] = useState(300)

  const [speed, setSpeed] = useState(5)


  return (
    <SettingsContext.Provider
      value={{
        colorSelection,
        setColorSelection,
        angle,
        setAngle,
        speed,
        setSpeed
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
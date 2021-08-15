import { useContext } from 'react'

import { SettingsContext } from '../../context/SettingsContext'
import Color from './Color'

const Colors = () => {
  const { colorSelection, setColorSelection } = useContext(SettingsContext)

  const onDelete = (index: number) => {
    setColorSelection(colorSelection.slice(0, index).concat(colorSelection.slice(index + 1)))
  }

  return (
    <>
      {colorSelection.map((color, idx) => {
        return (
          <Color key={idx} color={color} index={idx} onDelete={onDelete}/>
        )
      })}
    </>
  )
}

export default Colors